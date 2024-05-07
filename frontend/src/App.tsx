import "./index.css";
import "./styles/index.scss";

import {HelmetProvider} from "react-helmet-async";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {AboutUs} from "./components/AboutUs";
import {Home} from "./components/Home";
import {NotFound} from "./components/NotFound";
import {MainLayout} from "./layout/MainLayout";
import {AppProvider} from "./utils/context";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<MainLayout />}>
				<Route index element={<Home />} />
				<Route path="about-us" element={<AboutUs />} />
				<Route path="*" element={<NotFound />} />
			</Route>
		</Routes>
	);
};

function App() {
	return (
		<HelmetProvider>
			<BrowserRouter>
				<AppProvider>
					<AppRoutes />
				</AppProvider>
			</BrowserRouter>
		</HelmetProvider>
	);
}

export default App;
