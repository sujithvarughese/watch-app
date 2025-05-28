import {useState} from 'react';
import axios from "axios";

const UseAuthenticateWatch = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<string | null>(null);

  const fetchData = async (data: string[]) => {
    const formattedData = data.map((image) => {
      return {
        type: "image_url",
        image_url: { url: image },
      }
    })
    try {
      setLoading(true);
      setError(null);
      const res = await axios.post("/api", { formattedData })
      setResponse(res.data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    response,
    fetchData
  }
};

export default UseAuthenticateWatch;