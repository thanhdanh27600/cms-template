import homeData from "../data/home.json";
import overviewPublication from "../data/overviewPublication.json";
import publication1 from "../data/publication/slug.json";
import {fetchAPI} from "./api";

export async function getGlobal(): Promise<any> {
	const path = `/global`;

	const urlParamsObject = {
		populate: ["contents", "medias", "medias.value"],
	};
	return await fetchAPI(path, urlParamsObject);
}

export async function getOverviewPublications(): Promise<any> {
	return overviewPublication;
	const path = `/publications`;

	const urlParamsObject = {
		fields: ["slug", "title", "description"],
		populate: ["picture"],
	};
	return await fetchAPI(path, urlParamsObject);
}

export async function getPublication(slug: string): Promise<any> {
	switch (slug) {
		case "slug":
			return publication1;
	}
	const path = `/publications`;

	const urlParamsObject = {
		filters: {slug},
		populate: ["picture"],
	};
	return await fetchAPI(path, urlParamsObject);
}

export async function getPageBySlug(slug: string | string[]) {
	switch (slug as string) {
		case "home":
			return homeData.data;

		default:
			return [];
	}
	// const path = `/pages`;
	// const urlParamsObject = {
	// 	filters: {
	// 		slug: typeof slug === "object" ? slug.join("/") : slug.replace("/", ""),
	// 	},
	// 	populate: ["contents", "medias", "medias.value"],
	// };
	// const data = await fetchAPI(path, urlParamsObject);
	// return data?.data;
}
