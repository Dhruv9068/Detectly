import { curve, objGif } from "../assets"; // Import obj.gif here
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";

import Notification from "./Notification";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] bg-[#000000]" // Background color
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            Discover the Future of Object Detection with&nbsp;Detectly&nbsp;{` `}
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
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            Unleash the power of advanced object detection with Detectly. Easily identify and analyze objects in real-time through your camera or uploaded images.
          </p>
          <Button href="/about" white>
            Learn More
          </Button>
        </div>

        {/* Updated Container with Padding for Border Effect */}
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-4 md:p-6 lg:p-8 rounded-2xl bg-conic-gradient">
            <div className="relative bg-n-8 rounded-[1rem] p-[1rem] md:p-[2rem]">
              {/* Removed aspect ratio-based height and used natural scaling */}
              <div className="relative w-full h-auto overflow-hidden rounded-b-[0.9rem]">
                {/* Ensure the GIF fills the container while maintaining aspect ratio */}
                <img
                  src={objGif}
                  className="w-full h-full object-cover"  // Makes sure the GIF fills the container without stretching
                  alt="Object Detection"
                />

                {/* Parallax Notification */}
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
                    title="Real-Time Detection"
                    message="Experience real-time object detection capabilities."
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>

          <BackgroundCircles />
        </div>

        <div className="z-10 mt-20 lg:block" /> {/* Fixed incomplete class name */}
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
