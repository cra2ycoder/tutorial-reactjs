import { useEffect, useState } from "react";

export default function Posts() {
  const [response, setReponse] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts?userId=1";
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setLoading(false);
        setReponse(result);
      });
  }, []);

  return (
    <div>
      {loading && <div>loading...</div>}
      {!loading && <div>{JSON.stringify({ response })}</div>}
    </div>
  );
}
