    import React from "react";
    import style from './FormControls.module.css'
    import {Field} from "redux-form";

    const FormControl = ({meta:{touched,error},children}) => {
        let hasError = error && touched;
        return (
            <div className={style.formControl + ' ' + (hasError ? style.error : '')}>
                <div>
                    {children}
                </div>
                {hasError && <span>{error}</span>}
            </div>
        );
    }

    export const Textarea = (props) =>{
        const  {input,meta,...restProps} = props;
       return (<FormControl {...props}> <textarea{...input} {...restProps}/></FormControl>)
    }

    export const Input = (props) =>{
        const  {input,meta,...restProps} = props;
        return (<FormControl {...props}> <input{...input} {...restProps}/></FormControl>)
    }

    export const CreateField = (placeholder,validate,name,component,props = {},text = '',className) =>
        <div>
            <Field placeholder={placeholder} validate={validate}
                   name={name} component={component}
                   {...props} className={className}/> {text}
        </div>
