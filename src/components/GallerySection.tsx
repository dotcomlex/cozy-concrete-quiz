import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// New optimized gallery images
import drivewayBrick from "@/assets/gallery-driveway-brick.webp";
import patioBackyard from "@/assets/gallery-patio-backyard.webp";
import drivewayStucco from "@/assets/gallery-driveway-stucco.webp";
import drivewayWinter from "@/assets/gallery-driveway-winter.webp";
import patioEvening from "@/assets/gallery-patio-evening.webp";
import drivewayRanch from "@/assets/gallery-driveway-ranch.webp";
import drivewayFlorida from "@/assets/gallery-driveway-florida.webp";
import crewAction from "@/assets/gallery-crew-action.webp";

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    { image: drivewayBrick, alt: "Outdated kitchen transformed to modern design with custom cabinets", label: "Kitchen Remodel", location: "Denver, CO" },
    { image: patioBackyard, alt: "Traditional bathroom updated to spa-like retreat with tile work", label: "Bathroom", location: "Littleton, CO" },
    { image: drivewayStucco, alt: "Unfinished basement converted to beautiful living space", label: "Basement", location: "Boulder, CO" },
    { image: drivewayWinter, alt: "Complete kitchen renovation with countertops and lighting", label: "Kitchen Remodel", location: "Lakewood, CO" },
    { image: patioEvening, alt: "Master bathroom remodel with walk-in shower and vanity", label: "Bathroom", location: "Aurora, CO" },
    { image: drivewayRanch, alt: "Basement finishing with entertainment area and bar", label: "Basement", location: "Arvada, CO" },
    { image: drivewayFlorida, alt: "Kitchen and bathroom combo remodel transformation", label: "Kitchen & Bath", location: "Castle Rock, CO" },
    { image: crewAction, alt: "14er Renovation crew working on a kitchen remodel", label: "Our Crew", location: "Colorado" },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="py-16 lg:py-24 section-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Transformations
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Real Colorado <span className="text-primary">Transformations</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            See what's possible — kitchens, bathrooms, basements, and more
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-elevated aspect-square bg-muted">
            <img
              src={projects[currentIndex].image}
              alt={projects[currentIndex].alt}
              width={800}
              height={800}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-full h-full object-cover transition-opacity duration-300"
            />
            {/* Project Label Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="text-white font-medium text-lg">{projects[currentIndex].label}</p>
              <p className="text-white/70 text-sm">{projects[currentIndex].location}</p>
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-card/95 backdrop-blur-sm hover:bg-card shadow-lg border-0"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-card/95 backdrop-blur-sm hover:bg-card shadow-lg border-0"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

        </div>

        <div className="flex justify-center gap-2 sm:gap-3 mt-6 overflow-x-auto pb-2 hide-scrollbar">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-lg overflow-hidden transition-all duration-300 flex-shrink-0 bg-muted ${
                index === currentIndex
                  ? "ring-2 ring-primary ring-offset-2"
                  : "opacity-50 hover:opacity-100"
              }`}
            >
              <img
                src={project.image}
                alt={project.alt}
                width={72}
                height={72}
                loading="lazy"
                decoding="async"
                className="w-[72px] h-[72px] sm:w-20 sm:h-20 object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
