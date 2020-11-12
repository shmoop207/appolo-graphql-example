"use strict";
const mongo_1 = require("@appolo/mongo");
const view_1 = require("@appolo/view");
const validator_1 = require("@appolo/validator");
const logger_1 = require("@appolo/logger");
const graphql_1 = require("@appolo/graphql");
const crud_1 = require("@appolo/crud");
module.exports = async function (app, env) {
    await app.module.load(logger_1.LoggerModule);
    app.module.use(view_1.ViewModule.for({ viewEngine: view_1.ViewEngines.nunjucks }))
        .use(validator_1.ValidationModule)
        .use(crud_1.CrudModule)
        .use(mongo_1.MongoModule.for({ connection: env.mongo }))
        .use(graphql_1.GraphqlModule.for({
        buildSchemaOptions: { validate: true, }
    }));
};
//# sourceMappingURL=all.js.map