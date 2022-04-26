import { useState } from 'react'

import styles from '../styles/Landing.module.css'
const CustomForm = ({ status, message, onValidated }) => {
	const [form, setForm] = useState({
		firstName: '',
		lastName: '',
		phone: '',
		email: '',
	})

	const handleChange = e => {
		setForm(prevState => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	const objectClient = {}

	objectClient.contact = form

	const Data = objectClient

	const { email, lastName, firstName, phone } = form

	const handleSubmit = async e => {
		e.preventDefault()
		email &&
			firstName &&
			lastName &&
			email.indexOf('@') > -1 &&
			onValidated({
				EMAIL: email,
				MERGE1: firstName,
				MERGE2: lastName,
				MERGE4: phone,
			})
	}
	return (
		<form onSubmit={e => handleSubmit(e)}>
			<label>Nombre</label>
			<input
				name='firstName'
				className={styles.inputModificado}
				type='text'
				onChange={handleChange}
				value={form.name}
			/>
			<label>Apellido</label>
			<input
				name='lastName'
				className={styles.inputModificado}
				type='text'
				onChange={handleChange}
				value={form.lastName}
			/>
			<label>Telefono</label>
			<input
				name='telefono'
				className={styles.inputModificado}
				type='tel'
				onChange={handleChange}
				value={form.phone}
			/>
			<label>Email</label>
			<input
				name='email'
				className={styles.inputModificado}
				type='email'
				onChange={handleChange}
				value={form.email}
			/>
			<label for='rgpd'>
				<input className='rgpd' type='checkbox' name='rgpd' /> He leido y acepto
				la{' '}
				<a
					target='_blank'
					class='rgpd_button'
					href='https://cmspics.onoffice.de/Huether/20190130_103851_LSSI-CE_HUETHER_PARTNER_SLU.pdf'
				>
					{' '}
					política de privacidad.
				</a>
			</label>
			<input className={styles.enlace} type='submit' />
		</form>
	)
}

export default CustomForm
