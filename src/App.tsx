import React, {useState} from 'react';
import PreBuildQueryList from './components/dataDisplay/PreBuildQueryList';
import TableComponent from './components/dataDisplay/TableComponent';
import QueryInput from './components/dataEntry/QueryInput';
import Header from './components/layout/Header';


function App() {
  const [query, setQuery] = useState<string>("");
  const [value, setValue] = useState<string>("SELECT * FROM customers");
  return (
    <>
     <Header/>
     <div className='flex'>
      <QueryInput 
        setQuery={setQuery}
        value={value}
        setValue={setValue}
      />
      <PreBuildQueryList setQuery={setQuery} setValue={setValue} />
     </div>
     {query ? <TableComponent query={query} /> : null}
    </>
  );
}

export default App;
