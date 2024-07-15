// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IAction<T = any> {
    type: string;

    payload: T;
}
