import { ICreateRentalDTO } from "@modules/rentals/dtos/ICreateRentalDTO";
import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { getRepository, Repository } from "typeorm";
import { Rental } from "../entities/Rental";


class RentalsRepository implements IRentalsRepository {

    private repository: Repository<Rental>;

    constructor() {
        this.repository = getRepository(Rental)
    }


    async findOpenRentalByCar(car_id: string): Promise<Rental> {
        const OpenByCar = await this.repository.findOne({ where:{car_id, end_date:null}})

        return OpenByCar
    }
    async findOpenRentalByUser(user_id: string): Promise<Rental> {
        const OpenByUser = await this.repository.findOne({where:{user_id, end_date:null}})

        return OpenByUser
    }
    async create({ car_id, expected_return_date, user_id, id, end_date, total_amount }: ICreateRentalDTO): Promise<Rental> {
        const rental = this.repository.create({
        
            car_id, expected_return_date, user_id, id, end_date, total_amount,
        })

        await this.repository.save(rental)

        return rental
    }

    async findById(id: string): Promise<Rental> {
        return this.repository.findOne(id)
    }


    async findByUser(user_id: string): Promise<Rental[]> {
        const rental = await this.repository.find({
            where:{user_id},
            relations:["car"]
        })

        return rental
    }


}

export { RentalsRepository }