"use strict";
const mongo_1 = require("@appolo/mongo");
const view_1 = require("@appolo/view");
const validator_1 = require("@appolo/validator");
const logger_1 = require("@appolo/logger");
const graphql_1 = require("@appolo/graphql");
module.exports = async function (app, env) {
    await app.module(logger_1.LoggerModule);
    await app.module(new view_1.ViewModule({ viewEngine: view_1.ViewEngines.nunjucks }));
    await app.module(validator_1.ValidationModule);
    await app.module(new mongo_1.MongoModule({ connection: env.mongo }));
    await app.module(new graphql_1.GraphqlModule({
        buildSchemaOptions: { validate: true }
    }));
};
//# sourceMappingURL=all.js.map