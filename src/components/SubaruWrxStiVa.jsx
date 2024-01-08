/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 subaru_wrx_sti.glb 
Author: skyfaltus (https://sketchfab.com/skyfaltus)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/subaru-wrx-sti-36f4a47b619a49bda4c1870e7833b25b
Title: Subaru WRX STI
*/

import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import { extend } from '@react-three/fiber';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'


// useGLTF.preload('models/subaru_wrx_sti2.glb', (loader) => {
//   const dracoLoader = new DRACOLoader();
//   dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');
//   loader.setDRACOLoader(dracoLoader);
// });

// export function SubaruWrxStiVa({ carColor, brakeColor, hideSpoiler, setIsLoading, reverseLightTint, ...props }) {

//   // const { nodes, materials } = useGLTF('https://pub-1e74d0bc9c59443f90fdc7adddccf38e.r2.dev/subaru_wrx_sti.glb')
//   const { nodes, materials } = useGLTF('models/subaru_wrx_sti2.glb')

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.5.6/');

// Extend GLTFLoader to use DRACOLoader
extend({ GLTFLoader: () => new GLTFLoader().setDRACOLoader(dracoLoader) });

export function SubaruWrxStiVa({ carColor, brakeColor, hideSpoiler, setIsLoading, reverseLightTint, ...props }) {
  // Use the extended GLTFLoader with DRACOLoader configured
  const { nodes, materials } = useGLTF('models/subaru_wrx_sti2.glb');

  useEffect(() => {
    if (nodes && materials) {
      setIsLoading(false);
      // console.log("setisloading false called");
    }
  }, [nodes, materials, setIsLoading]);


  useEffect(() => {
    if (materials.Car_Paint) {
      materials.Car_Paint.color.setStyle(carColor);
    }
  }, [carColor, materials.Car_Paint]);

  useEffect(() => {
    if (materials.Light_Brake.color) {
      materials.Light_Brake.color.setStyle(brakeColor);
    }
  }, [brakeColor, materials.Light_Brake]);

  useEffect(() => {
    if (materials.Dark_Brake.color) {
      materials.Dark_Brake.color.setStyle(brakeColor);
    }
  }, [brakeColor, materials.Dark_Brake]);


  useEffect(() => {
    if (reverseLightTint) {
      materials.Brake_Light_Glass.color.setHex("#000000");
    } else {
      materials.Brake_Light_Glass.color.setRGB(0.940665205793594, 0.019780569106493832, 0.019780569106493832);
    }
  }, [reverseLightTint, materials.Brake_Light_Glass]);



  return (
    <group {...props} dispose={null} rotation={[0, -0.9, 0]}
      position={[0, -1, 0]}
      scale={1.5}>
      <group rotation={[-Math.PI / 2, 0, Math.PI / 2]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.775, 0.393, 1.468]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[0.034, 0.027, 0.034]}>
            <mesh geometry={nodes.Object_4.geometry} material={materials.Striped_Brake_Disc} />
            <mesh geometry={nodes.Object_5.geometry} material={materials.Rims} />
          </group>
          <group position={[-0.716, 0.393, 1.468]} rotation={[Math.PI / 2, 0, -Math.PI]} scale={0.042}>
            <mesh geometry={nodes.Object_15.geometry} material={materials.Tire_Rubber} />
            <mesh geometry={nodes.Object_16.geometry} material={materials.Tire_Rubber} />
          </group>
          <group position={[0, 0.825, 0]} scale={[1.106, 0.888, 2.325]}>
            <group position={[0, 0, 0.03]} scale={[0.904, 1.126, 0.43]}>
              <mesh geometry={nodes.Object_19.geometry} material={materials.Car_Paint} />
              <mesh geometry={nodes.Object_20.geometry} material={materials.Dark_Plastic} />
            </group>
            <group position={[0, -0.078, 0.014]} scale={[0.904, 1.126, 0.43]}>
              <mesh geometry={nodes.Object_26.geometry} material={materials.Car_Paint} />
              <mesh geometry={nodes.Object_27.geometry} material={materials.Dark_Plastic} />
              <mesh geometry={nodes.Object_28.geometry} material={materials.Dark_Plastic} />
            </group>
            <group position={[-0.008, 0.121, -0.003]} rotation={[-0.008, 0, 0]} scale={[0.193, 0.241, 0.092]}>
              <mesh geometry={nodes.Object_32.geometry} material={materials['Dull_Plastic.001']} />
              <mesh geometry={nodes.Object_33.geometry} material={materials['Dull_Plastic.001']} />
              <mesh geometry={nodes.Object_34.geometry} material={materials['Material.014']} />
            </group>
            <group position={[0, 0, 0.03]} scale={[0.904, 1.126, 0.43]}>
              <mesh geometry={nodes.Object_76.geometry} material={materials.Car_Paint} />
              <mesh geometry={nodes.Object_77.geometry} material={materials.Car_Paint} />
            </group>
            <group position={[0, -0.074, 0.03]} scale={[0.904, 1.126, 0.43]}>
              <mesh geometry={nodes.Object_87.geometry} material={materials.Reflective_Plastic} />
              <mesh geometry={nodes.Object_88.geometry} material={materials.Logo} />
            </group>
            <group scale={[0.908, 1.126, 0.43]}>
              <mesh geometry={nodes.Object_92.geometry} material={materials.Front_Light_Backdrop} />
              <mesh geometry={nodes.Object_93.geometry} material={materials.Light_Bulb} />
            </group>
            <group position={[-0.008, -1.068, -0.073]} rotation={[-0.008, 0, 0]} scale={[0.221, 0.282, 0.108]}>
              <mesh geometry={nodes.Object_105.geometry} material={materials['Dull_Plastic.001']} />
              <mesh geometry={nodes.Object_106.geometry} material={materials['Dull_Plastic.001']} />
              <mesh geometry={nodes.Object_107.geometry} material={materials['Material.014']} />
            </group>
            <group position={[0, 0, -0.236]} scale={[0.904, 1.126, 0.43]}>
              <mesh geometry={nodes.Object_111.geometry} material={materials.Dull_Carbon_Fiber} />
              <mesh geometry={nodes.Object_112.geometry} material={materials.Dull_Carbon_Fiber} />
            </group>

            <group position={[0, 0, 0.03]} scale={[0.904, 1.126, 0.43]}>
              <mesh geometry={nodes.Object_120.geometry} material={materials.Car_Paint} />
              <mesh geometry={nodes.Object_121.geometry} material={materials.Car_Paint} />
            </group>

            <group position={[0, 0, 0.03]} scale={[0.904, 1.126, 0.43]}>
              <mesh geometry={nodes.Object_127.geometry} material={materials.Car_Paint} />
              <mesh geometry={nodes.Object_128.geometry} material={materials.Car_Paint} />
              <mesh geometry={nodes.Object_129.geometry} material={materials.Dull_Plastic} />
            </group>
            <group position={[0, 0.644, 0.251]} rotation={[2.013, 0, Math.PI]} scale={[0.302, 0.179, 0.36]}>
              <mesh geometry={nodes.Object_153.geometry} material={materials.Dull_Plastic} />
              <mesh geometry={nodes.Object_154.geometry} material={materials.Mirror} />
            </group>
            <group position={[0, -0.355, 0.028]} rotation={[-0.008, 0, 0]} scale={[0.899, 1.12, 0.428]}>
              <mesh geometry={nodes.Object_156.geometry} material={materials['Reflective_Plastic.001']} />
              <mesh geometry={nodes.Object_157.geometry} material={materials['Rear_Window_Lights.001']} />
            </group>
            <group position={[0, -0.369, 0.03]} scale={[0.904, 1.126, 0.43]}>
              <mesh geometry={nodes.Object_161.geometry} material={materials.Dull_Plastic} />
              <mesh geometry={nodes.Object_162.geometry} material={materials.Dull_Plastic} />
              <mesh geometry={nodes.Object_163.geometry} material={materials['Material.013']} />
            </group>

            {/* rear wrx logo */}
            <group position={[-0.313, 0.045, -0.952]} rotation={[1.705, 0.021, 3.105]} scale={[0.037, 0.018, 0.046]}>
              <mesh geometry={nodes.Object_167.geometry} material={materials['Logo.002']} />
              <mesh geometry={nodes.Object_168.geometry} material={materials['Reflective_Metal.001']} />
            </group>

            {/* roof */}
            <group position={[0, 0, 0.03]} scale={[0.904, 1.126, 0.43]}>
              <mesh geometry={nodes.Object_170.geometry} material={materials.Car_Paint} />
              <mesh geometry={nodes.Object_171.geometry} material={materials.Reflective_Plastic} />
            </group>

            {/* mirrors */}
            <group position={[0, 0, 0.03]} scale={[0.904, 1.126, 0.43]}>
              <mesh geometry={nodes.Object_181.geometry} material={materials.Car_Paint} />
              <mesh geometry={nodes.Object_182.geometry} material={materials.Reflective_Carbon_Fiber} />
              <mesh geometry={nodes.Object_183.geometry} material={materials.Mirror} />
            </group>

            <group scale={[0.904, 1.126, 0.43]}>
              <mesh geometry={nodes.Object_197.geometry} material={materials.Reflective_Plastic} />
              <mesh geometry={nodes.Object_198.geometry} material={materials.Reflective_Plastic} />
              <mesh geometry={nodes.Object_199.geometry} material={materials.Reflective_Plastic} />
            </group>
            <mesh geometry={nodes.Object_22.geometry} material={materials.Plastic_01} position={[0.003, 0.022, 0.04]} rotation={[-0.008, 0, 0]} scale={[0.915, 1.14, 0.435]} />
            <mesh geometry={nodes.Object_24.geometry} material={materials.Car_Paint} position={[0, 0, 0.03]} scale={[0.904, 1.126, 0.43]} />
            <mesh geometry={nodes.Object_30.geometry} material={materials.Car_Paint} position={[0, 0, 0.03]} scale={[0.904, 1.126, 0.43]} />

            {/* taillight reverse light */}
            {/* material={materials['White_Stained_Glass.001']} */}
            {/* ^^ Original material ^^ */}
            <mesh
              geometry={nodes.Object_36.geometry}

              material={reverseLightTint ? materials.Brake_Light_Glass : materials['White_Stained_Glass.001']}

              position={[0.001, 0.012, 0.031]}
              rotation={[-0.008, 0, 0]}
              scale={[0.904, 1.126, 0.43]}
            />

            {/* rear windscreen */}
            <mesh geometry={nodes.Object_38.geometry} material={materials.Window_Glass} position={[0, -0.358, 0.03]} scale={[0.904, 1.126, 0.43]} />

            <mesh geometry={nodes.Object_40.geometry} material={materials.Plastic_01} position={[0, 0, 0.03]} scale={[0.904, 1.126, 0.43]} />
            <mesh geometry={nodes.Object_42.geometry} material={materials.Dull_Plastic} position={[0, 0, 0.03]} scale={[0.904, 1.126, 0.43]} />
            <mesh geometry={nodes.Object_44.geometry} material={materials.Dull_Plastic} position={[0, 0, 0.03]} scale={[0.904, 1.126, 0.43]} />
            <mesh geometry={nodes.Object_46.geometry} material={materials.Dull_Plastic} position={[0, 0, 0.03]} scale={[0.904, 1.126, 0.43]} />
            <mesh geometry={nodes.Object_48.geometry} material={materials.Dull_Plastic} position={[-0.01, -0.037, 0.304]} rotation={[0.442, 0, 0]} scale={[0.904, 1.067, 0.561]} />
            <mesh geometry={nodes.Object_50.geometry} material={materials['Dark_Plastic.001']} position={[-0.497, -0.482, 0.634]} rotation={[-0.026, -0.02, 1.571]} scale={[0.485, 0.027, 0.185]} />
            <mesh geometry={nodes.Object_52.geometry} material={materials['Dark_Plastic.001']} position={[0.498, -0.482, 0.634]} rotation={[-0.026, 0.019, -1.571]} scale={[-0.485, 0.027, 0.185]} />
            <mesh geometry={nodes.Object_54.geometry} material={materials['Dark_Plastic.001']} position={[-0.497, -0.434, -0.561]} rotation={[-0.026, -0.02, 1.571]} scale={[0.485, 0.027, 0.185]} />
            <mesh geometry={nodes.Object_56.geometry} material={materials['Dark_Plastic.001']} position={[0.498, -0.434, -0.561]} rotation={[-0.026, 0.019, -1.571]} scale={[-0.485, 0.027, 0.185]} />


            <mesh geometry={nodes.Object_58.geometry} material={materials.Dull_Plastic} position={[0.103, -0.008, 0.382]} rotation={[0, -0.001, 0.022]} scale={[-0.904, 1.126, 0.43]} />


            <mesh geometry={nodes.Object_60.geometry} material={materials.Car_Paint} position={[0, 0, 0.03]} scale={[0.904, 1.126, 0.43]} />
            <mesh geometry={nodes.Object_62.geometry} material={materials.Car_Paint} position={[0, 0, 0.03]} scale={[0.904, 1.126, 0.43]} />
            <mesh geometry={nodes.Object_64.geometry} material={materials.Old_White_Metal} position={[-0.468, -0.48, -0.902]} rotation={[1.563, 0.001, 0.001]} scale={[0.045, 0.021, 0.056]} />
            <mesh geometry={nodes.Object_66.geometry} material={materials.Iron_brushed} position={[0.52, -0.479, -0.957]} rotation={[1.563, -0.004, -0.007]} scale={[0.045, 0.021, 0.056]} />
            <mesh geometry={nodes.Object_68.geometry} material={materials.Iron_brushed} position={[0.416, -0.479, -0.96]} rotation={[1.563, -0.012, -0.02]} scale={[0.045, 0.021, 0.056]} />
            <mesh geometry={nodes.Object_70.geometry} material={materials.Iron_brushed} position={[-0.515, -0.479, -0.957]} rotation={[1.563, 0.001, 0.001]} scale={[0.045, 0.021, 0.056]} />
            <mesh geometry={nodes.Object_72.geometry} material={materials.Iron_brushed} position={[-0.411, -0.479, -0.96]} rotation={[1.534, 0.134, 0.089]} scale={[0.045, 0.021, 0.056]} />
            <mesh geometry={nodes.Object_74.geometry} material={materials.Old_White_Metal} position={[0.473, -0.48, -0.902]} rotation={[1.563, -0.006, -0.009]} scale={[0.045, 0.021, 0.056]} />
            <mesh geometry={nodes.Object_79.geometry} material={materials.Dull_Plastic} position={[-0.638, -0.396, 0.961]} rotation={[Math.PI / 2, 0, 0]} scale={[-0.018, 0.009, 0.022]} />
            <mesh geometry={nodes.Object_81.geometry} material={materials.Reflective_Plastic} scale={[0.904, 1.126, 0.43]} />
            <mesh geometry={nodes.Object_83.geometry} material={materials.Car_Paint} position={[0, 0, 0.03]} scale={[0.904, 1.126, 0.43]} />
            <mesh geometry={nodes.Object_85.geometry} material={materials.Dull_Plastic} position={[0, -0.153, 1.026]} rotation={[Math.PI / 2, 0, 0]} scale={[0.028, 0.013, 0.035]} />
            <mesh geometry={nodes.Object_90.geometry} material={materials.Dull_Carbon_Fiber} position={[0, 0, 0.03]} scale={[0.904, 1.126, 0.43]} />
            <mesh geometry={nodes.Object_95.geometry} material={materials.Front_Light_Backdrop} position={[0, 0, 0.03]} scale={[0.904, 1.126, 0.43]} />
            <mesh geometry={nodes.Object_97.geometry} material={materials.Front_Light_Backdrop} scale={[0.904, 1.126, 0.43]} />
            <mesh geometry={nodes.Object_99.geometry} material={materials.Bright_Lights} position={[0, -0.002, 0.03]} scale={[0.904, 1.126, 0.43]} />
            <mesh geometry={nodes.Object_101.geometry} material={materials.White_Glass} position={[0, -0.002, 0.03]} scale={[0.904, 1.126, 0.43]} />
            <mesh geometry={nodes.Object_103.geometry} material={materials.Emblem} position={[0, -0.134, 1.035]} scale={[0.072, 0.046, 0.009]} />

            {/* front diffuser */}
            <mesh geometry={nodes.Object_109.geometry} material={materials.Reflective_Plastic} position={[0, -0.011, 0.03]} scale={[0.914, 1.138, 0.435]} />

            <mesh geometry={nodes.Object_114.geometry} material={materials.Dark_Plastic} position={[0, 0, -0.236]} scale={[0.904, 1.126, 0.43]} />

            {/* front windscreen */}
            <mesh geometry={nodes.Object_116.geometry} material={materials.Window_Glass} position={[0, 0, 0.03]} scale={[0.904, 1.126, 0.43]} />

            <mesh geometry={nodes.Object_118.geometry} material={materials.Reflective_Plastic} position={[0, 0, 0.03]} scale={[0.904, 1.126, 0.43]} />
            <mesh geometry={nodes.Object_123.geometry} material={materials.Small_Lights} scale={[0.904, 1.126, 0.43]} />
            <mesh geometry={nodes.Object_125.geometry} material={materials.Dull_Plastic} position={[-0.011, -0.248, 0.19]} rotation={[-0.579, 0.392, -1.713]} scale={[0.631, 0.583, 0.454]} />
            <mesh geometry={nodes.Object_131.geometry} material={materials.Dull_Plastic} position={[-0.227, 0.153, 0.708]} rotation={[1.119, 0, 0]} scale={[0.018, 0.011, 0.021]} />
            <mesh geometry={nodes.Object_133.geometry} material={materials.Plastic_01} position={[0, -0.032, 0.154]} scale={[0.904, 1.126, 0.43]} />
            <mesh geometry={nodes.Object_135.geometry} material={materials.Logo} position={[-0.817, -0.14, 0.477]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[-0.016, 0.034, 0.042]} />
            <mesh geometry={nodes.Object_137.geometry} material={materials.Reflective_Plastic} position={[0, 0.822, -0.424]} scale={[1.212, 1.184, 0.452]} />

            {/* tail light main object*/}
            <mesh geometry={nodes.Object_139.geometry} material={materials.material_0} position={[0, 0, 0.478]} scale={[0.904, 1.126, 0.43]} />

            <mesh geometry={nodes.Object_141.geometry} material={materials.material_0} position={[0, -0.001, 0.03]} rotation={[0.001, 0, 0]} scale={[0.904, 1.126, 0.43]} />

            {/* rear brake light */}
            <mesh geometry={nodes.Object_143.geometry} material={materials['Bright_Lights.001']} position={[0.001, 0.011, -0.05]} rotation={[-0.008, 0, 0]} scale={[0.904, 1.126, 0.43]} />

            {/* tail light main tint */}
            <mesh geometry={nodes.Object_145.geometry} material={materials.Brake_Light_Glass} position={[0, -0.001, 0.03]} rotation={[0.001, 0, 0]} scale={[0.904, 1.126, 0.43]} />

            {/* rear sub emblem */}
            <mesh geometry={nodes.Object_147.geometry} material={materials.Emblem} position={[0, 0.346, -0.941]} scale={[0.05, 0.032, 0.006]} />

            {/* spoiler */}

            {!hideSpoiler && <mesh geometry={nodes.Object_149.geometry} material={materials.Car_Paint} position={[0, 0, 0.017]} scale={[0.904, 1.126, 0.43]} />}

            {!hideSpoiler && <mesh geometry={nodes.Object_151.geometry} material={materials.Car_Paint} position={[0, 0.001, 0.015]} rotation={[0.001, 0, 0]} scale={[0.904, 1.126, 0.43]} />}


            <mesh geometry={nodes.Object_159.geometry} material={materials.Brake_Light_Glass} position={[0, -0.373, 0.033]} scale={[0.904, 1.126, 0.43]} />
            <mesh geometry={nodes.Object_165.geometry} material={materials.Logo} position={[0.817, -0.14, 0.477]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.016, 0.034, 0.042]} />
            <mesh geometry={nodes.Object_173.geometry} material={materials.Reflective_Plastic} position={[0, 0.026, 0.03]} scale={[0.904, 1.126, 0.43]} />
            <mesh geometry={nodes.Object_175.geometry} material={materials.Reflective_Plastic} position={[0, -0.636, 0.03]} scale={[0.904, 1.126, 0.43]} />
            <mesh geometry={nodes.Object_177.geometry} material={materials.Side_Light} position={[0, -0.002, 0.03]} scale={[0.904, 1.126, 0.43]} />
            <mesh geometry={nodes.Object_179.geometry} material={materials.Reflective_Carbon_Fiber} position={[0, 0, 0.03]} scale={[0.904, 1.126, 0.43]} />
            <mesh geometry={nodes.Object_185.geometry} material={materials.Window_Glass} position={[0, 0, 0.03]} scale={[0.904, 1.126, 0.43]} />
            <mesh geometry={nodes.Object_187.geometry} material={materials.black_rubber} position={[0, -0.126, 0.722]} scale={[0.904, 1.126, 0.43]} />
            <mesh geometry={nodes.Object_189.geometry} material={materials.Dull_Plastic} position={[0.356, 0.219, 0.271]} rotation={[-Math.PI, 0, -Math.PI]} scale={[0.213, 0.266, 0.101]} />
            <mesh geometry={nodes.Object_191.geometry} material={materials.Car_Paint} position={[0, 0, 0.03]} scale={[0.904, 1.126, 0.43]} />
            <mesh geometry={nodes.Object_193.geometry} material={materials.Car_Paint} position={[0, -0.012, 0.168]} scale={[0.904, 1.126, 0.43]} />
            <mesh geometry={nodes.Object_195.geometry} material={materials.Dull_Plastic} position={[0.005, 0.258, 0.167]} scale={[0.796, 1.126, 0.43]} />
          </group>
          <group position={[0, 0.825, 0.015]} rotation={[1.57, 0, -Math.PI / 2]} scale={[0.034, 0.027, 0.034]}>
            <mesh geometry={nodes.Object_201.geometry} material={materials.Light_Brake} />
            <mesh geometry={nodes.Object_202.geometry} material={materials.Light_Brake} />
            <mesh geometry={nodes.Object_203.geometry} material={materials.Light_Brake} />
            <mesh geometry={nodes.Object_204.geometry} material={materials.Dark_Brake} />
            <mesh geometry={nodes.Object_205.geometry} material={materials.Dark_Brake} />
          </group>
          <group position={[0, 0.825, 0.015]} rotation={[1.57, 0, -Math.PI / 2]} scale={[0.034, 0.027, 0.034]}>
            <mesh geometry={nodes.Object_207.geometry} material={materials.Light_Brake} />
            <mesh geometry={nodes.Object_208.geometry} material={materials.Light_Brake} />
            <mesh geometry={nodes.Object_209.geometry} material={materials.Light_Brake} />
            <mesh geometry={nodes.Object_210.geometry} material={materials.Dark_Brake} />
            <mesh geometry={nodes.Object_211.geometry} material={materials.Dark_Brake} />
          </group>
          <group position={[0, 0.825, 0.015]} rotation={[1.57, 0, -Math.PI / 2]} scale={[0.034, 0.027, 0.034]}>
            <mesh geometry={nodes.Object_213.geometry} material={materials.Light_Brake} />
            <mesh geometry={nodes.Object_214.geometry} material={materials.Light_Brake} />
            <mesh geometry={nodes.Object_215.geometry} material={materials.Light_Brake} />
            <mesh geometry={nodes.Object_216.geometry} material={materials.Dark_Brake} />
            <mesh geometry={nodes.Object_217.geometry} material={materials.Dark_Brake} />
          </group>
          <group position={[0, 0.825, 0.015]} rotation={[1.57, 0, -Math.PI / 2]} scale={[0.034, 0.027, 0.034]}>
            <mesh geometry={nodes.Object_219.geometry} material={materials.Light_Brake} />
            <mesh geometry={nodes.Object_220.geometry} material={materials.Light_Brake} />
            <mesh geometry={nodes.Object_221.geometry} material={materials.Light_Brake} />
            <mesh geometry={nodes.Object_222.geometry} material={materials.Dark_Brake} />
            <mesh geometry={nodes.Object_223.geometry} material={materials.Dark_Brake} />
          </group>
          <group position={[-0.736, 0.384, -1.323]} rotation={[Math.PI / 2, 0, Math.PI]} scale={0.042}>
            <mesh geometry={nodes.Object_231.geometry} material={materials.Tire_Rubber} />
            <mesh geometry={nodes.Object_232.geometry} material={materials.Tire_Rubber} />
          </group>
          <group position={[-0.795, 0.384, -1.323]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[0.034, 0.027, 0.034]}>
            <mesh geometry={nodes.Object_236.geometry} material={materials.Striped_Brake_Disc} />
            <mesh geometry={nodes.Object_237.geometry} material={materials.Rims} />
          </group>
          <group position={[0.786, 0.391, -1.319]} rotation={[1.537, -0.036, -1.572]} scale={[0.034, 0.027, 0.034]}>
            <mesh geometry={nodes.Object_239.geometry} material={materials.Striped_Brake_Disc} />
            <mesh geometry={nodes.Object_240.geometry} material={materials.Rims} />
          </group>
          <group position={[0.727, 0.393, -1.319]} rotation={[1.537, -0.036, -0.001]} scale={0.042}>
            <mesh geometry={nodes.Object_250.geometry} material={materials.Tire_Rubber} />
            <mesh geometry={nodes.Object_251.geometry} material={materials.Tire_Rubber} />
          </group>
          <group position={[0.775, 0.393, 1.463]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.034, 0.027, 0.034]}>
            <mesh geometry={nodes.Object_253.geometry} material={materials.Striped_Brake_Disc} />
            <mesh geometry={nodes.Object_254.geometry} material={materials.Rims} />
          </group>
          <group position={[0.716, 0.393, 1.463]} rotation={[Math.PI / 2, 0, 0]} scale={0.042}>
            <mesh geometry={nodes.Object_264.geometry} material={materials.Tire_Rubber} />
            <mesh geometry={nodes.Object_265.geometry} material={materials.Tire_Rubber} />
          </group>

          {/* Rims */}
          <mesh geometry={nodes.Object_7.geometry} material={materials.Rims} position={[-0.779, 0.393, 1.468]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={[0.93, 0.857, 0.93]} />
          <mesh geometry={nodes.Object_9.geometry} material={materials.Wheel_Rim} position={[-0.775, 0.393, 1.468]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[0.034, 0.027, 0.034]} />
          <mesh geometry={nodes.Object_11.geometry} material={materials.Logo} position={[-0.897, 0.393, 1.468]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.035} />
          <mesh geometry={nodes.Object_13.geometry} material={materials.Wheel_Rim} position={[-0.817, 0.393, 1.468]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[0.035, 0.028, 0.035]} />
          <mesh geometry={nodes.Object_225.geometry} material={materials.Wheel_Rim} position={[-0.795, 0.384, -1.323]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[0.034, 0.027, 0.034]} />
          <mesh geometry={nodes.Object_227.geometry} material={materials.Rims} position={[-0.799, 0.384, -1.323]} rotation={[Math.PI, 0, Math.PI / 2]} scale={[0.93, 0.857, 0.93]} />
          <mesh geometry={nodes.Object_229.geometry} material={materials.Wheel_Rim} position={[-0.836, 0.384, -1.323]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={[0.035, 0.028, 0.035]} />
          <mesh geometry={nodes.Object_234.geometry} material={materials.Logo} position={[-0.916, 0.384, -1.323]} rotation={[Math.PI / 2, 0, Math.PI / 2]} scale={0.035} />
          <mesh geometry={nodes.Object_242.geometry} material={materials.Rims} position={[0.79, 0.39, -1.319]} rotation={[-0.033, 0.001, -1.607]} scale={[0.93, 0.857, 0.93]} />
          <mesh geometry={nodes.Object_244.geometry} material={materials.Wheel_Rim} position={[0.786, 0.391, -1.319]} rotation={[1.537, -0.036, -1.572]} scale={[0.034, 0.027, 0.034]} />
          <mesh geometry={nodes.Object_246.geometry} material={materials.Logo} position={[0.907, 0.386, -1.319]} rotation={[1.537, -0.036, -1.572]} scale={0.035} />
          <mesh geometry={nodes.Object_248.geometry} material={materials.Wheel_Rim} position={[0.828, 0.389, -1.319]} rotation={[1.537, -0.036, -1.572]} scale={[0.035, 0.028, 0.035]} />
          <mesh geometry={nodes.Object_256.geometry} material={materials.Rims} position={[0.779, 0.393, 1.463]} rotation={[0, 0, -Math.PI / 2]} scale={[0.93, 0.857, 0.93]} />
          <mesh geometry={nodes.Object_258.geometry} material={materials.Wheel_Rim} position={[0.775, 0.393, 1.463]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.034, 0.027, 0.034]} />
          <mesh geometry={nodes.Object_260.geometry} material={materials.Logo} position={[0.897, 0.393, 1.463]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={0.035} />
          <mesh geometry={nodes.Object_262.geometry} material={materials.Wheel_Rim} position={[0.817, 0.393, 1.463]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} scale={[0.035, 0.028, 0.035]} />
        </group>
      </group>
    </group>
  )
}

// useGLTF.preload('https://pub-1e74d0bc9c59443f90fdc7adddccf38e.r2.dev/subaru_wrx_sti.glb')
// useGLTF.preload('models/subaru_wrx_sti.glb')
