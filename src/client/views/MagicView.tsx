import * as React from 'react';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { FaEnvelope, FaKey, FaUser } from 'react-icons/fa';
import * as formService from '../utils/formService';
import {
    MagicFormRow,
    MagicForm,
    MagicInputGroup,
    MagicButtons
} from '../components/magic';

export interface MagicViewProps extends RouteComponentProps { }

const MagicView: React.SFC<MagicViewProps> = props => {

    const [email, setEmail] = useState<string>('testing@testing.com');
    const [password, setPassword] = useState<string>('password123');
    const [username, setUsername] = useState<string>('');
    const [toggle, setToggle] = useState<boolean>(false);
    const inputAnimated: any = useSpring({ opacity: toggle ? 1 : 0 });

    const handleButtonSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        formService.registerOrLoginSubmit(e, toggle, username, password, email);
    };

    return (
        <>
            <MagicFormRow>
                <MagicButtons info={{ toggle, setToggle }} />
                <MagicForm>

                    <MagicInputGroup
                        handlers={{ handle: email, setHandle: setEmail }}
                        type="text"
                        placeholder="smash@melee.fox">
                        <FaEnvelope className="text-dark" />
                    </MagicInputGroup>

                    <MagicInputGroup
                        handlers={{ handle: password, setHandle: setPassword }}
                        type="password"
                        placeholder="password">
                        <FaKey className="text-dark" />
                    </MagicInputGroup>

                    <animated.div style={inputAnimated}>
                        <MagicInputGroup
                            handlers={{ handle: username, setHandle: setUsername }}
                            type="text"
                            placeholder="username">
                            <FaUser className="text-dark" />
                        </MagicInputGroup>

                    </animated.div>

                    <div className="text-center">
                        <button
                            onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleButtonSubmit(e)}
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