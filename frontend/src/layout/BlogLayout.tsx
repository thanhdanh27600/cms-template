import {Publication} from "@/types/common";
import {RootContext} from "@/utils/context";
import {truncate} from "@/utils/data";
import {useContext} from "react";
import {Helmet} from "react-helmet-async";
import {Outlet} from "react-router";
import {useNavigate, useParams} from "react-router-dom";

export const BlogLayout = () => {
	const {slug} = useParams();
	const navigate = useNavigate();
	const {data} = useContext(RootContext);
	const publication = data?.publication as Publication;
	// const url = getStrapiMedia(publication?.picture?.data?.attributes?.url);
	const url = publication?.picture?.data?.attributes?.url;

	if (!slug) navigate("/");
	if (!publication) return null;

	return (
		<>
			<Helmet>
				<title>Publication | {publication.title}</title>
				<meta
					name="description"
					property="og:description"
					key="og:description"
					content={truncate(publication.description, 200)}
				/>
				<meta property="og:image" key="og:image" content={url} />
			</Helmet>
			{JSON.stringify(publication)}
			<div className="min-h-[50vh]">
				<Outlet />
			</div>
		</>
	);
};
