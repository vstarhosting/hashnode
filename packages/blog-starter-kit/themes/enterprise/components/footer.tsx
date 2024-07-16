import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';

export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.logo;
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t py-10 dark:border-neutral-800 bg-gray-50 dark:bg-gray-900">
			<Container className="flex flex-col items-center px-5 text-center">
				{PUBLICATION_LOGO ? (
					<div className="mb-5">
						<Link
							href={'/'}
							aria-label={`${publication.title} home page`}
							className="flex justify-center"
						>
							<img className="block w-40" src={PUBLICATION_LOGO} alt={publication.title} />
						</Link>
					</div>
				) : (
					<p className="mb-5 text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-2xl">
						{publication.title}
					</p>
				)}
				<SocialLinks className="mb-5" />
				<p className="text-slate-600 dark:text-neutral-300">
					&copy; {currentYear} BestinSG. All rights reserved.
				</p>
				<p className="text-slate-600 dark:text-neutral-300">
					<Link href="/privacy-policy" className="hover:underline">
						Privacy Policy
					</Link>{' '}
					·{' '}
					<Link href="/terms" className="hover:underline">
						Terms
					</Link>
				</p>
			</Container>
		</footer>
	);
};
