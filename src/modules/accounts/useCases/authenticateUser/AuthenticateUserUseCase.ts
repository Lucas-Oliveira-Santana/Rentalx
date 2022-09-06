import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import {compare} from "bcrypt"
import {sign} from "jsonwebtoken"
import { AppError } from "@shared/errors/AppError";


interface IRequest{
    email: string;
    password: string;
}

interface IResponse{
    user:{name: string,email: string},
    token:string

}


@injectable()
class AuthenticateUserUseCase{
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}


    async execute({email,password}:IRequest):Promise<IResponse>{
        const user = await this.usersRepository.findByEmail(email);

        if(!user){
            throw new AppError("Email or password incorrect!")
        }

        const passwordMatch = await compare(password, user.password)

        if(!passwordMatch){
            throw new AppError("Email or password incorrect!")
        }

        const token = sign({},"261b3d95b4d1457c404858f1f2b1875b",{
            subject:user.id,
            expiresIn:"1d"
        })

        const tokenReturn: IResponse = {
            token,
            user:{
                name:user.name,
                email:user.email
            }
        }

        return tokenReturn
    }
}


export {AuthenticateUserUseCase}