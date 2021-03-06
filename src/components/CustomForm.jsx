import { useState } from 'react'
import { Error, Success } from './Error'
import styles from '../styles/Landing.module.css'
import Spinner from './Spinner'

const CustomForm = ({ status, message, onValidated }) => {
	const [toggleCookie, settoggleCookie] = useState(false)
	const [spinner, SetSpinner] = useState(false)

	const hideToggle = () => {
		if (toggleCookie === false) {
			settoggleCookie(true)
		} else {
			settoggleCookie(false)
		}
	}
	const [error, setError] = useState(false)

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
		SetSpinner(true)
		e.preventDefault()

		if (firstName === '' || email === '') {
			setError(true)
		} else {
			try {
				onValidated({
					EMAIL: email,
					MERGE1: firstName,
					MERGE2: lastName,
					MERGE4: phone,
				})
			} catch (error) {
				console.log(error)
			}
			setError(false)
		}
		setForm({ firstName: '', lastName: '', phone: '', email: '' })
		SetSpinner(false)
	}
	return (
		<>
			<form onSubmit={e => handleSubmit(e)}>
				<label>Nombre</label>

				<input
					name='firstName'
					className={styles.inputModificado}
					type='text'
					onChange={handleChange}
					value={form.firstName}
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
					name='phone'
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
				{error ? (
					<Error children={'Todos los campos de estar rellenados'} />
				) : (
					[]
				)}

				{message && <Success children={'Mensaje enviado correctamente'} />}

				<label for='rgpd'>
					<input className='rgpd' type='checkbox' name='rgpd' /> He leido y
					acepto la{' '}
					<a
						target='_blank'
						class='rgpd_button'
						href='https://cmspics.onoffice.de/Huether/20190130_103851_LSSI-CE_HUETHER_PARTNER_SLU.pdf'
					>
						{' '}
						pol??tica de privacidad.
					</a>
				</label>
				<input
					className={styles.enlace}
					type='submit'
					value='Enviar formulario'
				/>

				<span class='t_rgpd_a'>
					{' '}
					<span class='bold'>?</span> Antes de enviar tu consulta, ??chale un
					vistazo a la informaci??n b??sica sobre protecci??n de datos{' '}
					<button
						className='rgpd_button'
						onClick={() => hideToggle(true)}
						type='button'
					>
						aqui.
					</button>
				</span>
				{toggleCookie && (
					<ul className={styles.cookieHide}>
						<li>
							<strong>Responsable:</strong> Huether & Partner SLU
						</li>
						<li>
							<strong>Finalidad:</strong>Contestarte a nuestros emails
						</li>
						<li>
							<strong>Derechos:</strong>Podr??s ejercer tus derechos de acceso,
							rectificaci??n, limitaci??n y suprimir los datos de este formulario
							as?? como el derecho a presentar una reclamaci??n ante una autoridad
							de control.
						</li>
						<li>
							<strong>Informaci??n adicional:</strong> En la protecci??n de datos
							encontrar??s informaci??n adicional sobre la recopilaci??n y el uso
							de su informaci??n incluida sobre acceso, consercaci??n,
							rectificaci??n, eliminaci??n, seguridad y otros temas.
						</li>
					</ul>
				)}
			</form>
		</>
	)
}

export default CustomForm
