import * as express from 'express';
import * as path from 'path';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as compression from 'compression';
import apiRouter from './routes';

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(express.static('public'));
app.use(apiRouter);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
