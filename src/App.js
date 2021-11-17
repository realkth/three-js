import React, { Suspense, useRef } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Model from "./Bomb";
import * as THREE from "three";
import {
  Html,
  Loader,
  Environment,
  OrbitControls,
  FlyControls,
} from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";

export function Rig({ children }) {
  const outer = useRef();
  const inner = useRef();
  useFrame(({ clock }) => {
    outer.current.position.y = THREE.MathUtils.lerp(
      outer.current.position.y,
      0,
      0.05
    );
    inner.current.rotation.y = Math.sin(clock.getElapsedTime() / 8) * Math.PI;
    inner.current.position.z = 5 + -Math.sin(clock.getElapsedTime() / 2) * 10;
    inner.current.position.y = -5 + Math.sin(clock.getElapsedTime() / 2) * 2;
  });
  return (
    <group position={[0, -100, 0]} ref={outer}>
      <group ref={inner}>{children}</group>
    </group>
  );
}

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
      gl={{ alpha: false }}
      camera={{ position: [0, 15, 30], fov: 30 }}
      onCreated={({ gl, camera }) => {
        camera.lookAt(0, 0, 0);
      }}
    >
      <color attach="background" args={["#fff0ea"]} />
      {/* <fog attach="fog" args={["#fff0ea", 10, 60]} /> */}
      <ambientLight intensity={0.1} />

      <Suspense
        fallback={
          <Html center>
            <Loader />
          </Html>
        }
      >
        {/* <Rig> */}
        <Model />
        <Environment preset="sunset" />
        <OrbitControls
          enablePan={true}
          enableZoom={true}
          enableRotate={true}
          keys={keyMap}
        />
        <FlyControls />
        <mesh
          scale={[1, 1, 1]}
          rotation={[-Math.PI / 2, 0, 0]}
          onPointerOver={(e) => e.stopPropagation()}
        ></mesh>
        {/* </Rig> */}
      </Suspense>
    </Canvas>
  );
}
export default BombModel;
