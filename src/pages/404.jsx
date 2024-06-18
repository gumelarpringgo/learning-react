import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold">Ops!</h1>
      <p className="my-5 text-xl ">Sorry, an unexpected error has occured</p>
      <p className="my-5 text-l ">{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
