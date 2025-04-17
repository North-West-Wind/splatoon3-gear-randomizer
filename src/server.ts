import "dotenv/config";
import express from "express";
import { AddressInfo } from "net";
import { Server, WebSocket } from "ws";

let sock: WebSocket;

const app = express();
app.use(express.static(__dirname + "/../public"));

app.get("/", (_req, res) => {
	res.send("index.html");
});

app.post("/roll", (_req, res) => {
	if (!sock) return res.sendStatus(500);
	sock.once("message", message => {
		res.json(message.toString().split("|"));
	});
	sock.send("roll");
});

const server = app.listen(process.env.PORT || 4700, () => console.log(`Listening at port ${(server.address() as AddressInfo).port}...`));

const wss = new Server({ noServer: true });
wss.on("connection", socket => {
	sock = socket;
});

server.on("upgrade", (req, socket, head) => {
	wss.handleUpgrade(req, socket, head, socket => {
		wss.emit("connection", socket, req);
	});
});