import { useNavigate } from "react-router-dom";
import { Login } from "./api";

export const useLogin = () => {
	const navigate = useNavigate();

	function login(data: object) {
		Login.v1(data).then((res) => {
			console.log(res);
			navigate("/"); //Redirect If Needed
		});
	}
	return login;
};
