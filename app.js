"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const appolo_1 = require("appolo");
(async () => {
    try {
        await appolo_1.createApp().launch();
    }
    catch (e) {
        console.error("failed to launch ", e.stack);
        process.exit(1);
    }
})();
//# sourceMappingURL=app.js.map