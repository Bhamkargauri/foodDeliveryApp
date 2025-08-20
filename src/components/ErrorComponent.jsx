import { useRouteError } from "react-router";

const ErrorComponent = () => {
  const err = useRouteError();
  console.log;

  return (
    <div>
      <h1>404 Page not found</h1>
      <p>
        {err.status} {err.statusText}
      </p>
      <p>{err.data}</p>
    </div>
  );
};

export default ErrorComponent;
