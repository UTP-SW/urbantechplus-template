// src/components/Footer.tsx

interface FooterProps {
    footerItems: { text: string; className: string }[];
  }
  
  export const Footer = ({ footerItems }: FooterProps) => {
    return (
      <footer className="w-full max-w-[1440px] mt-10 px-4">
        <div className="relative w-full h-auto overflow-hidden">
          {/* Background Images in Grid */}
          <div className="grid grid-cols-6 w-full h-[150px] opacity-50">
            <div className="col-span-6 md:col-span-3 relative h-full">
              <img
                src="/group-317.png"
                alt="Background graphic left"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-6 md:col-span-3 relative h-full">
              <img
                src="/group-316.png"
                alt="Background graphic right"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
  
          {/* Gradient Overlay */}
          <div className="absolute top-[50px] left-0 w-full h-[100px]" />
  
         {/* Footer Content */}
<div className="relative z-10 h-60 md:h-auto pt-[110px]">
  <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 w-full lg:w-[1359px] mx-auto">
    {footerItems.map((item, index) => (
      <div
        key={index}
        className="inline-flex items-center gap-4 flex-[0_0_auto]"
      >
        <div
          className={`w-fit font-button-small font-[number:var(--button-small-font-weight)] text-tech-sky-blue text-[length:var(--button-small-font-size)] text-center tracking-[var(--button-small-letter-spacing)] leading-[var(--button-small-line-height)] whitespace-nowrap [font-style:var(--button-small-font-style)] ${item.className}`}
        >
          {item.text}
        </div>
      </div>
    ))}
  </div>
</div>

        </div>
      </footer>
    );
  };
  