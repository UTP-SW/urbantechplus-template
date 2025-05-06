import { DownloadIcon } from "lucide-react";
import { Button } from "../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <div className="bg-[#f2f2f2] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-[#f2f2f2] w-full max-w-[1440px] relative px-4 py-8 md:py-16">
        {/* Header - Made responsive */}
        <header className="flex w-full items-center justify-between px-2 md:px-[30px] py-2 md:py-[15px] bg-transparent">
          <div className="relative w-[123px] h-[71.89px]">
            <div className="absolute w-[62px] h-[72px] top-0 left-0">
              <div className="relative h-[72px]">
                <img
                  className="absolute w-[25px] h-[29px] top-9 left-[37px]"
                  alt="Logo part"
                  src="/group.png"
                />
                <img
                  className="absolute w-[25px] h-[29px] top-[22px] left-[37px]"
                  alt="Logo part"
                  src="/group-1.png"
                />
                <img
                  className="absolute w-[25px] h-[29px] top-3.5 left-0"
                  alt="Logo part"
                  src="/group-2.png"
                />
                <img
                  className="absolute w-[25px] h-[29px] top-[7px] left-[37px]"
                  alt="Logo part"
                  src="/group-3.png"
                />
                <img
                  className="absolute w-[25px] h-[29px] top-9 left-3"
                  alt="Logo part"
                  src="/group-4.png"
                />
                <img
                  className="absolute w-[25px] h-[29px] top-0 left-0"
                  alt="Logo part"
                  src="/group-5.png"
                />
                <img
                  className="absolute w-[25px] h-[29px] top-[43px] left-[25px]"
                  alt="Logo part"
                  src="/group-6.png"
                />
              </div>
            </div>
            <img
              className="absolute w-[51px] h-[29px] top-[29px] left-[72px]"
              alt="Isometric"
              src="/isometric.svg"
            />
          </div>

          <div className="font-button-large text-tech-sky-blue text-right text-sm sm:text-base leading-tight sm:leading-normal">
            <span className="block sm:inline">WEBSITE</span>{' '}
            <span className="block sm:inline">COMING SOON</span>
          </div>
        </header>


        {/* Main content - Made responsive */}
        <div className="flex flex-col lg:flex-row items-center justify-between mt-8 md:mt-16 px-4 md:px-8">
          <div className="w-full lg:w-[722px] relative mb-8 lg:mb-0">
            <h1 className="text-4xl md:text-6xl lg:text-[84px] font-['Instrument_Sans',Helvetica] font-normal text-tech-sky-blue leading-tight md:leading-[90.7px] text-center lg:text-left mb-8 lg:mb-0">
              Smarter Infrastructure Delivery
            </h1>

            <img
              className="w-[180px] md:w-[231px] h-auto mx-auto lg:mx-0"
              alt="Group"
              src="/group-857.png"
            />
          </div>

          <div className="w-full lg:w-[406px] flex flex-col items-start gap-6 md:gap-[41px] px-4 md:px-0">
            <p className="text-base md:text-lg text-black leading-relaxed text-center lg:text-left">
              Shayne Whitehouse, founder of UrbanTech+, is driving the future of
              infrastructure through full-lifecycle digital twins. By connecting
              BIM, GIS, IoT, and finance, he helps asset owners and councils
              deliver smarter, more transparent, and sustainable outcomes.
            </p>

            <h2 className="text-xl md:text-2xl text-black leading-tight text-center lg:text-left w-full">
              Let’s build the future of digital infrastructure together.
            </h2>

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[26px] w-full sm:w-auto">
              <a # download className="w-full">
                <Button
                  className="flex items-center justify-center gap-3 px-[26px] py-4 bg-black rounded-[32px] h-auto w-full sm:w-[139px]"
                  variant="default"
                >

                  <span className="font-button-large text-neutralwhite whitespace-nowrap">
                    DOWNLOAD
                  </span>

                  <DownloadIcon className="w-3.5 h-3.5" />
                </Button>
              </a>
              <a href="#contact-form" className="w-full sm:w-[120px]">
                <Button
                  className="flex items-center justify-center px-[26px] py-4 bg-black rounded-[32px] h-auto w-full sm:w-[120px]"
                  variant="default"
                >

                  <span className="font-button-large text-neutralwhite whitespace-nowrap">
                    CONTACT
                  </span>

                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Decorative elements - Made responsive */}
        <img
  className="hidden lg:block absolute w-[90px] md:w-[118px] h-auto top-[180px] right-8 md:right-16 mb-[70px]"
  alt="Group"
  src="/group-856.png"
/>


        <img
          className="hidden lg:block absolute w-[45px] md:w-[60px] h-auto top-[366px] left-[50%] transform -translate-x-1/2"
          alt="Vector"
          src="/vector.svg"
        />
      </div>
    </div>
  );
};