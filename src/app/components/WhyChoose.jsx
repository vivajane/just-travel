import { FaLaugh, FaShieldAlt, FaRocket, FaClock } from "react-icons/fa";

const WhyChooseUs = () => {
  const points = [
    {
      icon: <FaLaugh />,
      title: "Endless Fun",
      color: "bg-red-500",
      desc: "From kids to adults, everyone finds joy at FunVerge!",
    },
    {
      icon: <FaShieldAlt />,
      title: "Safe Environment",
      color: "bg-yellow-400",
      desc: "Your safety is our top priority. Clean, secure, and supervised.",
    },
    {
      icon: <FaRocket />,
      title: "Modern Facilities",
      color: "bg-green-500",
      desc: "Cutting-edge games, updated tech, and engaging setups.",
    },
    {
      icon: <FaClock />,
      title: "Flexible Hours",
      color: "bg-blue-500",
      desc: "Open every day till late, to fit your perfect fun schedule!",
    },
  ];

  return (
    <div className="md:py-12 py-10">
      <h2 className="md:text-4xl text-2xl font-bold text-center mb-12 text-gray-800">
        Why Choose <span className="text-red-600">FunVerge</span>?
      </h2>
      <div className="space-y-10">
        {points.map((item, index) => (
          <div
            key={index}
            className={`transform -skew-y-2 ${item.color} px-8 py-10 text-white relative`}
          >
            <div className="transform skew-y-2 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6">
              <div className="text-5xl">{item.icon}</div>
              <div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-2 text-lg">{item.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
