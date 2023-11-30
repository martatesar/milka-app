import React, { useEffect, useState } from 'react';

const useSequentialScriptLoader = (scripts) => {
  const [currentLoadingIndex, setCurrentLoadingIndex] = useState(0);

  useEffect(() => {
    if (currentLoadingIndex >= scripts.length) {
      return; // All scripts are loaded
    }

    const script = document.createElement('script');
    const currentScript = scripts[currentLoadingIndex];

    Object.keys(currentScript).forEach((key) => {
      script[key] = currentScript[key];
    });

    script.onload = () => {
      setCurrentLoadingIndex(currentLoadingIndex + 1); // Load next script
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [currentLoadingIndex, scripts]); // Load next script when current one is loaded

  return currentLoadingIndex >= scripts.length; // Return true if all scripts are loaded
};


export default useSequentialScriptLoader;