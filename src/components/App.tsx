import { useMemo } from "react"
import * as THREE from "three"

const App = () => {
  const geom = useMemo(() => new THREE.PlaneBufferGeometry(), [])
  return (
    <group>
      <mesh>
        <primitive object={geom} attach="geometry" />
        <meshBasicMaterial color="steelblue" side={2} />
      </mesh>
      <lineSegments>
        <edgesGeometry args={[geom]} />
        <lineBasicMaterial
          color="red"
          linewidth={5}
          linecap="round"
          linejoin="round"
        />
      </lineSegments>
    </group>
  )
}

export default App
