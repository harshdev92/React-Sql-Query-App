import { useEffect, useState } from "react";
import alasql from "alasql";
import toast from "react-hot-toast";
import TABLE_NAMES from "../constants/tableName";


const getApiURL = (name: string) =>
  `https://api.github.com/repos/graphql-compose/graphql-compose-examples/contents/examples/northwind/data/csv/${name}.csv`;

const useData = (tableName: string) => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState(false);
  const [runtime, setRuntime] = useState(0);
  const convertToJson = (data:any) => {
    alasql
      .promise("SELECT * FROM CSV(?, {headers: false, separator:','})", [data])
      .then((data) => {
        setData(data);
        toast.success("Query run successfully");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  useEffect(() => {
    const fetchData = (tableName: string) => {
      setData([]);
      const name = TABLE_NAMES.find((name) => name === tableName);
      if (name) {
        setError(false);
        fetch(getApiURL(tableName), {
          headers: {
            Accept: "application/vnd.github.v4+raw",
          },
        })
          .then((res) => {
            if (res.ok) {
              return res.json();
            } else {
              throw new Error("Something went wrong");
            }
          })
          .then((data) => convertToJson(atob(data.content.replace("\n", ""))))
          .catch((error) => {
            toast.error(error.message);
          });
      } else {
        setError(true);
        toast.error("Please enter a valid query");
      }
    };
    let t0 = performance.now(); //start time
    fetchData(tableName);
    let t1 = performance.now(); //end time
    setRuntime(t1 - t0);
  }, [tableName]);

  return { data, runtime, error };
};

export default useData;
