
function Log(arg) {
  console.log(arg);
};

var LessonThreeJS = function(){
  var me = this;

  var scene,
      renderer,
      camera,
      cameraController,
      container,
      light,
      sphereGeom,
      sphereMesh,
      sphereMaterial;

  function init(){
    container = document.createElement("div");
    container.id = "MyThreeJsScene";
    document.body.appendChild(container);

    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setClearColor("rgb(158,176,166)");
    renderer.setSize(window.innerWidth,window.innerHeight);
    container.appendChild(renderer.domElement);

    // PerspectiveCamera( fov, aspect, near, far )
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 10000);
    camera.position.set(0, 100, 300);

    cameraController = new THREE.OrbitControls(camera, renderer.domElement);
    cameraController.target.set(0,0,0);
    cameraController.enableDampening = false;
    cameraController.dampingFactor = 0.25;

    buildScene();
    render();
  }

  function buildScene() {
    var gridHelper = new THREE.GridHelper(150,10);
    scene.add(gridHelper);

    light = new THREE.DirectionalLight(0xFFFFFF, 1);
    scene.add(light);

    sphereGeom = new THREE.SphereGeometry(30, 30, 30);
    sphereMaterial = new THREE.MeshPhongMaterial({color:0xCC0000});
    sphereMaterial.specular = new THREE.Color(0xff0000);
    sphereMaterial.wireframe = true;

    sphereMesh = new THREE.Mesh(sphereGeom, sphereMaterial);
    sphereMesh.position.y = 50;
    scene.add(sphereMesh);

  }

  function render() {
    cameraController.update();
    renderer.render(scene,camera);
    requestAnimationFrame(render)
  }

  init();
};



function init() {
  new LessonThreeJS();
}
