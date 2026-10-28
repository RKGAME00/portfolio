'use client';
import { useRef, type ReactNode } from 'react';

/** Le dialogue natif retient le focus, gère Échap et le rend au bouton à la fermeture. */
export function ImageLightbox({
  src,
  title,
  children,
}: {
  src: string;
  title: string;
  children: ReactNode;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  return (
    <>
      <button
        type="button"
        className="image-lightbox-trigger"
        aria-label={`Agrandir : ${title}`}
        onClick={() => dialog.current?.showModal()}
      >
        {children}
      </button>
      <dialog
        ref={dialog}
        className="image-lightbox"
        aria-label={title}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className="image-lightbox-panel">
          <button
            type="button"
            className="button button--secondary"
            autoFocus
            onClick={() => dialog.current?.close()}
          >
            Fermer ×
          </button>
          {/* Charger l’original seulement à l’ouverture du dialogue. */}
          <LightboxImage dialog={dialog} src={src} title={title} />
          <p>{title}</p>
        </div>
      </dialog>
    </>
  );
}
import { useEffect, useState, type RefObject } from 'react';
function LightboxImage({
  dialog,
  src,
  title,
}: {
  dialog: RefObject<HTMLDialogElement | null>;
  src: string;
  title: string;
}) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    const observer = new MutationObserver(() => setOpen(element.open));
    observer.observe(element, { attributes: true, attributeFilter: ['open'] });
    return () => observer.disconnect();
  }, [dialog]);
  return open ? <img src={src} alt={title} /> : null;
}
