import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import * as jwt_decode from 'jwt-decode';
import { BASE_URL, TOKEN } from '../shared/constants';

export interface Token {
    sub: number; // id del usuario
    username: string;
    role: string;
    exp: number; // timestamp con la fecha de expiración
    iat: number; // Issued At: campo con la fecha de emisión del token
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    url: string = `${BASE_URL}/auth`;

    isAdmin = new BehaviorSubject<boolean>(this.hasAdminToken());
    isOwner = new BehaviorSubject<boolean>(this.hasOwnerToken());
    isLoggedIn = new BehaviorSubject<boolean>(this.hasToken());
    currentUserName = new BehaviorSubject<string>(this.getCurrentUserName());

    constructor(
        private httpClient: HttpClient,
        private router: Router
    ) { }

    login(login: any): Observable<any> {
        return this.httpClient.post(`${this.url}/login`, login);
    }

    register(user: any): Observable<any> {
        return this.httpClient.post(`${this.url}/register`, user);
    }

    logout() {
        localStorage.removeItem(TOKEN);
        this.router.navigate(['/auth/login']);
        this.isAdmin.next(false);
        this.isOwner.next(false);
        this.isLoggedIn.next(false);
        this.currentUserName.next('');
    }

    getCurrentUserName(): string {
        let token = localStorage.getItem(TOKEN);
        if (!token) return '';

        let decoded_token: Token | undefined;
        try {
            decoded_token = jwt_decode(token);
        } catch (error) {
            console.error('Error decoding token:', error);
            return '';
        }

        return decoded_token?.username || '';
    }

    private getTokenRole(token: string | null, roleToCheck: string): boolean {
        if (!token) return false;

        let decoded_token: Token | undefined;
        try {
            decoded_token = jwt_decode(token);
        } catch (error) {
            console.error('Error decoding token:', error);
            return false;
        }

        return decoded_token?.role === roleToCheck;
    }

    hasAdminToken(): boolean {
        return this.getTokenRole(localStorage.getItem(TOKEN), 'admin');
    }

    hasOwnerToken(): boolean {
        return this.getTokenRole(localStorage.getItem(TOKEN), 'owner');
    }

    hasToken(): boolean {
        console.log('checking hasToken()');
        return localStorage.getItem(TOKEN) !== null;
    }

    handleLoginResponse(token: any) {
        localStorage.setItem(TOKEN, token);
        let decoded_token: Token | undefined;
        try {
            decoded_token = jwt_decode(token);
        } catch (error) {
            console.error('Error decoding token:', error);
        }

        if (decoded_token) {
            this.isAdmin.next(decoded_token.role === 'admin');
            this.isOwner.next(decoded_token.role === 'owner');
            this.isLoggedIn.next(true);
            this.currentUserName.next(decoded_token.username);
        }
    }
}

