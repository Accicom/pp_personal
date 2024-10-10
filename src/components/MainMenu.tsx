import React from 'react';
import { UserPlus } from 'lucide-react';

interface MainMenuProps {
  onNewLoan: () => void;
}

const MainMenu: React.FC<MainMenuProps> = ({ onNewLoan }) => {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Panel de Menú</h2>
      <button
        onClick={onNewLoan}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center"
      >
        <UserPlus className="mr-2" size={18} />
        Nuevo Préstamo
      </button>
    </div>
  );
};

export default MainMenu;