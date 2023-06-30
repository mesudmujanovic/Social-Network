import { Verify } from "./Verify-interface";

export interface User{
    id: number;
    password: string,
    username: string
    verifyDtoList?: Verify[];
}