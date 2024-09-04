import bodyParser from 'body-parser';
import express from 'express';

// Routes
import authRouter from './router/auth/Route.js';
import productRouter from './router/product/Route.js';
import categoryRouter from './router/category/Category.js';
import searchRouter from './router/search/Search.js';

const app = express();

app.use(bodyParser.json());
app.use(express.static("public"));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");

    next();
});

app.use("/api/auth", authRouter);
app.use("/api/product", productRouter);
app.use("/api/category", categoryRouter);
app.use("/api/search", searchRouter);

app.use((req, res) => {
    res.status(404).json({ message: "Not Found" });
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});