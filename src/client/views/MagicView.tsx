import * as React from 'react';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { FaEnvelope, FaKey, FaUser } from 'react-icons/fa';
import {
    MagicFormRow,
    MagicForm,
    MagicInputGroup,
    MagicButtons
} from '../components/magic';

export interface MagicViewProps extends RouteComponentProps { }

const MagicView: React.SFC<MagicViewProps> = props => {

    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <>
            <MagicFormRow>
                <MagicButtons info={{ toggle, setToggle }} />
                <MagicForm>
                    {toggle ? <MagicInputGroup
                        placeholder="username">
                        <FaUser className="text-dark" />
                    </MagicInputGroup> : ''}
                    <MagicInputGroup
                        placeholder="smash@melee.fox">
                        <FaEnvelope className="text-dark" />
                    </MagicInputGroup>
                    <MagicInputGroup
                        placeholder="password"
                        type="password">
                        <FaKey className="text-dark" />
                    </MagicInputGroup>
                    <div className="text-center">
                        <button
                            className="btn btn-secondary w-50 shadow mt-3">
                            {toggle ? "Register." : "Log me in."}
                        </button>
                    </div>
                </MagicForm>
            </MagicFormRow>
        </>
    );
}

export default MagicView;