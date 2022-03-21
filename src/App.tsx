import styles from './App.module.css'
import poweredImage from './assets/powered.png'

function App() {
	return (
		<div className={styles.main}>
			<header>
				<div className={styles.headerContainer}>
					<img 
						src={poweredImage} 
						alt='logo do projeto, escrito "imc" imagem com fundo azul e letras brancas no centro' 
						width={150}
					/>
				</div>
				<div className={styles.container}>
					<div className={styles.leftSide}>

					</div>
					<div className={styles.rightSide}>

					</div>
				</div>
			</header>
		</div>
	);
}

export default App;
