import {prop, schema, Schema, model, mongoose,Ref,propRef} from "@appolo/mongo";
import {IsString, IsNumber} from "@appolo/validator";
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
    @IsString()
    @Field(type => Owner)
    car_id: Ref<Owner>;

    @prop()
    @IsString()
    @Field()
    name: string;

    @prop()
    @IsNumber()
    @Field()
    date: number
}

