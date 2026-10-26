import { Button } from '@/components/ui/Button';
import { profile } from '@/content/profile';
export function ContactSection() {
  return (
    <section className="contact-section">
      <div className="container contact-inner">
        <div>
          <p className="eyebrow">La suite s’écrit avec vous</p>
          <h2>
            Un projet, une opportunité ?<br />
            Parlons-en.
          </h2>
          <p>Électronique, systèmes embarqués, essais ou production.</p>
        </div>
        <Button href={`mailto:${profile.email}`}>Me contacter</Button>
      </div>
    </section>
  );
}
