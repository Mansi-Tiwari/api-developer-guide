import React from "react";
import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
import Emoji from "../Emoji";

const ApiError = () => {
  return (
    <>
      <Wrapper>
        <div className="p-[20px] pb-[50px] md:ml-64 text-white ">
          <div className="  py-10 px-6">
            <div className=" mx-auto max-w-[1200px] ">
              <h2 className="text-3xl font-bold mb-4 text-textColor">
                Error Handling for Crypto API
              </h2>
              <p className="text-lg ">
                When fetching data from the Crypto API, you may encounter
                different types of errors. It's important to handle these errors
                gracefully to ensure smooth operation of your application.
              </p>
              <h3 className="text-xl font-bold mt-6">Other API Errors</h3>
              <p className="text-lg mt-2">
                In addition to rate limit errors, other API errors may occur
                during data retrieval.
              </p>
              <table className="table-auto max-w-[800px]  mt-3 border  border-gray-600  text-left text-gray-200 ">
                <thead className=" font-bold text-gray-300 uppercase  bg-[#0a0000b7] ">
                  <tr>
                    <td className="p-3 border-r border-gray-500 ">
                      Status code
                    </td>
                    <td className="p-3">Description</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 bg-gray-600 border-r border-gray-500">
                      400 (Bad Request)
                    </td>
                    <td className="p-4">
                      This is due to an invalid request and the server could not
                      process the user's request.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 bg-gray-600 border-r border-gray-500">
                      401 (Unauthorised)
                    </td>
                    <td className="p-4">
                      This is due to the lack of valid authentication
                      credentials for the requested resource by the user.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 bg-gray-600 border-r border-gray-500">
                      429 (Too many requests)
                    </td>
                    <td className="p-4">
                      This is likely indicating that the rate limit has reached.
                      The user should reduce the number of calls made, or
                      consider scaling their service plan that has much higher
                      rate limits and call credits.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 bg-gray-600 border-r border-gray-500">
                      500 (Internal Server Error)
                    </td>
                    <td className="p-4">
                      This is a generic error response indicating that the
                      server has encountered an unexpected issue that prevented
                      it from fulfilling the request.
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 bg-gray-600 border-r border-gray-500">
                      CORS error
                    </td>
                    <td className="p-4">
                      A CORS error occurs when the server doesn't return the
                      CORS headers required. You may learn more and attempt the
                      recommended solutions{" "}
                      <Link
                        to={
                          "https://www.bannerbear.com/blog/what-is-a-cors-error-and-how-to-fix-it-3-ways/#how-to-fix-a-cors-error"
                        }
                        target="_blank"
                        className="text-blue-500"
                      >
                        here.
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>

              <h3 className="text-xl font-bold mt-6">
                <Emoji symbol="📈" label="limit" /> Rate Limit Error
              </h3>
              <p className="text-lg  mt-2">
                If you exceed the rate limit for the API, you will receive a{" "}
                error message. To avoid rate limit errors, make sure to respect
                the rate limit restrictions and adjust your request frequency
                accordingly rate limit is 15min. If you receive this error,
                please wait for the specified time window to elapse before
                making additional requests.
              </p>
              <p className="text-lg ">
                It's important to handle these errors appropriately in your
                application, providing useful feedback to users and implementing
                fallback strategies when necessary.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default ApiError;
