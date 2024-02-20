// index.js
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

//Create TextureLoader
const textureLoader = new THREE.TextureLoader();

//Loads sphere texture map
const normalTexture = textureLoader.load("https://i.imgur.com/lMotNsf.jpg");
const marbleTexture = textureLoader.load("grey-blue-marble-texture.jpg");
const sandstoneTexture = textureLoader.load(
  "uneven-sandstone-tile-wall-surface.jpg"
);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

// Materials
const material = new THREE.MeshStandardMaterial();
material.metalness = 0.5;
material.roughness = 0.2;
material.normalMap = normalTexture;
material.color = new THREE.Color(0x292929);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xeeeeee);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

document.getElementById("stage").appendChild(renderer.domElement);

camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 5;

const loader = new GLTFLoader();
let model;

function loadModel() {
  return new Promise((resolve, reject) => {
    loader.load(
      "wall-model/scene.gltf",
      function (gltf) {
        // Adjust the position and scale of the loaded model
        gltf.scene.scale.set(4, 4, 4);
        camera.position.set(0, 15, 0);
        camera.lookAt(0, 0, 0);

        model = gltf.scene;
        scene.add(model);

        resolve(function (texture) {
          console.log("change texture", texture);
          gltf.scene.traverse((child) => {
            if (child.isMesh) {
              child.material.map = texture;
              child.material.needsUpdate = true;
            }
          });
        });
      },
      undefined,
      function (error) {
        console.error(error);
        reject(error);
      }
    );
  });
}

loadModel()
  .then((changeTexture) => {
    // Event listener for marble button
    document.getElementById("marble").addEventListener("click", () => {
      changeTexture(marbleTexture);
    });

    // Event listener for sandstone button
    document.getElementById("sandstone").addEventListener("click", () => {
      changeTexture(sandstoneTexture);
    });
  })
  .catch((error) => {
    console.error("Failed to load model", error);
  });

document.addEventListener("mousemove", onDocumentMouseMove);

let mouseX;
let mouseY;

let targetX;
let targetY;

const windowHalfX = window.innerWidth / 2;
const windowHalfY = window.innerHeight / 2;

function onDocumentMouseMove(event) {
  mouseX = event.clientX - windowHalfX;
  mouseY = event.clientY - windowHalfY;
}

function animate() {
  targetX = -mouseX * 0.001; // Inverted mouseX
  targetY = -mouseY * 0.001; // Inverted mouseY

  if (model) {
    model.rotation.set(targetY, targetX, model.rotation.z);
  }

  // Render
  renderer.render(scene, camera);

  // Call tick again on the next frame
  window.requestAnimationFrame(animate);
}

animate();

// Add ambient light
const light = new THREE.AmbientLight(0x404040); // soft white light
scene.add(light);

// Add point light
const pointLight = new THREE.PointLight(0xffffff, 3, 1200);
pointLight.position.set(0, 0, 5);
scene.add(pointLight);

// Correct the positions of pointLight2 and pointLight3
const pointLight2 = new THREE.PointLight(0xffffff, 3, 200);
pointLight2.position.set(0, 10, 20);
scene.add(pointLight2);

const pointLight3 = new THREE.PointLight(0xffffff, 3, 500);
pointLight3.position.set(10, 10, 15);
scene.add(pointLight3);

// Add directional light
const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
directionalLight.position.set(5, 5, 0);
scene.add(directionalLight);

// Rectangle light
const width = 1000;
const height = 1000;
const intensity = 1;
const rectLight = new THREE.RectAreaLight(0xffffff, intensity, width, height);
rectLight.position.set(5, 5, 0);
rectLight.lookAt(10, 10, 0);
scene.add(rectLight);
