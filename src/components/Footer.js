import Layout from '@/components/Layout'
import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='w-full border-t-2 border-solid border-dark dark:border-light font-medium text-lg dark:text-light'>
			<Layout className='py-8 flex items-center justify-between '>
				<span>
					{new Date().getFullYear()} &copy; All Rights Reserved.
				</span>
				<div className='flex items-center dark:text-light'>
					Build With{' '}
					<span className='text-primary dark:text-primaryDark text-2xl px-1'>
						&#9825;
					</span>
					By&nbsp;
					<Link
						href='/'
						className='underline underline-offset-2 '
						target='_blank'
					>
						Andrii Soloviov
					</Link>
				</div>
				<Link
					href='/'
					target='_blank'
					className='underline underline-offset-2 '
				>
					Say Hello
				</Link>
			</Layout>
		</footer>
	)
}

export default Footer
