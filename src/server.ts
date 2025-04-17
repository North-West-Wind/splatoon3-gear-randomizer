import "dotenv/config";
import express from "express";
import { AddressInfo } from "net";
import sirv from "sirv";

const app = express();
app.use(express.static(__dirname + "/../public"));

app.get("/", (_req, res) => {
	res.send("index.html");
});

const server = app.listen(process.env.PORT || 3000, () => console.log(`Listening at port ${(server.address() as AddressInfo).port}...`));