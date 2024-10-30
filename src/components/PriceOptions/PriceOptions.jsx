import { useEffect, useState } from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const [priceOptions, setPriceOptions] = useState([]);

  useEffect(() => {
    fetch("price.json")
      .then((res) => res.json())
      .then((data) => setPriceOptions(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto my-6">
      <h1>Best Price in This Twon</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
