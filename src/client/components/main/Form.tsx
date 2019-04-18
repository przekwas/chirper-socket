import * as React from 'react';

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
    return (
        <form className="form-group bg-light text-dark border border-dark rounded shadow p-3">
            <label>Chirp</label>
            <input
                type="text"
                placeholder="Chirp Message ..."
                className="form-control shadow-sm p-1"
                value={values.chirp}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlers.setChirp(e.currentTarget.value)}
            />
            <button
                className="btn btn-primary shadow mt-3"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => handlers.handleSubmit(e)}>
                Chirp It!
            </button>
        </form>
    );
}

export default Form;