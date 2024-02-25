'use client';

import { useEffect, useState } from 'react';

const useScreenSize = () => {
  const initialWidth = typeof window !== 'undefined' ? window.innerWidth : 0;
  const [screenSize, setScreenSize] = useState(initialWidth);

  useEffect(() => {
    const handleResize = (event: UIEvent) => {
      setScreenSize((event.target as typeof window)?.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
