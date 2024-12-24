"use client"
import PrimaryHeading from '../custom-ui/PrimaryHeading';
import PrimaryButton from '../custom-ui/PrimaryButton';
import { CONVERSATIONS_DATA } from '@/utils/Helper';
import Icon from '../common/Icons';
import { Tilt } from 'react-next-tilt';
interface CardDataItem {
    text: string;
    button: string;
}
const Conversations: React.FC = () => {
    return (
        <div className='lg:py-24 py-11 md:py-16 relative z-[1] bg-light-sky'>
            <div className="container sm:my-10 relative z-[2]">
                <PrimaryHeading className='mx-auto text-center text-off-green' text='Share or Connect.' />
                <PrimaryHeading className='mx-auto text-center text-off-green sm:-mt-1.5 px-10 sm:px-0' text='Create Conversations that Count' />
                <div className="mt-[38px] flex md:flex-row flex-col items-center gap-6 md:gap-6 lg:gap-10 justify-center">
                    {CONVERSATIONS_DATA.map((item: CardDataItem, index: number) => (
                        <Tilt key={index}>
                            <div

                                className={`${index === 0 ? "bg-dark-green" : "bg-light-green"} max-w-[330px] sm:max-w-[427px] w-full px-[30px] flex flex-col items-center pb-10 sm:pb-[30px] pt-[30px] sm:pt-10 rounded`}
                            >
                                <p className='font-light text-base sm:text-lg text-white mt-0.5 text-center'>{item.text}</p>
                                <PrimaryButton
                                    gsapClass='w-full'
                                    hoverClass={`${index === 0 ? "bg-white" : "bg-light-green"}`}
                                    text={item.button}
                                    className={`${index === 0 ? "text-off-green bg-medium-green" : "text-white bg-dark-green"} sm:mt-[34px] mt-6 w-full text-xs py-3 sm:py-[14px] rounded-[138px] font-bold`}
                                />
                            </div>
                        </Tilt>
                    ))}
                </div>
            </div>
            <Icon IconName='greenTriangleIcon' className='top-[70px] animate-move left-[31px] absolute hidden lg:flex' />
            <Icon IconName='halfCircleIcon' className='bottom-[111px] animate-move right-[72px] absolute hidden lg:flex' />
        </div>
    );
}

export default Conversations;