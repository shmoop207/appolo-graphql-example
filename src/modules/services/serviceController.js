"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_1 = require("appolo");
const crud_1 = require("@appolo/crud");
const service_1 = require("./service");
const serviceRepository_1 = require("./serviceRepository");
let ServiceController = class ServiceController extends crud_1.CrudController {
};
tslib_1.__decorate([
    appolo_1.inject(serviceRepository_1.ServiceRepository),
    tslib_1.__metadata("design:type", serviceRepository_1.ServiceRepository)
], ServiceController.prototype, "manager", void 0);
ServiceController = tslib_1.__decorate([
    appolo_1.controller("services"),
    appolo_1.singleton(),
    crud_1.crud({ model: service_1.Service })
], ServiceController);
exports.ServiceController = ServiceController;
//# sourceMappingURL=serviceController.js.map