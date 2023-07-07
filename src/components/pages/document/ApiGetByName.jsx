import React, { useState } from "react";
import Wrapper from "./Wrapper";

const ApiGetByName = () => {
  const [output, setOutput] = useState(false);

  const fetchData = () => {
    setOutput(!output);
  };

  return (
    <>
      <Wrapper>
        <div className="p-[20px] pb-[50px] md:ml-64 text-white  ">
          <div className=" py-10 px-6">
            <div className="max-w-[800px] mx-auto ">
              <h2 className="text-3xl font-bold mb-6 text-textColor">
                Search Crypto by Name
              </h2>
              <p className="text-lg ">
                You can search for cryptocurrencies by name using the following
                API endpoint:
              </p>
              <pre className="p-6 bg-gray-300 w-full rounded-md text-black">
                <code>{`GET /crypto/api/name/{name}`}</code>
              </pre>
              <p className="text-lg  mt-4">Example Request:</p>
              <pre className="p-6 overflow-y-auto bg-gray-300 w-full rounded-md text-black">
                <code>
                  {`fetch('https://sore-gold-chimpanzee-yoke.cyclic.app/crypto/api/name/ethereum')
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
                  <p className="text-lg mt-4">Example Response:</p>
                  <pre className="p-6 overflow-y-auto bg-gray-300 w-full rounded-md text-black">
                    <code>
                      {`{
  result: 2,
  data: [
    {
      id: 216,
      name: "Ethereum Classic",
      symbol: "eth",
      label: "ETH",
    },
    {
      id: 217,
      name: "Ethereum (Wormhole)",
      symbol: "etn",
      label: "ETN",
    },],
  }`}
                    </code>
                  </pre>
                  <p className="text-lg  mt-4">Additional Information:</p>
                  <p className="text-lg bg-black  p-4 rounded-lg">
                    <span className="bg-blue-500 rounded-full px-1 text-sm">
                      i
                    </span>{" "}
                    The API response includes an array of objects under the
                    "results" key. Each object represents a cryptocurrency that
                    matches the search term. You can retrieve additional details
                    such as the id, label, symbol, and name for each
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

export default ApiGetByName;
