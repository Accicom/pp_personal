import React, { useState } from 'react';
import { FileText } from 'lucide-react';

interface NewLoanProps {
  onNext: () => void;
}

const NewLoan: React.FC<NewLoanProps> = ({ onNext }) => {
  const [cuit, setCuit] = useState('');
  const [salary, setSalary] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [incomeType, setIncomeType] = useState('');
  const [bank, setBank] = useState('Banco Macro');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement logic to check if client exists in RUC database
    // and pre-fill data if available
    onNext();
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Nuevo Préstamo</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="cuit" className="block text-gray-700 mb-2">CUIT</label>
          <input
            type="text"
            id="cuit"
            value={cuit}
            onChange={(e) => setCuit(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="salary" className="block text-gray-700 mb-2">Salario Bruto</label>
          <input
            type="number"
            id="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="birthDate" className="block text-gray-700 mb-2">Fecha de Nacimiento</label>
          <input
            type="date"
            id="birthDate"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="incomeType" className="block text-gray-700 mb-2">Percibe Ingreso</label>
          <select
            id="incomeType"
            value={incomeType}
            onChange={(e) => setIncomeType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Seleccione una opción</option>
            <option value="Jubilado">Jubilado</option>
            <option value="Pensionado">Pensionado</option>
            <option value="Emp. Privada">Emp. Privada</option>
            <option value="Adm publica">Adm publica</option>
            <option value="Monotributista">Monotributista</option>
            <option value="Autonomo">Autonomo</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="bank" className="block text-gray-700 mb-2">Banco Emisor de Haberes</label>
          <input
            type="text"
            id="bank"
            value={bank}
            onChange={(e) => setBank(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="phone" className="block text-gray-700 mb-2">Número de Celular</label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center"
        >
          <FileText className="mr-2" size={18} />
          Continuar
        </button>
      </form>
    </div>
  );
};

export default NewLoan;