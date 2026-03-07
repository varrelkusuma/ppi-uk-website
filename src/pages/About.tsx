import Layout from "@/components/Layout";
import { Target, Eye, Heart } from "lucide-react";

const values = [
  { icon: Target, title: "Mission", text: "To unite and empower Indonesian students across the UK through education, collaboration, and community." },
  { icon: Eye, title: "Vision", text: "A generation of Indonesian scholars who drive positive impact for Indonesia and the global community." },
  { icon: Heart, title: "Values", text: "Integrity, inclusivity, excellence, and a deep commitment to serving Indonesia from abroad." },
];

const About = () => (
  <Layout>
    {/* Page Header */}
    <section className="bg-primary py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-heading font-extrabold text-primary-foreground mb-3">About PPI UK</h1>
        <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
          Learn about our history, mission, and the people behind the organisation.
        </p>
      </div>
    </section>

    {/* Story */}
    <section className="py-20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl font-heading font-bold text-foreground mb-6">Our Story</h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            Perhimpunan Pelajar Indonesia di United Kingdom (PPI UK) is the largest
            Indonesian student organisation in the UK. Founded with the purpose of
            connecting Indonesian students studying across British universities, PPI UK
            has grown into a vibrant community of scholars, researchers, and
            professionals.
          </p>
          <p>
            Through events, academic forums, career workshops, and cultural
            celebrations, we create an environment where Indonesian students can thrive
            academically and personally while maintaining strong ties to their homeland.
          </p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-16" style={{ background: "hsl(var(--section-gray))" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-heading font-bold text-center mb-12 text-foreground">What Drives Us</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {values.map((v) => (
            <div key={v.title} className="bg-background rounded-xl p-8 shadow-sm text-center">
              <v.icon className="mx-auto text-accent mb-4" size={32} />
              <h3 className="font-heading font-bold text-lg mb-3 text-foreground">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
