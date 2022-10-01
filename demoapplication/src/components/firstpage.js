import React from "react";
import { useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useNavigate} from "react-router-dom";
import {useTranslation} from 'react-i18next';

const schema= yup.object().shape({
	email: yup.string().label("Email").email().required()
})
const Firstpage = () => {
	const {t, i18n} = useTranslation();

	const handleClick = (lang) => {
		i18n.changeLanguage(lang);
	}
	
	const {register, handleSubmit, watch, formState: { errors }} = useForm({
		resolver: yupResolver(schema),
	}); 

	const navigate = useNavigate();

	const submitForm = (data, e) => {
		e.preventDefault();
		console.log(data);
		navigate("/verification");
	}
	
	return(
		<>

		<nav style={{padding: '20px 0', width: '100%', backgroundColor:'purple'}}>
			<button onClick={() => handleClick('en')}>
				English
			</button>

			<button onClick={() => handleClick('ko')}>
				Korean
			</button>

			<button onClick={() => handleClick('chi')}>
				Chinese
			</button>
		</nav>
		<h1 className="title">{ t('Thanks.1') }</h1>
		<p className="title">{t('Why.1')} </p>
			<form className="form1" onSubmit={ handleSubmit(submitForm)}>
				<label htmlFor="email"> Enter your email</label>
				<input 
					type="email" 
					name="email" 
					className="input-email" 
					placeholder="Email"
					autoComplete="off"
					{...register("email", { required: "Required", })}
				/>
				<p className="error-message"> {errors.email?.message} </p>
				<button  
					type="submit" 
					className="btn"	
					disabled	
				> Continue </button>
			</form>
		</>
		)
}
export default Firstpage;