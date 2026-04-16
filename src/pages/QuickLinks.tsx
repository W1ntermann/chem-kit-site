import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import serviceImg from "@/assets/service.jpg";
import contactImg from "@/assets/contact-person.jpg";
import galleryImg from "@/assets/hero-factory.jpg";

const cards = [
  { title: "Сервіс", image: serviceImg, desc: "Технічна підтримка та обслуговування" },
  { title: "Контактна особа", image: contactImg, desc: "Знайдіть вашого менеджера" },
  { title: "Галерея", image: galleryImg, desc: "Перегляньте нашу роботу" },
];

export function QuickLinksSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Link href="/" className="quick-link-card group relative block h-72 overflow-hidden rounded-lg">
                <img
                  src={card.image}
                  alt={card.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  width={800}
                  height={600}
                />
                <div className="relative z-10 flex h-full flex-col justify-end p-6">
                  <h2 className="text-lg font-bold uppercase tracking-wide text-primary-foreground">
                    {card.title}
                  </h2>
                  <p className="mt-1 text-sm text-primary-foreground/70">{card.desc}</p>
                  <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-accent">
                    Детальніше <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}