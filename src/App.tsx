import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />}></Route>
				{/* <Route path="/register" element={<Register />}></Route> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
