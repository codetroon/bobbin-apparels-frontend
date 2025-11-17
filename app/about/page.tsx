import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-4xl font-bold">About Bobbin Apparels</h1>

        <div className="space-y-6 text-muted-foreground">
          <p className="text-lg leading-relaxed">
            At Bobbin Apparels, we believe clothing is more than style — it is
            comfort, confidence, and consistency. Since 2019, we have been
            committed to producing high-quality apparel that brands and
            individuals can trust. With a dedicated production setup and a
            skilled team, we ensure every piece is made with discipline,
            precision, and care.
          </p>

          <div>
            <h1 className="mb-8 text-4xl font-bold text-black">Who We Are</h1>
            <p className="text-lg leading-relaxed">
              Bobbin Apparels is the manufacturing and wholesale wing of the
              Bobbin brand. From fabric sourcing to cutting, sewing, finishing,
              printing, and packaging — we maintain a smooth and
              quality-controlled production line designed to serve both local
              and global clients.
            </p>
          </div>

          <div>
            <h1 className="mb-8 text-4xl font-bold text-black">What we do</h1>
            <p className="text-lg leading-relaxed">
              Bulk Manufacturing Custom Orders for Brands High-Quality Polo &
              T-Shirts Export-Grade Finishing Reliable & Consistent Production
              Fast Delivery and Clear Communication
            </p>
          </div>

          <h2 className="pt-6 text-2xl font-semibold text-foreground">
            Our Commitment
          </h2>

          <ul className="space-y-3 pl-6">
            <li className="list-disc">
              We don&apos;t believe in shortcuts. Every order, whether small or
              large, receives the same level of attention and responsibility.
              Our goal is simple: deliver products that meet standards, fit
              well, feel good, and last long.
            </li>
          </ul>

          <h2 className="pt-6 text-2xl font-semibold text-foreground">
            Our Values
          </h2>

          <ul className="space-y-3 pl-6">
            <li className="list-disc">
              Trust – We deliver what we promise. Quality – Fabric selection,
              stitching, and finishing with strict QC. Consistency – Stable
              production, reliable timelines, and repeatable results.
              Responsibility – Ethical practices and a customer-first mindset.
            </li>
          </ul>

          <h2 className="pt-6 text-2xl font-semibold text-foreground">
            Looking Ahead
          </h2>

          <ul className="space-y-3 pl-6">
            <li className="list-disc">
              Bobbin Apparels is expanding with a broader vision under Bobbin
              Group — focusing on manufacturing excellence, retail growth, and
              international market opportunities. We aim to build long-term
              partnerships and become a dependable manufacturing hub for brands
              across Bangladesh and beyond.
            </li>
          </ul>

          <h2 className="pt-6 text-2xl font-semibold text-foreground">
            Why Choose bobbin apparels?
          </h2>

          <p className="leading-relaxed">
            Because we make clothes that look good, feel better, and last
            longer. At Bobbin, you don&apos;t just wear fashion — you wear
            confidence.
          </p>

          <div className="pt-8">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90"
              >
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
