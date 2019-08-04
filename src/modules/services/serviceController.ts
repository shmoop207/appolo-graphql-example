import {singleton, controller, inject} from "appolo";
import {CrudController, crud} from "@appolo/crud";
import {Car} from "../cars/car";
import {CarRepository} from "../cars/carRepository";
import {Owner} from "../owners/owner";
import {OwnerRepository} from "../owners/ownerRepository";
import {Service} from "./service";
import {ServiceRepository} from "./serviceRepository";

@controller("services")
@singleton()
@crud({model: Service})
export class ServiceController extends CrudController<Service> {

    @inject(ServiceRepository) manager: ServiceRepository
}
