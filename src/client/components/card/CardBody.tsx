import * as React from 'react';

export interface CardBodyProps { }

const CardBody: React.SFC<CardBodyProps> = ({ children }) => {
    return (
        <div className="card-body">
            {children}
        </div>
    );
}

export default CardBody;