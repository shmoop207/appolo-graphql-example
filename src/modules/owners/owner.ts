import {prop, schema, Schema, model, mongoose} from "@appolo/mongo";
import {IsString, IsNumber} from "@appolo/validator";
import { Field, ID, ObjectType, Int,InputType } from "@appolo/graphql";

@model()
@schema("Owner")
@ObjectType("OwnerObjectType")
@InputType("OwnerInputType")
export  class Owner extends Schema{

	@Field(type => ID)
	_id: string;

	@prop()
	@IsString()
	@Field()
	firstName: string;

	@prop()
	@IsString()
	@Field()
	lastName: string;

	@prop()
	@IsString()
	@Field()
	email: string;
}

