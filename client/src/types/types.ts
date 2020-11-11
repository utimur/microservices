export interface RoleType {
    value: string
}
export interface UserType {
    roles: Array<RoleType>,
    username: string,
    password: string,
    id: string,
}

