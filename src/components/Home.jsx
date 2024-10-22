import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';
import './Home.css';

const AnimatedText = ({ text, position, rotation }) => {
  const textRef = useRef();

  useFrame(({ clock }) => {
    textRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.2 + position[1];
  });

  return (
    <Text
      ref={textRef}
      position={position}
      rotation={rotation}
      fontSize={0.5}
      color="#00ffff"
    >
      {text}
    </Text>
  );
};

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <AnimatedText text="Welcome" position={[-2, 1, 0]} rotation={[0, 0, 0]} />
      <AnimatedText text="to my" position={[0, 0, 0]} rotation={[0, 0, 0]} />
      <AnimatedText text="Portfolio" position={[2, -1, 0]} rotation={[0, 0, 0]} />
      <OrbitControls enableZoom={false} />
    </>
  );
};

const Home = () => {
  return (
    <div className="home">
      <div className="canvas-container">
        <Canvas>
          <Scene />
        </Canvas>
      </div>
      <div className="content">
        <h1 className="neon-text">John Doe</h1>
        <p>Web Developer & 3D Enthusiast</p>
        <div className="cta-buttons">
          <a href="#" className="btn btn-primary">Hire Me</a>
          <a href="#" className="btn btn-primary">View Portfolio</a>
          <a href="#" className="btn btn-primary">Download Resume</a>
        </div>
      </div>
    </div>
  );
};

export default Home;