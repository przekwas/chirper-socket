import * as React from 'react';
import { useState, useEffect } from 'react';
import * as formService from '../utils/formService';
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

const TEST_DATA = [
    {
        id: 1,
        authorid: 1,
        content: "Test One",
        _created: new Date()
    },
    {
        id: 2,
        authorid: 1,
        content: "Test Two",
        _created: new Date()
    },
    {
        id: 3,
        authorid: 1,
        content: "Test Three",
        _created: new Date()
    },
]

const MainView: React.SFC<MainViewProps> = props => {

    const [chirp, setChirp] = useState<string>('');
    const [chirps, setChirps] = useState<Array<Chirp>>([]);
    useEffect(() => {
        setChirps(TEST_DATA);
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