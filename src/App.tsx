import React, { useState } from 'react';
import Login from './components/Login';
import MainMenu from './components/MainMenu';
import NewLoan from './components/NewLoan';
import ClientData from './components/ClientData';
import DebtPayment from './components/DebtPayment';
import OfferSelection from './components/OfferSelection';
import ClientManagement from './components/ClientManagement';
import PhoneValidation from './components/PhoneValidation';
import Documentation from './components/Documentation';
import DocumentSigning from './components/DocumentSigning';

function App() {
  const [currentStep, setCurrentStep] = useState('login');

  const renderStep = () => {
    switch (currentStep) {
      case 'login':
        return <Login onLogin={() => setCurrentStep('menu')} />;
      case 'menu':
        return <MainMenu onNewLoan={() => setCurrentStep('newLoan')} />;
      case 'newLoan':
        return <NewLoan onNext={() => setCurrentStep('clientData')} />;
      case 'clientData':
        return <ClientData onNext={() => setCurrentStep('debtPayment')} />;
      case 'debtPayment':
        return <DebtPayment onNext={() => setCurrentStep('offerSelection')} />;
      case 'offerSelection':
        return <OfferSelection onNext={() => setCurrentStep('clientManagement')} />;
      case 'clientManagement':
        return <ClientManagement onNext={() => setCurrentStep('phoneValidation')} />;
      case 'phoneValidation':
        return <PhoneValidation onNext={() => setCurrentStep('documentation')} />;
      case 'documentation':
        return <Documentation onNext={() => setCurrentStep('documentSigning')} />;
      case 'documentSigning':
        return <DocumentSigning onFinish={() => setCurrentStep('menu')} />;
      default:
        return <div>Invalid step</div>;
    }
  };

  return (
    <div className="min-h-screen bg-blue-50">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-2xl font-bold">ACCICOM</h1>
      </header>
      <main className="container mx-auto p-4">
        {renderStep()}
      </main>
    </div>
  );
}

export default App;