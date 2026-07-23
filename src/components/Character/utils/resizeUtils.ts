import * as THREE from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";

/**
 * The scene was composed for very wide displays. On ordinary laptop screens
 * that camera angle pushes the character beyond the right edge of the canvas.
 * Give that desktop range a slightly wider, left-shifted composition while
 * keeping the original framing on phones and large monitors.
 */
export function setCameraFraming(
  camera: THREE.PerspectiveCamera,
  viewportWidth: number
) {
  const compactDesktop = viewportWidth >= 768 && viewportWidth < 1600;
  camera.fov = compactDesktop ? 20 : 14.5;
  camera.position.x = compactDesktop ? 1.5 : 0;
}

/** Keep the actual GLTF scene inside the safe area on laptop-sized desktops.
 * This changes the 3D object's world transform, not the surrounding canvas. */
export function setCharacterFraming(
  character: THREE.Object3D,
  viewportWidth: number
) {
  const compactDesktop = viewportWidth >= 768 && viewportWidth < 1600;
  const scale = compactDesktop ? 0.88 : 1;

  character.scale.setScalar(scale);
  character.position.x = compactDesktop ? -1.1 : 0;
}

export default function handleResize(
  renderer: THREE.WebGLRenderer,
  camera: THREE.PerspectiveCamera,
  canvasDiv: React.RefObject<HTMLDivElement>,
  character: THREE.Object3D
) {
  if (!canvasDiv.current) return;
  const canvas3d = canvasDiv.current.getBoundingClientRect();
  const width = canvas3d.width;
  const height = canvas3d.height;
  // A zero-height container (mid-layout, or a hidden tab) would make aspect
  // NaN/Infinity and permanently skew the projection matrix.
  if (width === 0 || height === 0) return;
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  setCameraFraming(camera, width);
  setCharacterFraming(character, width);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  const workTrigger = ScrollTrigger.getById("work");
  ScrollTrigger.getAll().forEach((trigger) => {
    if (trigger != workTrigger) {
      trigger.kill();
    }
  });
  setCharTimeline(character, camera);
  setAllTimeline();
}
