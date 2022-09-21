import { AppError } from "@shared/errors/AppError"
import { ICreateUserDTO } from "@modules/accounts/dtos/ICreateUserDTO"
import { UsersRepositoryInMemory } from "@modules/accounts/repositories/in-memory/UsersRepositoryInMemory"
import { CreateUserUseCase } from "../createUser/CreateUserUseCase"
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase"


let authenticateUserUseCase: AuthenticateUserUseCase
let usersRepositoryImMemory: UsersRepositoryInMemory
let createUserUseCase: CreateUserUseCase

describe("Authenticate User", () => {
    beforeEach(() => {
        usersRepositoryImMemory = new UsersRepositoryInMemory()
        createUserUseCase = new CreateUserUseCase(usersRepositoryImMemory);
        authenticateUserUseCase = new AuthenticateUserUseCase(usersRepositoryImMemory)
    })
    it("should be able to authenticate a user", async () => {
        const user: ICreateUserDTO = {
            driver_license: "000123",
            email: "user@test.com",
            name: "User Test",
            password: "1234"
        }

        await createUserUseCase.execute(user)

        const result = await authenticateUserUseCase.execute({
            email: user.email,
            password: user.password
        })

        expect(result).toHaveProperty("token")
    })

    it("should not be able to authenticate an nonexistent user", async () => {
        await expect(authenticateUserUseCase.execute({
            email: "false@email.com",
            password: "1234"
        })
        ).rejects.toEqual(new AppError("Email or password incorrect!"))

    }
    )
    it("should not be able to authenticate with incorrect password", async () => {
        const user: ICreateUserDTO = {
            driver_license: "9999",
            email: "false@email.com",
            password: "1234",
            name: "UserTest"
        }
        await createUserUseCase.execute(user)
        await expect(
            authenticateUserUseCase.execute({
                email: user.email,
                password: "4321"
            })
        ).rejects.toEqual(new AppError("Email or password incorrect!"))
    })
})
