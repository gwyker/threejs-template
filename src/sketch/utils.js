import { Mesh, TextureLoader } from "three";
import {GRID_X, GRID_Y, Z_LIMIT} from "./config.js";

function setupModel(model, texturePath) {
    if (texturePath) {
        const texLoader = new TextureLoader();
        const texture = texLoader.load(texturePath);
        model.traverse((child) => {
            if (child instanceof Mesh) {
                child.material.map = texture;
            }
        });
    }
    return model
}

function isOutside(obj) {
    return obj.position.x > GRID_X / 2
      || obj.position.x < -GRID_X / 2
      || obj.position.y > GRID_Y * .7
      || obj.position.y < -GRID_Y * .7
      || obj.position.z > Z_LIMIT
      || obj.position.z < 1;
}


export { setupModel, isOutside };
