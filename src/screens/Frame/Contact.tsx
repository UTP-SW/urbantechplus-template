import { ArrowRightIcon } from "lucide-react";
import { Button } from "../../components/ui/button2";
import { Input } from "../../components/ui/input";
import { Footer } from "../../components/ui/Footer";

export const Contact = (): JSX.Element => {
  const formFields = [
    { id: "name", label: "NAME", placeholder: "Enter Full Name", name: "name" },
    { id: "email", label: "EMAIL", placeholder: "hello@emailme.com", name: "email" },
    { id: "phone", label: "PHONE NUMBER", placeholder: "0413 456 789", name: "phone" },
  ];

  const contactInfo = [
    { label: "CALL", values: ["+61 411 261 161"] },
    { label: "EMAIL", values: ["contact@urbantechplus.com"] },
    { label: "FOLLOW", values: ["LinkedIn", "Twitter"] },
  ];

  const footerItems = [
    { text: "WEBSITE COMING SOON", className: "opacity-75" },
    { text: "©2025 UrbanTech+", className: "opacity-75" },
      ];

  return (
    <main className="bg-[#d9d9d9] flex flex-row justify-center w-full min-h-screen">
      <div className="bg-[#d9d9d9] w-full max-w-[1440px] min-h-[879px] relative">
        <div className="relative pt-[66px] pb-0 min-h-[813px]">
          <section className="w-full max-w-[1440px]">
            <div className="flex flex-col lg:flex-row w-full max-w-[1062px] items-start gap-8 lg:gap-[140px] px-4 lg:px-0 py-[52px] mx-auto">
              {/* Heading */}
              <h1 className="relative w-full lg:w-[149px] mt-[-1.00px] font-h-2 font-[number:var(--h-2-font-weight)] text-black text-[length:var(--h-2-font-size)] tracking-[var(--h-2-letter-spacing)] leading-[var(--h-2-line-height)] [font-style:var(--h-2-font-style)]">
                Get in touch
              </h1>

              {/* Contact Form */}
              <form
               id="contact-form"
                action="https://formsubmit.co/shayne@urbantechplus.com"
                method="POST"
                className="flex flex-col w-full lg:w-[406px] items-start gap-8 relative"
              >
                {/* Hidden field to disable captcha */}
                <input type="hidden" name="_captcha" value="false" />
        

                {formFields.map((field) => (
                  <div
                    key={field.id}
                    className="flex flex-col h-[72px] items-start gap-2.5 relative self-stretch w-full"
                  >
                    <label
                      htmlFor={field.id}
                      className="relative w-fit mt-[-1.00px] font-button-small font-[number:var(--button-small-font-weight)] text-tech-sky-blue text-[length:var(--button-small-font-size)] tracking-[var(--button-small-letter-spacing)] leading-[var(--button-small-line-height)] whitespace-nowrap [font-style:var(--button-small-font-style)]"
                    >
                      {field.label}
                    </label>
                    <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-black backdrop-blur-[22.7px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(22.7px)_brightness(100%)]">
                      <div className="flex flex-col h-[50px] items-start justify-center relative self-stretch w-full">
                        <Input
                          id={field.id}
                          name={field.name}
                          required
                          className="border-none shadow-none px-[5px] py-0 h-[50px] font-paragraph-base font-[number:var(--paragraph-base-font-weight)] text-black text-[length:var(--paragraph-base-font-size)] tracking-[var(--paragraph-base-letter-spacing)] leading-[var(--paragraph-base-line-height)] [font-style:var(--paragraph-base-font-style)]"
                          placeholder={field.placeholder}
                        />
                      </div>
                    </div>
                  </div>
                ))}

                {/* Submit Button */}
                <Button type="submit" className="flex w-[139px] items-center justify-center gap-4 px-[26px] py-4 relative flex-[0_0_auto] bg-neutralblack rounded-[32px]">
                  <span className="relative w-fit mt-[-0.50px] font-button-large font-[number:var(--button-large-font-weight)] text-neutralwhite text-[length:var(--button-large-font-size)] tracking-[var(--button-large-letter-spacing)] leading-[var(--button-large-line-height)] whitespace-nowrap [font-style:var(--button-large-font-style)]">
                    SUBMIT
                  </span>
                  <ArrowRightIcon className="w-[13.4px] h-[13.4px] mt-[-0.20px] mb-[-0.20px] mr-[-0.20px]" />
                </Button>
              </form>

              {/* Contact Information */}
              <div className="flex flex-col w-full lg:w-[182px] items-start gap-8 relative">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start gap-[8.46px] relative self-stretch w-full flex-[0_0_auto]"
                  >
                    <h3 className="relative w-fit mt-[-1.06px] font-button-small font-[number:var(--button-small-font-weight)] text-tech-sky-blue text-[length:var(--button-small-font-size)] tracking-[var(--button-small-letter-spacing)] leading-[var(--button-small-line-height)] whitespace-nowrap [font-style:var(--button-small-font-style)]">
                      {item.label}
                    </h3>
                    {item.values.map((value, valueIndex) => (
                      <p
                        key={valueIndex}
                        className="relative w-fit font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-black text-[length:var(--paragraph-small-font-size)] tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] whitespace-nowrap [font-style:var(--paragraph-small-font-style)]"
                      >
                        {value}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Footer (Imported Component) */}
            <Footer footerItems={footerItems} />

            {/* 3D Cube Graphic */}
            <img
              className="hidden lg:block absolute w-[108px] h-[140px] top-[421px] right-[112px]"
              alt="3D cube graphic"
              src="/group-858.png"
            />
          </section>

          {/* Logo */}
          <img
            className="absolute w-[55px] h-[63px] top-[51px] left-4 lg:left-10"
            alt="UrbanTech+ logo"
            src="/vector.svg"
          />
        </div>
      </div>
    </main>
  );
};
