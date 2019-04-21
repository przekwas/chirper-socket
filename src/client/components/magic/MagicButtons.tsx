import * as React from 'react';
import { FaUserEdit, FaSignInAlt } from 'react-icons/fa';

export interface MagicButtonsProps {
    info: {
        toggle: boolean;
        setToggle: any;
    }
}

const MagicButtons: React.SFC<MagicButtonsProps> = ({ info: { toggle, setToggle } }) => {
    return (
        <div
            style={{ top: '3.25em' }}
            className="position-relative d-flex justify-content-around bg-primary border border-secondary rounded shadow p-2 mx-3 my-2">
            <button
                onClick={() => setToggle(!toggle)}
                className={toggle ? "btn btn-outline-success shadow px-3" : "btn btn-success shadow px-3"}>
                <FaSignInAlt /> Login
            </button>
            <button
                onClick={() => setToggle(!toggle)}
                className={!toggle ? "btn btn-outline-success shadow px-3" : "btn btn-success shadow px-3"}>
                <FaUserEdit /> Register
            </button>
        </div>
    );
}

export default MagicButtons;