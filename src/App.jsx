import { useState } from 'react'
import styles from './styles/Landing.module.css'
import logo from './img/logo.webp'
import MailchimpFormContainer from './components/MailchimpFormContainer'
import CustomForm from './components/CustomForm'
import FeatherIcon from 'feather-icons-react'
function App() {
	return (
		<div className={styles.contenedor}>
			<div className={styles.image}>
				<img
					className={styles.logo}
					src={logo}
					width='100px'
					height='auto'
					alt='logo'
				></img>
				<div className={styles.container}>
					<div className={styles.containerTexto}>
						<h1 className={styles.titulo}>Vende tu casa con Nosotros</h1>
						<ul className={styles.ulTitular}>
							<li>Aprovecha la oportunidad de conseguir el mejor precio</li>
							<li>
								La demanda de propiedades en Mallorca es más alta que nunca
							</li>
							<li>Rapidamente tu casa estará publicada en toda europa</li>
							<li>Deja que nosotros hagamos el trabajo por ti</li>
							<li>
								Lo único que te va a costar es rellenar este breve formulario
							</li>
							<div className={styles.iconoFlecha}>
								<FeatherIcon icon='chevron-down' />
							</div>
						</ul>
					</div>
					<div className={styles.formContainer}>
						<h2>Rellena este breve formulario y nosotros hacemos el resto</h2>

						<MailchimpFormContainer />
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
