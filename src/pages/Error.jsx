import { useRouteError } from "react-router-dom";
import { Logo } from "../components";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Logo width="200px" />
      <div className="mt-8 p-6 bg-white shadow-lg rounded-md">
        <h4 className="text-2xl font-bold text-red-600">
          {err.status}.<span className="text-gray-800">That's an error.</span>
        </h4>
        <p className="text-lg text-gray-700 mt-2">
          The requested URL{" "}
          <span className="text-red-600">
            {err.error?.message?.split(/"/)[1]}
          </span>{" "}
          was not found on this server. Please recheck.
        </p>
      </div>
    </div>
  );
};

export default Error;
