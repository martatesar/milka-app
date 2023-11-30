import { useEffect } from "react";
import ARScene from "../../components/ar/ARScene";
import useScripts from "../../hooks/useScripts";

const ARPage = () => {
  const allScriptsLoaded = useScripts([
    { src: "//cdn.8thwall.com/web/aframe/8frame-1.3.0.min.js" },
    { src: "//cdn.8thwall.com/web/xrextras/xrextras.js" },
    { src: "//cdn.8thwall.com/web/landing-page/landing-page.js" },
    { src: "//apps.8thwall.com/xrweb?appKey=XXXX", async: true},
  ]);

  useEffect(() => {
    return () => {
      // remove loading container
      const loadingContainer = document.getElementById("loadingContainer");
      if (loadingContainer) {
        loadingContainer.remove();
      }
    };
  }, []);

  return allScriptsLoaded ? <ARScene /> : <div>Loading...</div>;
};

export default ARPage;
