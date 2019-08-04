import {prop, schema, Schema, model, mongoose, propRef, Ref} from "@appolo/mongo";
import {IsString, IsNumber,IsOptional,MinLength} from "@appolo/validator";
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
    @IsString()
    @Field(type => String)
    owner_id: Ref<Owner>;

    @prop()
    @IsString()
    @Field()
    @MinLength(5)
    title: string;

    @prop()
    @IsString()
    @Field()
    brand: string;

    @prop()
    @IsNumber()
    @Field()
    price: number;

    @prop()
    @IsNumber()
    @Field()
    age: number;


}
