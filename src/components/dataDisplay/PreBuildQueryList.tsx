import React from "react";

import TABLE_NAMES from "../../constants/tableName";

type PreBuildQueryListProps = {
    setQuery: Function;
    setValue: Function;
}; 


const PreBuildQueryList = React.memo(({  setQuery, setValue,}: PreBuildQueryListProps) => {
    const handleQuery = (queryName: string) => {
        setQuery(queryName);
        setValue(`SELECT * FROM ${queryName}`);
    };
  return (
    <>
    <div className="flex flex-col w-2/4  mt-7  bg-primary-color">
     {TABLE_NAMES.map((name) => {
        return (
        <p
        className="flex p-2 place-content-center transition-colors text-white hover:cursor-pointer duration-200 rounded-lg "
        key={name}
        onClick={() => {
        handleQuery(name);
        }}
        >
            
            <span className="mx-4 text-base font-normal">
            {`SELECT * FROM ${name}`}
            </span>
        </p>
        );
    })}
    </div>
    </>
  );
});

export default PreBuildQueryList;
