"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_1 = require("appolo");
const mongo_1 = require("@appolo/mongo");
const car_1 = require("./car");
let CarRepository = class CarRepository extends mongo_1.BaseCrudManager {
};
tslib_1.__decorate([
    mongo_1.injectModel(car_1.Car),
    tslib_1.__metadata("design:type", Object)
], CarRepository.prototype, "model", void 0);
CarRepository = tslib_1.__decorate([
    appolo_1.define(),
    appolo_1.singleton()
], CarRepository);
exports.CarRepository = CarRepository;
//# sourceMappingURL=carRepository.js.map