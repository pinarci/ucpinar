interface GoogleMapPreviewProps {
  latitude: number;
  longitude: number;
  title: string;
  wide?: boolean;
}

export function GoogleMapPreview({ latitude, longitude, title, wide = false }: GoogleMapPreviewProps) {
  const query = encodeURIComponent(`${latitude},${longitude}`);

  return (
    <div className={`google-map-preview${wide ? " google-map-preview--wide" : ""}`}>
      <iframe
        src={`https://www.google.com/maps?q=${query}&z=16&output=embed`}
        title={title}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
