import { useState } from 'react';
import ClientDocs from './ClientDocs';
import ServerDocs from './ServerDocs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-javascript';

function Docs() {
  const [activeTab, setActiveTab] = useState('Client');

  const handleTab = (buttonName: string) => {
    setActiveTab(buttonName);
  };

  return (
    <>
      <div className='Docs'>
        <div className='selector'>
          <button className='Client' onClick={() => handleTab('Client')}>
            Client
          </button>
          <button className='Server' onClick={() => handleTab('Server')}>
            Server
          </button>
        </div>
        {activeTab === 'Client' ? <ClientDocs /> : <ServerDocs />}
      </div>
    </>
  );
}

export default Docs;
