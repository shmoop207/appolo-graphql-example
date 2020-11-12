import {singleton, inject} from "@appolo/inject";
import {controller} from "@appolo/route";
import {CrudController, crud} from "@appolo/crud";
import {Car} from "../cars/car";
import {CarRepository} from "../cars/carRepository";
import {Owner} from "./owner";
import {OwnerRepository} from "./ownerRepository";

@controller("owners")
@singleton()
@crud({model: Owner})
export class OwnerController extends CrudController<Owner> {

    @inject(OwnerRepository) manager: OwnerRepository
}
