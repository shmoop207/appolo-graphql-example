"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OwnerRepository = void 0;
const tslib_1 = require("tslib");
const inject_1 = require("@appolo/inject");
const mongo_1 = require("@appolo/mongo");
const owner_1 = require("./owner");
let OwnerRepository = class OwnerRepository extends mongo_1.BaseCrudManager {
};
tslib_1.__decorate([
    mongo_1.model(owner_1.Owner),
    tslib_1.__metadata("design:type", Object)
], OwnerRepository.prototype, "model", void 0);
OwnerRepository = tslib_1.__decorate([
    inject_1.define(),
    inject_1.singleton()
], OwnerRepository);
exports.OwnerRepository = OwnerRepository;
//# sourceMappingURL=ownerRepository.js.map