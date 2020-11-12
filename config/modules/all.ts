import {MongoModule} from "@appolo/mongo";
import {ViewModule, ViewEngines} from "@appolo/view";
import {ValidationModule} from "@appolo/validator";
import {LoggerModule} from "@appolo/logger";
import {GraphqlModule} from "@appolo/graphql";
import {CrudModule} from "@appolo/crud";
import {IEnv} from "../env/IEnv";
import {App} from "@appolo/core";

export = async function (app: App, env: IEnv) {
    await app.module.load(LoggerModule);

    app.module.use(ViewModule.for({viewEngine: ViewEngines.nunjucks}))
        .use(ValidationModule)
        .use(CrudModule)
        .use(MongoModule.for({connection: env.mongo}))
        .use(GraphqlModule.for({
            buildSchemaOptions: {validate: true,}
        }));
}
