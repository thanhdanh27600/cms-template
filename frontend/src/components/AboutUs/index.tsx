import {getValuesContent, getValuesMedia, mapKeyValue} from "@/utils/api";
import {RootContext} from "@/utils/context";
import {useContext} from "react";

export function AboutUs() {
	const {data} = useContext(RootContext);
	const page = data?.page;
	const contents = mapKeyValue(page?.contents);
	const medias = mapKeyValue(page?.medias);

	const [_content] = getValuesContent(contents, "key");
	const [_media] = getValuesMedia(medias, "key");

	if (!contents) return null;

	return <>About us</>;
}
