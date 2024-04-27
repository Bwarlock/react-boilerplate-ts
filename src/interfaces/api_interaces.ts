import { AxiosResponse } from "axios";

export interface Login_Interface {
	v1: (data: object) => Promise<AxiosResponse>;
}
