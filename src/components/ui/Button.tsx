import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

type Props = {
  href: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'text';
  arrow?: boolean;
  download?: boolean;
};
/** Un seul composant et un seul fichier CSS pour tous les liens d'action. */
export function Button({
  href,
  children,
  variant = 'primary',
  arrow = true,
  download,
}: Props) {
  const content = (
    <>
      {children}
      {arrow && <ArrowUpRight size={17} aria-hidden="true" />}
    </>
  );
  return download || href.startsWith('mailto:') || href.startsWith('https:') ? (
    <a className={`button button--${variant}`} href={href} download={download}>
      {content}
    </a>
  ) : (
    <Link className={`button button--${variant}`} href={href}>
      {content}
    </Link>
  );
}
