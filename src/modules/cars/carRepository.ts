import {singleton, define} from "appolo";
import {injectModel, Model, BaseCrudManager} from "@appolo/mongo";
import {Car} from "./car";

@define()
@singleton()
export class CarRepository extends BaseCrudManager<Car> {

    @injectModel(Car) model: Model<Car>;
}
