import { useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRegAddressCard } from "react-icons/fa6";

function AgreeForm({ currentStep }) {
  console.log(currentStep);
  const [name, setName] = useState("");
  const [NRC, setNrc] = useState("");

  return (
    <div className="flex flex-col justify-end gap-5">
      <div className="flex p-2 bg-white items-center border-2 border-gray-100 rounded-full overflow-hidden shadow-md">
        <input
          type="text"
          placeholder="နာမည်"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            localStorage.setItem("name", e.target.value);
          }}
          className="ps-5 text-[18px] border-4 border-gray-100 focus:outline-none flex-grow"
        />
        <span className="p-2 bg-white">
          <FaRegUserCircle size={30} className="text-gray-400 mr-5" />
        </span>
      </div>
      <div className="flex p-2 bg-white items-center border-2 border-gray-100 rounded-full overflow-hidden shadow-md">
        <input
          type="text"
          placeholder="မှတ်ပုံတင် နံပါတ်"
          value={NRC}
          onChange={(e) => {
            setNrc(e.target.value);
            localStorage.setItem("NRC", e.target.value);
          }}
          className="ps-5 text-[18px] border-4 border-gray-100 focus:outline-none flex-grow"
        />
        <span className="p-2 bg-white">
          <FaRegAddressCard size={30} className="text-gray-400 mr-5" />
        </span>
      </div>
    </div>
  );
}

export default AgreeForm;
