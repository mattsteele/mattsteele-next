"use client";

import Image from 'next/image';

export default function PrintButton() {
	return (
		<button
			className="flex actions__btn js-print utl-screen-only has-tooltip hover:cursor-pointer"
			aria-label="Print Résumé"
			onClick={() => window.print()}
		>
			<Image
				className="icon icon--print"
				src="/icons/print.svg"
				width="24"
				height="24"
				alt="Print Resume"
				style={{ filter: 'invert(1)' }}
			/>
			Print
		</button>
	);
}