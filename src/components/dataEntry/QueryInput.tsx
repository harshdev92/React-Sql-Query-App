import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools"

import { Button } from "../general/Button";


function QueryInput() {
  const onChange = (newValue:string) => {
    console.log("change", newValue);
  }

  const onSubmit = () => {
    console.log("submit");
  }


  return (
    <main
      className={`col-end-3 row-start-2 row-end-3 mx-6 my-12 lg:mx-12`}
    >
      <AceEditor
      mode="mysql"
      theme="tomorrow"
      onChange={onChange}
      name="UNIQUE_ID_OF_DIV"
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true
      }}
      fontSize={16}
      minLines={15}
      maxLines={10}
      width="50%"
      showPrintMargin={false}
      showGutter
      placeholder="Write your Query here..."
          
    />
    <Button handleClick={onSubmit} className="fas fa-play">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 inline mr-2"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <title id="run">run query</title>
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
          clipRule="evenodd"
        />
      </svg>{" "}
      Run Query
    </Button>
  </main>
  );
}

export default QueryInput;
