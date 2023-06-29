import Link from 'next/link';
import React from 'react';
import { GiShoppingCart } from 'react-icons/gi';

function Header() {
	return (
		<div className=' px-8 h-16 w-full bg-black text-white flex justify-between items-center'>
			<Link href='/'>Next Level Shop</Link>
			<GiShoppingCart size={44} />
		</div>
	);
}

export default Header;
