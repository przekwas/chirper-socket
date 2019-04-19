import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import knex from '../../db';
import config from '../../config';

export interface IPayload {
    [key: string]: any;
    userid: string;
    unique?: string;
};

export const CreateToken = async (payload: IPayload) => {
    let tokenId = await knex('tokens').insert({ userid: payload.userid });
    payload.accesstokenid = tokenId;
    payload.unique = crypto.randomBytes(32).toString('hex');
    let token = await jwt.sign(payload, config.auth.secret);
    await knex('tokens').where('id', payload.accesstokenid).update('token', token);
    return token;
};

export const ValidateToken = async (token: string) => {
    let payload: IPayload = <IPayload>jwt.decode(token);
    let accesstokenid = await knex('tokens').where({ id: payload.accesstokenid, token });
    if (!accesstokenid) {
        throw new Error('Invalid token!');
    } else {
        return payload;
    }
};