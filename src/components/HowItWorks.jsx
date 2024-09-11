import Section from "./Section";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import Heading from "./Heading"; // Make sure to import the Heading component

const HowItWorks = () => {
  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem] bg-[#000000] mb-16" // Added margin-bottom
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="HowItWorks"
    >
      <div className="container mx-auto text-center">
        <Heading title="How Detectly Works?" /> {/* Using Heading component */}
        <div className="flex flex-col lg:flex-row gap-8"> {/* Adjusted gap */}
          {/* Steps for Camera */}
          <div className="flex-1 p-6 rounded-lg bg-n-8">
            <h3 className="text-xl font-semibold mb-4">Try Object Detection with Camera</h3>
            <ol className="list-disc pl-5 space-y-4 text-lg">
              <li>Click the &quot;Try Now&quot; button</li>
              <li>Allow all the permissions for the camera</li>
              <li>That&rsquo;s it!</li>
            </ol>
          </div>

          {/* Steps for Image Upload */}
          <div className="flex-1 p-6 rounded-lg bg-n-8">
            <h3 className="text-xl font-semibold mb-4">Detect Objects from an Image</h3>
            <ol className="list-disc pl-5 space-y-4 text-lg">
              <li>Click the &quot;Try Now&quot; button</li>
              <li>Upload an image from your device</li>
              <li>You will get a list of items present in the image</li>
            </ol>
          </div>
        </div>
      </div>
      {/* Optional Background Elements */}
      <BackgroundCircles />
      <BottomLine />
    </Section>
  );
};

export default HowItWorks;
