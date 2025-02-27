"use client";

import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import * as THREE from "three";

interface ThreejsProps {
  isMouseHandler?: boolean;
}

const ThreeJsContent = styled.div`
  width: 100%;
  height: 100%;
`;

const ThreeJs = ({ isMouseHandler }: ThreejsProps) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [isMouseActive, setIsMouseActive] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // TODO: Three.js 고도화 작업
    // scene, camera renderer 설정
    const scene = new THREE.Scene();
    // field of view(시야각) : 해당 시점의 화면이 보여지는 정도
    // aspect ratio(종횡비) : 대부분의 경우 요소의 높이와 너비에 맞추어 표시
    // near / far 절단면 : far값 보다 멀리 있는 요소나 near보다 가까이 있는 오브젝트는 렌더링 되지 않는다는 뜻 - 앱 성능 향상 시 사용 가능
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );

    // renderer : 마법이 일어나는 곳
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    // renderer instance 생성과 동시에 렌더링 할 곳의 크기 설정 - 렌더링할 구역의 높이와 너비를 설정하는 방법
    // 성능 개선 시 사용 가능
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    // renderer element를 HTML 문서 내에 삽입 - <canvas> 에리먼트로 renderer가 scene을 나타내는 구역역
    mount.appendChild(renderer.domElement);

    // Cube 생성성 - 가로, 세로, 높이이
    const geometry = new THREE.BoxGeometry();
    // Cube 색칠 - MeshBasicMaterial 방식 고수 중 , hex colors로 동일하게 작동
    const material = [
      new THREE.MeshBasicMaterial({
        color: 0x03fce3,
        transparent: true,
        opacity: 0.5,
        side: THREE.BackSide,
      }),
      new THREE.MeshBasicMaterial({
        color: 0x4287f5,
        transparent: true,
        opacity: 0.5,
        side: THREE.BackSide,
      }),
      new THREE.MeshBasicMaterial({
        color: 0xf9ff33,
        transparent: true,
        opacity: 0.5,
        side: THREE.BackSide,
      }),
      new THREE.MeshBasicMaterial({
        color: 0xff33e3,
        transparent: true,
        opacity: 0.5,
        side: THREE.BackSide,
      }),
      new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        transparent: true,
        opacity: 0.5,
        side: THREE.BackSide,
      }),
      new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        transparent: true,
        opacity: 0.5,
        side: THREE.BackSide,
      }),
    ];
    // Mesh - 기하학을 받아 재질을 적용하고 화면 안에 삽입하고 자유롭게 움직일 수 있게 해줌
    const cube = new THREE.Mesh(geometry, material);
    // add - add()는 default로 추가된 모든 것들에 대해 (0, 0, 0) 속성을 가짐
    scene.add(cube);
    // add에 의해 카메라와 큐브가 동일한 위치에 겹치게되니 살짝 카메라를 움직여줌줌
    camera.position.z = 5;

    const edgesGeometry = new THREE.EdgesGeometry(geometry); // 정육면체의 모서리를 정의하는 형상 생성
    const edgesMaterial = new THREE.LineBasicMaterial({ color: 0xe999999 }); // 모서리의 색상을 설정
    const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial); // 모서리와 재질을 결합해 선(segment) 생성
    cube.add(edges); // 정육면체에 모서리를 추가

    let mouseX = 0; // 마우스 X축 위치값 초기화
    let mouseY = 0; // 마우스 Y축 위치값 초기화

    // 창 크기 변경 시 카메라 및 렌더러의 크기 재설정
    const onResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight; // 카메라의 종횡비를 새 창 크기에 맞게 조정
      camera.updateProjectionMatrix(); // 카메라의 투영 매트릭스를 업데이트
      renderer.setSize(mount.clientWidth, mount.clientHeight); // 렌더러의 크기를 새 창 크기에 맞게 조정
    };
    window.addEventListener("resize", onResize); // 창 크기가 변경될 때 onResize 함수 실행

    // 마우스 움직임에 따라 정육면체 회전을 제어하는 함수
    const onMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event; // 마우스의 현재 위치를 가져옴
      const { innerWidth, innerHeight } = window; // 창의 크기를 가져옴

      mouseX = (clientX / innerWidth) * 2 - 1; // 마우스의 X 위치를 -1 ~ 1 범위로 변환
      mouseY = -(clientY / innerHeight) * 2 + 1; // 마우스의 Y 위치를 -1 ~ 1 범위로 변환
      setIsMouseActive(true); // 마우스가 움직이는 상태로 변경
    };

    // 마우스가 화면을 벗어났을 때 호출되는 함수
    const onMouseLeave = () => {
      setIsMouseActive(false); // 마우스가 움직이지 않는 상태로 변경
    };

    if (isMouseHandler) {
      window.addEventListener("mousemove", onMouseMove); // 마우스가 움직일 때 onMouseMove 함수 실행
      window.addEventListener("mouseleave", onMouseLeave); // 마우스가 화면을 벗어날 때 onMouseLeave 함수 실행
    }

    const animate = () => {
      requestAnimationFrame(animate);

      if (isMouseActive) {
        cube.rotation.x += (mouseY - cube.rotation.x) * 0.1; // 마우스의 Y축 움직임에 따라 정육면체의 X축 회전값 조정
        cube.rotation.y += (mouseX - cube.rotation.y) * 0.1; // 마우스의 X축 움직임에 따라 정육면체의 Y축 회전값 조정
      } else {
        cube.rotation.x += 0.01; // 마우스가 움직이지 않으면 X축으로 천천히 회전
        cube.rotation.y += 0.01; // 마우스가 움직이지 않으면 Y축으로 천천히 회전
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      if (isMouseHandler) {
        window.removeEventListener("mousemove", onMouseMove); // 리스너 제거
        window.removeEventListener("mouseleave", onMouseLeave); // 리스너 제거
      }
      window.removeEventListener("resize", onResize); // 리스너 제거
      mount.removeChild(renderer.domElement);
    };
  }, [isMouseActive]);

  return <ThreeJsContent ref={mountRef}></ThreeJsContent>;
};

export default ThreeJs;
