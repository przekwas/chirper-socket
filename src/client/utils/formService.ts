import { Chirp } from '../views/MainView';
import { json } from '../utils/api';

export const handleTextareaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    MAX_CHARS: number,
    setChirp: any,
    setCharLeft: any,
    setCharMax: any
) => {
    setChirp(e.currentTarget.value);
    setCharLeft(e.currentTarget.value.length);
    if (e.currentTarget.value.length > MAX_CHARS) {
        setCharMax(true);
    } else {
        setCharMax(false);
    }
};

export const submitChirpForm = async (
    e: React.MouseEvent<HTMLButtonElement>,
    setChirp: any,
    chirp: string,
    setChirps: any,
    chirps: Array<Chirp>
) => {
    e.preventDefault();
    try {
        await json('/api/chirps', 'POST', {
            authorid: 1,
            content: chirp,
        });
    } catch (error) {
        console.log(error);
    }
    setChirp('');
};