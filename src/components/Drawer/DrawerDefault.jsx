import React from "react";
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import SearchCards from "../SearchCards/SearchCards.jsx";
import CardContent from "../CardContent/CardContent.jsx";

function DrawerDefault({ results }) {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openDrawer = (card) => {
    console.log("Opening drawer with card:", card);
    setSelectedCard(card);
    setOpen(true);
  };

  const closeDrawer = () => {
    setOpen(false);
    setSelectedCard(null);
  };

  return (
    <>
      <Drawer
        direction="right"
        open={open}
        onClose={closeDrawer}
        size={512}
        className="fixed right-0 bg-white shadow-lg rounded-l-2xl"
      >
        {selectedCard && (
          <div className="p-4 h-full flex flex-col">
            <div className="flex">
              <div className="flex justify-start size-8 mt-1 mr-2">
                {selectedCard.icon}
              </div>
              <div className="flex text-4xl justify-normal">
                {selectedCard.header}
              </div>
              <div className="ml-auto flex text-lg cursor-pointer" onClick={closeDrawer}>
                <button onClick={closeDrawer}>
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="flex-grow overflow-y-auto">
              <hr className='text-skin-200 my-[2rem]'/>
              <CardContent selectedCard={selectedCard} />
            </div>
          </div>
        )}
      </Drawer>

      <SearchCards
        results={results}
        openDrawer={openDrawer}
      />
    </>
  );
}

export default DrawerDefault;
