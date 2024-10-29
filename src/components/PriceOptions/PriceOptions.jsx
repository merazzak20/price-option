import { useEffect, useState } from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const [priceOptions, setPriceOptions] = useState([]);

  useEffect(() => {
    fetch("price.json")
      .then((res) => res.json())
      .then((data) => setPriceOptions(data));
  }, []);
  console.log(priceOptions);

  return (
    <div>
      <h1>Best Price in This Twon</h1>
      {priceOptions.map((option) => (
        <PriceOption key={option.id} option={option}></PriceOption>
      ))}
    </div>
  );
};

export default PriceOptions;
