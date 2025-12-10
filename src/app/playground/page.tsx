"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function PlayGroundPage() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // --- 1. 씬 & 카메라 설정 ---
    const scene = new THREE.Scene();
    // 짙은 남색 배경으로 우주/심해 느낌 연출
    scene.background = new THREE.Color(0x050510);
    // 멀리 있는 입자가 흐릿해지도록 안개 효과 추가
    scene.fog = new THREE.FogExp2(0x050510, 0.0025);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    // 카메라 위치: 위에서 비스듬히 내려다보는 각도
    camera.position.set(0, 50, 100);

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      powerPreference: "high-performance" 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    // --- 2. 입자 시스템 (Particle System) 생성 ---
    // 가로세로 입자 개수 (개수가 많을수록 부드럽지만 성능을 탐)
    const SEPARATION = 4;
    const AMOUNTX = 100; // 가로 100개
    const AMOUNTY = 100; // 세로 100개
    const numParticles = AMOUNTX * AMOUNTY;

    const positions = new Float32Array(numParticles * 3);
    const scales = new Float32Array(numParticles);

    // 초기 위치 설정 (격자 모양)
    let i = 0;
    let j = 0;
    for (let ix = 0; ix < AMOUNTX; ix++) {
      for (let iy = 0; iy < AMOUNTY; iy++) {
        // x, y, z 좌표
        positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2; // 중앙 정렬
        positions[i + 1] = 0; // 높이 (나중에 애니메이션으로 변경됨)
        positions[i + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;
        
        scales[j] = 1;
        i += 3;
        j++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

    // 커스텀 쉐이더 재질 대신 성능을 위해 텍스처기반 PointsMaterial 사용하되 색상은 Loop에서 변경
    // 입자 하나하나를 빛나는 원으로 표현하기 위한 캔버스 텍스처 생성
    const getTexture = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 32;
        canvas.height = 32;
        const context = canvas.getContext('2d');
        if(context) {
            const gradient = context.createRadialGradient(16, 16, 0, 16, 16, 16);
            gradient.addColorStop(0, 'rgba(255,255,255,1)');
            gradient.addColorStop(0.2, 'rgba(255,255,255,0.8)');
            gradient.addColorStop(0.5, 'rgba(255,255,255,0.2)');
            gradient.addColorStop(1, 'rgba(0,0,0,0)');
            context.fillStyle = gradient;
            context.fillRect(0,0,32,32);
        }
        return new THREE.CanvasTexture(canvas);
    }

    const material = new THREE.PointsMaterial({
      size: 3.5, // 입자 크기
      map: getTexture(),
      transparent: true,
      opacity: 0.8,
      vertexColors: true, // 위치에 따라 색상을 다르게 주기 위해 true 설정
      blending: THREE.AdditiveBlending, // 빛이 겹치면 더 밝아지도록
      depthWrite: false,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // 색상 배열 미리 준비 (성능 최적화)
    const colors = new Float32Array(numParticles * 3);
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // --- 3. 인터랙션 변수 ---
    let mouseX = 0;
    let mouseY = 0;
    let count = 0; // 시간 경과 변수

    const handleMouseMove = (event: MouseEvent) => {
      // 화면 중심을 0,0으로 하는 정규화된 좌표 계산
      mouseX = event.clientX - window.innerWidth / 2;
      mouseY = event.clientY - window.innerHeight / 2;
    };

    // 모바일 터치 대응
    const handleTouchMove = (event: TouchEvent) => {
        if (event.touches.length > 0) {
            mouseX = event.touches[0].clientX - window.innerWidth / 2;
            mouseY = event.touches[0].clientY - window.innerHeight / 2;
        }
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchmove", handleTouchMove);

    // --- 4. 애니메이션 루프 ---
    const animate = () => {
      requestAnimationFrame(animate);

      // 카메라 움직임 (마우스 위치에 따라 부드럽게 따라감)
      camera.position.x += (mouseX - camera.position.x) * 0.05;
      camera.position.y += (-mouseY + 50 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      const positions = particles.geometry.attributes.position.array as Float32Array;
      const colors = particles.geometry.attributes.color.array as Float32Array;
      
      let i = 0;
      let j = 0;
      
      // 수학적 파동 함수 (Sine Wave)
      for (let ix = 0; ix < AMOUNTX; ix++) {
        for (let iy = 0; iy < AMOUNTY; iy++) {
          // X축과 Y축의 위치에 따라 높이(Y)를 Sine파로 흔듦
          // count를 더해주어 파도가 흐르는 효과를 줌
          const value = (Math.sin((ix + count) * 0.3) * 5) + (Math.sin((iy + count) * 0.5) * 5);
          
          positions[i + 1] = value * 2; // 높이 반영

          // 높이에 따른 색상 매핑 (그라데이션 효과)
          // 높음: Cyan/Blue, 낮음: Purple/Magenta
          const colorVal = (value + 5) / 10; // 0~1 사이 값으로 정규화 근사치
          
          // R: 보라색 계열 (높이가 낮을수록 강함)
          colors[i] = 0.1 + (1.0 - colorVal) * 0.8; 
          // G: 청록색 계열 (높이가 높을수록 강함)
          colors[i + 1] = 0.2 + colorVal * 0.6; 
          // B: 항상 밝게 유지
          colors[i + 2] = 0.8; 

          i += 3;
          j++;
        }
      }

      particles.geometry.attributes.position.needsUpdate = true;
      particles.geometry.attributes.color.needsUpdate = true;

      // 파동 속도 조절
      count += 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // --- 5. 리사이즈 처리 ---
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", handleResize);
      
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {/* 3D 캔버스 영역 */}
      <div ref={mountRef} className="absolute inset-0 z-0" />

      {/* 텍스트 콘텐츠 오버레이 */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pointer-events-none select-none">
        <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_15px_rgba(0,255,255,0.5)] tracking-tighter animate-pulse">
          PLAYGROUND
        </h1>
        <p className="mt-4 text-xl text-blue-200 font-light tracking-[0.5em] opacity-80 mix-blend-screen">
          DIGITAL WAVE SIMULATION
        </p>
        
        {/* 장식용 UI 요소 */}
        <div className="absolute bottom-12 w-full flex justify-between px-12 text-xs text-gray-500 font-mono">
           <span>COORDS: {`{ X: 102.4, Y: 44.2 }`}</span>
           <span>SYSTEM: ONLINE</span>
        </div>
      </div>
    </main>
  );
}