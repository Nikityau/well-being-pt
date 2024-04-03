export interface TAction<T, P> {
    type: T,
    payload?: P
}