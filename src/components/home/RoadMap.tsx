import PrimaryHeading from '../custom-ui/PrimaryHeading';
import Image from 'next/image';
import { ROADMAP_DATA } from '@/utils/Helper';
interface RoadmapItem {
    image: string;
    text: string;
}

const RoadMap: React.FC = () => {
    return (
        <div className='lg:py-24 py-16 relative z-[1]'>
            <div className="container md:mt-9 lg:pb-[75px] md:mb-10">
                <p className='text-center mx-auto text-dark-green font-normal text-sm sm:text-base md:text-xl'>
                    The Best Business Partnerships
                </p>
                <PrimaryHeading text='Start with a Chin-Wag' className='text-off-green text-center mx-auto' />
                <div className="lg:mt-40 mt-12 pt-3 gap-7 sm:gap-0 lg:max-h-[368px] flex lg:flex-row flex-col justify-between max-w-[1074px] w-full mx-auto pointer-events-none relative z-10">
                    <Image
                        src="/assets/images/webp/green-line.webp"
                        className='w-full absolute -z-[1] hidden lg:flex top-0 left-1/2 -translate-x-1/2 max-w-[877px]'
                        width={1074}
                        height={371}
                        alt='partnerships'
                        priority
                    />
                    <Image
                        src="/assets/images/webp/green-line-img.webp"
                        className='h-[80%] w-1.5 absolute -z-[1] lg:hidden top-1/2 -translate-y-1/2 left-[11%] sm:left-24'
                        width={1074}
                        height={371}
                        alt='partnerships'
                        priority
                    />
                    {ROADMAP_DATA.map((item: RoadmapItem, idx: number) => (
                        <div
                            key={idx}
                            className={`z-[1] sm:w-full flex flex-row gap-4 -ml-5 sm:ml-0 lg:gap-0 lg:flex-col max-h-[85px] sm:max-h-[150px] relative items-center ${idx === 0 ? 'lg:-mt-24 left-0 lg:max-w-[200px]' :
                                idx === 1 ? 'lg:mt-3 lg:max-w-[204px]' :
                                    idx === 2 ? 'lg:-mt-24 lg:max-w-[200px]' :
                                        idx === 3 ? 'lg:mt-3 lg:max-w-[200px]' :
                                            'lg:max-w-[200px] lg:-mt-24'
                                }`}
                        >
                            <Image
                                src={item.image}
                                className='sm:max-w-[204px] lg:w-full max-w-[120px] lg:h-[208px]'
                                width={609}
                                height={620}
                                alt='business'
                                priority
                            />
                            <p className={`text-off-green font-normal relative z-[5] -mt-6 lg:-mt-12 lg:text-center text-lg md:text-base ${idx === 0 ? 'lg:max-w-[133px]' :
                                idx === 1 ? 'lg:max-w-[204px]' :
                                    idx === 2 ? 'lg:max-w-[177px]' :
                                        idx === 3 ? 'lg:max-w-[161px]' :
                                            'lg:max-w-[130px]'
                                }`}>
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default RoadMap;