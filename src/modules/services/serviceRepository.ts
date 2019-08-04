import {singleton, define} from "appolo";
import {injectModel, Model, BaseCrudManager} from "@appolo/mongo";
import {Car} from "../cars/car";
import {Owner} from "../owners/owner";
import {Service} from "./service";

@define()
@singleton()
export class ServiceRepository extends BaseCrudManager<Service> {

    @injectModel(Service) model: Model<Service>;
}
