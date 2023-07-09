import React, { useState } from "react";
import Wrapper from "./Wrapper";

const Limit = () => {
  const [output, setOutput] = useState(false);

  const fetchData = () => {
    setOutput(!output);
  };

  return (
    <Wrapper>
      <div className="p-[20px] pb-[50px] md:ml-64 text-white ">
        <div className=" py-10 px-6">
          <div className="max-w-[800px] mx-auto ">
            <h2 className="text-3xl font-bold mb-6 text-textColor">
              Retrieve Crypto Data with Limit
            </h2>
            <p className="text-lg ">
              You can retrieve cryptocurrency data with a specified limit using
              the following API endpoint:
            </p>
            <pre className="p-6 overflow-y-auto bg-gray-300 w-full rounded-md text-black">
              <code> {`GET /crypto/api?limit={limit}`}</code>
            </pre>
            <p className="text-lg mt-4">Example Request:</p>
            <pre className="p-6 overflow-y-auto bg-gray-300 w-full rounded-md text-black">
              <code>
                {`fetch('https://sore-gold-chimpanzee-yoke.cyclic.app/crypto/api?limit=4')
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
  "result": [
    {
      "id": 1,
      "name": "0xBitcoin",
      "symbol": "0xbtc",
      "Image_Url": "https://i.postimg.cc/FKCBDVDz/0xbtc.png",
      "label": "0XBTC"
    },
    {
      "id": 2,
      "name": "1inch",
      "symbol": "1inch",
      "Image_Url": "https://i.postimg.cc/66vmfRR6/1inch.png",
      "label": "1INCH"
    },
    {
      "id": 3,
      "name": "1st",
      "symbol": "1st",
      "Image_Url": "https://i.postimg.cc/NMyPV2z4/1st.png",
      "label": "1ST"
    },
    {
      "id": 4,
      "name": "Aave",
      "symbol": "aave",
      "Image_Url": "https://i.postimg.cc/xTGpW2tW/aave.png",
      "label": "AAVE"
    }
  ],
  "meta": {
    "totalItems": 4,
    "currentPage": 1,
    "pageSize": 4,
    "totalPages": 157
  }
}`}
                  </code>
                </pre>
                <p className="text-lg  mt-4">Additional Information:</p>
                <p className="text-lg bg-black text-white p-4 rounded-lg">
                  <span className="bg-blue-500 rounded-full px-1 text-sm">
                    i
                  </span>{" "}
                  The API response includes an array of objects under the
                  "result" key, containing the cryptocurrency data with the
                  specified limit. The "meta" object provides information about
                  the total number of items, current page, page size, and total
                  pages. If you want to retrieve more items, increase the limit
                  in your request. Please note that the total number of items
                  may vary based on the available data. It's important to note
                  that the response contains pagination information as well,
                  such as the current page, page size, and total pages.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Limit;
