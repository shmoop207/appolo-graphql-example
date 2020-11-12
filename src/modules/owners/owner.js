"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Owner = void 0;
const tslib_1 = require("tslib");
const mongo_1 = require("@appolo/mongo");
const validator_1 = require("@appolo/validator");
const graphql_1 = require("@appolo/graphql");
let Owner = class Owner extends mongo_1.Schema {
};
tslib_1.__decorate([
    graphql_1.Field(type => graphql_1.ID),
    tslib_1.__metadata("design:type", String)
], Owner.prototype, "_id", void 0);
tslib_1.__decorate([
    mongo_1.prop(),
    validator_1.string(),
    graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Owner.prototype, "firstName", void 0);
tslib_1.__decorate([
    mongo_1.prop(),
    validator_1.string(),
    graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Owner.prototype, "lastName", void 0);
tslib_1.__decorate([
    mongo_1.prop(),
    validator_1.string(),
    graphql_1.Field(),
    tslib_1.__metadata("design:type", String)
], Owner.prototype, "email", void 0);
Owner = tslib_1.__decorate([
    mongo_1.model(),
    mongo_1.schema("Owner"),
    graphql_1.ObjectType("OwnerObjectType"),
    graphql_1.InputType("OwnerInputType")
], Owner);
exports.Owner = Owner;
//# sourceMappingURL=owner.js.map