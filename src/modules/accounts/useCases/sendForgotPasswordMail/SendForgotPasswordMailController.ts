import { Request, Response } from "express";
import { container } from "tsyringe";
import { SendForgotPasswordMailUseCase } from "./SendForgotPasswordMailUseCase";



class SendForgotPasswordMailController{

    async handle(req: Request, res: Response):Promise<Response>{
        const sendForgotPasswordMailUseCase = container.resolve(SendForgotPasswordMailUseCase)

        const {email} = req.body

        await sendForgotPasswordMailUseCase.execute(email)

        return res.send()
    }
}

export{SendForgotPasswordMailController} 