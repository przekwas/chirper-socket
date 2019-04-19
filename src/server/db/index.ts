import * as knex from 'knex';
import config from '../config';

const connnection = knex(config.knex);

export default connnection;