import { Company } from './company';

export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    authdata?: string;
    token?: string;
    connection?: string;
    company: Company;
}