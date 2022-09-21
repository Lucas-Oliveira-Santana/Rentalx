import {container} from "tsyringe"

import "@shared/container/providers"
import {ICategoriesRepository} from "@modules/cars/repositories/ICategoriesRepository"
import { ISpecificationRepository } from "@modules/cars/repositories/ISpecificationRepository"
import {IUsersRepository} from "@modules/accounts/repositories/IUsersRepository"
import {UsersRepository} from "@modules/accounts/infra/typeorm/repositories/UsersRepository"
import { CategoriesRepository } from "@modules/cars/infra/typeorm/repositories/CategoriesRepository"
import { SpecificationsRepository } from "@modules/cars/infra/typeorm/repositories/SpecificationsRepository"
import { ICarsRepository } from "@modules/cars/repositories/ICarsRepository"
import { CarsRepository } from "@modules/cars/infra/typeorm/repositories/CarsRepository"
import { CarsImagesRepository } from "@modules/cars/infra/typeorm/repositories/CarsImageRepository"
import { ICarsImagesRepository } from "@modules/cars/repositories/ICarsImagesRepository"
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository"
import { RentalsRepository } from "@modules/rentals/infra/typeorm/repositories/RentalsRepository"
import { UsersTokensRepository } from "@modules/accounts/infra/typeorm/repositories/UsersTokensRepository"
import { IUsersTokensRepository } from "@modules/accounts/repositories/IUsersTokensRepository"
container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",CategoriesRepository
)

container.registerSingleton<ISpecificationRepository>(
    "SpecificationsRepository",SpecificationsRepository
)

container.registerSingleton<IUsersRepository>(
    "UsersRepository",UsersRepository
)

container.registerSingleton<ICarsRepository>(
    "CarsRepository",CarsRepository
)

container.registerSingleton<ICarsImagesRepository>(
    "CarsImagesRepository",CarsImagesRepository
)

container.registerSingleton<IRentalsRepository>(
    "RentalsRepository",RentalsRepository
)

container.registerSingleton<IUsersTokensRepository>(
    "UsersTokensRepository",UsersTokensRepository
)