import "reflect-metadata"
import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";
import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";


let listAvailableCarsUseCase: ListAvailableCarsUseCase
let carsRepositoryInMemory: CarsRepositoryInMemory

describe("List Cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory()
        listAvailableCarsUseCase = new ListAvailableCarsUseCase(carsRepositoryInMemory)
    })

    it("should be able to list all available cars", async () => {

        const car =await carsRepositoryInMemory.create({
            name: "Name Car",
            description: "Description Car",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "brand",
            category_id: "category"
        })

        const cars = await listAvailableCarsUseCase.execute({})
        
        expect(cars).toEqual([car])
    })

    it("should be able to list all available cars by brand", async () => {

        const car =await carsRepositoryInMemory.create({
            name: "Name Car",
            description: "Description Car",
            daily_rate: 100,
            license_plate: "ABC-1234",
            fine_amount: 60,
            brand: "car_brand_test",
            category_id: "category"
        })

        const cars = await listAvailableCarsUseCase.execute({
            brand:"car_brand_test",
            
        })

        
        expect(cars).toEqual([car])
    })
    it("should be able to list all available cars by name", async () => {

        const car =await carsRepositoryInMemory.create({
            name: "Car3",
            description: "Description Car",
            daily_rate: 100,
            license_plate: "ABC-1235",
            fine_amount: 60,
            brand: "car_brand_test",
            category_id: "category"
        })

        const cars = await listAvailableCarsUseCase.execute({
            name:"Car3",
            
        })

        
        expect(cars).toEqual([car])
    })
    it("should be able to list all available cars by category", async () => {

        const car =await carsRepositoryInMemory.create({
            name: "Car3",
            description: "Description Car",
            daily_rate: 100,
            license_plate: "ABC-1235",
            fine_amount: 60,
            brand: "car_brand_test",
            category_id: "12345"
        })

        const cars = await listAvailableCarsUseCase.execute({
            category_id:"12345",
            
        })

        
        expect(cars).toEqual([car])
    })
    
})
