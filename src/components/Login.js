import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

const Login = ({handleAuth}) => {
	const [datosfrm, setDatosFrm] = useState({
			email:"",
			password:""
	});

	// Extraer los valores del state
	// const {email, password} = datosfrm;

	// Imprimir los valores del state
	// console.log(datosfrm);

	// Leer los datos del formulario y guardarlos en el state
	/* const obtDatoFrm = (e) => {
		setDatosFrm({
				...datosfrm,
				[e.target.name] : (e.target.value)
		});
	} */

  // Comprobar si los datos son correctos
	/* const checkLogin = (e) =>{
		e.preventDefault();
		console.log(datosfrm);
		if (datosfrm.email === "karlos.0@live.com.mx" && datosfrm.password === "12345") {
			console.log("Datos correctos");
		} else {
			console.log("Datos Incorrectos");
		}
	} */

	// Validar los datos del formulario
	/* const validForm = Yup.object().shape({
		email: Yup.string()
			.email('Email no válido')
			.required('El email es obligatorio'),
		password: Yup.string()
			.min(6, 'La contraseña debe tener al menos 6 caracteres')
			.required('La contraseña es obligatoria')
	}); */

	/* const validForm = (values) => {
		obtDatoFrm(values);
		// console.log(values);
		const errors = {};
		if (values.email) {
			 errors.email = 'Required';
		}
		if (!values.password) {
			 errors.password = 'Required';
		}
		return errors;
 }

	const checkLogin = (e) => {
		// console.log(datosfrm);
		e.preventDefault();
		console.log("entre");
	} */

	const validForm = (values) => {
		let errors = {};
		// Validar email
		if (!values.email) {
			errors.email = 'Es requerido';
		}
		if (!values.password) {
			errors.password = 'Es requerido';
		}
		return errors;
	};

	const checkLogin = (values, resetForm) => {
		// // console.log(datosfrm);
		// e.preventDefault();
		// console.log("entre");
		if (values.email === "karlos.0@live.com.mx" && values.password === "12345") {
			resetForm();
			handleAuth(true);
			console.log("Datos correctos");
		} else {
			console.log("Datos Incorrectos");
		}
	}

	// const revisarLogin = () => {
	// }

  return (
		<div>
			<Formik
				initialValues={datosfrm}
				// onSubmit={checkLogin}
				// validationSchema={validForm}
				// validate={validForm}
				// validate={values => this.validate(values)}
				// onSubmit={(values, { setSubmitting }) => checkLogin(values, setSubmitting)}

				// onSubmit={(values, {resetForm}) => {
				// 	resetForm();
				// 	console.log(`Formulario enviado`, values);
				// }}
				// validate={(values)=>{
				// 	let errors = {};
				// 	// Validar email
				// 	if (!values.email) {
				// 		errors.email = 'Es requerido';
				// 	}
				// 	if (!values.password) {
				// 		errors.password = 'Es requerido';
				// 	}
				// 	return errors;
				// }}
				onSubmit={(values, {resetForm}) => checkLogin(values, resetForm)}
				validate={(values) => validForm(values)}
			>
				{/* {( {props, values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting} ) => ( */}
				{( {errors} ) => (
					<div className='cont-form-login'>
						{/* { console.log(props) } */}
						<Form className="form-horizontal">
						{/* <form className="form-horizontal"
							// onSubmit={handleSubmit}
							> */}
							<div>
								<label>Correo:</label>
								{/* <input   */}
								<Field
									type="text"
									name="email"
									// required
									// className="required"
									// value={email}
									// onChange={obtDatoFrm}
								/>
								<ErrorMessage name="email" component={()=>(
									<div className="alert alert-danger">{errors.email}</div>
								)} />
								{/* <span>{errors.email}</span> */}
							</div>
							<div>
								<label>Contraseña:</label>
								{/* <input   */}
								<Field
									type="password"
									name="password"
									// value={password}
									// onChange={obtDatoFrm}
								/>
								<ErrorMessage name="password" component={()=>(
									<div className="alert alert-danger">{errors.password}</div>
								)} />
								{/* <span>{errors.password}</span> */}
							</div>
							<div>
								<button type="submit"   className="btn btn-primary">Acceder</button>
							</div>
						{/* </form> */}
						</Form>
					</div>
				)}
			</Formik>
		</div>
	)
}

export default Login;