import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

export interface IData {
  userId: number,
  id: number,
  title: string,
  body: string
}

function App() {

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

  if (loading) {

    return <p>Loading...</p>;
    
  }

  return (

    <div>

      <h2>Returned data</h2>

      <ul>

        {data.map((item: IData) => (
          <li key={item.id}>{item.title}</li>
        ))}

      </ul>

    </div>

  );
}

export default App;
