import { json, SetAccessToken, User } from '../utils/api';

export const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>, MAX_CHARS: number, setChirp: any, setCharLeft: any, setCharMax: any) => {
    setChirp(e.currentTarget.value);
    setCharLeft(e.currentTarget.value.length);
    if (e.currentTarget.value.length > MAX_CHARS) {
        setCharMax(true);
    } else {
        setCharMax(false);
    }
};

export const submitChirpForm = async (e: React.MouseEvent<HTMLButtonElement>, setChirp: any, chirp: string) => {
    e.preventDefault();
    try {
        await json('/api/chirps', 'POST', {
            userid: User.userid,
            content: chirp,
        });
    } catch (error) {
        console.log(error);
    }
    setChirp('');
};

export const registerOrLoginSubmit = async (e: React.MouseEvent<HTMLButtonElement>, toggle: boolean, username: string, password: string, email?: string) => {
    e.preventDefault();
    let path, body;
    if (toggle) {
        path = '/auth/register';
        body = {
            username,
            password,
            email
        };
    } else {
        path = '/auth/login';
        body = {
            email,
            password,
        };
    }
    try {
        let payload = await json(path, 'POST', body);
        SetAccessToken(payload.token, { userid: payload.userid, role: payload.role });
    } catch (error) {
        console.log(error);
    }
};