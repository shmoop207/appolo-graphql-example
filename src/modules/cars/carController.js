"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarController = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const route_1 = require("@appolo/route");
const crud_1 = require("@appolo/crud");
const car_1 = require("./car");
const carRepository_1 = require("./carRepository");
let CarController = class CarController extends crud_1.CrudController {
};
tslib_1.__decorate([
    inject_1.inject(carRepository_1.CarRepository),
    tslib_1.__metadata("design:type", carRepository_1.CarRepository)
], CarController.prototype, "manager", void 0);
CarController = tslib_1.__decorate([
    route_1.controller("cars"),
    inject_1.singleton(),
    crud_1.crud({ model: car_1.Car })
], CarController);
exports.CarController = CarController;
//# sourceMappingURL=carController.js.map