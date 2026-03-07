import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Users, GraduationCap, Globe, ArrowRight } from "lucide-react";

const stats = [
  { icon: Users, value: "5,000+", label: "Members" },
  { icon: GraduationCap, value: "100+", label: "Universities" },
  { icon: Globe, value: "50+", label: "Cities" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden" style={{ background: "var(--hero-gradient)" }}>
      <div className="container mx-auto px-4 py-24 md:py-32 text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight mb-6">
          Empowering Indonesian<br />Students in the <span className="text-accent">UK</span>
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-10 font-body">
          Perhimpunan Pelajar Indonesia — building bridges between Indonesian scholars
          and opportunities across the United Kingdom.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Learn More <ArrowRight size={18} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border-2 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-heading font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>
      {/* decorative circles */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary-foreground/5 rounded-full" />
      <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-primary-foreground/5 rounded-full" />
    </section>

    {/* Stats */}
    <section className="py-16" style={{ background: "hsl(var(--section-gray))" }}>
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label} className="space-y-2">
            <s.icon className="mx-auto text-primary" size={36} />
            <p className="text-3xl font-heading font-bold text-foreground">{s.value}</p>
            <p className="text-muted-foreground font-body">{s.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Mission preview */}
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h2 className="text-3xl font-heading font-bold mb-6 text-foreground">Our Mission</h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
          PPI UK serves as the umbrella organisation for Indonesian students throughout
          the United Kingdom. We foster academic excellence, cultural exchange, and
          professional development to prepare future leaders for Indonesia and the world.
        </p>
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-primary font-heading font-semibold hover:underline"
        >
          Read more about us <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Index;
