import React, { useState } from 'react';

interface DebtPaymentProps {
  onNext: () => void;
}

const DebtPayment: React.FC<DebtPaymentProps> = ({ onNext }) => {
  const [hasDebt, setHasDebt] = useState(false);
  const [debtAmount, setDebtAmount] = useState(0);
  const [payDebt, setPayDebt] = useState(false);

  // In a real scenario, we would fetch the debt information from the ERP
  // For now, we'll simulate this with a button to show/hide debt information

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Pago de Deuda Actual</h2>
      <button
        onClick={() => setHasDebt(!hasDebt)}
        className="mb-4 bg-blue-100 text-blue-600 py-2 px-4 rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        {hasDebt ? 'Ocultar Deuda' : 'Mostrar Deuda'}
      </button>
      {hasDebt && (
        <div className="mb-6">
          <p className="mb-2">Deuda actual: ${debtAmount}</p>
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={payDebt}
              onChange={(e) => setPayDebt(e.target.checked)}
              className="mr-2"
            />
            Pagar deuda con el nuevo préstamo
          </label>
        </div>
      )}
      <button
        onClick={onNext}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        Continuar
      </button>
    </div>
  );
};

export default DebtPayment;