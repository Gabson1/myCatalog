export interface LoginAction {
    type: string
    payload: {
        firstname?: string
        lastname?: string
        email: string
        password: string
    }
}