import { Dialog, Transition } from '@headlessui/react';
import React, { useState } from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
};

const AllowLocationDialog: React.FC<Props> = ({ open, onClose }) => {
  return (
    <Transition.Root show={open} as={React.Fragment}>
      <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={onClose}>
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
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
              <Dialog.Title as="h3" className="text-lg font-medium mb-4">
                Allow Location Access
              </Dialog.Title>
              <Dialog.Description className="text-sm mb-4">
                We need access to your location to provide personalized content based on your location. Do you want to allow location access?
              </Dialog.Description>
              {/* <div className="flex justify-end">
                <button className="text-blue-600 hover:text-blue-700 mr-4" onClick={() => onClose(false)}>
                  No
                </button>
                <button className="text-blue-600 hover:text-blue-700" onClick={() => onClose(true)}>
                  Yes
                </button>
              </div> */}
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AllowLocationDialog;
