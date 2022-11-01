import React, { useState } from "react";

import { patientFAQ } from "../../../../constants";

const Patient = () => {
  const [openFaqId, setOpenFaqId] = useState("");

  const clickActiveFAQ = (id) => (e) => {
    e.preventDefault();
    setOpenFaqId(id !== openFaqId ? id : "");
  };
  return (
    <div className="container mx-auto md:pr-20 pr-0 py-16 ">
      {patientFAQ?.map((patientFAQ) => (
        <details
          key={patientFAQ.id}
          open={openFaqId === patientFAQ.id}
          onClick={clickActiveFAQ(patientFAQ.id)}
          className=" bg-white p-4 rounded-xl shadow group mx-auto mb-0.5 xs:max-h-[100px] max-h-[200px] open:!max-h-[400px] transition-[max-height] duration-1000 overflow-hidden">
          <summary
            className="list-none flex flex-wrap items-center cursor-pointer
        focus-visible:outline-none focus-visible:ring
        rounded group-open:rounded-b-none group-open:z-[1] relative
        "
          >
            <h3 className="flex flex-1 font-semibold">{patientFAQ.title}</h3>
            <div className="flex w-10 items-center justify-center">
              <div
                className="border-8 border-transparent border-l-gray-600 ml-2
      group-open:rotate-90 transition-transform origin-left
      "
              ></div>
            </div>
          </summary>

          <hr className="my-2 scale-x-150" />

          <div className="text-sm -m-4 -mt-2 p-4 bg-gray-50">
            <p>{patientFAQ.body}</p>
          </div>
        </details>
      ))}
    </div>
  );
};

export default Patient;
