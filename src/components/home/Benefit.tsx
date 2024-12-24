"use client";
import PrimaryHeading from "../custom-ui/PrimaryHeading";
import Image from "next/image";
import PrimaryParagraph from "../custom-ui/PrimaryParagraph";
import { BENEFIT_DATA } from "@/utils/Helper";
import { Tilt } from "react-next-tilt";
interface BenefitItem {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const Benefit: React.FC = () => {
  return (
    <div className="relative">
      <div className="container">
        <div
          id="benefit"
          className="flex justify-center pt-[160px] max-lg:pt-[60px] max-xl:pt-[80px] max-md:pt-[80px] max-sm:pt-[71px]"
        >
          <PrimaryHeading
            text="Benefit from the Power of Choice. Built for Startups, SMEs & Enterprise"
            className="text-center text-off-green max-w-[808px]"
          />
        </div>
        <div className="flex gap-6 max-sm:gap-[27px] max-xl:flex-wrap justify-center max-sm:pt-[41px] pt-[60px]">
          <div className="flex gap-6 max-sm:gap-6 max-xl:gap-4 w-full flex-wrap flex-row lg:flex-nowrap justify-center">
            {BENEFIT_DATA.map((item: BenefitItem, idx) => (
              <Tilt key={idx}>
                <div className="min-h-[429px] sm:w-full max-md:min-h-[400px] max-sm:min-h-[379px] max-sm:max-w-[286px] px-5 hover:bg-light-green hover:border-light-green duration-500 group w-full sm:px-3 lg:max-w-[364px] border-[1px] border-medium-gray rounded-lg text-center flex justify-center">
                  <div className="flex flex-col items-center">
                    <div className="pt-2 w-full max-sm:pt-5 max-w-[310px]">
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt}
                        className="w-full pointer-events-none"
                        width={178}
                        height={193}
                        priority
                      />
                    </div>
                    <h3 className="-mt-[70px] max-sm:-mt-[50px] font-semibold group-hover:text-white text-black leading-[34px] max-sm:text-lg max-sm:leading-6 text-[25px]">
                      {item.title}
                    </h3>
                    <PrimaryParagraph
                      data={item.description}
                      className="max-w-[310px] group-hover:text-white pt-[10px]"
                    />
                  </div>
                </div>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
      <Image
        src="/assets/images/webp/plus-ellips.webp"
        alt="Plus Ellipse"
        className="absolute max-md:top-[157px] rotate-[25.53deg] max-w-[66px] h-[78px] top-[178px] max-md:left-[0px] max-sm:w-[37px] max-sm:h-[42px] left-[60px]"
        width={66}
        height={78}
        priority
      />
      <Image
        src="/assets/images/webp/two-circle.webp"
        alt="Two Circle"
        className="absolute pointer-events-none bottom-[4px] max-sm:w-[44px] max-sm:h-[41px] max-xl:bottom-[-90px] max-sm:right-[3px] max-sm:bottom-[-60px] right-[35px]"
        width={74}
        height={74}
        priority
      />
    </div>
  );
};
export default Benefit;
