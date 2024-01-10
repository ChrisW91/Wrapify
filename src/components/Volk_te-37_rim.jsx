/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 volk_te-37_rim.glb 
Author: lukejdavis3 (https://sketchfab.com/lukejdavis3)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/volk-te-37-rim-0b0e2fe6a72d4801b454d94aaa4ac569
Title: Volk Te-37 Rim
*/

import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'




export function Volk_Te37({ wheelColor, setWheelColor, ...props }) {
  const { nodes, materials } = useGLTF('models/volk_te-37_rim.glb')

  useEffect(() => {
    if (materials.material_0) {
      materials.material_0.color.setStyle(wheelColor)
    }
  }, [wheelColor])


  return (
    <group {...props} dispose={null}>
      <group scale={1.69}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.material_0} />
      </group>
    </group>
  )
}


