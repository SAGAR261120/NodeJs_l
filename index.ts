import express, { Request, Response } from "express";
import os from "os";

const app = express();

// PORT should be a number, so convert it properly
const port: number = parseInt(process.env.PORT || "3000", 10);

interface Joke {
  id: number;
  title: string;
  content: string;
}

const jokesArray: Joke[] = [
  { id: 1, title: "First joke", content: "Why don’t programmers like nature? It has too many bugs." },
  { id: 2, title: "Second joke", content: "Why did the function break up with the loop? It felt too repetitive." },
];

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/jokes", (req: Request, res: Response) => {
  res.json(jokesArray);
});

// Get LAN IP
function getLocalIp(): string {
  const interfaces = os.networkInterfaces();
  for (const name of Object.keys(interfaces)) {
    const ifaceList = interfaces[name];
    if (!ifaceList) continue;

    for (const iface of ifaceList) {
      if (iface.family === "IPv4" && !iface.internal) return iface.address;
    }
  }
  return "localhost";
}

const localIp = getLocalIp();

app.listen(port, "0.0.0.0", () => {
  console.log("Server running:");
  console.log(`Local: http://localhost:${port}`);
  console.log(`LAN:   http://${localIp}:${port}`);
});
