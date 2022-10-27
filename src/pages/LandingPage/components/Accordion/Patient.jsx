import React, { useState } from "react";

import { patientFAQ } from "../../../../constants";

const Patient = () => {
  const [openFaqId, setOpenFaqId] = useState("");

  const clickActiveFAQ = (id) => (e) => {
    e.preventDefault();
    setOpenFaqId(id !== openFaqId ? id : "");
  };
  return (
    <div class="container mx-auto md:pr-20 pr-0 py-16 ">
      {patientFAQ?.map((patientFAQ) => (
        <details
          key={patientFAQ.id}
          open={openFaqId === patientFAQ.id}
          onClick={clickActiveFAQ(patientFAQ.id)}
          class="bg-white shadow rounded group mb-0.5"
        >
          <summary
            class="list-none flex flex-wrap items-center cursor-pointer
  focus-visible:outline-none focus-visible:ring
  rounded group-open:rounded-b-none group-open:z-[1] relative
  "
          >
            <h3 class="flex flex-1 p-4 font-semibold">{patientFAQ.title}</h3>
            <div class="flex w-10 items-center justify-center">
              <div
                class="border-8 border-transparent border-l-gray-600 ml-2
      group-open:rotate-90 transition-transform origin-left
      "
              ></div>
            </div>
          </summary>
          <div class="p-4">
            <p>{patientFAQ.body}</p>
          </div>
        </details>
      ))}
    </div>
  );
};

export default Patient;
