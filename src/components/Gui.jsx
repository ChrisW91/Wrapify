import { CarModelPicker } from "./CarmodelPicker"
import { ColorPicker } from "./ColorPicker"
import { CustomOptions } from "./CustomOptions"




const Gui = ({ setCarColor, carColor, showCarModel, setShowCarModel, setIsLoading, brakeColor, setBrakeColor, setHideSpoiler, hideSpoiler, setReverseLightTint, reverseLightTint, setIsStockSelected, setIsTE37Selected, setWheelColor }) => {


  const handleCarModelClick = () => {
    setShowCarModel(true);
    setIsLoading(true);
    // console.log("setIsloading true called");
  };

  const handleHideSpoilerClick = () => {
    setHideSpoiler(prevHideSpoiler => !prevHideSpoiler);
  }

  return (
    <>

      {!showCarModel && (<div className="gui-container-left">
        <CarModelPicker
          showCarModel={showCarModel}
          setShowCarModel={setShowCarModel}
          onModelClick={handleCarModelClick}
        />
      </div>
      )}



      {showCarModel && (
        <div className="gui-container-right">
          <ColorPicker
            setCarColor={setCarColor}
            carColor={carColor}
          />
        </div>
      )}

      {showCarModel && (<div className="gui-container-bot">

        <CustomOptions
          brakeColor={brakeColor}
          setBrakeColor={setBrakeColor}
          hideSpoiler={hideSpoiler}
          handleHideSpoilerClick={handleHideSpoilerClick}
          reverseLightTint={reverseLightTint}
          setReverseLightTint={setReverseLightTint}
          setIsStockSelected={setIsStockSelected}
          setIsTE37Selected={setIsTE37Selected}
          setWheelColor={setWheelColor}
        />

      </div>)}

    </>
  )
}

export default Gui