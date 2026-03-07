import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-heading font-bold mb-3">PPI UK</h3>
          <p className="text-sm opacity-80 leading-relaxed">
            Perhimpunan Pelajar Indonesia di United Kingdom. Connecting and empowering Indonesian students across the UK.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-heading font-bold uppercase tracking-wider mb-3">Quick Links</h4>
          <div className="space-y-2">
            <Link to="/" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">Home</Link>
            <Link to="/about" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">About</Link>
            <Link to="/contact" className="block text-sm opacity-80 hover:opacity-100 transition-opacity">Contact Us</Link>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-heading font-bold uppercase tracking-wider mb-3">Connect</h4>
          <p className="text-sm opacity-80">contact@ppiuk.org</p>
          <p className="text-sm opacity-80 mt-1">United Kingdom</p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm opacity-60">
        © {new Date().getFullYear()} PPI UK. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
