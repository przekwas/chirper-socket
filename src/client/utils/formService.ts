import { Chirp } from '../views/MainView';

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

export const submitChirpForm = (
    e: React.MouseEvent<HTMLButtonElement>,
    setChirp: any,
    chirp: string,
    setChirps: any,
    chirps: Array<Chirp>
) => {
    e.preventDefault();
    setChirps([{
        id: 4,
        authorid: 1,
        content: chirp,
        _created: new Date()
    }, ...chirps])
    setChirp('');
};