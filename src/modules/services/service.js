"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mongo_1 = require("@appolo/mongo");
const validator_1 = require("@appolo/validator");
const owner_1 = require("../owners/owner");
const car_1 = require("../cars/car");
const graphql_1 = require("@appolo/graphql");
let Service = class Service extends mongo_1.Schema {
};
tslib_1.__decorate([
    graphql_1.Field(type => graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], Service.prototype, "_id", void 0);
tslib_1.__decorate([
    mongo_1.propRef(car_1.Car),
    validator_1.IsString(),
    graphql_1.Field(type => owner_1.Owner),
    tslib_1.__metadata("design:type", Object)
], Service.prototype, "car_id", void 0);
tslib_1.__decorate([
    mongo_1.prop(),
    validator_1.IsString(),
    graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Service.prototype, "name", void 0);
tslib_1.__decorate([
    mongo_1.prop(),
    validator_1.IsNumber(),
    graphql_1.Field(),
    tslib_1.__metadata("design:type", Number)
], Service.prototype, "date", void 0);
Service = tslib_1.__decorate([
    mongo_1.model(),
    mongo_1.schema("Service"),
    graphql_1.ObjectType()
], Service);
exports.Service = Service;
//# sourceMappingURL=service.js.map