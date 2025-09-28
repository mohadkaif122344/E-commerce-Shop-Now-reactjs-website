import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";

const Location = () => {
  return (
    <div className=" w-full px-16 py-2 bg-themeyello lg:flex  justify-between items-center gap-6 pt-[35px]  lg:flex-row pb-[10px]  dark:text-gray-700">
      <h1 className="text-sm font-semibold flex justify-center items-center gap-2">
        <FaPhoneVolume className="size-[18px]" /> <span>+91 888 111 3334</span>{" "}
      </h1>{" "}
      <h1 className="text-sm font-semibold flex justify-center items-center">
        {" "}
        <FaMapMarkerAlt className="size-[18px]" />{" "}
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
          expedita.
        </span>
      </h1>
      <h1 className="text-sm font-semibold flex justify-center items-center">
        <MdEmail className="size-[18px]" /> <span>electrashop@company.com</span>
      </h1>
    </div>
  );
};
export default Location;
