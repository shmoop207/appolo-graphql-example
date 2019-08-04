import { createApp } from "appolo";


(async () => {

  try {

    await createApp().launch();

  } catch (e) {
    console.error("failed to launch ", e.stack);
    process.exit(1);
  }
})();
