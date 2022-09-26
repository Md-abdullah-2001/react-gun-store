import React, { useEffect, useState } from "react";
import SingleGun from "../singleGun/SingleGun.js";

const Allgun = ({ increaseCart }) => {
  const [guns, setGuns] = useState([]);
  console.log(guns);
  useEffect(() => {
    fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);
  return (
    <>
      <div className="container mx-auto">
        <h1 className="text-5xl	 mt-6">Super bullet Gun store</h1>
        <p className="text-base	mt-2.5	text-center mr-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eveniet
          cumque alias sint necessitatibus? Accusamus fugiat soluta, ipsam
          similique eius aspernatur dolorum quod velit numquam a aliquam
          consectetur. Libero, aspernatur eaque, at nobis ducimus a
          voluptatibus, cumque optio maxime dolor inventore perferendis aperiam
          voluptates cupiditate exercitationem voluptate? Itaque, ad facere!
        </p>
      </div>
      <div className="w-{90%} mx-auto container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-75 mt-2.5 	">
        {guns.map((gun) => (
          <SingleGun gun={gun} increaseCart={increaseCart}></SingleGun>
        ))}
      </div>
    </>
  );
};

export default Allgun;
