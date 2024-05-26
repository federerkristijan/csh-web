import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";
import { AllowLocationDialogProps } from "@/types/global";
import Image from "next/image";
import Agree from "@/assets/Agree.png";
import { THCs } from "./T&(H)Cs";
import AgreeButton from "../ui/AgreeButton";

const AllowLocationDialog: React.FC<AllowLocationDialogProps> = ({
  open,
  onClose,
}) => {
  const handleAgreeClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Geolocation allowed:", position.coords);
          onClose();
        },
        (error) => {
          console.error("Error getting location:", error);
          // Optionally handle error here
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={() => {}} // No-op function to satisfy the type requirement
      >
        <div className="flex items-center justify-center min-h-screen text-center sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block align-bottom md:w-2/6 bg-[#383838] rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-fit sm:p-6">
              <div>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-[24px] text-center leading-6 w-full font-semibold text-gray-100"
                  >
                    <div className="header flex flex-col items-center justify-center">
                      <span>Using this app</span>
                      <span>you agree to</span>
                      <THCs />
                    </div>
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-300">
                      We have collected information using free info from the
                      internet. We are not liable for your misjudgement or our
                      inaccurate information. We have done our best to provide
                      you with accurate and up to date information, however it
                      may not be accurate or up to date. Smoke at your own
                      discretion. Don’t blame us if you get busted by the popo;
                      you have more or better information as a result of using
                      this app than you would have by not using it.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-5 sm:mt-6">
                <AgreeButton onClick={handleAgreeClick} />
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AllowLocationDialog;
