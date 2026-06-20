import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-4"
    >
      <div className="container z-10 mx-auto max-w-4xl text-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
            <span className="animate-fade-in opacity-0">
              Hi, I'm
            </span>

            <span className="animate-fade-in-delay-1 text-primary opacity-0">
              {" "}
             Falguni
            </span>

            <span className="animate-fade-in-delay-2 text-gradient ml-2 opacity-0">
             Sen
            </span>
          </h1>

          <p className="animate-fade-in-delay-3 mx-auto max-w-2xl text-lg text-muted-foreground opacity-0 md:text-xl">
           I build responsive and interactive web applications using modern web technologies. As an MCA graduate and aspiring developer, I am passionate about creating clean, efficient, and user-friendly digital experiences.
          </p>

          <div className="animate-fade-in-delay-4 pt-4 opacity-0">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 transform flex-col items-center animate-bounce">
        <span className="mb-2 text-sm text-muted-foreground">
          Scroll
        </span>

        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;