"use client";
import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";

interface VideoBlockProps {
  src: string;
  poster?: string;
  tag?: string;
  duration?: string;
  label?: string;
  /** sous-titre du placeholder (par défaut : chemin de dépôt) */
  sub?: string;
  /** "standard" = aspect 16/10 dans un pilier ; "hero" = hauteur fixe */
  variant?: "standard" | "hero";
  className?: string;
}

/**
 * Emplacement vidéo standardisé.
 * - Si le MP4 est présent : <video> autoplay/muted/loop/playsInline,
 *   joué uniquement quand visible (IntersectionObserver).
 * - Si le fichier est absent (erreur de chargement) : placeholder élégant
 *   identique au mockup v4 (gradient, icône play, label, sous-titre).
 * Le tag (haut gauche) et la durée (bas droite) restent visibles dans les deux cas.
 */
export default function VideoBlock({
  src,
  poster,
  tag,
  duration,
  label = "Vidéo à venir",
  sub = "À déposer dans /videos/features/",
  variant = "standard",
  className = "",
}: VideoBlockProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (failed) return;
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
  }, [failed]);

  const wrapCls = variant === "hero" ? "hero-video-wrap" : "video-wrap";

  return (
    <div className={`${wrapCls} ${className}`.trim()}>
      {tag && <span className="video-tag">{tag}</span>}
      {duration && <span className="video-duration">{duration}</span>}

      {failed ? (
        <div className="video-placeholder">
          <div className="video-placeholder-icon" aria-hidden="true">
            <Play size={22} fill="currentColor" />
          </div>
          <div className="video-placeholder-label">{label}</div>
          <div className="video-placeholder-sub">{sub}</div>
        </div>
      ) : (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted
          loop
          playsInline
          preload="none"
          aria-label={label}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
