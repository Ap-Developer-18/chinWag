import Link from 'next/link';
import Image from 'next/image';
import PrimaryButton from '../custom-ui/PrimaryButton';

const Header: React.FC = () => {
    return (
        <div className='py-4 max-md:pt-8 max-sm:pt-6 absolute top-0 left-0 w-full z-50'>
            <div className="container">
                <nav className='flex items-center justify-between'>
                    <Link href="/" className='flex w-full max-w-[32px] sm:max-w-[63px]'>
                        <Image
                            src="/assets/images/webp/logo.webp"
                            alt='logo'
                            width={95}
                            height={92}
                            className='w-full pointer-events-none'
                            priority
                        />
                    </Link>
                    <div className="flex items-center gap-2 sm:gap-5">
                        <PrimaryButton
                            hoverClass='bg-dark-green'
                            className='py-1.5 px-2.5 sm:px-6 sm:py-3 lg:py-[17px] md:px-[30px] bg-light-green rounded-[65px] text-white font-bold sm:font-normal text-xs'
                            text='Require Resources?'
                        />
                        <PrimaryButton
                            hoverClass='bg-light-green'
                            className='py-[4.5px] px-2.5 sm:px-6 sm:py-2.5 lg:py-[15.4px] md:px-[30px] border-light-green border-2 rounded-[65px] bg-white text-light-green font-bold sm:font-normal hover:border-white text-xs hover:text-white'
                            text='Provide Resources?'
                        />
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Header;