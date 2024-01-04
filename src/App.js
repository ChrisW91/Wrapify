
import { Canvas } from '@react-three/fiber';
import { SubaruWrxStiVa } from './components/SubaruWrxStiVa'
import * as THREE from 'three'
import Gui from './components/Gui';
import { useState } from 'react';
import { OrbitControls } from '@react-three/drei';
import { LoadingIndicator } from './components/LoadingIndicator';
import { Popup } from './components/Popup';






const App = () => {

  const [brakeColor, setBrakeColor] = useState('#CFF702')
  const [carColor, setCarColor] = useState('#0736F8')
  const [showCarModel, setShowCarModel] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hideSpoiler, setHideSpoiler] = useState(false)
  const [reverseLightTint, setReverseLightTint] = useState(false);




  return (
    <>
      {isLoading && <LoadingIndicator />}
      {!showCarModel && <Popup />}

      <div className="canvas-container">
        <div className='car-canvas'>
          <Canvas

            camera={{
              fov: 75,
              near: 0.1,
              far: 100,
              position: [0, 3, 6],
            }}
          >

            <OrbitControls
              minDistance={4}
              maxDistance={15}
              mouseButtons={{
                LEFT: THREE.MOUSE.ROTATE,
                MIDDLE: THREE.MOUSE.DOLLY,
                RIGHT: null
              }} />


            <directionalLight position={[0, 5, 0]} intensity={2} />
            <directionalLight position={[5, 2, 0]} intensity={2} />
            <directionalLight position={[-5, 2, 0]} intensity={2} />
            <directionalLight position={[0, 2, 5]} intensity={2} />
            <directionalLight position={[0, 2, -5]} intensity={2} />


            {showCarModel && <SubaruWrxStiVa
              carColor={carColor}
              setIsLoading={setIsLoading}
              brakeColor={brakeColor}
              hideSpoiler={hideSpoiler}
              setReverseLightTint={setReverseLightTint}
              reverseLightTint={reverseLightTint}
            />}



          </Canvas>

        </div>

      </div >
      <Gui
        setCarColor={setCarColor}
        carColor={carColor}
        showCarModel={showCarModel}
        setShowCarModel={setShowCarModel}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
        brakeColor={brakeColor}
        setBrakeColor={setBrakeColor}
        hideSpoiler={hideSpoiler}
        setHideSpoiler={setHideSpoiler}
        setReverseLightTint={setReverseLightTint}
        reverseLightTint={reverseLightTint}
      />


    </>
  );
}




export default App;