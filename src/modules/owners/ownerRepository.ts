import {singleton, define} from "appolo";
import {injectModel, Model, BaseCrudManager} from "@appolo/mongo";
import {Car} from "../cars/car";
import {Owner} from "./owner";

@define()
@singleton()
export class OwnerRepository extends BaseCrudManager<Owner> {

    @injectModel(Owner) model: Model<Owner>;
}
