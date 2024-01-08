import express from "express"
import morgan from "morgan"

const PORT = 4000;
const app = express();
const logger = morgan("dev");



const handleHome = (req, res, next) => {
    console.log("I will responed");
    return res.send("<h1>Hello</h1>");
}

const handleLogin = (req, res, next) => {
    return res.send("login");
}

const handleListening = () =>
    console.log(`Server listening on port http://localhost:${PORT}`);


app.use(logger);
app.get("/",handleHome);
app.get("/login", handleLogin);
app.listen(PORT, handleListening);


