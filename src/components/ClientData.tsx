import React from 'react';

interface ClientDataProps {
  onNext: () => void;
}

const ClientData: React.FC<ClientDataProps> = ({ onNext }) => {
  // This component will display client data from RUC if available
  // For now, we'll just show a placeholder and a button to continue
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Datos del Cliente</h2>
      <p className="mb-4">Aquí se mostrarán los datos del cliente obtenidos del RUC.</p>
      <button
        onClick={onNext}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Continuar
      </button>
    </div>
  );
};

export default ClientData;