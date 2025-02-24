"use client";

import Image from "next/image";
import { useEffect } from "react";

import * as THREE from "three";

export default function Home() {
  useEffect(() => {
    // TODO: Three.js 고도화 작업
    // scene, camera renderer 설정
    const scene = new THREE.Scene();
    // field of view(시야각) : 해당 시점의 화면이 보여지는 정도
    // aspect ratio(종횡비) : 대부분의 경우 요소의 높이와 너비에 맞추어 표시
    // near / far 절단면 : far값 보다 멀리 있는 요소나 near보다 가까이 있는 오브젝트는 렌더링 되지 않는다는 뜻 - 앱 성능 향상 시 사용 가능
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    // renderer : 마법이 일어나는 곳
    const renderer = new THREE.WebGLRenderer();
    // renderer instance 생성과 동시에 렌더링 할 곳의 크기 설정 - 렌더링할 구역의 높이와 너비를 설정하는 방법
    // 성능 개선 시 사용 가능능
    renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer element를 HTML 문서 내에 삽입 - <canvas> 에리먼트로 renderer가 scene을 나타내는 구역역
    document.body.appendChild(renderer.domElement);

    // Cube 생성성 - 가로, 세로, 높이이
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    // Cube 색칠 - MeshBasicMaterial 방식 고수 중 , hex colors로 동일하게 작동
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // Mesh - 기하학을 받아 재질을 적용하고 화면 안에 삽입하고 자유롭게 움직일 수 있게 해줌
    const cube = new THREE.Mesh(geometry, material);
    // add - add()는 default로 추가된 모든 것들에 대해 (0, 0, 0) 속성을 가짐
    scene.add(cube);
    // add에 의해 카메라와 큐브가 동일한 위치에 겹치게되니 살짝 카메라를 움직여줌줌
    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
  }, []);

  return (
    <div>
      <Image src={"/logo_png.png"} alt={""} width={500} height={500} />
    </div>
  );
}
