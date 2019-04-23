import * as React from 'react';
import * as moment from 'moment';
import { useSpring, animated } from 'react-spring';
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

    const CardAnimated: any = useSpring({ to: { opacity: 1, left: '0' }, from: { opacity: 0, left: '5em' } });

    return (
        <div className="col-md-6 offset-md-3">
            <animated.div style={CardAnimated}>
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
            </animated.div>
        </div>
    );
}

export default ChirpCard;