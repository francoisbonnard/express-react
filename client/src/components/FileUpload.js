import React, { Fragment } from "react";

const FileUpload = () => {
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
          className="btn btn-primary btn-block mt-4"
        />
      </form>
    </Fragment>
  );
};

export default FileUpload;
