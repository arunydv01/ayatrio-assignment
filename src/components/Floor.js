import * as THREE from 'three';

const createFloor = (scene, floorRef) => {
  const textureLoader = new THREE.TextureLoader();
  const floorTexture = textureLoader.load('/images/image5.jpg');
  const floorMask = textureLoader.load('/images/frame1.png');

  const geometry = new THREE.PlaneGeometry(10, 10);
  const material = new THREE.MeshBasicMaterial({ map: floorTexture });

  const floor = new THREE.Mesh(geometry, material);
  floor.rotation.x = -Math.PI / 2;
  scene.add(floor);

  // Add reference to the floor mesh for later manipulation
  floorRef.current = floor;

  // Load the mask texture and use it for changing the color
  floorMask.wrapS = THREE.RepeatWrapping;
  floorMask.wrapT = THREE.RepeatWrapping;
  floorMask.repeat.set(1, 1);

  const maskMaterial = new THREE.MeshBasicMaterial({
    map: floorMask,
    color: 0xffffff, // Initial color
    transparent: true,
    opacity: 0.5
  });

  const maskMesh = new THREE.Mesh(geometry, maskMaterial);
  maskMesh.rotation.x = -Math.PI / 2;
  scene.add(maskMesh);

  // Add reference to the mask mesh for later manipulation
  floorRef.current.maskMesh = maskMesh;
};

export default createFloor;
