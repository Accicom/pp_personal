import React, { useState } from 'react';
import { Camera, Upload } from 'lucide-react';

interface DocumentationProps {
  onNext: () => void;
}

const Documentation: React.FC<DocumentationProps> = ({ onNext }) => {
  const [dniFront, setDniFront] = useState<File | null>(null);
  const [dniBack, setDniBack] = useState<File | null>(null);
  const [selfie, setSelfie] = useState<File | null>(null);

  const handleFileChange = (setter: React.Dispatch<React.SetStateAction<File | null>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setter(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement file upload logic
    onNext();
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Documentación</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="dniFront" className="block text-gray-700 mb-2">DNI (Frente)</label>
          <div className="flex items-center">
            <input
              type="file"
              id="dniFront"
              onChange={handleFileChange(setDniFront)}
              className="hidden"
              accept="image/*"
              required
            />
            <label
              htmlFor="dniFront"
              className="flex items-center justify-center w-full px-4 py-2 bg-blue-100 text-blue-600 rounded-md cursor-pointer hover:bg-blue-200"
            >
              <Camera className="mr-2" size={18} />
              {dniFront ? dniFront.name : 'Subir imagen'}
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label htmlFor="dniBack" className="block text-gray-700 mb-2">DNI (Dorso)</label>
          <div className="flex items-center">
            <input
              type="file"
              id="dniBack"
              onChange={handleFileChange(setDniBack)}
              className="hidden"
              accept="image/*"
              required
            />
            <label
              htmlFor="dniBack"
              className="flex items-center justify-center w-full px-4 py-2 bg-blue-100 text-blue-600 rounded-md cursor-pointer hover:bg-blue-200"
            >
              <Camera className="mr-2" size={18} />
              {dniBack ? dniBack.name : 'Subir imagen'}
            </label>
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="selfie" className="block text-gray-700 mb-2">Selfie</label>
          <div className="flex items-center">
            <input
              type="file"
              id="selfie"
              onChange={handleFileChange(setSelfie)}
              className="hidden"
              accept="image/*"
              required
            />
            <label
              htmlFor="selfie"
              className="flex items-center justify-center w-full px-4 py-2 bg-blue-100 text-blue-600 rounded-md cursor-pointer hover:bg-blue-200"
            >
              <Camera className="mr-2" size={18} />
              {selfie ? selfie.name : 'Tomar selfie'}
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center"
        >
          <Upload className="mr-2" size={18} />
          Subir y Continuar
        </button>
      </form>
    </div>
  );
};

export default Documentation;