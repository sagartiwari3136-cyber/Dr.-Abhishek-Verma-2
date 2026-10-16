"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function SealCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    camera.position.set(0, 0, 8);

    function size() {
      if (!wrap) return;
      const w = wrap.clientWidth;
      const h = wrap.clientHeight;
      renderer.setSize(w, h, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    }
    size();
    window.addEventListener("resize", size);

    const gold = new THREE.Color(0xc9a15d);

    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.5, 0.09, 32, 100),
      new THREE.MeshStandardMaterial({
        color: gold,
        metalness: 0.85,
        roughness: 0.3,
        emissive: 0x2a1f0d,
        emissiveIntensity: 0.3,
      })
    );
    scene.add(ring);

    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(1.9, 0.035, 24, 100),
      new THREE.MeshStandardMaterial({ color: gold, metalness: 0.8, roughness: 0.35 })
    );
    scene.add(ring2);

    const tickGroup = new THREE.Group();
    const tickGeo = new THREE.BoxGeometry(0.04, 0.28, 0.04);
    const tickMat = new THREE.MeshStandardMaterial({ color: gold, metalness: 0.7, roughness: 0.4 });
    const count = 40;
    for (let i = 0; i < count; i++) {
      const t = new THREE.Mesh(tickGeo, tickMat);
      const a = (i / count) * Math.PI * 2;
      const r = 2.15;
      t.position.set(Math.cos(a) * r, Math.sin(a) * r, 0);
      t.rotation.z = a + Math.PI / 2;
      tickGroup.add(t);
    }
    scene.add(tickGroup);

    const cvs = document.createElement("canvas");
    cvs.width = 512;
    cvs.height = 512;
    const ctx = cvs.getContext("2d")!;
    ctx.fillStyle = "#0e1218";
    ctx.beginPath();
    ctx.arc(256, 256, 250, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#c9a15d";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(256, 256, 230, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = "#e9c77e";
    ctx.font = "600 190px Fraunces, serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("AV", 256, 268);
    const tex = new THREE.CanvasTexture(cvs);
    const disc = new THREE.Mesh(
      new THREE.CircleGeometry(1.7, 64),
      new THREE.MeshStandardMaterial({ map: tex, metalness: 0.2, roughness: 0.6 })
    );
    scene.add(disc);

    scene.add(new THREE.AmbientLight(0xffffff, 0.55));
    const key = new THREE.PointLight(0xffe9c2, 1.4);
    key.position.set(4, 4, 6);
    scene.add(key);
    const rim = new THREE.PointLight(0x8899ff, 0.4);
    rim.position.set(-5, -3, 3);
    scene.add(rim);

    const group = new THREE.Group();
    group.add(ring, ring2, tickGroup, disc);
    scene.add(group);

    let dragging = false;
    let lastX = 0;
    let lastY = 0;
    let velX = 0.0025;
    let velY = 0;
    let frameId: number;

    const onPointerDown = (e: PointerEvent) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
    };
    const onPointerUp = () => {
      dragging = false;
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      group.rotation.y += dx * 0.005;
      group.rotation.x += dy * 0.005;
      velX = dx * 0.0004;
      velY = dy * 0.0004;
      lastX = e.clientX;
      lastY = e.clientY;
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointermove", onPointerMove);

    function animate() {
      frameId = requestAnimationFrame(animate);
      if (!dragging) {
        group.rotation.y += 0.0032 + velX;
        group.rotation.x += velY;
        velX *= 0.94;
        velY *= 0.94;
      }
      renderer.render(scene, camera);
    }
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", size);
      canvas.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointermove", onPointerMove);
      renderer.dispose();
      scene.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          obj.geometry.dispose();
          if (Array.isArray(obj.material)) {
            obj.material.forEach((m) => m.dispose());
          } else {
            obj.material.dispose();
          }
        }
      });
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative h-[280px] md:h-[min(560px,60vh)] flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.18em] uppercase text-muted">
        Seal of Office — drag to rotate
      </div>
    </div>
  );
}
