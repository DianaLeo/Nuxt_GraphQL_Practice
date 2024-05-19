import {User} from "../types"

export const users = [] as User[]

export function userJoin(user: User):User{
    console.info("userJoin() is called, user=", user)
    users.push(user)
    return user
}

export function getCurrentUser(id: string){
    return users.find(user=>user.id===id)
}
