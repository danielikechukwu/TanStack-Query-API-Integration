import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Posts from "./components/Posts";

export interface IData {
  userId: number,
  id: number,
  title: string,
  body: string
}

const App: () => JSX.Element = () => {

  const queryClient: QueryClient = new QueryClient();

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {

        setData(response.data);

        setLoading(false);

      })
      .catch((error: Error) => {

        console.log("An error occurred : ", error);

      });

  }, []);

  return (

    <QueryClientProvider client={queryClient}>
      <Posts />
    </QueryClientProvider>

  );
}

export default App;
