
return (
    <div>
    <interfaceUI />
    <coeur3D />
    <listImage />
    </div>
)

return interfaceUI (
    <div className="flexvert">
        <div className="flexhoriz">
        <WheelColor />
        <Slider />
        </div>
        <div className="flexhoriz">
        <button FileUpload />
        <button reset />
        </div>
    </div>
)

return listImage (
    
)


return (
    <div>
      {openPopupAdd && (
        <div
          className="popupAdd"
          // id={idMessage}
          tabIndex="-1"
          role="dialog"
        >
          <div className="container mt-4">
            <h4 className="display-4 text-center mb-4">
              <i className="fab fa-react"></i>File Upload
            </h4>
            <FileUpload closeWindow={openPopupAdd} imagesNumber={imagesNumber} />
          </div>
        </div>
      )}

      <div className="gallery">
        <div className="interfaceUI">
          <div className="interface-Niv1">
            <div className="wheelcolor">
              <WheelColor
                onChange={(value) => calculateNewlistFromColorPicker(value)}
                currentColor={currentColor}
              />
            </div>
            <ReactSlider
              className="vertical-slider"
              markClassName="markClassName"
              trackClassName="trackClassName"
              thumbClassName="thumbClassName"
              defaultValue={[0, 13, 100]}
              value={posSlider}
              renderThumb={(props, state) => (
                <div {...props}>{state.valueNow}</div>
              )}
              orientation="vertical"
              invert
              minDistance={1}
              onAfterChange={calculateNewlistFromSlider}
            />
          </div>
          <div className="interface-Niv2">
            <button
              class="custom-btn btn-3"
              onClick={() => setOpenPopuAdd(!openPopupAdd)}
            >
              <span>Add img</span>
            </button>
            <button class="custom-btn btn-3" onClick={resetList}>
              <span>Reset</span>
            </button>
          </div>
        </div>
        
        
        <LoaderGl images={images}/>
        {images.map((index, i) => {
          return (
            <div className="itemVert">
              <div className="item" key={i}>
                <img
                  src={`./images/${myjson.images[index].name}`}
                  alt=""
                  onMouseEnter={() => setShowIndex(i)}
                  onMouseLeave={() => setShowIndex(null)}
                />
                <div className="allBoxes">
                  {myjson.images[index].palette.map((index2, j) => {
                    const b = myjson.images[index].palette[j];
                    let classNameDiv = "colorBox";
                    if (RefArrayPalette[index][j] === 1) {
                      classNameDiv = "colorBox2";
                    }
                    return (
                      <div
                        key={j}
                        className={classNameDiv}
                        style={{ backgroundColor: index2 }}
                        onClick={calculateNewList}
                      />
                    );
                  }, (i, index))}
                </div>
              </div>
              <div
                className="prompt"
                style={{ visibility: showIndex === i ? "visible" : "hidden" }}
              >
                {myjson.images[index].prompt}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

