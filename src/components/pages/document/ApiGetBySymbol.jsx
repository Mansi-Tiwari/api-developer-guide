import React, { useState } from "react";
import Wrapper from "./Wrapper";

const ApiGetBySymbol = () => {
  const [output, setOutput] = useState(false);

  const fetchData = () => {
    setOutput(!output);
  };

  return (
    <>
      <Wrapper>
        <div className="p-[20px] pb-[50px] md:ml-64 text-white ">
          <div className=" py-10 px-6">
            <div className="max-w-[800px] mx-auto ">
              <h2 className="text-3xl font-bold mb-6 text-textColor">
                Fetch Crypto Data by Symbol
              </h2>
              <p className="text-lg ">
                You can fetch cryptocurrency data by symbol using the following
                API endpoint:
              </p>
              <pre className="p-6 overflow-y-auto bg-gray-300 w-full rounded-md text-black">
                <code>{`GET /crypto/api/symbol/{symbol}`}</code>
              </pre>
              <p className="text-lg  mt-4">Example Request:</p>
              <pre className="p-6 overflow-y-auto bg-gray-300 w-full rounded-md text-black">
                <code>
                  {`fetch('https://sore-gold-chimpanzee-yoke.cyclic.app/crypto/api/symbol/btc')
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
                  <p className="text-lg  mt-4">Example Response:</p>
                  <pre className="p-6 overflow-y-auto bg-gray-300 w-full rounded-md text-black">
                    <code>
                      {`{
  "result": 2,
  "data": [
    {
      "id": 85,
      "name": "BTC++",
      "symbol": "btc"
    },
    {
      "id": 86,
      "name": "Bitcoin",
      "symbol": "btc"
    }
  ]
}`}
                    </code>
                  </pre>
                  <p className="text-lg  mt-4">Additional Information:</p>
                  <p className="text-lg bg-black text-white p-4 rounded-lg">
                    <span className="bg-blue-500 rounded-full px-1 text-sm">
                      i
                    </span>{" "}
                    The API response includes an array of objects under the
                    "data" key. Each object represents a cryptocurrency that
                    matches the provided symbol. You can retrieve additional
                    details such as the ID, name, and symbol for each
                    cryptocurrency from the response.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ApiGetBySymbol;
