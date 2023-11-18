import 'dotenv/config';
import sequelizeSetup from "./src/config/sequelizeSetup.js";

import app from "./src/app.js";

const PORT = process.env.PORT || 4200;

const start = async () => {
  try {
    await sequelizeSetup.authenticate();
    await sequelizeSetup.sync();
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

start();
