


export const CarModelPicker = ({ showCarModel, setShowCarModel, onModelClick }) => {

  const handleImageClick = () => {
    // console.log("handleimageclick call");
    setShowCarModel(true);
    if (onModelClick) {
      // console.log("handleimageclick if statement call")
      onModelClick();
    }
  };

  return (
    <>

      <div className="model-pick-container">
        <span>Car Models</span>

        <h3>Subaru WRX</h3>
        <img
          src="./images/cars/wrx_2018.png"
          alt="Subaru WRX"
          onClick={handleImageClick}
        />

      </div>
    </>
  )
}