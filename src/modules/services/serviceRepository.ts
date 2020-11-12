import {singleton, define} from "@appolo/inject";
import {model, Model, BaseCrudManager} from "@appolo/mongo";
import {Car} from "../cars/car";
import {Owner} from "../owners/owner";
import {Service} from "./service";

@define()
@singleton()
export class ServiceRepository extends BaseCrudManager<Service> {

    @model(Service) model: Model<Service>;
}
