import * as React from 'react';
import { Link } from 'react-router-dom';

export interface LinkToggleProps {
    to: string;
    active?: boolean;
    text: string;
    onClick: any;
}

const LinkToggle: React.SFC<LinkToggleProps> = ({ to, active, text, onClick }) => {
    if (active) {
        return (
            <Link
                onClick={onClick}
                to={to}
                className="nav-item nav-link active">
                {text} <span className="sr-only">(current)</span>
            </Link>
        );
    } else {
        return (
            <Link
                onClick={onClick}
                to={to}
                className="nav-item nav-link">
                {text}
            </Link>
        );
    }

}

export default LinkToggle;