import React, { useState } from "react";
import { helloFAQ } from "../../../../constants";

const HelloPsi = () => {
  const [openFaqId, setOpenFaqId] = useState("");

  const clickActiveFAQ = (id) => (e) => {
    e.preventDefault();
    setOpenFaqId(id !== openFaqId ? id : "");
  };

  return (
    <div className="container mx-auto md:pr-20 pr-0 py-16 ">
      {helloFAQ?.map((helloFAQ) => (
        <details
          key={helloFAQ.id}
          open={openFaqId === helloFAQ.id}
          onClick={clickActiveFAQ(helloFAQ.id)}
          className=" bg-white p-4 rounded-xl shadow group mx-auto mb-0.5 max-h-[56px] open:!max-h-[400px] transition-[max-height] duration-1000 overflow-hidden">
          <summary
            className="list-none flex flex-wrap items-center cursor-pointer
        focus-visible:outline-none focus-visible:ring
        rounded group-open:rounded-b-none group-open:z-[1] relative
        "
          >
            <h3 className="flex flex-1 font-semibold">{helloFAQ.title}</h3>
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
            <p>{helloFAQ.body}</p>
          </div>
        </details>
      ))}
    </div>

  );
};

export default HelloPsi;

// className="delay-400 duration-500 ease-in-out transition-all transform"
// className="transition-all delay-500 opacity-0 translate-y-full"