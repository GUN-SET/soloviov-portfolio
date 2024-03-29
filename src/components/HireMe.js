import {CircularText} from '@/components/Icons'
import Link from 'next/link'

const HireMe = () => {
	return (
		<div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
			<div className='w-48 h-auto flex items-center justify-center relative'>
				<CircularText
					className={'fill-dark animate-spin-slow dark:fill-light'}
				/>
				<Link
					href='mailto:androsol.box@gmail.com'
					className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark dark:bg-light text-light dark:text-dark shadow-md border-solid border-dark dark:border-light border-2 w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark dark:hover:text-light dark:hover:bg-dark'
				>
					HireMe
				</Link>
			</div>
		</div>
	)
}

export default HireMe
