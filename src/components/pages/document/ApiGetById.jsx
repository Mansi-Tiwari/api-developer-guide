import React, { useState } from "react";
import Wrapper from "./Wrapper";

const ApiGetById = () => {
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
                Fetch Crypto by Id
              </h2>
              <p className="text-lg ">
                You can fetch cryptocurrency data by ID using the following API
                endpoint:
              </p>
              <pre className="p-6 overflow-y-auto bg-gray-300 w-full rounded-md text-black">
                <code>{`GET /crypto/api/id/{id}`}</code>
              </pre>
              <p className="text-lg  mt-4">Example Request:</p>
              <pre className="p-6 overflow-y-auto bg-gray-300 w-full rounded-md text-black">
                <code>
                  {`fetch('https://sore-gold-chimpanzee-yoke.cyclic.app/crypto/api/id/20')
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
                  <div className="text-lg  mt-4">Example Response:</div>
                  <pre className="p-6 overflow-y-auto bg-gray-300 w-full rounded-md text-black">
                    <code>
                      {`{
    id: 20,
    name: "Alchemix",
    symbol: "alcx",
    Image_Url: "https://i.postimg.cc/N0K4fqkG/alcx.png",
    label: "ALCX",
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

export default ApiGetById;
