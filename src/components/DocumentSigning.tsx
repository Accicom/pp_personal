import React, { useState } from 'react';
import { FileText, Upload } from 'lucide-react';

interface DocumentSigningProps {
  onFinish: () => void;
}

const DocumentSigning: React.FC<DocumentSigningProps> = ({ onFinish }) => {
  const [signedDocument, setSignedDocument] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSignedDocument(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement signed document upload logic
    onFinish();
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Firma de Documentación</h2>
      <div className="mb-6">
        <button
          onClick={() => {/* TODO: Implement document download logic */}}
          className="w-full bg-blue-100 text-blue-600 py-2 px-4 rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center mb-4"
        >
          <FileText className="mr-2" size={18} />
          Descargar Documentación
        </button>
        <p className="text-sm text-gray-600 mb-4">
          Por favor, descargue la documentación, imprímala, fírmela y luego súbala nuevamente.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="signedDocument" className="block text-gray-700 mb-2">Documento Firmado</label>
            <div className="flex items-center">
              <input
                type="file"
                id="signedDocument"
                onChange={handleFileChange}
                className="hidden"
                accept=".pdf,.jpg,.jpeg,.png"
                required
              />
              <label
                htmlFor="signedDocument"
                className="flex items-center justify-center w-full px-4 py-2 bg-blue-100 text-blue-600 rounded-md cursor-pointer hover:bg-blue-200"
              >
                <Upload className="mr-2" size={18} />
                {signedDocument ? signedDocument.name : 'Subir documento firmado'}
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center"
          >
            <Upload className="mr-2" size={18} />
            Finalizar Proceso
          </button>
        </form>
      </div>
    </div>
  );
};

export default DocumentSigning;