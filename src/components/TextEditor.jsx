import React from "react";
import ReactQuill from 'react-quill'
import 'quill/dist/quill.snow.css'
import './CreateUpdateEntry.css'

const TextEditor = () => {
  
  var modules = {
    toolbar: [
      [{ size: ["small", false, "large", "huge"] }],
      ["bold", "italic", "underline", "strike"],
    ]
  };

  var formats = [
    "header", "height", "bold", "italic",
    "underline", "strike",
  ];

  const handleProcedureContentChange = (content) => {
    console.log("content---->", content);
  };

  return (
    <div >
      <div className="entry-text-editor" style={{ display: "grid", justifyContent: "center"}}>
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          placeholder="Start writing.."
          onChange={handleProcedureContentChange}
        >
        </ReactQuill>
      </div>
    </div>
  );

}

export default TextEditor;