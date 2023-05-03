import React, { useEffect, useState } from "react";
import ChefCard from "./ChefCard";

const AllChef = () => {
  const [allChef, setAllChef] = useState([]);
  useEffect(() => {
    fetch("https://savory-selection-server-shanin18.vercel.app/chef")
      .then((res) => res.json())
      .then((data) => setAllChef(data));
  }, []);

  return (
    <div className="my-20" id="all_Chef">
      <div className="flex justify-center">
        <h2 className="text-3xl md:text-4xl font-bold font-montserrat mb-10 border-0 border-b-4 border-b-yellow-300 rounded-xl shadow-xl px-5 md:px-10 text-center mx-2 border-t py-4 w-fit">
          Find Your Favorite Chef
        </h2>
      </div>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 px-2">
        {allChef?.map((chef) => (
          <ChefCard key={chef.id} chef={chef}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default AllChef;