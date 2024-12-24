import PrimaryHeading from "../custom-ui/PrimaryHeading";
import PrimaryParagraph from "../custom-ui/PrimaryParagraph";
import Image from "next/image";
const Private: React.FC = () => {
  return (
    <div className="relative">
      <div className="container pt-[179px] max-sm:pt-[70px] max-md:pt-[100px] max-lg:pt-[100px]">
        <div className="flex justify-between flex-wrap w-full max-lg:justify-center items-center">
          <div className="flex flex-col max-lg:text-center max-lg:items-center">
            <PrimaryHeading
              text="Stay Private. Stay in Control."
              className="max-w-[397px] max-sm:max-w-[330px] text-off-green"
            />
            <PrimaryParagraph
              data="Chin-wag empowers you with the ability to request information from the resource marketplace without revealing your identity."
              className="max-w-[428px] font-light pt-5 max-sm:pt-[15px]"
            />
            <PrimaryParagraph
              data="Review applications and schedule introductions with total discretion."
              className="max-w-[428px] pt-4 max-sm:pt-2 font-light"
            />
          </div>
          <div className="relative w-full max-w-[513px] max-sm:max-w-[326px] z-30 max-lg:pt-[68px] flex">
            <Image
              src="/assets/images/webp/stay-private.webp"
              alt="Stay Private"
              className="relative w-full pointer-events-none"
              width={513}
              height={477}
              priority
            />
          </div>
        </div>
      </div>
      <Image
        src="/assets/images/webp/two-circle.webp"
        alt="Decorative Circles"
        className="absolute top-[87px] pointer-events-none max-sm:hidden left-[26px]"
        width={74}
        height={74}
        priority
      />
      <Image
        src="/assets/images/webp/superchange-ellips.webp"
        alt="Superchange Ellipse"
        className="absolute pointer-events-none top-[350px] max-sm:h-[28px] max-sm:w-[24px] sm:hidden right-[16px]"
        width={66}
        height={78}
        priority
      />
      <Image
        src="/assets/images/webp/private-ellips.webp"
        alt="Decorative Ellipse"
        className="absolute pointer-events-none max-lg:bottom-[-90px] max-md:bottom-[-135px] max-w-[800px] lg:top-0 max-sm:bottom-[-40px] w-full right-0  z-0"
        width={545}
        height={429}
        priority
      />
    </div>
  );
};
export default Private;
