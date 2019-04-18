import * as React from 'react';

export interface FormRowProps { }

const FormRow: React.SFC<FormRowProps> = ({ children }) => {
    return (
        <section className="row justify-content-center mt-3">
            <article className="col-md-8">
                {children}
            </article>
        </section>
    );
}

export default FormRow;