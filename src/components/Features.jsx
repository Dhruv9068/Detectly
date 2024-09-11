import Section from "./Section";
import { smallSphere, stars } from "../assets"; // Use these or replace with relevant images
import Heading from "./Heading";
import { LeftLine, RightLine } from "./design/Pricing";

const Features = () => {
  return (
    <Section className="overflow-hidden" id="features">
      <div className="container relative z-2">
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        {/* Updated Heading for Features */}
        <Heading
          tag="Key Features of Detectly"
          title="Discover the Power of Object Detection"
        />

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-8 mt-12 md:grid-cols-3 lg:gap-16">
          {/* Feature 1 */}
          <div className="relative bg-n-8 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Real-Time Object Detection</h3>
            <p className="text-n-2 mb-6">
              Detectly offers real-time object detection using your camera. Seamlessly recognize objects in your environment with minimal delay.
            </p>
            <img
              src={smallSphere} // Replace with a relevant feature image
              className="w-full h-auto rounded-lg"
              alt="Real-Time Detection"
            />
          </div>

          {/* Feature 2 */}
          <div className="relative bg-n-8 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">User-Friendly Interface</h3>
            <p className="text-n-2 mb-6">
  Detectly provides a clean and intuitive interface, making object detection accessible to everyone. Navigate effortlessly through the platform&#39;s features.
</p>

            <img
              src={stars} // Replace with a relevant feature image
              className="w-full h-auto rounded-lg"
              alt="User-Friendly Interface"
            />
          </div>

          {/* Feature 3 */}
          <div className="relative bg-n-8 rounded-lg p-6 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Upload & Analyze</h3>
            <p className="text-n-2 mb-6">
              Users can upload images for object recognition and analysis, allowing for detailed insights from pre-captured photos.
            </p>
            <img
              src={smallSphere} // Replace with a relevant feature image
              className="w-full h-auto rounded-lg"
              alt="Upload & Analyze"
            />
          </div>
        </div>

       
      </div>

      <LeftLine />
      <RightLine />
    </Section>
  );
};

export default Features;
