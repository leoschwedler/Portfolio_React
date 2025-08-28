import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY2NzM4NyIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+",
  onLoad,
  onError,
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (priority) {
      loadImage();
    }
  }, [src, priority]);

  const loadImage = () => {
    const img = new Image();
    img.onload = () => {
      setImageSrc(src);
      setIsLoaded(true);
      onLoad?.();
    };
    img.onerror = () => {
      setHasError(true);
      onError?.();
    };
    img.src = src;
  };

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !isLoaded && !hasError) {
        loadImage();
      }
    });
  };

  useEffect(() => {
    if (!priority) {
      const observer = new IntersectionObserver(handleIntersection, {
        rootMargin: "50px",
      });

      const imgElement = document.querySelector(`[data-src="${src}"]`);
      if (imgElement) {
        observer.observe(imgElement);
      }

      return () => observer.disconnect();
    }
  }, [src, priority, isLoaded, hasError]);

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={cn(
        "transition-opacity duration-300",
        isLoaded ? "opacity-100" : "opacity-0",
        className
      )}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      data-src={src}
      onLoad={() => {
        if (!isLoaded) {
          setIsLoaded(true);
          onLoad?.();
        }
      }}
      onError={() => {
        setHasError(true);
        onError?.();
      }}
    />
  );
};
