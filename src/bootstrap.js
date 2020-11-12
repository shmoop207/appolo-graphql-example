"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bootstrap = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const engine_1 = require("@appolo/engine");
const serviceRepository_1 = require("./modules/services/serviceRepository");
const ownerRepository_1 = require("./modules/owners/ownerRepository");
const carRepository_1 = require("./modules/cars/carRepository");
let Bootstrap = class Bootstrap {
    async run() {
        let owner = await this.ownerRepository.create({ email: "test@aaa.com", firstName: "aaa", "lastName": "bbb" });
        let car = await this.carRepository.create({
            age: 2,
            brand: "honda",
            price: 1000,
            owner_id: owner._id.toString(),
            title: "test"
        });
        await this.serviceRepository.create({ date: Date.now(), name: "fix car", car_id: car._id.toString() });
    }
};
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", serviceRepository_1.ServiceRepository)
], Bootstrap.prototype, "serviceRepository", void 0);
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", carRepository_1.CarRepository)
], Bootstrap.prototype, "carRepository", void 0);
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", ownerRepository_1.OwnerRepository)
], Bootstrap.prototype, "ownerRepository", void 0);
Bootstrap = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton(),
    engine_1.bootstrap()
], Bootstrap);
exports.Bootstrap = Bootstrap;
//# sourceMappingURL=bootstrap.js.map