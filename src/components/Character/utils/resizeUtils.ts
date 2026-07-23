import * as THREE from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";

/**
 * The character canvas always covers the viewport on desktop. Keep one camera
 * composition for every viewport: changing its horizontal position based on
 * screen width made the model appear cut off after responsive layout settled.
 */
export function setCameraFraming(
  camera: THREE.PerspectiveCamera,
  _viewportWidth: number
) {
  camera.fov = 14.5;
  camera.position.x = 0;
}

/**
 * Keep the GLTF transform neutral. The scene itself is designed around its
 * origin, so a breakpoint-specific x translation separates it from the
 * centered canvas and causes the cropped profile seen in production.
 */
export function setCharacterFraming(
  character: THREE.Object3D,
  _viewportWidth: number
) {
  character.scale.setScalar(1);
  character.position.x = 0;
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
