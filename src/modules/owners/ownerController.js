"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_1 = require("appolo");
const crud_1 = require("@appolo/crud");
const owner_1 = require("./owner");
const ownerRepository_1 = require("./ownerRepository");
let OwnerController = class OwnerController extends crud_1.CrudController {
};
tslib_1.__decorate([
    appolo_1.inject(ownerRepository_1.OwnerRepository),
    tslib_1.__metadata("design:type", ownerRepository_1.OwnerRepository)
], OwnerController.prototype, "manager", void 0);
OwnerController = tslib_1.__decorate([
    appolo_1.controller("owners"),
    appolo_1.singleton(),
    crud_1.crud({ model: owner_1.Owner })
], OwnerController);
exports.OwnerController = OwnerController;
//# sourceMappingURL=ownerController.js.map