import { useEffect, useState } from "react";

export const useFetch = () => {
  const [state, setState] = useState({
    data: null,
    isloading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getFetch();
  }, []);

  const getFetch = async () => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/1`);

    if (!res.ok) {
      setState({
        data: null,
        isloading: false,
        hasError: true,
        error: {
          code: res.status,
          message: res.statusText,
        },
      });
      return;
    }

    const data = await res.json();
    setState({
      data,
      isloading: false,
      hasError: false,
      error: null,
    });
  };
  return {
    data: state.data,
    isloading: state.isloading,
    hasError: state.isloading,
  };
};
