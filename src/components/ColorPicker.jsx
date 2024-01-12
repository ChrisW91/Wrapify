

export const ColorPicker = ({ setCarColor, carColor }) => {
  // console.log(carColor);
  // console.log('setCarColor type:', typeof setCarColor);



  const handleColorChange = (color) => {
    if (typeof setCarColor === 'function') {
      setCarColor(color); // Update the car color
    } else {
      console.error('setCarColor is not a function');
    }
  };

  const colorSelection = [
    { imagePath: "./images/colors/firered.png", hexCode: "#D62B1F" },
    { imagePath: "./images/colors/candyred.png", hexCode: "#800020" },
    { imagePath: "./images/colors/lightyellow.png", hexCode: "#FFFF99" },
    { imagePath: "./images/colors/blueice.png", hexCode: "#87CEEB" },
    { imagePath: "./images/colors/greyice.png", hexCode: "#708090" },
    { imagePath: "./images/colors/turquoise.png", hexCode: "#008080" },
    { imagePath: "./images/colors/candygreen.png", hexCode: "#228B22" },
    { imagePath: "./images/colors/candypink.png", hexCode: "#FF69B4" },
    { imagePath: "./images/colors/morpheuspink.png", hexCode: "#FF00FF" },
    { imagePath: "./images/colors/pinkrose.png", hexCode: "#FFB6C1" },
    { imagePath: "./images/colors/candypurple.png", hexCode: "#800080" },
    { imagePath: "./images/colors/morpheuspurple.png", hexCode: "#8A2BE2" },
  ];


  return (
    <>
      <div className="color-pick-container">
        <span >Colour </span>

        <div className="color-menu">

          <div className="color-pallete-div">
            <input
              className="color-pallete"
              type="color"
              value={carColor}
              onChange={(e) => setCarColor(e.target.value)}
            />
            <h2>Colour Palette</h2>
          </div>

          <h2>Popular Picks</h2>

          <div className="color-box-div">

            {colorSelection.map(color => (
              <div key={color.hexCode} >
                <img
                  className="color-box"
                  src={color.imagePath}
                  alt={color.hexCode}
                  onClick={() => handleColorChange(color.hexCode)}
                />
              </div>
            ))}


          </div>





        </div>

      </div>
    </>
  )
}