import React    from 'react';
import { Icon } from 'deriv-components';

const FormSubmitErrorMessage = ({ message }) => (
    <div className='form-submit-error-message'>
        <Icon icon='IconAPIError' />
        <p>{message}</p>
    </div>
);

export default FormSubmitErrorMessage;
