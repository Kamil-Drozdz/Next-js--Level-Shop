export async function getProductData() {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}products`);
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
}
