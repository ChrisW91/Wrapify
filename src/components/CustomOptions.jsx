


export const CustomOptions = ({ brakeColor, setBrakeColor, hideSpoiler, handleHideSpoilerClick, setReverseLightTint, reverseLightTint }) => {


  const handleCheckboxChange = (event) => {
    setReverseLightTint(event.target.checked);
  };


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



      <div className="brake-color">
        <span>Brake Calipers: </span>
        <input
          className="brake-color-pallete"
          type="color"
          value={brakeColor || "#CFF702"}
          onChange={(e) => setBrakeColor(e.target.value)}
        />
      </div>

    </>
  )
}