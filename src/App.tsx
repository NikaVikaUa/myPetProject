import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Experiance from './components/BookAnExperiance/BookAnExperiance';
import Adventures from './components/Adventures/Adventures';
import Prices from './components/Prices/PricesPage';
import AboutUs from './components/AboutUs/AboutUs';
import Contacts from './components/Contacts/Contacts';
import City from './components/City/City';

function App(): JSX.Element {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route path="/bookanexperiance" element={<Experiance />} />
				<Route path="/adventures" element={<Adventures />} />
				<Route path="/prices" element={<Prices />} />
				<Route path="/aboutus" element={<AboutUs />} />
				<Route path="/contacts" element={<Contacts />} />
				<Route path="/city" element={<City />} />
			</Route>
		</Routes>
	);
}

export default App;
