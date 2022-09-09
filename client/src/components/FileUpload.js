import React, { Fragment, useState } from "react";
import axios from "axios";
import myjson from "../refs.json";

const FileUpload = (props) => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Choose File");
  const [uploadedFile, setUploadedFile] = useState({});

  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };

  const addFileToJson = (fileName) => {
    console.log("line 16",props.imagesNumber)
    var NewImg = {
      name: "FLA420-008.jpg",
      palette: [
        "#b43f45",
        "#1c2c6c",
        "#e5c8c0",
        "#ab6257",
        "#313449",
        "#b1b5c1",
      ],
      tags: [0, 3],
      prompt: "retro 1980 computer tech character",
    };
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", file);
    console.log(typeof formData);

    const config = { headers: { "content-type": "multipart/form-data" } };
    axios
      .post("http://localhost:5000/upload", formData, config)
      .then((res) => {
        const { fileName, filePath } = res.data;
        console.log("line 43", res.data);
        addFileToJson(fileName)
        setUploadedFile({ fileName, filePath });
        console.log("line 46");
      })
      .catch((error) => {
        console.log("line 27", error);
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
