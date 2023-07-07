import React, { useState } from "react";
import Wrapper from "./Wrapper";

const ApiGetAll = () => {
  const [output, setOutput] = useState(false);

  const fetchData = () => {
    setOutput(!output);
  };

  return (
    <>
      <Wrapper>
        <div className="p-[20px] pb-[50px] md:ml-64  ">
          <div className=" py-10 px-6">
            <div className="max-w-[800px] mx-auto ">
              <h2 className="text-3xl font-bold mb-4 text-textColor">
                Fetch All Crypto Data
              </h2>
              <p className="text-lg text-white">
                You can fetch all the cryptocurrency data using the following
                API endpoint:
              </p>
              <pre className="p-6 bg-gray-300 w-full rounded-md text-black">
                <code>{`GET /crypto/all`}</code>
              </pre>
              <p className="text-lg text-white mt-4">Example Request:</p>
              <pre className="p-6 overflow-y-auto bg-gray-300 w-full rounded-md text-black">
                <code>
                  {`fetch('https://sore-gold-chimpanzee-yoke.cyclic.app/crypto/all')
  .then(res => res.json())
  .then(json => console.log(json))`}
                </code>
              </pre>
              <button
                onClick={fetchData}
                className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3"
              >
                {output ? "Hide output" : "Show output"}
              </button>
              {output && (
                <div>
                  <p className="text-lg  text-white mt-4">Example Response:</p>
                  <pre className="p-6 overflow-y-auto bg-gray-300 w-full rounded-md text-black">
                    <code>
                      {`{
  "data": [
    {
      "id": 1,
      "name": "Bitcoin",
      "label": "BTC",
      "symbol": "BTC",
      "image": "https://example.com/bitcoin.png"
    },
    {
      "id": 2,
      "name": "Ethereum",
      "label": "ETH",
      "symbol": "ETH",
      "image": "https://example.com/ethereum.png"
    },
    ...
  ]
}`}
                    </code>
                  </pre>
                </div>
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ApiGetAll;
