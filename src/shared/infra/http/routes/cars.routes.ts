import { Router } from "express"
import uploadConfig from "@config/upload"
import multer from "multer"

import { CreateCarController } from "@modules/cars/useCases/createCar/CreateCarController"
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated"
import { ensureAdmin } from "../middlewares/ensureAdmin"
import { ListAvailableCarsController } from "@modules/cars/useCases/listAvailableCars/ListAvailableCarsController"
import { CreateCarSpecificationController } from "@modules/cars/useCases/createCarSpecification/CreateSpecificationController"
import { UploadCarImagesController } from "@modules/cars/useCases/uploadCarImages/UploadCarImagesController"

const carsRoutes = Router()

const createCarController = new CreateCarController()
const listAvailableCarsControllers = new ListAvailableCarsController()
const createCarSpecificationController = new CreateCarSpecificationController()
const uploadCarImageController = new UploadCarImagesController()

const upload= multer(uploadConfig)


carsRoutes.post('/',ensureAuthenticated,ensureAdmin,createCarController.handle)

carsRoutes.get("/available",listAvailableCarsControllers.handle)

carsRoutes.post("/specifications/:id",ensureAuthenticated,
ensureAdmin,createCarSpecificationController.handle)

carsRoutes.post("/images/:id",
ensureAuthenticated,
ensureAdmin,
upload.array("images"),
uploadCarImageController.handle)



export { carsRoutes }