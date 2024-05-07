export type PictureFormat = {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	path: string;
	width: number;
	height: number;
	size: number;
	url: string;
};

export type PictureData = {
	id: number;
	attributes: {
		name: string;
		alternativeText: string;
		caption: string;
		width: number;
		height: number;
		formats: {
			thumbnail: PictureFormat;
			medium: PictureFormat;
			small: PictureFormat;
			large: PictureFormat;
		};
		hash: string;
		ext: string;
		mime: string;
		size: number;
		url: string;
		previewUrl: string;
		provider: string;
		provider_metadata: any;
		createdAt: string;
		updatedAt: string;
	};
};

export type Picture = {
	data: PictureData;
};

export type ContentsArray = Array<{key: string; value: string}>;
export type Contents = Record<string, string>;

export type Publication = {
	createdAt: string;
	updatedAt: string;
	title: string;
	description: string;
	content: null;
	slug: string;
	publishedAt: string;
	picture: Picture;
};
