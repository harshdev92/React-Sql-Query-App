import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools"

import { Button } from "../general/Button";
import { ReactComponent as PlayIcon } from './../../assets/image/playIcon.svg'


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
      <label htmlFor="query-editor">
        <AceEditor
        aria-label="query-editor"
        mode="mysql"
        theme="tomorrow"
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
        width="50%"
        showPrintMargin={false}
        showGutter
        placeholder="Write your Query here..."
            
      />
    </label>
    <Button handleClick={onSubmit} className="fas fa-play">
      <PlayIcon />
      Run Query
    </Button>
  </main>
  );
}

export default QueryInput;
