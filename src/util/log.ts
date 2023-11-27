const getDateLogString = () => {
	const now = new Date();
	return `[${now.getMonth()}-${now.getDate()}-${now.getFullYear()} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')}]`;
};

export const logInfo = (...message: unknown[]) => {
	console.log(getDateLogString(), ...message);
};

export const logError = (...message: unknown[]) => {
	console.error(getDateLogString(), ...message);
};