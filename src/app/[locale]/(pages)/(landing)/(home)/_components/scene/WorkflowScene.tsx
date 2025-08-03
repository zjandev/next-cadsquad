'use client'

import React, { Suspense, useRef, useState } from 'react'

import {
    Html,
    OrbitControls,
    PerspectiveCamera,
    RoundedBox,
    Text,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion-3d'

import { MotionDiv } from '@/lib/motion'
import { WORKFLOW } from '@/shared/constants/appConstant'
import { WorkflowItem } from '@/shared/constants/workflow'

export default function WorkflowScene() {
    const orbitControlsRef = useRef()

    return (
        <Canvas
            shadows
            style={{
                width: '600px',
                height: '600px',
            }}
        >
            {/* Camera configuration */}
            <PerspectiveCamera
                makeDefault
                position={[0, 0, 12]}
                rotation={[Math.PI / 20, Math.PI / 6, 0]}
                fov={80}
                near={0.5}
                far={200}
            />

            {/* OrbitControls - chỉ sử dụng một lần */}
            <OrbitControls
                ref={orbitControlsRef}
                enableZoom={true}
                enableRotate={true}
                enablePan={true}
                minDistance={5}
                maxDistance={20}
                minPolarAngle={0}
                maxPolarAngle={Math.PI}
                autoRotate={false}
                autoRotateSpeed={0.5}
                dampingFactor={0.1}
                enableDamping={true}
                onStart={() => console.log('OrbitControls: Start')}
                onEnd={() => console.log('OrbitControls: End')}
            />

            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <directionalLight
                castShadow
                position={[16, 10, 10]}
                intensity={1}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />

            {/* Debug helpers - uncomment để debug */}
            {/* <axesHelper args={[5]} /> */}
            {/* <gridHelper args={[20, 20]} /> */}

            <Suspense fallback={null}>
                {WORKFLOW.toReversed().map((item, index) => (
                    <Block
                        key={index}
                        y={index * 2.1}
                        delay={index * 0.3}
                        data={item}
                    />
                ))}
            </Suspense>

            {/* Debug info */}
            <Html position={[8, 8, 0]}>
                <div
                    style={{
                        background: 'rgba(0,0,0,0.8)',
                        color: 'white',
                        padding: '8px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontFamily: 'monospace',
                    }}
                >
                    <div>Left click + drag: Rotate</div>
                    <div>Right click + drag: Pan</div>
                    <div>Scroll: Zoom</div>
                    <div>Check console for OrbitControls events</div>
                </div>
            </Html>
        </Canvas>
    )
}

type BlockProps = {
    y: number
    delay: number
    data: WorkflowItem
}
function Block({ y, delay, data }: BlockProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.group
            initial={{ y: y + 10, opacity: 0 }}
            animate={{
                y,
                opacity: 1,
                transition: {
                    duration: 0.6,
                    delay,
                    type: 'spring',
                    stiffness: 80,
                    damping: 10,
                },
            }}
            whileHover={{
                x: 0.2,
                transition: {
                    duration: 0.2,
                    type: 'spring',
                    stiffness: 100,
                    damping: 12,
                    delay: 0,
                },
            }}
        >
            {/* Main Block */}
            <RoundedBox
                args={[6, 2, 2]}
                radius={0.2}
                smoothness={4}
                position={[0, -4, 3]}
                onPointerEnter={() => setIsHovered(true)}
                onPointerLeave={() => setIsHovered(false)}
            >
                <meshStandardMaterial
                    color={data.color}
                    transparent
                    roughness={0.3}
                    metalness={0.1}
                />
            </RoundedBox>

            {isHovered && <BlockDetail data={data} />}

            {/* Text on the block */}
            <Text
                position={[0, -4, 4.01]}
                fontSize={0.3}
                color="black"
                anchorX="center"
                anchorY="middle"
                fontWeight={700}
                maxWidth={5}
                textAlign="center"
                whiteSpace="normal"
            >
                {data.title.toUpperCase()}
            </Text>
            <Text
                position={[-1.99, -4, 3.01]}
                fontSize={0.6}
                color="black"
                anchorX="center"
                anchorY="middle"
                rotation={[0, Math.PI / 2, 0]}
                fontWeight={700}
            >
                {data.stepNumber}
            </Text>
        </motion.group>
    )
}

type BlockDetailProps = {
    data: WorkflowItem
}
function BlockDetail({ data }: BlockDetailProps) {
    return (
        <>
            <Html position={[4, -4, -1]} center>
                <MotionDiv
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    style={{
                        padding: '12px 16px',
                        background: 'rgba(255, 255, 255, 0.95)',
                        borderRadius: '12px',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        backdropFilter: 'blur(15px)',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        color: '#1F2937',
                        minWidth: '300px',
                        maxWidth: '400px',
                        pointerEvents: 'none', // Tránh can thiệp vào OrbitControls
                    }}
                >
                    <p
                        style={{
                            margin: '0 0 4px 0',
                            fontSize: '18px',
                            color: data?.color,
                            textTransform: 'uppercase',
                        }}
                    >
                        {data?.title}
                    </p>
                    <p
                        style={{
                            margin: 0,
                            fontSize: '14px',
                            opacity: 0.8,
                            textWrap: 'wrap',
                        }}
                    >
                        {data?.description}
                    </p>
                </MotionDiv>
            </Html>
        </>
    )
}
