export interface ILogin {
    email: string;
    password: string;
}

export interface IEnvironment {
    production: boolean;
    loginUrl: string;
}
