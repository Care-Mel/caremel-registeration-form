import { CircleAlert } from "lucide-react";
// import { useNavigate } from "react-router-dom";

const BookingInfo = ({ onSubmit, formData, updateFormData }) => {
  // const navigate = useNavigate();

  return (
    <div className="my-10">
      <div className="p-6 rounded-3xl shadow-sm border border-gray-300">
        <h2 className="header">Contact Information</h2>
        <div className="space-y-6">
          <div>
            <label className="label">Name</label>
            <input
              type="text"
              className="mt-2 w-full p-4 rounded-xl border-2 border-gray-400 focus:outline-none focus:border-[#2d5a40]"
              placeholder="Enter your name"
              value={formData.name}
              onChange={(e) => updateFormData({ name: e.target.value })}
            />
          </div>
          <div>
            <label className="label">Phone Number</label>
            <input
              type="tel"
              className="w-full mt-2 p-4 rounded-xl border-2 border-gray-400 focus:outline-none focus:border-[#2d5a40]"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={(e) => updateFormData({ phoneNumber: e.target.value })}
            />
          </div>
        </div>
      </div>

      <div className="p-6 rounded-3xl shadow-sm border border-gray-300 mt-5 mb-10">
        <h2 className="header">Address Information</h2>
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <label className="label">Township</label>
            </div>
            <input
              type="text"
              className="mt-2 w-full p-4 rounded-xl border-2 border-gray-400 focus:outline-none focus:border-[#2d5a40]"
              placeholder="Eg - Kamayut"
              value={formData.township}
              onChange={(e) => updateFormData({ township: e.target.value })}
            />
            <div className="flex gap-2 items-center text-[#2d5a40] text-sm">
              <CircleAlert size={25} className="text-primary" />
              <p> This is use when giving service information to caregiver.</p>
            </div>
          </div>
          <div>
            <label className="label">Detail Address</label>
            <input
              type="text"
              className="mt-2 w-full p-4 rounded-xl border-2 border-gray-400 focus:outline-none focus:border-[#2d5a40]"
              placeholder="Eg - No 11(B), Myakanthar (2) street"
              value={formData.detailAddress}
              onChange={(e) => updateFormData({ detailAddress: e.target.value })}
            />
          </div>
          <div>
            <label className="label">Nearest Bus Stop</label>
            <input
              type="text"
              className="w-full mt-2 p-4 rounded-xl border-2 border-gray-400 focus:outline-none focus:border-[#2d5a40]"
              placeholder="Eg - Buter Yone Lann"
              value={formData.nearestBusStop}
              onChange={(e) => updateFormData({ nearestBusStop: e.target.value })}
            />
          </div>
        </div>
      </div>

      <div>
        <button
          onClick={() => onSubmit()}
          className="font-sofia w-full bg-primary text-white px-4 py-[16px] rounded-full font-bold text-[14px] flex justify-center items-center transition-all duration-300 ease-in-out active:bg-secondary"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BookingInfo;
