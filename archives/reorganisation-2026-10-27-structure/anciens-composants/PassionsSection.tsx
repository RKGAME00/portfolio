import Image from 'next/image';
import { Button } from '@/components/ui/Button';
export function PassionsSection() {
  return (
    <section className="section container passions-feature">
      <div className="passions-photo">
        <Image
          src="/images/musique.webp"
          alt="Clavier et table de mixage dans mon espace de pratique musicale"
          fill
          sizes="(max-width: 700px) 100vw, 45vw"
        />
      </div>
      <div>
        <p className="eyebrow">04 / Et en dehors de l’atelier ?</p>
        <h2>
          La même curiosité.
          <br />
          D’autres fréquences.
        </h2>
        <p>
          Le piano, la composition et la sonorisation font aussi partie de mon quotidien.
          J’aime autant explorer un son que comprendre un circuit.
        </p>
        <Button href="/passions" variant="secondary">
          Découvrir mes passions
        </Button>
      </div>
    </section>
  );
}
