import PrimaryParagraph from "../custom-ui/PrimaryParagraph";
import Image from "next/image";
import Icon from "../common/Icons";
import Header from "../common/Header";
import Link from "next/link";
import PrimaryButton from "../custom-ui/PrimaryButton";
const Hero: React.FC = () => {
  const triangles = Array(5).fill(null);
  return (
    <div className="relative">
      <Header />
      <div className="container relative">
        <div className=" xl:flex justify-between items-center flex-wrap max-xl:justify-center max-sm:items-center max-xl:text-center pt-[213px] max-sm:pt-[119px] pb-[141px] max-md:pb-[50px] max-sm:pb-[0px] max-lg:pb-[40px] max-xl:pb-[60px]">
          <div className="relative w-full sm:w-auto z-30 sm:mx-10 translate_x lg:mx-0 transform xl:-translate-x-[16%] translate-x-0">
            <Image
              src="/assets/images/webp/header-image.webp"
              alt="Hero Image"
              className="z-30 relative w-full mx-auto max-lg:h-[400px] max-md:h-[360px] rounded-lg shadow-gif-shadow max-w-[330px] sm:max-w-[715px] max-sm:h-[197px] h-[456px]"
              width={715}
              height={456}
              priority
            />
            <Image
              src="/assets/images/webp/dot-img.webp"
              alt="Dot Decoration"
              className="absolute z-0 top-[-49px] max-xl:right-[102px] max-lg:right-[-20px] right-[-20px] max-sm:top-[-20px] max-sm:right-[-4px] max-sm:w-[52px] max-sm:h-auto"
              width={146}
              height={118}
              sizes="(max-width: 640px) 52px, 146px"
              priority
            />
          </div>
          <div className="flex flex-col max-xl:pt-16 max-sm:pt-[23px] max-xl:text-center max-xl:items-center">
            <h1 className="font-black max-sm:text-[30px] relative z-30 text-off-green max-sm:leading-[40px] max-w-[419px] max-sm:max-w-[273px] text-[46px] leading-[61px]">
              Introductions that save you money.
            </h1>
            <PrimaryParagraph
              data="Avoid inflated costs, keep your identity hidden while searching for partners, and get rewarded for paying on time."
              className="max-w-[409px] max-sm:max-w-[290px] pt-3 z-20"
            />
            <PrimaryButton
              hoverClass="bg-light-green"
              text="Publish your Requirement"
              className="font-normal border-[1px] border-transparent hover:border-light-green max-sm:text-xs max-sm:py-[10px] max-sm:px-[15px] max-sm:mt-[21px] leading-5 max-w-[237px] text-nowrap text-white rounded-[65px] bg-dark-green py-[14px] px-[20px] mt-[29px]"
            />
          </div>
        </div>
      </div>
      <div className="absolute top-0 z-0 w-full max-sm:h-[207px] max-lg:h-[407px] 2xl:w-[50%] xl:w-[683px] bg-dark-green h-[400px] xl:h-[810px] xl:rounded-[0px_16px_16px_0px]"></div>
      <div className="flex">
        <div className="flex flex-col gap-[17px] max-sm:gap-[5px] absolute right-[15px] max-lg:left-4 top-[43%] max-sm:top-[40%] lg:top-[107px]">
          {triangles.map((_, index) => (
            <Icon
              key={index}
              IconName="triangleIcon"
              className="max-sm:w-[5px] max-sm:h-[6px]"
            />
          ))}
        </div>
        <Link
          href="#benefit"
          className="w-fit hidden lg:flex absolute max-sm:hidden right-[23px] bottom-0"
        >
          <Image
            src="/assets/images/webp/scroll-down.webp"
            alt="Scroll Down"
            width={111}
            height={112}
            priority
          />
        </Link>
      </div>
    </div>
  );
};
export default Hero;