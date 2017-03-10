
function Log(arg) {
  console.log(arg);
};


var LessonThreeJS = function(){
  var me = this;

  var scene,
      renderer,
      camera,
      cameraController;

  var container,
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
    renderer.setClearColor(0x000000);
    renderer.setSize(window.innerWidth,window.innerHeight);
    container.appendChild(renderer.domElement);

    // PerspectiveCamera( fov, aspect, near, far )
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth/window.innerHeight, 0.1, 10000);
    camera.position.set(0, 100, 300);

    cameraController = new THREE.OrbitControls(camera, renderer.domElement);
    cameraController.target.set(0,0,0);
    cameraController.enableDampening = false;
    cameraController.dampingFactor = 0.25;


    var gridHelper = new THREE.GridHelper(150,3);
    scene.add(gridHelper);

    render();
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
