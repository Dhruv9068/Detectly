// src/components/Features.jsx
const Features = ({ features }) => {
    return (
      <section className="bg-gray-800 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Features</h2>
          <ul className="list-disc pl-5 space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="text-lg">{feature}</li>
            ))}
          </ul>
        </div>
      </section>
    );
  };
  
  export default Features;
  