import React, { Suspense, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import Model from "./Bomb";
import Model from "./Three_js_test_thikness";
import { DirectionalLightHelper } from "three";
// import { DirectionalLightHelper } from "three";
import * as THREE from "three";

import {
  Html,
  Loader,
  Environment,
  OrbitControls,
  FlyControls,
  Stage,
  useHelper,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

export function Rig({ children }) {
  const outer = useRef();
  const inner = useRef();
  useFrame(({ clock }) => {
    // outer.current.position.y = THREE.MathUtils.lerp(
    //   outer.current.position.y,
    //   0,
    //   0.05
    // );
    // inner.current.rotation.y = Math.sin(clock.getElapsedTime() / 8) * Math.PI;
    // inner.current.position.z = 5 + -Math.sin(clock.getElapsedTime() / 2) * 10;
    // inner.current.position.y = -5 + Math.sin(clock.getElapsedTime() / 2) * 2;
  });
  return (
    <group position={[0, 0, 0]} ref={outer}>
      <group ref={inner}>{children}</group>
    </group>
  );
}
// spotLight helper 설정
function SpotLights() {
  const light = useRef();
  useHelper(light, THREE.SpotLightHelper, "red");
  return (
    <spotLight
      ref={light}
      intensity={1}
      position={[10, 0, 5]}
      shadow-mapSize-width={1}
      shadow-mapSize-height={1}
      castShadow
      shadow-bias={-0.001}
    />
  );
}

function CameraHelper() {
  const camera = useRef();
  useHelper(camera, THREE.CameraHelper, "green");
  return <perspectiveCamera ref={camera} args={[30, 1, 0.1, 100]} />;
}
// function Lights() {
//   const light = useRef();
//   useHelper(light, THREE.AmbientLight, "red");
//   return (
//     <spotLight
//       ref={light}
//       intensity={1}
//       position={[10, 30, 5]}
//       shadow-mapSize-width={1}
//       shadow-mapSize-height={1}
//       castShadow
//       shadow-bias={-0.001}
//     />
//   );
// }

export function BombModel() {
  const keyMap = {
    LEFT: "a",
    UP: "w",
    RIGHT: "d",
    BOTTOM: "s",
  };
  return (
    <Canvas
      concurrent
      // gl={{ alpha: false }}
      camera={{ position: [0, 20, 0], fov: 50 }}
      // onCreated={({ gl, camera }) => {
      //   camera.lookAt(0, 0, 0);
      // }}
      // shadows={true}
    >
      {/* <color attach="background" args={["#fff0ea"]} /> */}
      {/* <fog attach="fog" args={["#fff0ea", 10, 60]} /> */}
      <Suspense
        fallback={
          <Html center>
            <Loader />
          </Html>
        }
      >
        <Rig>
          {/* <directionalLight position={[0, 100, 0]} color="white" />
          <directionalLight position={[100, 0, 0]} color="white" />
          <directionalLight position={[0, 0, 100]} color="white" /> */}
          <ambientLight intensity={1} />
          {/* <hemisphereLight
            skyColor="green"
            groundColor="yellow"
            intensity={1}
          /> */}
          <Model />
          {/* <Environment preset="night" /> */}
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            keys={keyMap}
          />
          {/* <FlyControls /> */}
          {/* <Stage
            contactShadow // Optional: creates a contactshadow underneath the content (default=true)
            shadows // Optional: lights cast shadow (default=true)
            adjustCamera={false} // Optional: zooms the content in (default=true)
            intensity={0.5} // Optional: light intensity (default=1)
            environment="city" // Optional: environment (default=city)
            preset="rembrandt" // Optional: rembrandt (default) | portrait | upfront | soft
            // controls={controlsRef} // Optional: recalculates control target for correctness
          > */}
          <CameraHelper>
            {/* boxGeometry 만들기 */}
            {/* <mesh
              ref={mesh}
              scale={[1, 1, 1]}
              rotation={[-Math.PI / 2, 0, 0]}
              onPointerOver={(e) => e.stopPropagation()}
            >
            <boxGeometry args={[150, 20, 10]} /> // 사이즈
            <meshStandardMaterial color="blue" transparent /> // 색상
            </mesh> */}
          </CameraHelper>
          {/* spotLight helper 설정 */}
          <SpotLights />
          {/* </Stage> */}
        </Rig>
      </Suspense>
    </Canvas>
  );
}
export default BombModel;
