import { IUserResponseDTO } from "@modules/accounts/dtos/IUserResponseDTO";
import { User } from "@modules/accounts/infra/typeorm/entities/User";
import { UserMap } from "@modules/accounts/mapper/UserMap";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { AppError } from "@shared/errors/AppError";

import { inject } from "tsyringe";


class ProfileUserUseCase{

    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ){}


    async execute(id:string): Promise<IUserResponseDTO>{
        const user = await this.usersRepository.findById(id)

        if(!user){
            throw new AppError("User not found")
        }

        return UserMap.toDTO(user)
    }
}


export{ProfileUserUseCase}