import { useMemo, useState } from "react";

export function useAPIWithMemo(props: any) {
  const [url, setURL] = useState(props.url);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fetchedResponse, setFetchedResponse] = useState<any>(null);

  useMemo(async () => {
    setIsLoading(true);
    await fetch(url)
      .then((res) => res.json())
      .then((result) => {
        console.log({ result });
        setFetchedResponse(result);
        setIsLoading(false);
      });
  }, [url]);

  return {
    isLoading,
    fetchedResponse,
    setIsLoading,
    setFetchedResponse,
    setURL
  };
}

export function UseMemoExample() {
  const { isLoading, fetchedResponse, setURL } = useAPIWithMemo({
    url: "https://jsonplaceholder.typicode.com/users/1"
  });

  const [toggle, setToggle] = useState(false);

  const changeURL = () => {
    setURL("https://jsonplaceholder.typicode.com/users/2");
  };

  return (
    <div>
      {isLoading === true && <div>loading...</div>}
      {isLoading === false && <div>{JSON.stringify(fetchedResponse)}</div>}
      <button onClick={() => setToggle(!toggle)}>{toggle.toString()}</button>
      <button onClick={changeURL}>change url</button>
    </div>
  );
}
