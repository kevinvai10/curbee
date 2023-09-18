import React from 'react';
import styles from './Index.module.css';

type Props = {
    id: string;
    label: string;
    type?: string;
    placeholder?: string;
    error?: string;
    ref?: any;
    name?: string;
    register?: () => void;
    onBlur?: (params: React.FocusEvent<HTMLInputElement, Element>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ id, label, error, register, ...otherProps }: Props) => {
    console.log({ otherProps });
    return (
        <div className={styles['input-wrapper']}>
            <label htmlFor={id}>{label}</label>
            <input id={id} {...otherProps} {...register()} />
            {error && <label className={styles['error-label']}>{error}</label>}
        </div>
    );
};

export default Input;
