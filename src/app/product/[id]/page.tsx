import Image from 'next/image';
import { getProductDetails } from '../../data/ProductDetailsData';
import Link from 'next/link';

export default async function ProductPage({ params }: { params: { id: string } }) {
	const product = await getProductDetails(params.id);

	return (
		<div className='w-screen h-screen flex-col flex justify-center items-center'>
			<div className='bg-white rounded-lg shadow p-4 h-fit w-fit' key={product.id}>
				<Link href='/'>
					<button className='p-4 mb-8 bg-black text-white '> go back</button>
				</Link>
				<h2 className='text-lg font-bold'>{product.title}</h2>
				<span className='text-gray-500'>{product.description}</span>
				<p className='text-sm font-semibold line-through'>Price: {product.price}$</p>
				<p className='text-sm font-semibold '>Discount: {product.discountPercentage}$</p>
				<p className='text-sm text-green-600'>Final Price: {product.price - product.discountPercentage}$</p>
				<p className='text-sm'>in Stock: {product.stock}</p>
				<p className='text-sm'>Category: {product.category}</p>
				<div className=' flex justify-center'>
					{product.images.map((image: string, index: number) => (
						<Image width={150} height={150} key={index} className='mt-2 ml-4' src={image} alt={`Image ${index}`} />
					))}
				</div>
			</div>
		</div>
	);
}
