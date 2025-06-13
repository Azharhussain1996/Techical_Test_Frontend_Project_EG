// import React from "react";
// import MTextField from "components/uielement/MTextField";
// import { FormHelperText, TextField, Typography } from "@mui/material";
// import MaskedInput from "react-text-mask";
// import InputMask from "react-input-mask";

// // const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
// //     const { inputRef, mask, ...other } = props;
// //     const validMask = Array.isArray(mask) ? mask : [];
// //     return (
// //         <InputMask
// //             mask={validMask.length > 0 ? validMask : false}
// //             maskPlaceholder="_"
// //             {...other}
// //             inputRef={(el) => {
// //                 if (typeof inputRef === "function") {
// //                     inputRef(el);
// //                 } else if (inputRef) {
// //                     inputRef.current = el;
// //                 }
// //             }}
// //         >
// //             {(inputProps) => <input ref={ref} {...inputProps} />}
// //         </InputMask>
// //     );
// // });

// const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
//     const { inputRef, mask, ...other } = props;
//     const validMask = Array.isArray(mask) ? mask : [];
//     return (
//         <InputMask
//             {...other}
//             ref={(maskedRef) => {
//                 if (maskedRef && typeof inputRef === "function") {
//                     inputRef(maskedRef.inputElement);
//                 } else if (inputRef) {
//                     inputRef.current = maskedRef ? maskedRef.inputElement : null;
//                 }
//             }}
//             // mask={[/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/]}
//             mask={validMask.length > 0 ? validMask : false}
//             // placeholderChar={"_"}
//             // showMask
//         />
//     );
// });

// export default function MuiTextField({ label, id, formik, mask, InputProps, caption, sx, ...props }) {
//     const hasError = formik.touched[id] && Boolean(formik.errors[id]);

//     return (
//         <div>
//             <label htmlFor={id} className="form-label">{label}</label>
//             {mask ? (
//                 <TextField
//                     id={id}
//                     name={id}
//                     placeholder={label}
//                     fullWidth
//                     className="form-control custom-textfield bg-opacity-50"
//                     // InputProps={{
//                     //     inputComponent: TextMaskCustom,
//                     // }}
//                     InputProps={{
//                         ...(InputProps || {}),
//                         ...(mask ? { inputComponent: TextMaskCustom, inputProps: { mask } } : {}),
//                     }}
//                     value={formik.values[id] || ""}
//                     onChange={(e) => formik.setFieldValue(id, e.target.value)}
//                     onBlur={() => formik.setFieldTouched(id, true)}
//                     error={hasError}
//                     variant="outlined"
//                     sx={{
//                         ...(sx || {}),
//                         ...MTextField,
//                     }}
//                 />
//             ) : (
//                 <TextField
//                     {...props}
//                     id={id}
//                     name={id}
//                     placeholder={label}
//                     fullWidth
//                     value={formik.values[id] || ""}
//                     className="form-control custom-textfield bg-opacity-50"
//                     {...formik.getFieldProps(id)}
//                     error={hasError}
//                     sx={{
//                         ...(sx || {}),
//                         ...MTextField,
//                     }}
//                     InputProps={InputProps}

//                 />
//             )}
//             {caption && <Typography variant="caption">{caption}</Typography>}
//             {hasError && <FormHelperText error>{formik.errors[id]}</FormHelperText>}
//         </div>
//     );
// }




// import React from "react";
// import { IMaskInput } from "react-imask";
// import { TextField, FormHelperText, Typography } from "@mui/material";
// import MTextField from "components/uielement/MTextField";

// const MuiTextField = ({
//     label,
//     id,
//     formik,
//     mask,
//     caption,
//     prefix,
//     onChange,
//     InputProps,
//     sx,
//     ...props
// }) => {
//     const hasError = formik.touched[id] && Boolean(formik.errors[id]);
//     const handleChange = (value) => {
//         if (onChange) {
//             onChange({ target: { value } });
//         } else {
//             if (prefix && !value.startsWith(prefix)) {
//                 value = prefix + value.replace(new RegExp(`^${prefix}`), "");
//             }
//             formik.setFieldValue(id, value);
//         }
//     };
//     return (
//         <div>
//             <label htmlFor={id} className="form-label">{label}</label>
//             {mask ? (
//                 <TextField
//                     id={id}
//                     name={id}
//                     placeholder={label}
//                     fullWidth
//                     className="form-control custom-textfield bg-opacity-50"
//                     error={hasError}
//                     variant="outlined"
//                     sx={{ ...(sx || {}), ...MTextField }}
//                     InputProps={{
//                         inputComponent: IMaskInputWrapper,
//                         inputProps: {
//                             mask,
//                             value: formik.values[id] || "",
//                             onAccept: handleChange,
//                             overwrite: true,
//                         },
//                         ...InputProps,
//                     }}
//                     {...props}
//                 />
//             ) : (
//                 <TextField
//                     {...props}
//                     id={id}
//                     name={id}
//                     placeholder={label}
//                     fullWidth
//                     onChange={(e) => {
//                         if (onChange) {
//                             onChange(e);
//                         } else {
//                             let value = e.target.value;
//                             if (prefix && !value.startsWith(prefix)) {
//                                 value = prefix + value.replace(new RegExp(`^${prefix}`), "");
//                             }
//                             formik.setFieldValue(id, value);
//                         }
//                     }}
//                     value={formik.values[id] || ""}
//                     className="form-control custom-textfield bg-opacity-50"
//                     // {...formik.getFieldProps(id)}
//                     error={hasError}
//                     sx={{
//                         ...(sx || {}),
//                         ...MTextField,
//                     }}
//                     InputProps={InputProps}

//                 />
//             )}
//             {caption && <Typography variant="caption">{caption}</Typography>}
//             {hasError && <FormHelperText error>{formik.errors[id]}</FormHelperText>}
//         </div>
//     );
// };


// const IMaskInputWrapper = React.forwardRef((props, ref) => {
//     const { onAccept, ...other } = props;

//     return (
//         <IMaskInput
//             {...other}
//             inputRef={ref}
//             onAccept={(value) => onAccept(value)}
//         />
//     );
// });


// export default MuiTextField;



import React from "react";
import { IMaskInput } from "react-imask";
import { TextField, FormHelperText, Typography } from "@mui/material";
import MTextField from "components/uielement/MTextField";

const MuiTextField = ({
    label,
    id,
    formik,
    mask,
    caption,
    prefix,
    onChange,
    InputProps,
    placeholder,
    unmask,
    blocks,
    definitions,
    sx,
    ...props
}) => {
    const hasError = formik.touched[id] && Boolean(formik.errors[id]);
    const handleChange = (val) => {
        let value = val;

        // Force prefix only if not already present
        if (prefix && !value.startsWith(prefix)) {
            const sanitized = value.replace(/^0+/, "").slice(0, 9);
            value = prefix + sanitized;
        }

        if (onChange) {
            onChange({ target: { value } });
        } else {
            formik.setFieldValue(id, value);
        }
    };
    return (
        <div>
            <label htmlFor={id} className="form-label">{label}</label>
            {mask ? (
                <IMaskInput
                    {...props}
                    mask={mask}
                    prefix={prefix}
                    value={formik.values[id] || ""}
                    // onAccept={(val) => formik.setFieldValue(id, val)}
                    onAccept={(val) => handleChange(val)}
                    onBlur={() => formik.setFieldTouched(id, true)}
                    overwrite
                    unmask={false}
                    lazy={false}
                    inputRef={(ref) => {
                        if (ref) ref.name = id;
                    }}
                    definitions={definitions}
                    placeholder={placeholder}
                    className="form-control masking-textfield bg-opacity-50"
                // render={(ref, props) => (
                //     <TextField
                //         {...props}
                //         inputRef={ref}
                //         id={id}
                //         name={id}
                //         fullWidth
                //         placeholder={label}
                //         className="form-control  bg-opacity-50"
                //         error={hasError}
                //         variant="outlined"
                //         sx={{ ...(sx || {}), ...MTextField }}
                //         InputProps={InputProps}
                //     />
                // )}
                />
            ) : (
                <TextField
                    {...props}
                    id={id}
                    name={id}
                    placeholder={label}
                    fullWidth
                    onChange={(e) => {
                        onChange(e);
                    }}
                    value={formik.values[id] || ""}
                    className="form-control custom-textfield bg-opacity-50"
                    {...formik.getFieldProps(id)}
                    error={hasError}
                    sx={{
                        ...(sx || {}),
                        ...MTextField,
                    }}
                    InputProps={InputProps}

                />
            )}
            {caption && <Typography variant="caption">{caption}</Typography>}
            {hasError && <FormHelperText error>{formik.errors[id]}</FormHelperText>}
        </div>
    );
};



export default MuiTextField;





