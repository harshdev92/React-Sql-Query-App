import React, {useState, Suspense} from 'react';
import { LoaderIcon, Toaster } from 'react-hot-toast';

const TableComponent = React.lazy(() => import( './components/dataDisplay/TableComponent'));
const PreBuildQueryList = React.lazy(() => import("./components/dataDisplay/PreBuildQueryList"));
const QueryInput = React.lazy(() => import("./components/dataEntry/QueryInput"));
const Header = React.lazy(() => import('./components/layout/Header'));

function App() {
  const [query, setQuery] = useState<string>("");
  const [value, setValue] = useState<string>("SELECT * FROM customers");
  return (
    <Suspense fallback={<LoaderIcon />}>
    <>
    <Toaster
        position="top-center"
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: "",
          duration: 5000,
          style: {
            background: "#ffffff",
            color: "#3A4374",
          },
          success: {
            duration: 1000,
            iconTheme: {
              primary: "#4CAF50",
              secondary: "#ffffff",
            },
          },
          error: {
            iconTheme: {
              primary: "#D73737",
              secondary: "#ffffff",
            },
          },
        }}
      />
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
    </Suspense>
  );
}

export default App;
