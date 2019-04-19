import * as React from 'react';
import { useState } from 'react';
import * as formService from '../../utils/formService';
import CharCounter from './CharCounter';

export interface FormProps {
    handlers: {
        setChirp: any,
        handleSubmit: any
    };
    values: {
        chirp: string
    }
}

const Form: React.SFC<FormProps> = ({ handlers, values }) => {

    const MAX_CHARS = 255;

    const [charLeft, setCharLeft] = useState<number>(0);
    const [charMax, setCharMax] = useState<boolean>(false);

    const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        formService.handleTextareaChange(
            e,
            MAX_CHARS,
            handlers.setChirp,
            setCharLeft,
            setCharMax
        );
    };

    let charDisplay = charMax ?
        <CharCounter info={{ isOver: true, charLeft, MAX_CHARS }} /> :
        <CharCounter info={{ isOver: false, charLeft, MAX_CHARS }} />;

    return (
        <form className="form-group bg-white border border-dark rounded shadow p-3">
            <textarea
                placeholder="Chirp Message ..."
                className="form-control border border-primary rounded shadow-sm p-2"
                rows={4}
                value={values.chirp}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleTextareaChange(e)}
            />
            {charDisplay}
            <div className="text-center">
                <button
                    className="btn btn-secondary w-50 shadow mt-3"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => handlers.handleSubmit(e)}>
                    Chirp It!
                </button>
            </div>
        </form>
    );
}

export default Form;