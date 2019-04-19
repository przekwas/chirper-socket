import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { FaEnvelope, FaKey, FaUserEdit } from 'react-icons/fa';
import {
    MagicFormRow,
    MagicForm,
    MagicInputGroup
} from '../components/magic';

export interface MagicViewProps extends RouteComponentProps { }

const MagicView: React.SFC<MagicViewProps> = props => {
    return (
        <>
            <MagicFormRow>
                <MagicForm>
                    <MagicInputGroup
                        placeholder="fox@mccloud.com">
                        <FaEnvelope className="text-dark" />
                    </MagicInputGroup>
                    <MagicInputGroup
                        placeholder="upsmash20xx"
                        type="password">
                        <FaKey className="text-dark" />
                    </MagicInputGroup>
                    <div className="text-center">
                        <button
                            className="btn btn-secondary w-50 shadow mt-3">
                            <FaUserEdit /> Register
                    </button>
                    </div>
                </MagicForm>
            </MagicFormRow>
        </>
    );
}

export default MagicView;