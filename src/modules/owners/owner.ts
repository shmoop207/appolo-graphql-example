import {prop, schema, Schema, model, mongoose} from "@appolo/mongo";
import {string} from "@appolo/validator";
import { Field, ID, ObjectType, Int,InputType } from "@appolo/graphql";

@model()
@schema("Owner")
@ObjectType("OwnerObjectType")
@InputType("OwnerInputType")
export  class Owner extends Schema{

	@Field(type => ID)
	_id: string;

	@prop()
	@string()
	@Field()
	firstName: string;

	@prop()
	@string()
	@Field()
	lastName: string;

	@prop()
	@string()
	@Field()
	email: string;
}

