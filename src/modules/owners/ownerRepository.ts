import {singleton, define} from "@appolo/inject";
import {model, Model, BaseCrudManager} from "@appolo/mongo";
import {Car} from "../cars/car";
import {Owner} from "./owner";

@define()
@singleton()
export class OwnerRepository extends BaseCrudManager<Owner> {

    @model(Owner) model: Model<Owner>;
}
