import { Button } from '@/components/ui/Button';
export default function NotFound() {
  return (
    <div className="container page-content">
      <header className="page-heading">
        <p className="eyebrow">404 / Page introuvable</p>
        <h1>
          Une autre piste
          <br />
          <span>à explorer.</span>
        </h1>
        <p>Cette page n’existe pas ou a changé d’adresse.</p>
        <Button href="/">Revenir à l’accueil</Button>
      </header>
    </div>
  );
}
