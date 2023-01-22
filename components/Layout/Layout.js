import styles from './styles.module.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export const Layout = ({ children }) => (
	<div className={styles.container}>
		<Header />
			{ children }
		<Footer />
	</div>	
);

export default Layout;