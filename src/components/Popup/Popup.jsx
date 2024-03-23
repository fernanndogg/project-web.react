import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Button from "../Shared/Button";

const Popup = ({ orderPopup, handleOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div>
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="w-[300px] fixed top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/3 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-xl">
              {/*Header secton*/}
              <div className="flex items-center justify-between">
                <h1>Order now</h1>
                <div>
                  <IoMdCloseCircleOutline
                    onClick={handleOrderPopup}
                    className="text-2xl cursor-pointer"
                  />
                </div>
              </div>

              {/*Header secton*/}
              <div>
                <input type="text" placeholder="Name" className="form-input" />
                <input
                  type="email"
                  placeholder="Email"
                  className="form-input"
                />
                <input
                  type="text"
                  placeholder="Adress"
                  className="form-input"
                />
                <div className="flex justify-center">
                  <Button
                    text="Order Now"
                    bgColor="bg-primary"
                    textColor="text-white"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
