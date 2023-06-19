import { Verify } from "./Verify-interface";

export interface User{
    id: number;
    password: number,
    username: string
    verifyDtoList?: Verify[];
}