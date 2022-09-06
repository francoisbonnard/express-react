import React, { Fragment, useState } from "react";
import axios from "axios";

const FileUpload = (props) => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});

  const onChange = (e) => {
    console.log(e.target.files[0], e.target.files[0].name);
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", file);
    console.log("line 18", formData);
    console.log(typeof formData);
    console.log("line 18+", file);

    const config = {
      headers: { "content-type": "multipart/form-data" }
    };
    axios
      .post("/upload", formData, config)
      .then((res) => {
        const { fileName, filePath } = res.data;
        setUploadedFile({ fileName, filePath });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div class="input-group mb-3">
          <input
            type="file"
            class="form-control"
            // class="custom-file_input"
            id="customFile"
            onChange={onChange}
          />
          {/* <label class="input-group-text" htmlFor="customFile">
            {filename}
          </label> */}
        </div>
        <input type="submit" value="Upload" className="custom-btn btn-3" />
        <input type="submit" value="Close" className="custom-btn btn-3" />
      </form>
    </Fragment>
  );
};

export default FileUpload;
