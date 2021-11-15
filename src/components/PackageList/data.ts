export const clearData = (objects: any[]) => objects.map((item) => {
	const {name, date, description, links, publisher, version} = item.package;
	return {name, date, description, links, publisher, version};
});

export const getFormattedDate = (date: Date): string => {
	return date.toLocaleString('ru', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
	});
};
