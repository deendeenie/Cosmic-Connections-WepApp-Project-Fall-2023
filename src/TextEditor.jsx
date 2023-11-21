import React from "react";
import 'quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'

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
      <div style={{ display: "grid", justifyContent: "center"}}>
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          placeholder="Start writing.."
          onChange={handleProcedureContentChange}
          style={{ marginTop: "-20px", height: "430px", width: "410px" }}
        >
        </ReactQuill>
      </div>
    </div>
  );

}

export default TextEditor;