import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools"

import { Button } from "../general/Button";
import { ReactComponent as PlayIcon } from './../../assets/image/playIcon.svg'

type QueryInputProps = {
  setQuery: Function;
  value: string;
  setValue: Function
}; 


const QueryInput = ({setQuery, value, setValue} : QueryInputProps) =>  {
  const onChange = (newValue: string) => {
    setValue(newValue);
  };

  const onSubmit = () => {
    let lowerCaseValue = value.toLowerCase()
    let formattedValue = lowerCaseValue.slice(lowerCaseValue.indexOf("from") + "from".length);
    setQuery(formattedValue.split(" ")[1]);
  };


  return (
    <main
      className={`col-end-3 row-start-2 row-end-3 mx-6 my-12 lg:mx-12 w-2/4`}
    >
      <label htmlFor="query-editor">
        <AceEditor
        aria-label="query-editor"
        mode="mysql"
        theme="tomorrow"
        value={value}
        onChange={onChange}
        name="query-editor"
        editorProps={{ $blockScrolling: true }}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true
        }}
        fontSize={16}
        minLines={15}
        maxLines={10}
        width="100%"
        showPrintMargin={false}
        showGutter
        placeholder="Write your Query here..."
            
      />
    </label>
    <Button onClick={onSubmit} className="bg-primary-color hover:bg-seconday-color transition-colors text-white rounded-md font-semibold px-4 py-2 my-4 shadow-lg fas fa-play">
      <PlayIcon />
      Run Query
    </Button>
  </main>
  );
}

export default QueryInput;
