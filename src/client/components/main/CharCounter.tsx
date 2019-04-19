import * as React from 'react';

export interface CharCounterProps {
    info: {
        isOver: boolean,
        charLeft: number,
        MAX_CHARS: number
    }
}

const CharCounter: React.SFC<CharCounterProps> = ({ info: { isOver, charLeft, MAX_CHARS} }) => {
    return (
        <>
            {isOver ?
                <small className="form-text text-danger" > {charLeft} / {MAX_CHARS}</small > :
                <small className="form-text text-muted">{charLeft} / {MAX_CHARS}</small>
            }
        </>
    );
}

export default CharCounter;