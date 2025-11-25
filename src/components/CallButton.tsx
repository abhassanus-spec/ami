import React from 'react';
import { useLocation } from 'react-router-dom';
import { Phone } from 'lucide-react';

const CallButton: React.FC = () => {
  const location = useLocation();
  const phoneNumber = '+4917641454381';

  const isLegalPage = location.pathname !== '/';

  if (isLegalPage) {
    return null;
  }

  return (
    <a
      href={`tel:${phoneNumber}`}
      className="md:hidden fixed top-20 right-4 z-40 bg-green-800 hover:bg-green-700 text-white px-4 py-3 rounded-full shadow-lg transition-all duration-300 flex items-center space-x-2"
      aria-label="Jetzt anrufen"
    >
      <Phone size={20} />
      <span className="text-sm font-semibold">Anrufen</span>
    </a>
  );
};

export default CallButton;
