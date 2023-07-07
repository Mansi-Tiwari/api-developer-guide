import React from "react";
import Wrapper from "./Wrapper";

const Document = () => {
  return (
    <>
      <Wrapper>
        <div className="items-center ">
          <div className="p-4 md:ml-64 text-white ">
            <div className="py-10 px-4 bg-[#090f2049] rounded-xl shadow-xl">
              <div className="max-w-[800px] mx-auto text-start">
                <h2 className="text-3xl font-bold mb-4 text-textColor">
                  📚 How to Use the Crypto API
                </h2>
                <p className="text-lg">
                  The Crypto API is designed to provide you with easy access to
                  cryptocurrency data for your projects. Whether you're building
                  a crypto portfolio tracker, a trading platform, or conducting
                  research, our API can assist you. Follow these steps to get
                  started:
                </p>
                <ol className="text-left  font-thin text-lg my-4 ">
                  <li>
                    🚀 Explore the available endpoints, such as fetching data by
                    ID, name, or retrieving all data.
                  </li>
                  <li>
                    💻 Integrate the API responses into your application to
                    display the desired cryptocurrency information.
                  </li>
                  <li>
                    📊 Make use of pagination and page limits to handle large
                    datasets effectively.
                  </li>
                </ol>
                <p className="text-lg mt-4">
                  Feel free to refer to our documentation for more detailed
                  information on the API endpoints, request parameters, and
                  response formats. We provide code examples to help you
                  understand how to use our Crypto API effectively. Start
                  building amazing projects with the power of cryptocurrency
                  data today!
                </p>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Document;
