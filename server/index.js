import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";

//Importing Routes
import clientRoutes from "./routes/client.js";
import generalRoutes from "./routes/general.js";
import managmentRoutes from "./routes/management.js";
import salesRoutes from "./routes/sales.js";

//Models
import User from "./models/User.js";
import Product from "./models/Product.js";
import ProductStat from "./models/ProductStat.js";
import OverallStat from "./models/OverallStat.js";
//Data Imports

import {
  dataUser,
  dataProduct,
  dataProductStat,
  dataOverallStat,
} from "./data/index.js";

/*Config*/

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors(/* { credentials: true , origin: `http://localhost:3001`} */));

/* Routes */

app.use("/client", clientRoutes);
app.use("/general", generalRoutes);
app.use("/management", managmentRoutes);

app.use("/sales", salesRoutes);

/* Mongoose Setup */

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port ${PORT}`));

    //User.insertMany(dataUser)
    //Product.insertMany(dataProduct)
    //ProductStat.insertMany(dataProductStat)
    //OverallStat.insertMany(dataOverallStat)
  })
  .catch((error) => console.log(`${error} not connected`));
