import React, { useState } from 'react';

interface OfferSelectionProps {
  onNext: () => void;
}

const OfferSelection: React.FC<OfferSelectionProps> = ({ onNext }) => {
  const [selectedOffer, setSelectedOffer] = useState<number | null>(null);

  // In a real scenario, these offers would be calculated based on the client's information
  const offers = [
    { id: 1, amount: 50000, installments: 12, tna: 55, tea: 70, cfta: 90 },
    { id: 2, amount: 100000, installments: 24, tna: 60, tea: 75, cfta: 95 },
    { id: 3, amount: 150000, installments: 36, tna: 65, tea: 80, cfta: 100 },
  ];

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Selección de Oferta</h2>
      <div className="mb-6">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className={`p-4 mb-4 border rounded-md cursor-pointer ${
              selectedOffer === offer.id ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
            }`}
            onClick={() => setSelectedOffer(offer.id)}
          >
            <h3 className="font-bold mb-2">Oferta {offer.id}</h3>
            <p>Monto: ${offer.amount}</p>
            <p>Cuotas: {offer.installments}</p>
            <p>TNA: {offer.tna}%</p>
            <p>TEA: {offer.tea}%</p>
            <p>CFTA: {offer.cfta}%</p>
          </div>
        ))}
      </div>
      <button
        onClick={onNext}
        disabled={!selectedOffer}
        className={`w-full py-2 px-4 rounded-md ${
          selectedOffer
            ? 'bg-blue-600 text-white hover:bg-blue-700'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50`}
      >
        Continuar
      </button>
    </div>
  );
};

export default OfferSelection;