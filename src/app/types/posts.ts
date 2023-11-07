import { Database } from '../types/database'

type PostEntity = Database["public"]["Tables"]["posts"]["Row"]
type UserEntity = Database["public"]["Tables"]["users"]["Row"]

export type PostsType = PostEntity & {
    user: UserEntity
}