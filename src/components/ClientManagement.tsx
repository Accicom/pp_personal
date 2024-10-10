import React, { useState } from 'react';

interface ClientManagementProps {
  onNext: () => void;
}

const ClientManagement: React.FC<ClientManagementProps> = ({ onNext }) => {
  const [clientData, setClientData] = useState({
    dni: '',
    name: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setClientData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement logic to update client data in the system
    onNext();
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Gestión de Cliente</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="dni" className="block text-gray-700 mb-2">DNI</label>
          <input
            type="text"
            id="dni"
            name="dni"
            value={clientData.dni}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={clientData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 mb-2">Apellido</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={clientData.lastName}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={clientData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-700 mb-2">Teléfono</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={clientData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="address" className="block text-gray-700 mb-2">Dirección</label>
          <input
            type="text"
            id="address"
            name="address"
            value={clientData.address}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Actualizar y Continuar
        </button>
      </form>
    </div>
  );
};

export default ClientManagement;