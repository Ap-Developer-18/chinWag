import PrimaryHeading from "../custom-ui/PrimaryHeading";
import PrimaryParagraph from "../custom-ui/PrimaryParagraph";
import Image from "next/image";
import PrimaryButton from "../custom-ui/PrimaryButton";

const Supercharge: React.FC = () => {
  return (
    <div className="bg-off-blue relative">
      <div className="container py-[169px] max-md:py-[80px] max-lg:py-[90px] max-xl:py-[125px] max-sm:py-0 max-sm:pt-12 max-sm:pb-9">
        <div className="flex relative lg:justify-between max-lg:flex-wrap lg:items-center justify-center max-lg:w-full">
          <div className="flex flex-col max-lg:text-center max-lg:items-center">
            <PrimaryHeading
              text="Save on Cost. Supercharge Your Growth"
              className="max-w-[568px] max-sm:max-w-[314px] text-white"
            />
            <PrimaryParagraph
              data="Secure the best rates and get rewarded for on-time payments with 5% discount against your next invoice. The equivalent to 1 free days work, for 20 days paid."
              className="sm:max-w-[566px] text-white max-sm:pt-[10px] pt-[14px] max-w-[313px]"
            />
            <PrimaryButton
              hoverClass="bg-light-green"
              className="font-bold mb-11 lg:mb-0 max-sm:text-xs max-sm:py-[10px] max-sm:px-[27px] border-[1px] border-transparent hover:border-light-green max-sm:mt-8 max-w-[155px] text-base leading-5 text-nowrap text-white rounded-[65px] bg-dark-green py-[13px] px-[27px] mt-[41px]"
              text="Book a Demo"
            />
          </div>
          <div className="xl:absolute  xl:top-[-60px] xl:right-[-36px]">
            <Image
              src="/assets/images/webp/Supercharge-image.webp"
              alt="Supercharge Image"
              className="relative z-30 pointer-events-none"
              width={606}
              height={440}
              priority
            />
            <Image
              src="/assets/images/webp/commitment-ellips.webp"
              alt="Commitment Ellipse"
              className="absolute top-0 left-0 z-0 pointer-events-none"
              width={421}
              height={421}
              priority
            />
          </div>
        </div>
      </div>
      <Image
        src="/assets/images/webp/superchange-ellips.webp"
        alt="Superchange Ellipse"
        className="absolute max-sm:hidden w-[53px] h-[60px] pointer-events-none top-[51px] left-[30px]"
        width={53}
        height={60}
        priority
      />
      <Image
        src="/assets/images/webp/small-screenellips.webp"
        alt="Small Screen Ellipse"
        className="absolute sm:hidden max-sm:w-[36px] max-sm:h-[38px] top-[33px] left-[6px]"
        width={66}
        height={78}
        priority
      />
    </div>
  );
};

export default Supercharge;
