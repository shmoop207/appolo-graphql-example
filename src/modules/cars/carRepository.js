"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarRepository = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const mongo_1 = require("@appolo/mongo");
const car_1 = require("./car");
let CarRepository = class CarRepository extends mongo_1.BaseCrudManager {
};
tslib_1.__decorate([
    mongo_1.model(car_1.Car),
    tslib_1.__metadata("design:type", Object)
], CarRepository.prototype, "model", void 0);
CarRepository = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton()
], CarRepository);
exports.CarRepository = CarRepository;
//# sourceMappingURL=carRepository.js.map