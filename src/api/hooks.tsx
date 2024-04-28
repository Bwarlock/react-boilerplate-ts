import { useNavigate } from "react-router-dom";
import { Login } from "./api";
import { useDispatch } from "react-redux";
import { storeUser } from "../store/globalSlice";
import { AppDispatch } from "../store/store";

// Api Hooks For Redirect and Other React Logic

export const useLogin = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();

	function login(data: object) {
		Login.v1(data).then((res) => {
			console.log(res);
			dispatch(storeUser(res.data.user)); // Storing User in Redux-persist LocalStorage
			localStorage.setItem("token", res.data.token); // Storing Token Myself
			navigate("/");
		});
	}
	return login;
};
