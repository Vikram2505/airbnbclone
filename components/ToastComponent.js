import React, {Fragment} from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { Dialog, Transition } from "@headlessui/react";


const ToastComponent = function ({error, openSignupModal, setOpenSignupModal, cancelButtonRef } ) {
    console.log(error,'toast component');
  if(error){
    toast.error(error);
  }
  return (
    <div>
      <ToastContainer
        position="top-right"
        // autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

{/* <Transition.Root show={openSignupModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpenSignupModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <h1 className="font-bold text-2xl text-center mb-5">
                      Sign up
                    </h1>
                    <div className="grid sm:items-start">
                      <div className="col-span-6 sm:col-span-3 mb-4">
                        <label
                          htmlFor="homeName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="home_name"
                          id="homeName"
                          placeholder="Home Name"
                          autoComplete="given-name"
                          className="mt-1 py-2 px-3 block w-full rounded-md border-2 border-gray-100 focus:outline-none  shadow-sm focus:border-gray-300 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 mb-4">
                        <label
                          htmlFor="ownerName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          name="owner_name"
                          id="ownerName"
                          placeholder="Home Name"
                          autoComplete="given-name"
                          className="mt-1 py-2 px-3 block w-full rounded-md border-2 border-gray-100 focus:outline-none  shadow-sm focus:border-gray-300 sm:text-sm"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3 mb-4">
                        <label
                          htmlFor="ownerName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Password
                        </label>
                        <input
                          type="text"
                          name="owner_name"
                          id="ownerName"
                          placeholder="Home Name"
                          autoComplete="given-name"
                          className="mt-1 py-2 px-3 block w-full rounded-md border-2 border-gray-100 focus:outline-none  shadow-sm focus:border-gray-300 sm:text-sm"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 grid mb-3">
                    <button
                      type="button"
                      className="mt-3 inline-flex w-100 justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setOpenSignupModal(false)}
                      ref={cancelButtonRef}
                    >
                      Register
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root> */}
    </div>
  );
};

export default ToastComponent;
