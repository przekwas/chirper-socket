import * as React from 'react';

export interface CardFooterProps {

}

const CardFooter: React.SFC<CardFooterProps> = ({ children }) => {
    return (
        <div className="card-footer bg-light">
            {children}
        </div>
    );
}

export default CardFooter;