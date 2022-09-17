import React, {useState} from 'react';
import TableComponent from './components/dataDisplay/TableComponent';
import QueryInput from './components/dataEntry/QueryInput';
import Header from './components/layout/Header';


function App() {
  const [query, setQuery] = useState<string>("");
  const [value, setValue] = useState<string>("select * from customers");
  return (
    <>
     <Header/>
     <QueryInput 
       setQuery={setQuery}
       value={value}
       setValue={setValue}
     />
     {query ? <TableComponent query={query} /> : null}
    </>
  );
}

export default App;
