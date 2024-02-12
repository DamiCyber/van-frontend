import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { toast } from 'react-toastify';
import "../assets/styles/Login.css"
import { useFormik } from 'formik';
import * as yup from 'yup';
const Login = () => {
    const navigate = useNavigate()
    const validationSchema = yup.object({
        firstname: yup.string().required("Required").max(27).min(8),
        password: yup.string().matches(/^[a-zA-z0-9]{8}$/, "password must be atleast 8 characters, uppercase,lowercase and a special character "),
    })
    const { handleChange, handleSubmit, values, errors } = useFormik({
        initialValues: {
            firstname: "",
            password: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // console.log(values);
        }
    })

    const sign = () => {
        // toast.success("sign up successfully")
        navigate("/home")
    }


    return (
        <div>
            <center>
                <div className="box">
                    <h1>Sign in to your account</h1>
                    <form action="" onSubmit={handleSubmit}>
                        <span>{errors.firstname}</span>
                        <input type="text" onChange={handleChange} placeholder='first  name' name='firstname' value={values.firstname} />
                        <span>{errors.password}</span>
                        <input type="password" onChange={handleChange} className='ck' placeholder='Password' name='password' value={values.password} />

                        <button className='btnn' onClick={sign} >Sign in</button>
                    </form>
                </div>
            </center>
            <div className="footer">
                <p>Ⓒ 2022 #VANLIFE</p>
            </div>
        </div>

    )
}

export default Login