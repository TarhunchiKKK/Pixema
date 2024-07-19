export interface IResetPasswordDto {
    uid: string;
    token: string;
    new_password: string;
}
