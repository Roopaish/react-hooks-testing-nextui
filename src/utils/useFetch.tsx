import { useEffect, useRef, useState } from "react";

const useFetch = (url: string) => {
  const isCurrent = useRef(true);
  const [state, setState] = useState<{ loading: boolean; data: any | null }>({
    loading: true,
    data: null,
  });

  useEffect(() => {
    return () => {
      // cleanup function to set isCurrent to false when component is unmounted
      isCurrent.current = false;
    };
  }, []);

  useEffect(() => {
    // use old data if it exists for smoother transition
    setState((state) => ({
      loading: state.loading,
      data: state.data,
    }));

    const fetchData = async () => {
      const res = await fetch(url);
      const data = await res.text();
      if (!isCurrent.current) return; // if component is unmounted, don't update state (to avoid memory leak)
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
