"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnerResolver = void 0;
const tslib_1 = require("tslib");
const graphql_1 = require("@appolo/graphql");
const inject_1 = require("@appolo/inject");
const car_1 = require("../cars/car");
const carRepository_1 = require("../cars/carRepository");
const owner_1 = require("./owner");
const ownerRepository_1 = require("./ownerRepository");
let OwnerResolver = class OwnerResolver {
    async owners() {
        let { results } = await this.ownerRepository.getAll({ lean: true });
        return results;
    }
    owner(id) {
        return this.ownerRepository.getById(id, { lean: true });
    }
    async cars(owner) {
        let { results } = await this.carRepository.getAll({ lean: true, filter: { owner_id: owner._id } });
        return results;
    }
};
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", ownerRepository_1.OwnerRepository)
], OwnerResolver.prototype, "ownerRepository", void 0);
tslib_1.__decorate([
    inject_1.inject(),
    tslib_1.__metadata("design:type", carRepository_1.CarRepository)
], OwnerResolver.prototype, "carRepository", void 0);
tslib_1.__decorate([
    graphql_1.Query(returns => [owner_1.Owner]),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", Promise)
], OwnerResolver.prototype, "owners", null);
tslib_1.__decorate([
    graphql_1.Query(returns => owner_1.Owner),
    tslib_1.__param(0, graphql_1.Arg("id")),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], OwnerResolver.prototype, "owner", null);
tslib_1.__decorate([
    graphql_1.FieldResolver(returns => [car_1.Car]),
    tslib_1.__param(0, graphql_1.Root()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [owner_1.Owner]),
    tslib_1.__metadata("design:returntype", Promise)
], OwnerResolver.prototype, "cars", null);
OwnerResolver = tslib_1.__decorate([
    graphql_1.Resolver(of => owner_1.Owner),
    graphql_1.Register(),
    inject_1.singleton()
], OwnerResolver);
exports.OwnerResolver = OwnerResolver;
//# sourceMappingURL=ownerResolver.js.map