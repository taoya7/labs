import{R as e,P as t,M as s,D as i,F as n,a,B as r,b as o,g as h,c,S as d,C as l,d as m,W as g,A as p,G as w,O as b,o as f,e as u,f as y,h as M}from"./vendor.480b41d6.js";const v={width:400,height:400,widthSegments:50,heightSegments:50};let x={x:void 0,y:void 0};window.addEventListener("mousemove",(function(e){x.x=e.clientX/window.innerWidth*2-1,x.y=-e.clientY/window.innerHeight*2+1}));class H{constructor(){console.log("Three Version: ",e),this.init(),this.initLight(),this.generatePlane(),this.render(),this.loop()}generatePlane(){let e=new t(v.width,v.height,v.widthSegments,v.heightSegments),h=new s({side:i,flatShading:n,vertexColors:!0});this.planeMesh=new a(e,h);let{array:c}=this.planeMesh.geometry.attributes.position;const d=[];for(let t=0;t<c.length;t++){if(t%3==0){const e=c[t],s=c[t+1],i=c[t+2];c[t]=e+3*(Math.random()-.5),c[t+1]=s+3*(Math.random()-.5),c[t+2]=i+3*(Math.random()-.5)}d.push(Math.random()*Math.PI*2)}this.planeMesh.geometry.attributes.position.randomValues=d,this.planeMesh.geometry.attributes.position.originalPosition=this.planeMesh.geometry.attributes.position.array;const l=[];for(let t=0;t<this.planeMesh.geometry.attributes.position.count;t++)l.push(0,.19,.4);this.planeMesh.geometry.setAttribute("color",new r(new Float32Array(l),3)),this.scene.add(this.planeMesh),this.raycaster=new o}loop(){this.index=window.requestAnimationFrame(this.loop.bind(this)),this.render(),this.raycaster.setFromCamera(x,this.camera);const e=this.raycaster.intersectObject(this.planeMesh);if(e.length>0){const{color:t}=e[0].object.geometry.attributes;t.setX(e[0].face.a,.1),t.setY(e[0].face.a,.5),t.setZ(e[0].face.a,1),t.setX(e[0].face.b,.1),t.setY(e[0].face.b,.5),t.setZ(e[0].face.b,1),t.setX(e[0].face.c,.1),t.setY(e[0].face.c,.5),t.setZ(e[0].face.c,1),e[0].object.geometry.attributes.color.needsUpdate=!0;const s={r:0,g:.19,b:.4},i={r:.1,g:.5,b:1};h.to(i,{r:s.r,g:s.g,b:s.b,duration:1,onUpdate:()=>{t.setX(e[0].face.a,i.r),t.setY(e[0].face.a,i.g),t.setZ(e[0].face.a,i.b),t.setX(e[0].face.b,i.r),t.setY(e[0].face.b,i.g),t.setZ(e[0].face.b,i.b),t.setX(e[0].face.c,i.r),t.setY(e[0].face.c,i.g),t.setZ(e[0].face.c,i.b),t.needsUpdate=!0}})}}destory(){window.cancelAnimationFrame(this.index)}initLight(){const e=new c(16777215,1);e.position.set(0,-1,1),this.scene.add(e);const t=new c(16777215,1);t.position.set(0,0,-1),this.scene.add(t)}init(){const{innerWidth:e,innerHeight:t}=window;this.aspect=e/t,this.scene=new d,this.scene.background=new l("#eeeeee"),this.camera=new m(75,this.aspect,.1,1e3),this.camera.position.set(0,0,50),this.camera.lookAt(0,0,0),this.renderer=new g({antialias:!0,alpha:!0}),this.renderer.setSize(e,t),this.renderer.setPixelRatio(window.devicePixelRatio),this.renderer.render(this.scene,this.camera),document.body.appendChild(this.renderer.domElement)}initAxesHelp(){this.axesHelper=new p(100),this.scene.add(this.axesHelper)}initGridHelp(){this.gridHelper=new w(100,100),this.scene.add(this.gridHelper)}initController(){const e=this;this.controller=new b(this.camera,this.renderer.domElement),this.controller.addEventListener("change",(function(){e.renderer.render(e.scene,e.camera)}))}render(){this.renderer.render(this.scene,this.camera)}}const A={mounted(){new H}},P={ref:"render"};A.render=function(e,t,s,i,n,a){return f(),u("div",null,[y("div",P,null,512)])},M(A).mount("#app");
