/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/3d/bomb/bomb.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.Big_cable.geometry}
        material={materials["Black tube"]}
      />
      <mesh
        geometry={nodes.Handles.geometry}
        material={nodes.Handles.material}
      />
      <mesh geometry={nodes.Main.geometry} material={nodes.Main.material} />
      <mesh geometry={nodes.Cube005.geometry} material={materials.Black} />
      <mesh
        geometry={nodes.Cube005_1.geometry}
        material={nodes.Cube005_1.material}
      />
      <mesh geometry={nodes.Main002.geometry} material={materials.countdown} />
      <mesh
        geometry={nodes.Cable_Front.geometry}
        material={materials["Red Cable"]}
      />
      <mesh
        geometry={nodes.BezierCurve003.geometry}
        material={materials["Blue Cable"]}
      />
      <mesh
        geometry={nodes.BezierCurve004.geometry}
        material={materials["Yellow Cable"]}
      />
      <mesh
        geometry={nodes.BezierCurve005.geometry}
        material={materials["Green Cable"]}
      />
      <mesh
        geometry={nodes.Small_Cable.geometry}
        material={nodes.Small_Cable.material}
      />
      <mesh
        geometry={nodes.BezierCurve008.geometry}
        material={materials["Material.001"]}
      />
      <mesh geometry={nodes.Holder.geometry} material={nodes.Holder.material} />
      <mesh
        geometry={nodes.Circle001.geometry}
        material={nodes.Circle001.material}
      />
      <mesh
        geometry={nodes.Circle002.geometry}
        material={nodes.Circle002.material}
      />
      <mesh
        geometry={nodes.Circle003.geometry}
        material={nodes.Circle003.material}
      />
      <mesh
        geometry={nodes.Circle004.geometry}
        material={nodes.Circle004.material}
      />
      <mesh
        geometry={nodes.Circle005.geometry}
        material={nodes.Circle005.material}
      />
      <mesh
        geometry={nodes.Circle006.geometry}
        material={nodes.Circle006.material}
      />
      <mesh
        geometry={nodes.Circle007.geometry}
        material={nodes.Circle007.material}
      />
      <mesh
        geometry={nodes.Circle008.geometry}
        material={nodes.Circle008.material}
      />
      <mesh geometry={nodes.Siren.geometry} material={nodes.Siren.material} />
      <mesh
        geometry={nodes.Siren_Holder.geometry}
        material={nodes.Siren_Holder.material}
      />
    </group>
  );
}

useGLTF.preload("/3d/bomb/bomb.gltf");
