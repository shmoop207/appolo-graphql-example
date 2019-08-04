import { MongoModule } from "@appolo/mongo";
import { ViewModule, ViewEngines } from "@appolo/view";
import { ValidationModule } from "@appolo/validator";
import { LoggerModule } from "@appolo/logger";
import { GraphqlModule } from "@appolo/graphql";
import { CrudModule } from "@appolo/crud";
import { IEnv } from "../env/IEnv";
import { App } from "appolo";

export = async function(app: App, env: IEnv) {
    await app.module(LoggerModule);

    await app.module(new ViewModule({ viewEngine: ViewEngines.nunjucks }));

    await app.module(ValidationModule);

    await app.module(new CrudModule());


    await app.module(new MongoModule({ connection: env.mongo }));

    await app.module(new GraphqlModule({
        buildSchemaOptions: {validate: true}
    }));
}
