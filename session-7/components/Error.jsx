import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>Oops!</h1>
      <h1>Something went wrong!pls try after some time ⌚</h1>
      <h2>{err.status + ":" + err.statusText + err.data}</h2>
    </div>
  );
};

export default Error;
