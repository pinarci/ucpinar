import Image from "next/image";
import type { MediaItem } from "@/content/site-content";

export function MediaSlot({ media, priority = false }: { media: MediaItem; priority?: boolean }) {
  if (!media.src) {
    return <div className={`media-slot media-slot--${media.ratio} media-slot--empty`} aria-hidden="true" />;
  }

  return (
    <figure className={`media-slot media-slot--${media.ratio}${media.assetType === "brandProductRender" ? " media-slot--brand-product-render" : ""}`}>
      <Image
        src={media.src}
        alt={media.alt}
        fill
        loading={priority ? "eager" : "lazy"}
        sizes="(max-width: 920px) 100vw, 60vw"
        style={{ objectPosition: media.objectPosition }}
      />
      {media.caption ? <figcaption className="media-slot__label">{media.caption}</figcaption> : null}
    </figure>
  );
}
