import * as React from 'react';

export interface MagicFormRowProps { }

const MagicFormRow: React.SFC<MagicFormRowProps> = ({ children }) => {
    return (
        <section className="row justify-content-center mt-4">
            <article className="col-md-8">
                {children}
            </article>
        </section>
    );
}

export default MagicFormRow;