import {singleton, inject} from "@appolo/inject";
import {controller} from "@appolo/route";
import {CrudController, crud} from "@appolo/crud";
import {Car} from "./car";
import {CarRepository} from "./carRepository";

@controller("cars")
@singleton()
@crud({model: Car})
export class CarController extends CrudController<Car> {

    @inject(CarRepository) manager: CarRepository
}
