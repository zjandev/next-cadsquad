'use client'

import React, { Suspense, useState } from 'react'

import { Html, OrbitControls, RoundedBox, Text } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion-3d'

import { MotionDiv } from '@/lib/motion'
import { WORKFLOW } from '@/shared/constants/appConstant'
import { WorkflowItem } from '@/shared/constants/workflow'

export default function WorkflowScene() {
    return (
        <Canvas
            shadows
            camera={{
                position: [8, 0, 12], // Camera đặt chếch từ trên nhìn xuống
                fov: 50,
                near: 0.1,
                far: 100,
            }}
            style={{
                width: '100%',
                height: '100%',
            }}
        >
            <ambientLight intensity={0.5} />
            <directionalLight
                castShadow
                position={[10, 10, 10]}
                intensity={1}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />
            <OrbitControls enableZoom={false} enableRotate={false} />
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
                position={[-5, -4, 3]}
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
                position={[-5, -4, 4.01]}
                fontSize={0.3}
                color="black"
                anchorX="center"
                anchorY="middle"
                fontWeight={700}
                maxWidth={5} // Giới hạn chiều rộng
                textAlign="center"
                whiteSpace="normal" // Cho phép xuống dòng
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
            {/* TODO: Add line arrow */}
            <Html position={[2, -4, -1]} center>
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
                        minWidth: '500px',
                        width: '100%',
                    }}
                >
                    <p
                        style={{
                            margin: '0 0 4px 0',
                            fontSize: '20px',
                            color: data?.color,
                            textTransform: 'uppercase',
                        }}
                    >
                        {data?.title}
                    </p>
                    <p
                        style={{
                            margin: 0,
                            fontSize: '16px',
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
