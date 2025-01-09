import * as THREE from "three";
import vertexShader from "./shaders/vertexShader.glsl";
import fragmentShader from "./shaders/fragmentShader.glsl";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import LocomotiveScroll from 'locomotive-scroll';
const locomotiveScroll = new LocomotiveScroll();
// locomotiveScroll()
// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 3;

const canvas = document.querySelector("#canvas");
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
  alpha: true,
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Icosahedron Geometry with Shader Material
const geometry = new THREE.IcosahedronGeometry(2, 50, 50);
const material = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms: {
    utime: { value: 0.0 },
    uColorChange: { value: 0 },
  },
});

const icosahedron = new THREE.Mesh(geometry, material);
scene.add(icosahedron);

icosahedron.position.y = -3;

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".landing",
    start: "top top",
    end: "bottom center",
    scrub: 2,
    // markers: true,
  },
});

tl.to(
  icosahedron.position,
  {
    y: 0,
    z: -2,
    ease: "power2.inOut",
    delay:0.2,
    duration:0.5
  },
  "a"
).to(
  material.uniforms.uColorChange,
  {
    value: 1,
    ease: "power2.inOut",
    delay:.2
  },
  "a"
)
.to(".landing h1",{
opacity:0
},"a")
.to(".landing p",{
opacity:1,
delay:0.4
},"a")


const clock = new THREE.Clock();
// Animation loop
function animate() {
  requestAnimationFrame(animate);
  material.uniforms.utime.value = clock.getElapsedTime();
  renderer.render(scene, camera);
}
animate();

// Handle window resizing
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});


const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});