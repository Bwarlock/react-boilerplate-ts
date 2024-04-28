import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

function LandingPage() {
	const { user } = useSelector((state: RootState) => state.global);
	useEffect(() => {
		console.log("Persisted User", user);
	}, []);
	return <div></div>;
}

export default LandingPage;
