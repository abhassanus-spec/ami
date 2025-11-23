import React from 'react';

const HeroElegant: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center bg-beige-100">
      <div className="w-full">
        <div className="grid lg:grid-cols-[60%_40%] min-h-screen">
          {/* LEFT SIDE - Image */}
          <div className="relative overflow-hidden lg:min-h-screen min-h-[50vh]">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80"
              alt="Ästhetik Praxis Aljeroudy Essen"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-teal-500/30 to-teal-600/20"></div>
          </div>

          {/* RIGHT SIDE - Content */}
          <div className="bg-beige-100 flex flex-col justify-center px-8 md:px-16 py-16 lg:py-20">
            {/* Location Badge */}
            <span className="inline-block bg-teal-500/10 text-teal-500 px-5 py-2 rounded-full text-sm font-medium mb-8 w-fit">
              📍 Essen-Stoppenberg
            </span>

            {/* Heading */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-teal-500 font-semibold leading-tight mb-5">
              Willkommen bei<br />
              Aljeroudy Ästhetikpraxis
            </h1>

            {/* Divider */}
            <div className="w-20 h-0.5 bg-beige-400 my-5"></div>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-charcoal leading-relaxed mb-8">
              Professionelle ästhetische Behandlungen<br />
              für Ihr Wohlbefinden
            </p>

            {/* Features */}
            <div className="space-y-4 mb-10">
              {['Transparente Preise', 'Natürliche Ergebnisse', 'Erfahrene Behandlung'].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="text-beige-400 text-xl font-bold">✓</span>
                  <span className="text-charcoal text-base">{feature}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#booking"
                className="inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-10 py-4 rounded-full text-lg font-medium transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                <span>Termin vereinbaren</span>
                <span>→</span>
              </a>
              <a
                href="https://wa.me/4917641454381"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-[#25D366] hover:underline px-5 py-4 text-lg font-medium transition-all"
              >
                <span>💬</span>
                <span>WhatsApp Beratung</span>
              </a>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3 text-charcoal">
              <span className="text-yellow-400 text-lg">⭐⭐⭐⭐⭐</span>
              <span className="text-sm">
                <strong>4.9</strong> <span className="text-charcoal/60">(180+ Bewertungen)</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroElegant;
