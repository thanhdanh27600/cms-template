import {Contents, ContentsArray, PictureData} from "@/types/common";
import qs from "qs";

export function getStrapiURL(path = "") {
	return `${
		import.meta.env.VITE_STRAPI_API_URL || "http://localhost:1337"
	}${path}`;
}

export function getStrapiMedia(url?: string | null) {
	if (!url) {
		return "";
	}

	// Return the full URL if the media is hosted on an external provider
	if (url.startsWith("http") || url.startsWith("//")) {
		return url;
	}

	// Otherwise prepend the URL path with the Strapi URL
	return `${getStrapiURL()}${url}`;
}

const token = import.meta.env.VITE_STRAPI_API_TOKEN;
const authHeader = {Authorization: `Bearer ${token}`};

export async function fetchAPI(
	path: string,
	urlParamsObject = {},
	options: RequestInit = {}
) {
	try {
		// Merge default and user options
		const mergedOptions = {
			next: {revalidate: 60},
			...options,
			headers: {
				"Content-Type": "application/json",
				...authHeader,
				...options.headers,
			},
		};

		// Build request URL
		const queryString = qs.stringify(urlParamsObject);
		const requestUrl = `${getStrapiURL(
			`/api${path}${queryString ? `?${queryString}` : ""}`
		)}`;

		// Trigger API call
		const response = await fetch(requestUrl, mergedOptions);
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
		throw new Error(
			`Please check if your server is running and you set all the required tokens.`
		);
	}
}

export const getValuesContent = (obj?: Record<any, any>, ...keys: string[]) => {
	const values: string[] = [];
	if (!keys.length) return values;
	keys.map((key) => {
		values.push(obj?.[key] || ("" as string));
	});
	return values;
};

export const getValuesMedia = (obj?: Record<any, any>, ...keys: string[]) => {
	const values: (PictureData | undefined)[] = [];
	if (!keys.length) return values;
	keys.map((key) => {
		values.push(obj?.[key]?.data as PictureData);
	});
	return values;
};

export const mapKeyValue = (arr: ContentsArray) => {
	const contents = {} as Contents;
	if (!arr) return undefined;
	arr.map((item) => {
		contents[item.key] = item.value;
	});
	return contents;
};
