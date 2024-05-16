import { Dialog, Transition } from "@headlessui/react";
import React, { useState } from "react";
import { AllowLocationDialogProps } from "@/types/global";

const AllowLocationDialog: React.FC<AllowLocationDialogProps> = ({
  open,
  onClose,
}) => {
  return (
    <Transition.Root show={open} as={React.Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={onClose}
      >
        <div className="flex items-center justify-center min-h-screen">
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30" />
          </Transition.Child>

          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="bg-black rounded-lg p-8 max-w-md w-full">
              <Dialog.Title
                as="h3"
                className="flex text-lg font-medium mb-4 gap-2 "
              >
                Using this app you agree to
                <div className="flex">
                  <div className="text-[#C900A5]">T&</div>
                  <div className="text-[#0BB257]">(H)</div>
                  <div className="text-[#C900A5]">Cs</div>
                </div>
              </Dialog.Title>
              <Dialog.Description className="text-sm mb-4">
                We have collected information using free info from the internet.
                We are not liable for your misjudgement or our inaccurate
                information. We have done our best to provide you with accurate
                and up to date information, however it may not be accurate or up
                to date. Smoke at your own discretion. Don’t blame us if you get
                busted by the popo; you have more or better information as a
                result of using this app than you would have by not using it.
              </Dialog.Description>
              <button
                className="flex flex-row items-center justify-center text-xl gap-3 bg-[#C900A5] p-4 rounded-full hover:bg-blue-900 hover:scale-110 text-white hover:text-blue-700 mr-4"
                onClick={() => onClose()}
              >
                I agree to T&(H)C
              </button>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AllowLocationDialog;
