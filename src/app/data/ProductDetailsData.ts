export async function getProductDetails(id: string) {
	const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}product/${id}`);
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
}
