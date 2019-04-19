import * as React from 'react';
import { useState, useEffect } from 'react';
import * as io from 'socket.io-client';
import * as formService from '../utils/formService';
import { json } from '../utils/api';
import {
    FormRow,
    Form,
    Timeline,
    ChirpCard
} from '../components/main';

export interface Chirp {
    id: number,
    authorid: number,
    content: string,
    _created: Date
}

export interface MainViewProps { }

const MainView: React.SFC<MainViewProps> = props => {

    const [chirp, setChirp] = useState<string>('');
    const [chirps, setChirps] = useState<Array<Chirp>>([]);
    const getChirps = async () => {
        try {
            let chirps = await json('/api/chirps');
            setChirps(chirps);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getChirps();
    }, []);

    useEffect(() => {
        let socket = io.connect();
        socket.on('newChirp', () => getChirps());
        return () => {
            socket.disconnect();
        }
    }, []);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        formService.submitChirpForm(
            e,
            setChirp,
            chirp,
            setChirps,
            chirps
        );
    }

    return (
        <>
            <FormRow>
                <Form handlers={{ setChirp, handleSubmit }} values={{ chirp }} />
            </FormRow>
            <Timeline>
                {chirps.map(chirp => <ChirpCard key={chirp.id} chirp={chirp} />)}
            </Timeline>
        </>
    );
}

export default MainView;