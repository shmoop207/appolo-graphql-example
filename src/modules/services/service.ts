import {prop, schema, Schema, model, mongoose,Ref,propRef} from "@appolo/mongo";
import {string,number} from "@appolo/validator";
import {Owner} from "../owners/owner";
import {Car} from "../cars/car";
import { Field, ID, ObjectType, Int } from "@appolo/graphql";

@model()
@schema("Service")
@ObjectType()
export class Service extends Schema {

    @Field(type => ID)
    _id:string;

    @propRef(Car)
    @string()
    @Field(type => Owner)
    car_id: Ref<Owner>;

    @prop()
    @string()
    @Field()
    name: string;

    @prop()
    @number()
    @Field()
    date: number
}

