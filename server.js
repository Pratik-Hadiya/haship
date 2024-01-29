import express from 'express';
import cookieParser from 'cookie-parser';
import routes from "./routes/index.js";

const app = express();
const PORT = 3004;

app.use(express.json());
app.use(cookieParser());
// app.use('trust proxy', true);

app.use('/',routes);

// app.get('/login', async (req, res) => {
//     console.log('request - ', req);
//     console.log('req.ip - ', req.ip);
//     console.log('req.connection.remoteAddress - ', req.connection.remoteAddress);
//     res.json({ requestData: req.ip });
// });

app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
});