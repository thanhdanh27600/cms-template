import {useEffect, useState} from "react";
import {debounce} from "./data";

export const useDimensionWindow = () => {
	const [width, setWidth] = useState(Window()?.innerWidth);
	const [height, setHeight] = useState(Window()?.innerHeight);

	const debouncedWidth = debounce(setWidth, 200);
	const debouncedHeight = debounce(setHeight, 200);

	useEffect(() => {
		const handleResize = () => {
			debouncedWidth(Window()?.innerWidth);
			debouncedHeight(Window()?.innerHeight);
		};
		Window()?.addEventListener("resize", handleResize);
		return () => {
			Window()?.removeEventListener("resize", handleResize);
		};
	}, []);
	return {width, height};
};

export const Window = () =>
	"object" === typeof window && window ? (window as any) : undefined;
export const jQuery = Window().jQuery as JQueryStatic;
