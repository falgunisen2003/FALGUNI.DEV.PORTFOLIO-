import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border py-8 text-center">
      <h3 className="text-lg font-semibold">Falguni Sen</h3>

      <p className="text-sm text-muted-foreground mt-2">
        MCA Graduate | Full Stack Web Developer
      </p>

      <p className="text-sm text-muted-foreground mt-2 break-all">
        falgunisen0@gmail.com
      </p>

      <a
        href="#hero"
        className="inline-flex mt-4 rounded-full bg-primary/10 p-3 text-primary hover:bg-primary/20"
      >
        <ArrowUp size={20} />
      </a>

      <p className="mt-6 text-xs text-muted-foreground">
        © {new Date().getFullYear()} Falguni Sen. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;