import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListRentalsByUserUseCase } from "./ListRentalsByUserUseCase";




class ListRentalsByUserController{

    async handle(req: Request, res: Response):Promise<Response>{

        const {id} = req.user
        const listRentalByUserUseCase = container.resolve(ListRentalsByUserUseCase)


       const rentals =  await listRentalByUserUseCase.execute(id)

       return res.json(rentals)
    }
}


export{ListRentalsByUserController}