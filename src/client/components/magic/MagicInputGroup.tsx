import * as React from 'react';
import { animated } from 'react-spring';

export interface MagicInputGroupProps {
    type: string;
    placeholder: string;
    handlers: {
        handle: string,
        setHandle: any
    }
}

const MagicInputGroup: React.SFC<MagicInputGroupProps> = ({ children, type, placeholder, handlers: { handle, setHandle } }) => {
    return (
        <div className="input-group my-2">
            <div className="input-group-prepend">
                <span className="input-group-text bg-warning">
                    {children}
                </span>
            </div>
            <input
                type={type}
                value={handle}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setHandle(e.currentTarget.value)}
                className="form-control shadow-sm"
                placeholder={placeholder} />
        </div>
    );
}

export default MagicInputGroup;