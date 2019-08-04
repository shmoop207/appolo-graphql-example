"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const appolo_1 = require("appolo");
const mongo_1 = require("@appolo/mongo");
const service_1 = require("./service");
let ServiceRepository = class ServiceRepository extends mongo_1.BaseCrudManager {
};
tslib_1.__decorate([
    mongo_1.injectModel(service_1.Service),
    tslib_1.__metadata("design:type", Object)
], ServiceRepository.prototype, "model", void 0);
ServiceRepository = tslib_1.__decorate([
    appolo_1.define(),
    appolo_1.singleton()
], ServiceRepository);
exports.ServiceRepository = ServiceRepository;
//# sourceMappingURL=serviceRepository.js.map