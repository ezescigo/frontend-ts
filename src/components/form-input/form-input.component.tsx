import React from 'react';

import './form-input.styles.scss';

interface FormInputProps {
    label: string;
    value: string;
    type: string;
    name: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
}

const FormInput = ({ onChange, label, ...otherProps }: FormInputProps) => (
    <div className="group">
        <input className='form-input' onChange={onChange} {...otherProps} />
        {
            label ? 
            (<label 
                className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
            > 
            {label}
            </label>)
            : null
        } 
    </div>
);

export default FormInput;