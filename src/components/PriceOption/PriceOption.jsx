import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;
  console.log(option);
  return (
    <div className="bg-blue-500 p-4 py-7 rounded-md text-center space-y-4 flex flex-col">
      <h3>{name}</h3>
      <h2>
        <span className="text-5xl font-bold">${price}</span>
        <span>/month</span>
      </h2>
      <div className="flex-grow">
        {features.map((feature, idx) => (
          <p className="flex justify-start items-center gap-5 my-1" key={idx}>
            <FaCheckCircle />
            {feature}
          </p>
        ))}
      </div>
      <button className="bg-red-500 w-full p-3 hover:bg-red-800 rounded-md">
        Book Now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
  name: PropTypes.string,
  price: PropTypes.number,
  features: PropTypes.array,
};

export default PriceOption;
