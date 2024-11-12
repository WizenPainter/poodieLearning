'use client'

import { useState, useRef, useEffect } from 'react'
import * as THREE from 'three'
import { Button } from "@/components/ui/button"

export default function ArrayDimensionsContent() {
  const [dimension, setDimension] = useState(3)
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    cubes: THREE.Group;
    controls: any;
    cleanup: () => void;
  }>()

  const dimensionInfo = {
    1: "1D array: A simple list of elements",
    2: "2D array: A table or matrix of elements",
    3: "3D array: A cube of elements"
  }

  useEffect(() => {
    if (!containerRef.current) return

    // Only initialize Three.js if it hasn't been initialized yet
    if (!sceneRef.current) {
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({ antialias: true })
      
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight)
      containerRef.current.appendChild(renderer.domElement)

      // Add lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
      scene.add(ambientLight)
      
      const pointLight = new THREE.PointLight(0xffffff, 1)
      pointLight.position.set(5, 5, 5)
      scene.add(pointLight)

      // Create group for cubes
      const cubes = new THREE.Group()
      scene.add(cubes)

      // Position camera
      camera.position.set(5, 5, 5)
      camera.lookAt(0, 0, 0)

      // Animation function
      function animate() {
        requestAnimationFrame(animate)
        if (cubes) {
          cubes.rotation.x += 0.001
          cubes.rotation.y += 0.001
        }
        renderer.render(scene, camera)
      }

      // Start animation
      animate()

      // Store references
      sceneRef.current = {
        scene,
        camera,
        renderer,
        cubes,
        controls: null,
        cleanup: () => {
          renderer.dispose()
          containerRef.current?.removeChild(renderer.domElement)
        }
      }
    }

    // Update cubes based on dimension
    const { cubes } = sceneRef.current
    cubes.clear() // Remove existing cubes

    const size = dimension === 1 ? [3, 1, 1] : dimension === 2 ? [3, 3, 1] : [3, 3, 3]
    const geometry = new THREE.BoxGeometry(0.9, 0.9, 0.9)
    
    for (let x = 0; x < size[0]; x++) {
      for (let y = 0; y < size[1]; y++) {
        for (let z = 0; z < size[2]; z++) {
          const material = new THREE.MeshPhongMaterial({
            color: new THREE.Color(`hsl(${(x + y + z) * 40}, 100%, 50%)`)
          })
          const cube = new THREE.Mesh(geometry, material)
          cube.position.set(x - 1, y - 1, z - 1)
          cubes.add(cube)
        }
      }
    }

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !sceneRef.current) return
      const { camera, renderer } = sceneRef.current
      const width = containerRef.current.clientWidth
      const height = containerRef.current.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [dimension])

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      sceneRef.current?.cleanup()
    }
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div ref={containerRef} className="h-[400px] bg-gray-100 rounded-lg overflow-hidden" />
      <div className="space-y-4">
        <p className="text-lg">{dimensionInfo[dimension as keyof typeof dimensionInfo]}</p>
        <p className="text-sm">
          In Python, you can create multi-dimensional arrays using nested lists or libraries like NumPy. 
          Each dimension adds a new level of nesting or indexing.
        </p>
        <div className="flex space-x-2">
          <Button onClick={() => setDimension(1)} variant={dimension === 1 ? "default" : "outline"}>1D</Button>
          <Button onClick={() => setDimension(2)} variant={dimension === 2 ? "default" : "outline"}>2D</Button>
          <Button onClick={() => setDimension(3)} variant={dimension === 3 ? "default" : "outline"}>3D</Button>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <pre className="text-sm">
            {dimension === 1 ? 
              "# 1D Array\narray_1d = [0, 1, 2]" :
              dimension === 2 ?
              "# 2D Array\narray_2d = [\n  [0, 1, 2],\n  [3, 4, 5],\n  [6, 7, 8]\n]" :
              "# 3D Array\narray_3d = [\n  [[0, 1, 2], [3, 4, 5], [6, 7, 8]],\n  [[9, 10, 11], [12, 13, 14], [15, 16, 17]],\n  [[18, 19, 20], [21, 22, 23], [24, 25, 26]]\n]"
            }
          </pre>
        </div>
      </div>
    </div>
  )
}