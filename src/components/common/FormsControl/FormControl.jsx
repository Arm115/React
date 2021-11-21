import modules from './FormControl.module.css'

// ПЕРЕЙДИТЕ В HOC GETELEMENT.JS



// const FormControl = ({input,meta,child,element,...props}) => {
//     let hasError = meta.touched && meta.error
    
//     return (
//         <div>
//             <div className={modules.login_form_control  + " " + (hasError ? modules.error : "")}>
                
//                 { hasError && <div className={modules.reject}>{meta.error}</div> }
//             </div>
//         </div>
//     )
// }

// export const Input = ({input,meta,...props}) => {
//     return(
//         <FormControl {...props}>
//             <input {...input} {...props}/>
//         </FormControl>
//     )

// }


// export const TextArea = ({meta,...props}) => {
//     return(
//         <FormControl {...props} element={textarea}></FormControl>
//     )
// }