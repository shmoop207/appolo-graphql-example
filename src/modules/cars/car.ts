import {prop, schema, Schema, model, mongoose, propRef, Ref} from "@appolo/mongo";
import {string,number} from "@appolo/validator";

import {ValidateGroups} from "@appolo/crud";
import {Owner} from "../owners/owner";
import { Field, ID, ObjectType, Int, InputType } from "@appolo/graphql";

@model()
@schema("Car")
@ObjectType("CarObjectType")
@InputType("CarInputType",{})
export class Car extends Schema {

    @Field(type => ID)
    _id: string;

    @propRef(Owner)
    @string()
    @Field(type => String)
    owner_id: Ref<Owner>;

    @prop()
    @string().min(5)
    @Field()
    title: string;

    @prop()
    @string()
    @Field()
    brand: string;

    @prop()
    @number()
    @Field()
    price: number;

    @prop()
    @number()
    @Field()
    age: number;


}
