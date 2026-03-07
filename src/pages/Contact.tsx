import { useState } from "react";
import Layout from "@/components/Layout";
import { Mail, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-heading font-extrabold text-primary-foreground mb-3">Contact Us</h1>
          <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto">
            Have a question or want to collaborate? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 max-w-5xl">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Get in Touch</h2>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're a student looking to join, a partner organisation, or simply
                curious about PPI UK — reach out and we'll get back to you promptly.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="text-primary mt-1" size={20} />
                <div>
                  <p className="font-heading font-semibold text-foreground">Email</p>
                  <p className="text-muted-foreground text-sm">contact@ppiuk.org</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-1" size={20} />
                <div>
                  <p className="font-heading font-semibold text-foreground">Location</p>
                  <p className="text-muted-foreground text-sm">United Kingdom</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-muted rounded-xl p-8">
            {submitted ? (
              <div className="text-center py-12">
                <Send className="mx-auto text-primary mb-4" size={36} />
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for reaching out. We'll respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-heading font-semibold text-foreground mb-1.5">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-semibold py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
