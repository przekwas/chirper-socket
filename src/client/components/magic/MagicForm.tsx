import * as React from 'react';

export interface MagicFormProps { }

const MagicForm: React.SFC<MagicFormProps> = ({ children }) => {
    return (
        <form className="form-group bg-white border border-dark rounded shadow-lg p-5">
            {children}
        </form>
    );
}

export default MagicForm;