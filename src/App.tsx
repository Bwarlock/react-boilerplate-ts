import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";
import LandingPage from "./components/LandingPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />}></Route>
				<Route path="/" element={<LandingPage />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
