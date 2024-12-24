import Image from "next/image";
import Link from "next/link";
import PrimaryButton from "../custom-ui/PrimaryButton";

const Footer: React.FC = () => {
    const currentYear: number = new Date().getFullYear();
    return (
        <div className='pb-0.5 pt-4 sm:py-5 bg-footer-layer bg-no-repeat bg-cover'>
            <div className="container mt-5 relative z-[1]">
                <Link href="/" className='sm:max-w-[206px] items-center justify-end min-h-[113px] sm:min-h-[199px] h-full max-w-[108px] relative w-full flex mx-auto flex-col'>
                    <Image
                        src="/assets/images/webp/chin-logo.webp"
                        alt='logo'
                        width={2006}
                        height={200}
                        className='w-full pointer-events-none absolute top-0 max-w-[81px] sm:max-w-[155px] animate-spin'
                        priority
                    />
                    <Image src='/assets/images/webp/chin-wag-logo.webp' alt='chin-wag-logo' width={206} height={25} className='max-w-[206px] w-full h-[13px] sm:h-[25px]' priority />
                </Link>
                <PrimaryButton
                    gsapClass='mx-auto'
                    hoverClass='bg-white'
                    text='Book a Demo'
                    className='sm:mt-[34px] mt-4 bg-cool-green mx-auto text-white text-xs hover:text-cool-green px-5 sm:px-8 py-2 sm:py-[17px] rounded-[65px]'
                />
            </div>
            <p className='pt-5 w-full text-center text-white font-normal text-xs sm:text-sm md:leading-[30px] opacity-60 border-t mt-8 border-off-gray hidden sm:block'>
                © CHIN WAG INTERNATIONAL LIMITED t/a Chin-wag.com {currentYear}, All Rights Reserved.
            </p>
            <p className='pb-2.5 pt-3 w-full text-center text-white font-normal text-xs sm:text-sm opacity-60 border-t mt-8 border-off-gray sm:hidden'>
                ©chin-wag {currentYear}, All Rights Reserved
            </p>
        </div>
    );
};

export default Footer;
