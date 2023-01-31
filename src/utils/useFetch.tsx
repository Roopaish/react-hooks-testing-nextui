import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [state, setState] = useState<{ loading: boolean; data: string | null }>(
    {
      loading: true,
      data: null,
    }
  );

  useEffect(() => {
    // use old data if it exists for smoother transition
    setState((state) => ({
      loading: state.loading,
      data: state.data,
    }));

    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.text();
      setState({
        loading: false,
        data,
      });
    };

    fetchData();
  }, [url]);

  return state;
};

export default useFetch;
