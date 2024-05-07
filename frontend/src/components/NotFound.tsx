import {Helmet} from "react-helmet-async";

export const NotFound = () => {
	return (
		<>
			<Helmet>
				<title>404 | ...</title>
			</Helmet>
			404
		</>
	);
};
