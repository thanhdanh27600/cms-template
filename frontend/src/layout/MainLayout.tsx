import {Publication} from "@/types/common";
import {RootContext} from "@/utils/context";
import {useContext, useEffect} from "react";
import {Helmet} from "react-helmet-async";
import {Outlet} from "react-router";
import {useLocation} from "react-router-dom";

export const MainLayout = () => {
	const location = useLocation();
	const {data} = useContext(RootContext);
	const overviewPublications = data?.overviewPublications as {
		attributes: Publication;
	}[];
	useEffect(() => {
		return () => {};
	}, [location.pathname]);
	console.log("overviewPublications", overviewPublications);

	return (
		<>
			<Helmet></Helmet>
			<Outlet />
			{/* footer*/}
		</>
	);
};
