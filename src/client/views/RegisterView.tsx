import * as React from 'react';
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

export interface RegisterViewProps extends RouteComponentProps { }

const RegisterView: React.SFC<RegisterViewProps> = props => {
    return (
        <>
            <section className="row justify-content-center mt-5">
                <article className="col-md-8">
                    <form className="form-group bg-white border border-dark rounded shadow p-3">
                        <input type="text" className="form-control border border-primary rounded shadow-sm p-2" />
                        <button className="btn btn-secondary w-50 shadow mt-3">Register</button>
                    </form>
                </article>
            </section>
        </>
    );
}

export default RegisterView;