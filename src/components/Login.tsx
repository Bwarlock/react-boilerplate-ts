import { FormEvent, useEffect, useState } from "react";
import { useLogin } from "../api/hooks";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
function Login() {
	const [values, setValues] = useState({
		email: "",
		password: "",
		domainName: "",
	});
	const login = useLogin();
	const { user } = useSelector((state: RootState) => state.global);
	useEffect(() => {
		console.log("Persisted User", user);
	}, []);

	const handleLogin = (e: FormEvent) => {
		e.preventDefault();
		login(values);
	};

	return (
		<>
			<form action="#" onSubmit={handleLogin}>
				Email :{" "}
				<input
					type="text"
					name="email"
					onChange={(e) => {
						setValues((val) => {
							return { ...val, email: e.target.value };
						});
					}}
				/>
				<br />
				Password :{" "}
				<input
					type="password"
					name="password"
					onChange={(e) => {
						setValues((val) => {
							return { ...val, password: e.target.value };
						});
					}}
				/>
				<br />
				<input type="submit" value="submit" name="submit" />
			</form>
		</>
	);
}

export default Login;
