import React from "react";

// import houseData
import { housesData } from "../data";
//  useParams
import { useParams } from "react-router-dom";
// import icons
import { BiBed, BiBath, BiArea } from "react-icons/bi";
// import link
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useLocalStorage from "use-local-storage";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const PropertyDetails = () => {
  const { id } = useParams();

  const property = housesData.find((house) => {
    return house.id === parseInt(id);
  });

  const [favourites, setFavourites] = useLocalStorage("favourites", "[]");
  const [isFavourite, setFavourite] = useState(false);
  useEffect(
    (_) => {
      const favs = JSON.parse(favourites);
      if (favs.includes(id)) {
        setFavourite(true);
      } else {
        setFavourite(false);
      }
    },
    [favourites, id]
  );

  const toggleFavourite = (_) => {
    const favs = JSON.parse(favourites);
    console.log(favs);
    if (isFavourite) {
      const idx = favs.indexOf(id);
      favs.splice(idx, 1);
      setFavourite(false);
    } else {
      favs.push(id);
      setFavourite(true);
    }

    setFavourites(JSON.stringify(favs));
  };

  return (
    <div className="container mx-auto min-h-[800px] mb-14">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-2xl font-semibold">{property.name}</h2>
          <h3 className="text-lg mb-4">{property.address}</h3>
        </div>
        <div className="mb-4 lg:mb-0 flex gap-x-2 text-sm">
          <div className="bg-lime-500 rounded-full text-black px-3 inline-block">
            {property.type}
          </div>
          <div className="bg-sky-500 rounded-full text-white px-3 inline-block">
            {property.country}
          </div>
          <span size="large" color="red" onClick={toggleFavourite}>
            {isFavourite ? (
              <FavoriteIcon className="icon" />
            ) : (
              <FavoriteBorderIcon />
            )}
          </span>
        </div>
        <div className="text-3xl font-semibold text-sky-500">
          $ {property.price}
        </div>
      </div>
      <div className="flex flex-col items-start gap-8 lg:flex-row">
        <div className="max-w-[768px]">
          <div className="mb-8">
            <img src={property.imageLg} alt="" />
          </div>
          <div className="flex gap-x-6 text-sky-500 mb-6">
            <div className="flex gap-x-2 items-center">
              <BiBed className="text-2xl" />
              <div className="text-lg font-medium">{property.bedrooms}</div>
            </div>
            <div className="flex gap-x-2 items-center">
              <BiBath className="text-2xl" />
              <div className="text-lg font-medium">{property.bathrooms}</div>
            </div>
            <div className="flex gap-x-2 items-center">
              <BiArea className="text-2xl" />
              <div className="text-lg font-medium">{property.surface}</div>
            </div>
          </div>
          <p>{property.description}</p>
        </div>
        <div className="flex-1 w-full mb-8 bg-white border border-gray-300 rounded-lg px-6 py-8">
          <div className="flex items-center gap-x-4 mb-8">
            <div className="w-20 h-20 p-1 border border-gray-300 rounded-full">
              <img src={property.agent.image} alt="prop" />
            </div>
            <div>
              <div className="font-bold text-lg">{property.agent.name}</div>
              <Link to="" className="text-sky-400 text-sm">
                View listings
              </Link>
            </div>
          </div>
          <form className="flex flex-col gap-y-4">
            <input
              className="border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none"
              type="text"
              placeholder="Name*"
            />
            <input
              className="border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none"
              type="text"
              placeholder="Email*"
            />
            <input
              className="border border-gray-300 focus:border-violet-700 rounded w-full px-4 h-14 text-sm outline-none"
              type="text"
              placeholder="Phone*"
            />
            <textarea
              className="border border-gray-300 focus:border-violet-700 rounded w-full p-4 h-36 text-sm text-gray-400 outline-none resize-none"
              type="text"
              placeholder="Message*"
              defaultValue="Hello, I am interested in [Modern apartment]"
            />
            <div className="flex gap-x-2">
              <button
                className="bg-sky-500 hover:bg-sky-600 text-white rounded p-4 text-sm w-full transition"
                type="submit"
              >
                Send message
              </button>
              <button className="border border-sky-500 text-sky-700 hover:border-purple-600 hover:text-purple-600 rounded p-4 text-sm w-full transition">
                Call
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
