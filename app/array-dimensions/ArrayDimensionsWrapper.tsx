'use client'

import dynamic from 'next/dynamic'

const ArrayDimensionsContent = dynamic(() => import('./ArrayDimensionsContent'), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] bg-gray-100 rounded-lg flex items-center justify-center">
      <p>Loading 3D visualization...</p>
    </div>
  )
})

export default function ArrayDimensionsWrapper() {
  return <ArrayDimensionsContent />
}