import {toast} from "react-toastify";

export const baseConfig = {
  // reference, get new date to iso string and replace : with - and remove . and remove Z
  reference: new Date()
    .toISOString()
    .replace(/:/g, "-")
    .replace(/\./g, "-")
    .replace("Z", ""),
  publicKey: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
  currency: "GHS",
};

export const PaystackConfig = (amount, email) => {
    const config = {
        ...baseConfig,
        email: email || "bentilshadrack72@gmail.com",
        amount: amount * 100
    };
    return config
}


