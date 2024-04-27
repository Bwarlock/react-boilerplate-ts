import { FormEvent, useState } from "react";
import { useLogin } from "../api/hooks";
function Login() {
	const [values, setValues] = useState({
		username: "",
		password: "",
		domainName: "",
	});
	const login = useLogin();

	const handleLogin = (e: FormEvent) => {
		e.preventDefault();
		login(values);
	};

	return (
		<>
			<form action="#" onSubmit={handleLogin}>
				Username :{" "}
				<input
					type="text"
					name="username"
					onChange={(e) => {
						setValues((val) => {
							return { ...val, username: e.target.value };
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
