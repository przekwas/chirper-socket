import * as React from 'react';

export interface MagicInputGroupProps {
    type?: string;
    placeholder: string;
}

const MagicInputGroup: React.SFC<MagicInputGroupProps> = ({
    children,
    type = "text",
    placeholder
}) => {
    return (
        <div className="input-group my-3">
            <div className="input-group-prepend">
                <span className="input-group-text bg-warning">
                    {children}
                </span>
            </div>
            <input
                type={type}
                className="form-control shadow-sm"
                placeholder={placeholder} />
        </div>
    );
}

export default MagicInputGroup;