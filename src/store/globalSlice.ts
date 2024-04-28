import { createSlice } from "@reduxjs/toolkit";
import { Global_State } from "../interfaces/store_interfaces";

const initialValue: Global_State = {
	user: {},
};

const globalSlice = createSlice({
	name: "global",
	initialState: initialValue,
	reducers: {
		storeUser: (state, action) => {
			console.log(action.payload);
			state.user = action.payload;
		},
	},
});

export const { storeUser } = globalSlice.actions;
export default globalSlice.reducer;
