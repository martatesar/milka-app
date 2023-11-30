import { useEffect, useState, useRef } from "react";

const useScripts = (scripts) => {
  const [loaded, setLoaded] = useState(false);
  const [loadedScripts, setLoadedScripts] = useState([]);

  const initialized = useRef(false);

  const loadScript = (scriptData) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = scriptData.src;
      script.async = scriptData.async || false;
      script.onload = () => {
        resolve(script);
      };
      script.onerror = () => {
        reject(script);
      };
      document.body.appendChild(script);
      console.log("script loaded: ", scriptData.src);
    });
  };

  useEffect(() => {
    const loadScripts = async () => {
      for (let i = 0; i < scripts.length; i++) {
        try {
          const script = await loadScript(scripts[i]);
          setLoadedScripts((loadedScripts) => [...loadedScripts, script]);
        } catch (e) {
          console.log("error", e);
        }
      }
    };

    if (initialized.current === false) {
      initialized.current = true;
      loadScripts().then(() => {
        setLoaded(true);
      });
    }
  }, [scripts]);

  useEffect(() => {
    return () => {
      // remove all scripts
      loadedScripts.forEach((script) => {
        document.body.contains(script) && document.body.removeChild(script);
        // console.log("removed script", script);
      });
    };
  }, []);

  return loaded;
};

export default useScripts;
