"use client";
import { useEffect, useRef, useState } from "react";

export default function FeatureVideo({ src, poster, className = "" }: { src: string; poster?: string; className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) return;
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.3 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, [error]);

  if (error) {
    return (
      <div
        className={`flex items-center justify-center rounded-xl border border-border-light ${className}`}
        style={{ aspectRatio: "16/9", backgroundColor: "rgba(42, 94, 169, 0.08)" }}
      >
        <p className="text-sm text-text-faint font-medium px-4 text-center">Vidéo bientôt disponible</p>
      </div>
    );
  }

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      muted
      playsInline
      loop
      onError={() => setError(true)}
      className={className}
    />
  );
}
