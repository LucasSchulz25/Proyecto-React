import React from "react";
import Button from "../layouts/Button";
const home = () => {
  return (
    <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/hero.jpg')] bg-cover bg-no-repeat">
      <div className="w-full lg:w-2/3 space-y-5">
        <h1 className="text-backgroundColor font-semibold text-6xl">
          TITULO
        </h1>
        <p className="text-backgroundColor text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam ex
          impedit hic, excepturi eaque dolorum atque ab, culpa odio autem
          molestiae est quasi recusandae, dignissimos porro consequuntur
          deleniti. Laboriosam, modi?
        </p>
        <div className="lg:pl-44">
          <Button title='Create Recipe'/>
        </div>
      </div>
    </div>
  );
};

export default home;
