import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";
import CsvDownload from "react-json-to-csv";
import { Button } from "../general/Button";
import DownloadIcon from "../general/DownloadIcon";
import DoubleLeftArrowIcon from "../general/DoubleLeftArrowIcon";
import LeftArrowIcon from "../general/LeftArrowIcon";
import RightArrowIcon from "../general/RightArrowIcon";
import DoubleRIghtArrowIcon from "../general/DoubleRightArrowIcon";
import GlobalFilter from "../dataEntry/GlobalFilter";

type TableProps = {
  columns: any;
  data: any;
  completeData: any;
  query: string
}; 

const Table = ({ columns, data, completeData, query }: TableProps) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    state,
    setPageSize,
    pageOptions,
    gotoPage,
    pageCount,
    setGlobalFilter,
    preGlobalFilteredRows,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );


  const handleJsonDownload = (completeData:any, query:string) => {
    let dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(completeData));
    var link = document.createElement('a')
    link?.setAttribute("href",     dataStr     );
    link?.setAttribute("download", `${query}.json`);
    link?.click();
  };

  
  return (
    <>
      <div className="flex justify-between items-center">
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        <div>
          <CsvDownload
            className="bg-primary-color hover:bg-secondary-color transition-colors text-white rounded-md font-semibold px-4 py-2 mr-3 shadow-lg"
            data={completeData}
            filename={`${query}.csv`}
          >
            <DownloadIcon label={'Download CSV'} />
            CSV
          </CsvDownload>
          <Button onClick={() => handleJsonDownload(completeData, query)} 
                 className="bg-primary-color hover:bg-seconday-color transition-colors text-white rounded-md
                        font-semibold px-4 py-2 my-4 shadow-lg fas fa-play">
            <DownloadIcon label={'Download JSON'} />
            JSON
          </Button>
        </div>
      </div>

      {/* table */}
      <div className="shadow overflow-auto border-b border-gray-200 sm:rounded-lg">
        <table
          {...getTableProps()}
          className="min-w-full divide-y divide-gray-200"
        >
          <thead className="bg-primary-color">
            {headerGroups.map((headerGroup:any) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column:any) => (
                  <th
                    scope="col"
                    className="px-6 py-4 text-left text-xs font-medium text-white  uppercase tracking-wider"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    <span className=" hover:text-gray-300">
                      {column.render("Header")}
                    </span>
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? " ▼"
                          : " ▲"
                        : ""}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            {...getTableBodyProps()}
            className="bg-white text-black divide-y divide-gray-200"
          >
            {page.map((row:any, i:any) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell:any) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="py-3 flex items-center justify-between">
        <div className="flex-1 flex justify-between sm:hidden">
          <Button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Previous
          </Button>
          <Button onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </Button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div className="flex gap-x-2">
            <span className="text-sm text-gray-700">
              Page <span className="font-medium">{state.pageIndex + 1}</span> of{" "}
              <span className="font-medium">{pageOptions.length}</span>
            </span>
            <select
              className="text-black outline-none bg-white border-2 border-transparent focus:border-primary-color rounded-md cursor-pointer"
              value={state.pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[5, 10, 20].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <Button
                className={"rounded-l-md relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"}
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">First</span>
                <DoubleLeftArrowIcon label={'Go To Page One'}/>
              </Button>
              <Button
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
                className={"relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"}

              >
                <span className="sr-only">Previous</span>
                <LeftArrowIcon label="Go to previous page" />
              </Button>
              <Button onClick={() => nextPage()} disabled={!canNextPage} className={"relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"}
>
                <span className="sr-only">Next</span>
               <RightArrowIcon label='Go to next page' />
              </Button>
              <Button
                className={"rounded-r-md relative inline-flex items-center px-2 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"}
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                <span className="sr-only">Last</span>
                <DoubleRIghtArrowIcon label="Go to last page" />
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
