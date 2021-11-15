export interface PackageListProps {
	className?: string;
}

export type Links = {
	bugs?: string;
	homepage?: string;
	npm?: string;
	repository?: string;
}

export type Publisher = {
	email?: string;
	username?: string;
}

export interface Package {
	name?: string;
	description?: string;
	date?: Date;
	links?: Links;
	publisher?: Publisher;
	version?: string;
}
