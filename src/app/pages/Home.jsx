import React from 'react';
import { useWindowSize } from '../utils/customHooks';

export function Home() {
  const { width, height } = useWindowSize()

  if (width < 800) { //mobile rendering
    return (
      <div>
        <h1>
          Mobile Home Screen Placeholder
        </h1>
      </div>
    )
  } else { //desktop rendering
    return (
      <div>
        <h1>
          Desktop Home Screen Placeholder
        </h1>
      </div>
    )
  }
}