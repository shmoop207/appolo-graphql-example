import {singleton, define} from "@appolo/inject";
import {model, Model, BaseCrudManager} from "@appolo/mongo";
import {Car} from "./car";

@define()
@singleton()
export class CarRepository extends BaseCrudManager<Car> {

    @model(Car) model: Model<Car>;
}
