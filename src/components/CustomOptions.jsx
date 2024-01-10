


export const CustomOptions = ({ brakeColor, setBrakeColor, hideSpoiler, handleHideSpoilerClick, setReverseLightTint, reverseLightTint, setIsStockSelected, setIsTE37Selected, setWheelColor }) => {


  const handleCheckboxChange = (event) => {
    setReverseLightTint(event.target.checked);
  };

  const handleRimsChange = (event) => {
    setIsStockSelected(false)
    setIsTE37Selected(false)

    if (event.target.value === 'stock') {
      setIsStockSelected(true)
    } else if (event.target.value === 'te-37') {
      setIsTE37Selected(true)
    }
  }

  const handleRimColorChange = (event) => {
    setWheelColor(event.target.value)

  }



  return (
    <>
      <div>
        <label id="spoilerCheckboxLabel">Hide Spoiler:
          <input
            className="checkbox"
            type="checkbox"
            id="spoilerCheckbox"
            checked={hideSpoiler}
            onChange={handleHideSpoilerClick}
          />

        </label>


        <div>
          <label id="tailLightTintCheckbox">Tail-Light Tint:
            <input
              className="checkbox"
              type="checkbox"
              id="tailLightTintCheckbox"
              checked={reverseLightTint}
              onChange={handleCheckboxChange}
            />
          </label>
        </div>
      </div>

      <div>
        <label>
          Wheels:
          <select onChange={handleRimsChange}>
            <option value="stock">Stock</option>
            <option value="te-37">TE-37</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Wheel Color:
          <select onChange={handleRimColorChange}>
            <option value="#000000">Black</option>
            <option value="#FFFFFF">White</option>
            <option value="#b3a31e">Gold</option>
            <option value="#6E6767">Grey</option>
          </select>
        </label>
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