require("dotenv").config();

const express = require("express");
const cors = require("cors")
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, {
    dbName: "winery_inventory",
});
const db = mongoose.connection;
db.on("error", (error) => console.log("error:", error));
db.once("open", () => console.log("Connected to DB"));

//accept json as body
app.use(express.json());

app.use(cors())

// --------- category --------- 
const categoriesRouter = require("./routes/categories");
app.use("/categories", categoriesRouter);


// --------- wines --------- 
const wineRouter =  require("./routes/wines")
app.use("/wines", wineRouter)

// --------- records --------- 
const recordsRouter = require("./routes/records")
app.use("/records", recordsRouter)

app.listen(3000, () => console.log("server running at 3000"));
