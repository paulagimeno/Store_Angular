export interface User {
    id: number;
    email: string;
    username: string;
    password: string;
    name: {
        firstname: string;
        lastname: string;
    };
}