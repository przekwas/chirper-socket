import * as React from 'react';

export interface CardProps {

}

const Card: React.SFC<CardProps> = ({ children }) => {
    return (
        <div className="card text-center border rounded shadow my-3">
            {children}
        </div>
    );
}

export default Card;