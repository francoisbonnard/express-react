    /*
    try {
      console.log("line 21")
      const res = await axios.post('/upload', formData, {
        headers: { 'content-type': 'multipart/form-data' }
      });
      console.log("line 27")
      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
    } catch (err) {
      if (err.response.status === 500) {
        console.log("There was a pb with the server");
      } else {
        console.log("else err");
        console.log(err.response.data.msg);
      }*/