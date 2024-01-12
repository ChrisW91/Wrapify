


export const CustomOptions = ({ brakeColor, setBrakeColor, hideSpoiler, handleHideSpoilerClick, setReverseLightTint, reverseLightTint, setIsStockSelected, setIsTE37Selected, setWheelColor }) => {


  const handleCheckboxChange = () => {
    setReverseLightTint(prevState => !prevState);
  };

  const handleRimsChange = (value) => {
    setIsStockSelected(false)
    setIsTE37Selected(false)

    if (value === 'stock') {
      setIsStockSelected(true)
    } else if (value === 'te-37') {
      setIsTE37Selected(true)
    }
  }

  const handleRimColorChange = (value) => {
    setWheelColor(value)

  }



  return (
    <>
      <div className="button-container">
        <div>
          <button
            id="spoilerButton"
            className={`btn ${hideSpoiler ? 'active' : ''}`}
            onClick={handleHideSpoilerClick}
          >
            Hide Spoiler
          </button>
        </div>
        <div>
          <button
            id="tailLightTintButton"
            className={`btn ${reverseLightTint ? 'active' : ''}`}
            onClick={handleCheckboxChange}
          >
            Tail-Light Tint
          </button>
        </div>



        <div className="dropdown wheel-dropdown">
          <button className="dropbtn btn">Wheels</button>
          <div className="dropdown-content">
            <a href="#" onClick={() => handleRimsChange('stock')}>Stock</a>
            <a href="#" onClick={() => handleRimsChange('te-37')}>TE-37</a>
          </div>
        </div>

        <div className="dropdown wheel-color-dropdown">
          <button className="dropbtn btn">Wheel Color</button>
          <div className="dropdown-content">
            <a href="#" onClick={() => handleRimColorChange('#000000')}>Black</a>
            <a href="#" onClick={() => handleRimColorChange('#FFFFFF')}>White</a>
            <a href="#" onClick={() => handleRimColorChange('#b3a31e')}>Gold</a>
            <a href="#" onClick={() => handleRimColorChange('#c0c0c0')}>Silver</a>
            <a href="#" onClick={() => handleRimColorChange('#767676')}>Dark Grey</a>
          </div>
        </div>

      </div>


      <div className="brake-color">
        <span>Brake Calipers: </span>
        <input
          className="brake-color-pallete"
          type="color"
          value={brakeColor}
          onChange={(e) => setBrakeColor(e.target.value)}
        />
      </div>

    </>
  )
}