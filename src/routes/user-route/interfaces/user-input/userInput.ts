export interface userInput {
    email: string;
    password: string;
    role?: 'USER' | 'ADMIN';
    status?: boolean
}