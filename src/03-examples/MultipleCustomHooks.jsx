import { useFetch } from "../hooks";

export const MultipleCustomHooks = () => {
  const {data, isloading, hasError} = useFetch() ;

  return (
    <>
      <h1> { data?.name } </h1>
    </>
  )
};

