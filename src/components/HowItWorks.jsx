// src/components/HowItWorks.jsx
const HowItWorks = ({ steps }) => {
    return (
      <section className="bg-gray-900 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">How Iat Works</h2>
          <ol className="list-decimal pl-5 space-y-4">
            {steps.map((step, index) => (
              <li key={index} className="text-lg">{step}</li>
            ))}
          </ol>
        </div>
      </section>
    );
  };
  
  export default HowItWorks;
  