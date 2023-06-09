import React from "react";
import { Link } from "react-router-dom";

// react lazyload
import LazyLoad from "react-lazy-load";

const ChefCard = ({ chef }) => {
  console.log(chef)
  const { id, name, picture, years_of_experience, likes, number_of_recipes } = chef;
  return (
    <div className="rounded-lg border shadow-xl overflow-hidden flex flex-col justify-between">
      <div>
        <LazyLoad className="min-h-full" threshold={0.9} onContentVisible={console.log("picture loaded with lazy load")}>
          <img className="w-full" src={picture} alt="image" />
        </LazyLoad>
      </div>
      <div className="p-4">
        <h3 className="font-montserrat font-bold text-2xl">{name}</h3>
        <div>
          <p className="font-montserrat font-medium mt-3">
            Experience: {years_of_experience} years
          </p>

          <p className="font-montserrat font-medium mt-3">
            Number of recipes: {number_of_recipes}
          </p>

          <p className="font-montserrat font-medium mt-3">Likes: {likes}</p>
        </div>
        <div className="mt-6">
          <Link to={`/chef/${id}`}>
            <button className="font-semibold font-montserrat btn btn-warning">
              View Recipes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
