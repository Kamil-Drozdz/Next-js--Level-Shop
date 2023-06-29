import Link from 'next/link';
import { getProductData } from './data/ProductsData';
import Image from 'next/image';
import { GiShoppingCart } from 'react-icons/gi';

export default async function ProductsPage() {
	const products = await getProductData();

	return (
		<div className='p-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
			{products.products.flatMap((product: any) => (
				<div className='relative bg-white rounded-lg shadow-lg px-4  h-full w-full flex flex-col justify-center items-start transition-all duration-300 ease-in-out hover:shadow-xl hover:bg-slate-200'>
					<h2 className='text-xl font-bold'>{product.title}</h2>
					<span className='text-gray-500'>
						<strong>Description</strong>: <br /> {product.description}
					</span>
					<p className='text-sm font-semibold'>Price: {product.price}$</p>
					<p className='text-sm'>in Stock: {product.stock}</p>
					<p className='text-sm'>Category: {product.category}</p>

					<Image width={600} height={600} className='mt-2 mb-20 self-center w-64 h-64 object-contain' src={product.images[0]} alt={product.title} />

					<Link href={`/product/${product.id}`} key={product.id}>
						<button className='absolute bottom-2 left-8 p-4  bg-black text-white '> Show more details</button>
					</Link>
					<button className='absolute bottom-2 right-8 p-4  bg-black text-white'>
						<GiShoppingCart size='24' />
					</button>
				</div>
			))}
		</div>
	);
}
//add global state to manage cart counter
