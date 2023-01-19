 // Variables        
 var objectMesh;
 var selectedAnimation;
 var model = document.getElementById("model");

 // Animations Controls
 function idle() {
     selectedAnimation = "idle";
     doAnimation();
 }
 function look() {
     selectedAnimation = "look";
     doAnimation();
 }
 function sad() {
     selectedAnimation = "sad";
     doAnimation();
 }
 function pushUpAndJump() {
     selectedAnimation = "pushUpWithJump";
     doAnimation();
 }
 function twist() {
     selectedAnimation = "twist";
     doAnimation();
 }
 function kick() {
     selectedAnimation = "kick";
     doAnimation();
 }

 // Load 3d model with idle animation once!
 model.setAttribute("gltf-model", 'url(animations/idle.glb)');
 model.addEventListener("model-loaded", function (event) {
     objectMesh = model.getObject3D("mesh");
 });


 // Three.js, load animations from links 
 var loader = new THREE.GLTFLoader();
 function doAnimation() {
     var link = "animations/" + selectedAnimation + ".glb";
     loader.load(link, function (gltf) {
         objectMesh.animations[0] = gltf.animations[0];
         model.setAttribute('animation-mixer', "clip:" + selectedAnimation + "; crossFadeDuration:1;");
     });
 }
