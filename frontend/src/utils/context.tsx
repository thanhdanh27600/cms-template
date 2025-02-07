"use client";
import {createContext, useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {getPageBySlug, getPublication} from "./query";

const defaultData = {data: null} as {
	data: any;
	setData: any;
};

export const RootContext = createContext(defaultData);

export const AppProvider = ({children}: any) => {
	const location = useLocation();
	const navigate = useNavigate();
	const [data, setData] = useState<Record<string, any>>(defaultData);

	useEffect(() => {
		console.log("context init");
	}, []);

	useEffect(() => {
		(window as any).global = data;
	}, [data]);

	useEffect(() => {
		const slug = location.pathname === "/" ? "home" : location.pathname;
		// getOverviewPublications()
		// 	.then((_data) => {
		// 		const rs = {...window.global, overviewPublications: _data?.data};
		// 		window.global = rs;
		// 		setData(rs);
		// 	})
		// 	.catch((e: any) => {
		// 		console.error(e);
		// 	});

		if (slug.startsWith("/publication")) {
			getPublication(slug.replace("/publication/", ""))
				.then((_data) => {
					const publication = _data?.data[0]?.attributes;
					if (!publication) return navigate("/");
					const rs = {...window.global, publication};
					window.global = rs;
					setData(rs);
				})
				.catch((e) => console.error(e));
		} else {
			getPageBySlug(slug)
				.then((_data) => {
					const rs = {...window.global, page: _data?.[0]?.attributes};
					window.global = rs;
					setData(rs);
				})
				.catch((e) => console.error(e));
		}
	}, [location.pathname]);

	return (
		<RootContext.Provider value={{data, setData}}>
			{children}
		</RootContext.Provider>
	);
};
