import React from 'react';

const Product = ({
  name,
  image,
  description,
  price,
  category,
  brand,
  ratings,
  creationDate,
}) => {
  return (
    <div className="card w-max bg-base-100 shadow-xl mx-auto">
      <figure>
        <img src={image} alt={name} className="object-cover h-48 w-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl font-bold">{name}</h2>
        <p className="text-gray-700">{description}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl font-semibold">${price}</span>
          <span className="badge badge-primary">{category}</span>
        </div>
        <div className="flex items-center mt-2">
          <span className="badge badge-outline mr-2">{brand}</span>
          <span className="text-yellow-500">
            {'★'.repeat(Math.round(ratings < 5 ? ratings : 5))}
          </span>
          <span className="ml-2 text-gray-600">({ratings})</span>
        </div>
        <div className="mt-4 text-gray-500 text-sm">
          <span>Created on: {new Date(creationDate).toLocaleDateString()}</span>
          <span className="ml-2">{new Date(creationDate).toLocaleTimeString()}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
