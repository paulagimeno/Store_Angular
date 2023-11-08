import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model'; 

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl = 'https://fakestoreapi.com/users'; 

    constructor(private httpClient: HttpClient) { }

    // método solicitud HTTP GET
    findAll(): Observable<User[]> {
        return this.httpClient.get<User[]>(this.apiUrl);
    }
    // método solicitud HTTP GET
    findById(id: number): Observable<User> {
        return this.httpClient.get<User>(`${this.apiUrl}/${id}`);
    }
    // create HTTP POST
    create(user: User): Observable<User> {
        return this.httpClient.post<User>(this.apiUrl, user);
    }
    // update HTTP PUT
    update(user: User): Observable<User> {
        return this.httpClient.put<User>(`${this.apiUrl}/${user.id}`, user);
    }
    // delete HTTP DELETE
    deleteById(id: number): void{
        this.httpClient.delete(`${this.apiUrl}/${id}`)
    }
}