import React, { useState } from "react";
import Loader from "../../../loader/Loader";

const ApiExample = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [objectData, setObjectData] = useState(null);

  const fetchData = () => {
    setIsLoading(true);

    setTimeout(() => {
      const data = {
        id: 1,
        name: "0xBitcoin",
        symbol: "0xbtc",
        Image_Url: "https://i.postimg.cc/FKCBDVDz/0xbtc.png",
        label: "0XBTC",
      };

      setObjectData(data);
      setIsLoading(false);
    }, 1000); // 1-second delay
  };

  return (
    <section className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto  ">
        <div className=" my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Example Code{" "}
          </h1>
          <p>Try this code snippet:</p>
        </div>
        <div className="my-4">
          <div className="flex flex-wrap sm:flex-row items-center justify-between w-full">
            <pre className=" p-4 flex w-full bg-gray-200 rounded-md text-black">
              <code className=" p-5">
                {`fetch('https://sore-gold-chimpanzee-yoke.cyclic.app/crypto/api/id/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
            `}
              </code>
            </pre>
            <button
              className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3"
              onClick={fetchData}
              disabled={isLoading}
            >
              Try It Out
            </button>
          </div>

          {isLoading ? (
            <div className="p-4 flex h-[170px] justify-center items-center w-full rounded-md bg-gray-200  text-black">
              <Loader />
            </div>
          ) : (
            objectData !== null && (
              <div>
                <h3 className="p-2">Object Data:</h3>
                <pre className="px-10 py-4 h-[200px] w-full overflow-x-auto overflow-y-hidden rounded-md bg-gray-200  text-black">
                  <code >
                    {JSON.stringify(objectData, null, 2)}
                  </code>
                </pre>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ApiExample;
