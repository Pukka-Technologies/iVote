import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";
import { toast } from "react-toastify";
import { usePaystackPayment } from 'react-paystack'
import { useStateValue } from "../../context/StateProvider";
import { castVote } from "../../utils/functions";

const VotePopup = ({ setIsOpen, isOpen, data }) => {
  const { name, imageURL, contestant_code, event_id, _id } = data;
  const [{ events }, dispatch] = useStateValue();
  const [email, setEmail] = useState("");
  const [vote, setVote] = useState("");
  const [cost, setCost] = useState(0);
  const vote_price = events.find((e) => e._id === event_id)?.vote_price || 1;
  const upddateCost = (e) => {
    const val = e.target.value;
    // check if the value is a number
    if (isNaN(val)) {
      toast.error("Please enter a valid number", {
        position: "top-center",
        autoClose: 3000,
        toastId: "vote-error",
      });
      return;
    }

    // check if the value is a decimal number
    if (val % 1 !== 0) {
      toast.error("Please enter a number without decimal", {
        position: "top-center",
        autoClose: 3000,
        toastId: "vote-error",
      });
      return;
    }
    setVote(val);
    setCost(val * vote_price);
  };

  const onPaymentSuccess = async() => {
    toast.success("Payment Succeeded", {
      position: "top-center",
      autoClose: 3000,
      toastId: "vote-success",
    });
    console.log("Payment Succeeded");
    const voteData = {
      contestant_id: _id,
      event_id,
      total_votes: vote,
      cost,
      type: "online"
    }
    await castVote(voteData, (res) => {
      console.log(res);
      toast.success("Vote casted successfully", {
        position: "top-center",
        autoClose: 3000,
        toastId: "vote-success",
      });
    });
  }

  const onPaymentClose = async() => {
    toast.error("Payment Failed", {
      position: "top-center",
      autoClose: 3000,
      toastId: "vote-error",
    });
    console.log("Payment Failed");

  };

  
  const paystackConfig = {
    // reference, get new date to iso string and replace : with - and remove . and remove Z
    reference: new Date()
      .toISOString()
      .replace(/:/g, "-")
      .replace(/\./g, "-")
      .replace("Z", ""),
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
    currency: "GHS",
    channels: ["card", "qr", "mobile_money", "bank"],
    email: email,
    metadata: {
      constestant_name: name,
      contestant_code,
      event_name: events.find((e) => e._id === event_id)?.name || event_id,
    },
    amount: cost * 100,
  };
  
  const initializePay = usePaystackPayment(paystackConfig)


  const verifyEmail = (val) => {
    // check if the email is valid
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (!emailRegex.test(val)) {
      toast.error("Please enter a valid email", {
        position: "top-center",
        autoClose: 3000,
        toastId: "vote-error",
      });
      return false;
    }
    return true;
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => null}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-lg bg-white md:p-6 px-2 py-1 text-left align-middle shadow-xl transition-all">
                  <article className="bg-white rounded-lg overflow-hidden cursor-pointer font-text">
                    <div
                      className="flex w-full flex-row-reverse ob-2 md:pb-5 "
                      onClick={() => setIsOpen(false)}
                    >
                      <button className="items-end bg-green-200 text-green-800 p-2">
                        <AiOutlineClose />
                      </button>
                    </div>
                    <div className="flex flex-col md:flex-row w-full items-center justify-center gap-x-6">
                      <div className="relative w-full md:w-[40%]  flex items-center justify-center rounded-full">
                        <Image
                          src={imageURL}
                          width={200}
                          height={200}
                          className="rounded-md"
                          alt={contestant_code}
                          objectFit="cover"
                          // layout="fill"
                        />
                      </div>
                      <div className="w-full md:w-[60%] flex  flex-col  gap-4 md:gap-2 px-2 py-1 md:px-5 md:py-8 justify-center">
                        <div className="flex items-center justify-center md:justify-start gap-x-4">
                          <h5 className="font-extrabold text-lg">{name}</h5>
                          <h4 className="text-green-400 font-extrabold text-lg">
                            ({contestant_code})
                          </h4>
                        </div>
                        <div className="flex flex-col items-start w-full gap-y-1">
                          <label className="flex text-sm items-center gap-x-2">
                            Number of votes <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="number"
                            min="1"
                            step="1"
                            value={vote}
                            className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-green-400"
                            placeholder="Number of votes"
                            onChange={upddateCost}
                          />

                          <label className="flex text-sm items-center gap-x-2">
                            Email <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="email"
                            className="w-full border-2 border-gray-300 p-2 rounded-md focus:outline-none focus:border-green-400"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                          <button
                            disabled={cost <= 0}
                            className={`w-full ${
                              cost <= 0
                                ? "bg-green-200 cursor-not-allowed"
                                : "bg-green-400"
                            } text-white p-2 rounded-md mt-4`}
                            onClick={() => {
                                if(verifyEmail(email)){
                                  paystackConfig.amount = cost * 100;
                                  paystackConfig.email = email;
                                  initializePay(onPaymentSuccess, onPaymentClose);
                                }else{
                                  toast.error("Please enter a valid email", {
                                    position: "top-center",
                                    autoClose: 3000,
                                    toastId: "vote-error",
                                  });
                                }
                            }}
                          >
                            Vote
                          </button>
                        </div>
                        <div className="-mt-5 md:mt-0 flex items-center justify-center flex-col">
                          {/* cost label */}
                          <p className="text-gray-400 text-xs mt-2 text-center">
                            Total cost:{" "}
                            <span className="font-bold">{cost} GH¢</span>
                          </p>
                          {/* vote form with number of votes field */}
                          <p className="text-gray-400 text-xs text-center">
                            Cost: {vote_price} vote = 1 GH¢
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default VotePopup;
