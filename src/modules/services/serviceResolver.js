"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceResolver = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@appolo/graphql");
const inject_1 = require("@appolo/inject");
const car_1 = require("../cars/car");
const carRepository_1 = require("../cars/carRepository");
const ownerRepository_1 = require("../owners/ownerRepository");
const service_1 = require("./service");
const serviceRepository_1 = require("./serviceRepository");
let ServiceResolver = class ServiceResolver {
    async services() {
        let { results } = await this.serviceRepository.getAll({ lean: true });
        return results;
    }
    service(id) {
        return this.serviceRepository.getById(id, { lean: true });
    }
    async car(service) {
        let doc = await this.carRepository.getById(service.car_id, { lean: true });
        return doc;
    }
};
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", ownerRepository_1.OwnerRepository)
], ServiceResolver.prototype, "ownerRepository", void 0);
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", carRepository_1.CarRepository)
], ServiceResolver.prototype, "carRepository", void 0);
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", serviceRepository_1.ServiceRepository)
], ServiceResolver.prototype, "serviceRepository", void 0);
tslib_1.__decorate([
    graphql_1.Query(returns => [service_1.Service]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], ServiceResolver.prototype, "services", null);
tslib_1.__decorate([
    graphql_1.Query(returns => service_1.Service),
    tslib_1.__param(0, graphql_1.Arg("id")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], ServiceResolver.prototype, "service", null);
tslib_1.__decorate([
    graphql_1.FieldResolver(returns => car_1.Car),
    tslib_1.__param(0, graphql_1.Root()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [service_1.Service]),
    tslib_1.__metadata("design:returntype", Promise)
], ServiceResolver.prototype, "car", null);
ServiceResolver = tslib_1.__decorate([
    graphql_1.Resolver(of => service_1.Service),
    graphql_1.Register(),
    inject_1.singleton()
], ServiceResolver);
exports.ServiceResolver = ServiceResolver;
//# sourceMappingURL=serviceResolver.js.map