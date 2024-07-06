import React, { useState } from "react";
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { XMarkIcon } from "@heroicons/react/24/solid";
import SearchCards from "../SearchCards/SearchCards";
import CardContent from "../CardContent/CardContent";

function DrawerDefault({ results }) {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const openDrawer = (card) => {
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
        className="fixed top-0 right-0 bottom-0 z-50 bg-white shadow-lg rounded-l-2xl w-full max-w-xs sm:max-w-xl"
      >
        {selectedCard && (
          <div className="p-4 h-full flex flex-col">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="mr-2">
                  {selectedCard.icon}
                </div>
                <div className="text-xl font-bold">
                  {selectedCard.header}
                </div>
              </div>
              <div className="ml-auto">
                <button onClick={closeDrawer} className="text-gray-500 hover:text-gray-700">
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>
            </div>
            <hr className='text-skin-200 my-2'/>
            <div className="flex-grow overflow-y-auto">
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
