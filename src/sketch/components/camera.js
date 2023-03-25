import {PerspectiveCamera, Vector3} from 'three';

function createCamera() {
  const camera = new PerspectiveCamera(
    35,
    1,
    0.1,
    1000,
  );

  camera.position.set(0, -78, 13);
  camera.lookAt(new Vector3(0, 0, 17));

  return camera;
}

export { createCamera };
