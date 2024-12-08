import { getMouseBall } from "./getMeshes";

const mouseBall = getMouseBall();
scene.add(mouseBall.mesh);

const hemiLight = new THREE.HemisphereLight(0x00bbff, 0xaa00ff);
scene.add(hemiLight);

const sprites = getLayer({
    hue: 0.0,
    numSprites: 8,
    opacity: 0.2,
    radius: 10,
    size: 24,
    z: -10.5,
});

scene.add(sprites);

function animate() {
    requestAnimationFrame(animate);
    mouseBall.update(mousePos);
    RenderTarget.render(scene, camera);
    //controls.update();
}

animate();

function handleWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener('resize', handleWindowResize, false);

// mouse move handler
function handleMouseMove(evt) {
    mousePos.x = (evt.clientX / window.innerWidth);
    mousePos.y = (evt.clientY / window.innerHeight)
}
window.addEventListener('mousemove')
