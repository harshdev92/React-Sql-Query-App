import React, {useState} from "react";

import {useAsyncDebounce } from "react-table";

type GlobalFilterProps = {
    preGlobalFilteredRows: any;
    globalFilter: any;
    setGlobalFilter: any
  }; 
  


const GlobalFilter = ({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
  }:GlobalFilterProps) => {
    const count = preGlobalFilteredRows.length;
    const [value, setValue] = useState(globalFilter);
    const onChange = useAsyncDebounce((value) => {
      setGlobalFilter(value || undefined);
    }, 200);
  
    return (
      <>
        {/* <p>
          <title>{`${count} Records found || React SQL Editor`}</title>
        </p> */}
        <label className="flex gap-x-2 items-baseline">
          <span className="text-primary-color hidden md:inline-block font-semibold">
            Search:{" "}
          </span>
          <input
            type="text"
            className="text-primary-color rounded-md shadow-sm outline-none border-2 border-gray-300 focus:border-primary-color transition p-2 w-40 md:w-52 "
            value={value || ""}
            onChange={(e) => {
              setValue(e.target.value);
              onChange(e.target.value);
            }}
            placeholder={`${count} records...`}
          />
        </label>
      </>
    );
  };


  export default GlobalFilter;
