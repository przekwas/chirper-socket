import * as React from 'react';

export interface CardHeaderProps { }

const CardHeader: React.SFC<CardHeaderProps> = ({ children }) => {
    return (
        <div className="card-header bg-light">
            {children}
        </div>
    );
}

export default CardHeader;