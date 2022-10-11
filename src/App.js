import About from "./components/About/About";
import Header from "./components/Header/Header";
import Creations from "./components/Creations/Creations";
import Footer from "./components/Footer/Footer";

const App = () => {
	return (
		<>
			<Header />
			<main>
				<About />
				<Creations />
			</main>
			<Footer />
		</>
	);
};

export default App;
