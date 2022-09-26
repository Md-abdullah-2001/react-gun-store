import React from "react";

const singleGun = (props) => {
  const { gun, increaseCart } = props;
  const { action, img, name, price } = gun;
  return (
    <div>
      <div className="card w-full h-full bg-base-100 shadow-xl">
        <figure>
          <img className="h-64" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-center">
            <div className="badge badge-outline">{price}</div>
            <div className="badge badge-outline">{action}</div>
            <div>
              <button
                onClick={() => increaseCart()}
                className=" btn btn-sm btn-danger mr-5"
              >
                Add To Cart
              </button>
              <button className="btn btn-sm btn-success">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default singleGun;
