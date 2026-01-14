import React from "react";
import useFetch from "./useFetch";

function Card() {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  return (
    <>
      <div className="flex justify-center text-center p-4">
        {error && (
          <div className="text-xl font-semibold text-red-600 animate-pulse">
            Error fetching data ...
          </div>
        )}
      </div>

      <div className="flex justify-center text-center p-4">
        {loading && (
          <div className="text-xl font-semibold text-gray-700 animate-pulse">
            Loading...
          </div>
        )}
      </div>

      {!loading && !error && (
        <h1 className="text-center text-5xl p-5">PHOTO</h1>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {data.map((item) => (
          <div
            key={item.id}
            className="max-w-xs bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              className="w-full h-48 object-cover"
              src={item.images?.[0] || ""}
              alt={item.title}
            />
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold text-gray-800">
                {item.title}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
