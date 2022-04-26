import { useState } from 'react'
import styles from './styles/Landing.module.css'
import logo from './img/logo.webp'
import MailchimpFormContainer from './components/MailchimpFormContainer'
import CustomForm from './components/CustomForm'
function App() {
	const [toggleCookie, settoggleCookie] = useState(false)

	const hideToggle = () => {
		if (toggleCookie === false) {
			settoggleCookie(true)
		} else {
			settoggleCookie(false)
		}
	}
	return (
		<div className={styles.contenedor}>
			<div className={styles.image}>
				<img
					className={styles.logo}
					src={logo}
					width='150px'
					height='auto'
					alt='logo'
				></img>
				<div className={styles.container}>
					<div className={styles.containerTexto}>
						<h1 className={styles.titulo}>!Hoy es el mejor momento!</h1>
						<ul className={styles.ulTitular}>
							<li>
								La demanda de propiedades en Mallorca es más alto que nunca
							</li>
							<li>Esta es tu oportunidad de conseguir el mejor precio</li>
						</ul>
					</div>
					<div className={styles.formContainer}>
						<h2>¿Te urge vender tu casa?</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
							dignissim, velit volutpat feugiat finibus, nunc urna consectetur
							mauris.
						</p>
						<MailchimpFormContainer />
						<span class='t_rgpd_a'>
							{' '}
							<span class='bold'>?</span> Antes de enviar tu consulta, échale un
							vistazo a la información básica sobre protección de datos{' '}
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
									<strong>Responsable:</strong> Yuliia Lysenko
								</li>
								<li>
									<strong>Finalidad:</strong>Contestarte a nuestros emails
								</li>
								<li>
									<strong>Derechos:</strong>Podrás ejercer tus derechos de
									acceso, rectificación, limitación y suprimir los datos de este
									formulario así como el derecho a presentar una reclamación
									ante una autoridad de control.
								</li>
								<li>
									<strong>Información adicional:</strong> En la protección de
									datos encontrarás información adicional sobre la recopilación
									y el uso de su información incluida sobre acceso,
									consercación, rectificación, eliminación, seguridad y otros
									temas.
								</li>
							</ul>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
