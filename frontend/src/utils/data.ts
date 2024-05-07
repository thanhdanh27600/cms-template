export const debounce = <F extends (...args: any[]) => any>(
	func: F,
	waitFor: number
) => {
	let timeout: NodeJS.Timeout;
	return (...args: Parameters<F>): Promise<ReturnType<F>> =>
		new Promise((resolve) => {
			if (timeout) {
				clearTimeout(timeout);
			}
			timeout = setTimeout(() => resolve(func(...args)), waitFor);
		});
};

export function randomNumber(a: number, b: number): number {
	if (b < a) {
		const temp = a;
		a = b;
		b = temp;
	}
	const randomNumber = Math.random() * (b - a) + a;
	return Math.round(randomNumber);
}

export const indexingArray = <T>(
	array: T[],
	field: keyof T
): {[key: string]: T | undefined} => {
	if (!array?.length) return {};
	return array.reduce((prev: any, next: T) => {
		const index = next[field];
		return {
			...prev,
			[index as any]: next,
		};
	}, {});
};

export function formatCurrency(
	number: number,
	currencySymbol: string = "$"
): string {
	const formatter = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 0,
		maximumFractionDigits: 2,
	});

	const formattedNumber = formatter.format(number);
	return formattedNumber.replace("$", currencySymbol);
}

export const truncate = (input: string, length = 30) => {
	if (input.length <= length) return input;
	return input.substring(0, length) + "...";
};

export function generateWhatsAppMessage(
	message: string = "Hello Example",
	phoneNumber: string = "09xxxxx"
): string {
	// Encode message text
	const encodedMessage = encodeURIComponent(message);

	// Generate WhatsApp link
	const link = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

	return link;
}
