"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarResolver = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@appolo/graphql");
const inject_1 = require("@appolo/inject");
const car_1 = require("./car");
const carRepository_1 = require("./carRepository");
const owner_1 = require("../owners/owner");
const ownerRepository_1 = require("../owners/ownerRepository");
const service_1 = require("../services/service");
const serviceRepository_1 = require("../services/serviceRepository");
let CarResolver = class CarResolver {
    async cars() {
        let { results } = await this.carRepository.getAll({ lean: true });
        return results;
    }
    car(id) {
        return this.carRepository.getById(id, { lean: true });
    }
    async owner(car) {
        return this.ownerRepository.getById(car.owner_id, { lean: true });
    }
    async services(car) {
        let { results } = await this.serviceRepository.getAll({
            lean: true,
            filter: { car_id: car._id }
        });
        return results;
    }
    async addCar(car) {
        let carDoc = await this.carRepository.create(car);
        return carDoc.toJSON();
    }
    async editCar(id, car) {
        let carDoc = await this.carRepository.updateById(id, car);
        return carDoc.toJSON();
    }
};
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", carRepository_1.CarRepository)
], CarResolver.prototype, "carRepository", void 0);
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", ownerRepository_1.OwnerRepository)
], CarResolver.prototype, "ownerRepository", void 0);
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", serviceRepository_1.ServiceRepository)
], CarResolver.prototype, "serviceRepository", void 0);
tslib_1.__decorate([
    graphql_1.Query(returns => [car_1.Car]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], CarResolver.prototype, "cars", null);
tslib_1.__decorate([
    graphql_1.Query(returns => car_1.Car),
    tslib_1.__param(0, graphql_1.Arg("id")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", void 0)
], CarResolver.prototype, "car", null);
tslib_1.__decorate([
    graphql_1.FieldResolver(returns => owner_1.Owner),
    tslib_1.__param(0, graphql_1.Root()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [car_1.Car]),
    tslib_1.__metadata("design:returntype", Promise)
], CarResolver.prototype, "owner", null);
tslib_1.__decorate([
    graphql_1.FieldResolver(returns => [service_1.Service]),
    tslib_1.__param(0, graphql_1.Root()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [car_1.Car]),
    tslib_1.__metadata("design:returntype", Promise)
], CarResolver.prototype, "services", null);
tslib_1.__decorate([
    graphql_1.Mutation(returns => car_1.Car),
    tslib_1.__param(0, graphql_1.Arg("car", { validate: { skipMissingProperties: false } })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [car_1.Car]),
    tslib_1.__metadata("design:returntype", Promise)
], CarResolver.prototype, "addCar", null);
tslib_1.__decorate([
    graphql_1.Mutation(returns => car_1.Car),
    tslib_1.__param(0, graphql_1.Arg("id")), tslib_1.__param(1, graphql_1.Arg("car")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, car_1.Car]),
    tslib_1.__metadata("design:returntype", Promise)
], CarResolver.prototype, "editCar", null);
CarResolver = tslib_1.__decorate([
    graphql_1.Resolver(of => car_1.Car),
    graphql_1.Register(),
    inject_1.singleton()
], CarResolver);
exports.CarResolver = CarResolver;
//# sourceMappingURL=carResolver.js.map