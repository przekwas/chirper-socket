import * as express from 'express';
import * as path from 'path';
import * as morgan from 'morgan';
import * as cors from 'cors';
import * as helmet from 'helmet';
import * as compression from 'compression';
import * as http from 'http';
import * as SocketIO from 'socket.io';
import * as passport from 'passport';
import routes from './routes';
import './middleware/bearerstrategy';
import './middleware/localstrategy';

const app = express();
const server = new http.Server(app);
export const io = SocketIO(server);

app.use(cors());
app.use(passport.initialize());
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.static('public'));
app.use(morgan('dev'));

io.on('connection', socket => {
    console.log(`User\x1b[34m ${socket.id}\x1b[0m has \x1b[32mconnected!\x1b[0m`);
    socket.on('disconnect', () => console.log(`User\x1b[34m ${socket.id}\x1b[0m has \x1b[31mdisconnected!\x1b[0m`));
});

app.use(routes);
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Server listening on port: \x1b[33m${port}\x1b[0m`));
