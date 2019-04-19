import * as React from 'react';

export interface CardHeaderProps { 
    className?: string;
}

const CardHeader: React.SFC<CardHeaderProps> = ({ children, className = '' }) => {
    return (
        <div className={`card-header bg-light ${className}`}>
            {children}
        </div>
    );
}

export default CardHeader;