import { Login_Interface } from "../interfaces/api_interaces";
import { BaseAxiosInstance } from "./axios";

export function Login(data: object) {
	return (Login as unknown as Login_Interface).v1(data);
}

Login.v1 = function v1(data: object) {
	return BaseAxiosInstance({
		method: "post",
		url: "/auth/login",
		data: data,
	});
};
