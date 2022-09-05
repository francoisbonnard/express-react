import React, { Fragment } from "react";

const FileUpload = (props) => {
  return (
    <Fragment>
      <form>
        <div class="input-group mb-3">
          <input type="file" class="form-control" id="inputGroupFile02" />
          <label class="input-group-text" htmlFor="inputGroupFile02">
            Upload
          </label>
        </div>
        <input
          type="submit"
          value="Upload"
          className="custom-btn btn-3"
        />
        <input
          type="submit"
          value="Close"
          className="custom-btn btn-3"
        />
      </form>
    </Fragment>
  );
};

export default FileUpload;
