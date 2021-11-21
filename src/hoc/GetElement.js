import React from "react";
import modules from './../components/common/FormsControl/FormControl.module.css'

export const Element = Element => ({input,meta,...props}) => {
    let hasError = meta.touched && meta.error
    
    return (
        <div>
            <div className={modules.login_form_control  + " " + (hasError ? modules.error : "")}>
                <Element {...input} {...props} />
                { hasError && <div className={modules.reject}>{meta.error}</div> }
            </div>
        </div>
    )

}