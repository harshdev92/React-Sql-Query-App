import React, { useMemo } from "react";
import { LoaderIcon } from 'react-hot-toast';

import usetableData from "../../hooks/useData";
import Table from "./Table";

type TableComponentProps = {
  query: string;
}; 


const TableComponent = React.memo(({ query }: TableComponentProps) => {
  const { data, runtime, error } = usetableData(query);

  const columns = useMemo(() => {
    if (data.length > 0) {
      return Object.keys(data[0]).map((key) => {
        const result = data[0][key].replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1");
        return {
          Header: result,
          accessor: key,
        };
      });
    }
  }, [data]);

  const queryData = useMemo(() => data.slice(1), [data]);
  if (error)
    return (
      <section
        className={`col-end-3 row-start-3 row-end-4 text-white m-6`}
      >
        <h1 className="text-center font-bold text-xl text-primary-color">
          Something Went Wrong{" "}
          <span role="img" aria-label="sad face">
            😔
          </span>
        </h1>
      </section>
    );
  return (
    <>
      <section
        className={`col-end-3 row-start-3 row-end-4 text-white mx-6 my-12 lg:mx-12 overflow-hidden`}
      >
        {data.length > 0 ? (
          <>
            <p className="text-primary-color">
              Reponse Time:{" "}
              <span className="font-bold">{`${runtime.toFixed(2)} ms`}</span>
            </p>
            <Table
              columns={columns}
              completeData={data}
              data={queryData}
              query={query}
            />
          </>
        ) : (
          <LoaderIcon />
        )}
      </section>
    </>
  );
});

export default TableComponent;
