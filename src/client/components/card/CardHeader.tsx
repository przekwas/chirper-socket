import * as React from 'react';

export interface CardHeaderProps { }

const CardHeader: React.SFC<CardHeaderProps> = ({ children }) => {
    return (
        <div className="card-header">
            {children}
        </div>
    );
}

export default CardHeader;