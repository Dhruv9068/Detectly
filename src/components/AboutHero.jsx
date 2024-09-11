import { aboutheroimg, curve } from "../assets"; // Import aboutheroimg here
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero"; // Added Gradient import
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Notification from "./Notification";

const AboutHeroSection = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] bg-[#000000]" // Background color
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="about-hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Revolutionizing Object Recognition with &nbsp;Detectly&nbsp;{` `}
            <span className="inline-block relative">
              AI
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
        </div>

        {/* Updated Container with Padding for Border Effect */}
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-4 md:p-6 lg:p-8 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem] p-[1rem] md:p-[2rem]">
              {/* Ensure the image fits well in the container */}
              <div className="relative w-full h-auto overflow-hidden rounded-b-[0.9rem]">
                {/* Ensure the image fills the container without stretching */}
                <img
                  src={aboutheroimg}
                  className="w-full h-full object-cover"
                  alt="Object Detection"
                />

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Real-Time Detection"
                    message="Experience real-time object detection capabilities."
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient /> {/* Added Gradient here */}
          </div>

          <BackgroundCircles />
        </div>

        <div className="z-10 mt-20 lg:block" /> {/* Prevent overflow and ensure proper layering */}
      </div>

      <BottomLine />
    </Section>
  );
};

export default AboutHeroSection;
