import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory"
import { UsersTokensRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersTokensRepositoryInMemory"
import { DayjsDateProvider } from "@shared/container/providers/DateProvider/implementations/DayjsDateProvider"
import { MailProviderInMemory } from "@shared/container/providers/MailProvider/in-memory/MailProviderInMemory"
import { AppError } from "@shared/errors/AppError"
import { SendForgotPasswordMailUseCase } from "./SendForgotPasswordMailUseCase"


let sendForgotPasswordMailUseCase: SendForgotPasswordMailUseCase
let usersRepositoryInMemory: UsersRepositoryInMemory
let dateProvider: DayjsDateProvider
let usersTokensRepositoryInMemory: UsersTokensRepositoryInMemory
let mailProvider: MailProviderInMemory
describe("Send Forgot Mail", () => {

    beforeEach(() => {
        usersRepositoryInMemory = new UsersRepositoryInMemory()
        dateProvider = new DayjsDateProvider()
        usersTokensRepositoryInMemory = new UsersTokensRepositoryInMemory()
        mailProvider = new MailProviderInMemory()

        sendForgotPasswordMailUseCase = new SendForgotPasswordMailUseCase(
            usersRepositoryInMemory,
            usersTokensRepositoryInMemory,
            dateProvider,
            mailProvider
        )

    })


    it("should be able to send a forgot password mail to user", async() => {

        const sendMail = jest.spyOn(mailProvider, "sendMail")


        await usersRepositoryInMemory.create({
            driver_license: "535245",
            email: "puw@gur.mm",
            name: "Craig Watts",
            password: "1234",

        })

        await sendForgotPasswordMailUseCase.execute("puw@gur.mm")

        expect(sendMail).toHaveBeenCalled()
    })

    it("should not be able to send an email if user does not exist", async () => {
        await expect(
            sendForgotPasswordMailUseCase.
            execute("enseaj@wo.ke")
        ).rejects.toEqual(new AppError("User does not exist"))
    })

    it("should be able to create an users token",async()=>{
        const generateTokenMail = jest.spyOn(usersTokensRepositoryInMemory,"create")

        usersRepositoryInMemory.create({
            driver_license: "182225",
            email: "iva@wes.ro",
            name: "Mollie Jensen",
            password: "4321",

        })

        await sendForgotPasswordMailUseCase.execute("iva@wes.ro")

        expect(generateTokenMail).toBeCalled()
    })
})