import React from 'react';
import { MapPin, Check, Star, ArrowRight } from 'lucide-react';

const HeroElegant: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Split Design */}
      <div className="container mx-auto px-0">
        <div className="grid lg:grid-cols-5 min-h-screen">
          {/* LEFT - Image (60%) */}
          <div className="lg:col-span-3 relative overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80"
                alt="Ästhetik Praxis Aljeroudy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-teal-500/30"></div>
            </div>
          </div>

          {/* RIGHT - Content (40%) */}
          <div className="lg:col-span-2 bg-beige-100 flex items-center px-8 md:px-16 py-20 lg:py-0">
            <div className="w-full space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm">
                <MapPin size={16} className="text-teal-500" />
                <span className="text-charcoal">Essen-Stoppenberg</span>
              </div>

              {/* Heading */}
              <div>
                <p className="text-teal-500 text-lg mb-3 tracking-wide">Willkommen bei</p>
                <h1 className="font-display text-5xl md:text-6xl text-teal-600 mb-4 leading-tight">
                  Aljeroudy<br />
                  Ästhetikpraxis
                </h1>
                <div className="w-20 h-1 bg-beige-400 mb-6"></div>
                <p className="text-lg text-charcoal/80 leading-relaxed">
                  Professionelle ästhetische Behandlungen für Ihr Wohlbefinden
                </p>
              </div>

              {/* Features */}
              <div className="space-y-3">
                {[
                  'Transparente Preise',
                  'Natürliche Ergebnisse',
                  'Erfahrene Behandlung'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-beige-400 flex items-center justify-center">
                      <Check size={14} className="text-white" />
                    </div>
                    <span className="text-charcoal/90">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="space-y-4 pt-4">
                <a
                  href="#booking"
                  className="inline-flex items-center gap-3 px-10 py-4 bg-teal-500 hover:bg-teal-600 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  <span>Termin Vereinbaren</span>
                  <ArrowRight size={20} />
                </a>
                <div>
                  <a
                    href="https://wa.me/4917641454381"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#25D366] hover:underline"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>WhatsApp Beratung</span>
                  </a>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3 pt-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-charcoal/70 text-sm">
                  4.9 <span className="text-charcoal/50">(180+ Bewertungen)</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroElegant;
