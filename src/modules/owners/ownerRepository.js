"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_1 = require("appolo");
const mongo_1 = require("@appolo/mongo");
const owner_1 = require("./owner");
let OwnerRepository = class OwnerRepository extends mongo_1.BaseCrudManager {
};
tslib_1.__decorate([
    mongo_1.injectModel(owner_1.Owner),
    tslib_1.__metadata("design:type", Object)
], OwnerRepository.prototype, "model", void 0);
OwnerRepository = tslib_1.__decorate([
    appolo_1.define(),
    appolo_1.singleton()
], OwnerRepository);
exports.OwnerRepository = OwnerRepository;
//# sourceMappingURL=ownerRepository.js.map