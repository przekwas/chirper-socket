import * as React from 'react';
import * as moment from 'moment';
import { Chirp } from '../../views/MainView';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter
} from '../card';

export interface ChirpCardProps {
    chirp: Chirp
}

const ChirpCard: React.SFC<ChirpCardProps> = ({ chirp: { username, content, _created } }) => {
    return (
        <div className="col-md-6 offset-md-3">
            <Card>
                <CardHeader>
                    <b>{username}</b> said:
                </CardHeader>
                <CardBody>
                    <p className="card-text">{content}</p>
                </CardBody>
                <CardFooter>
                    <p className="card-text text-muted">{moment(_created).calendar()}</p>
                </CardFooter>
            </Card>
        </div>
    );
}

export default ChirpCard;