"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const tslib_1 = require("tslib");
const mongo_1 = require("@appolo/mongo");
const validator_1 = require("@appolo/validator");
const owner_1 = require("../owners/owner");
const graphql_1 = require("@appolo/graphql");
let Car = class Car extends mongo_1.Schema {
};
tslib_1.__decorate([
    graphql_1.Field(type => graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], Car.prototype, "_id", void 0);
tslib_1.__decorate([
    mongo_1.propRef(owner_1.Owner),
    validator_1.string(),
    graphql_1.Field(type => String),
    tslib_1.__metadata("design:type", Object)
], Car.prototype, "owner_id", void 0);
tslib_1.__decorate([
    mongo_1.prop(),
    validator_1.string().min(5),
    graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Car.prototype, "title", void 0);
tslib_1.__decorate([
    mongo_1.prop(),
    validator_1.string(),
    graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Car.prototype, "brand", void 0);
tslib_1.__decorate([
    mongo_1.prop(),
    validator_1.number(),
    graphql_1.Field(),
    tslib_1.__metadata("design:type", Number)
], Car.prototype, "price", void 0);
tslib_1.__decorate([
    mongo_1.prop(),
    validator_1.number(),
    graphql_1.Field(),
    tslib_1.__metadata("design:type", Number)
], Car.prototype, "age", void 0);
Car = tslib_1.__decorate([
    mongo_1.model(),
    mongo_1.schema("Car"),
    graphql_1.ObjectType("CarObjectType"),
    graphql_1.InputType("CarInputType", {})
], Car);
exports.Car = Car;
//# sourceMappingURL=car.js.map