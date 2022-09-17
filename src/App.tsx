import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';

import { IWireds, IWiredType } from './wiredInterfaces';

import wireds from './assets/utils/wireds.json';

import './styles/main.css'
import Footer from './components/Footer';


function App() {
  const allWireds: IWireds = wireds;
  const [wiredType, setWiredType] = useState<IWiredType>("ativadores");

  const filteredWireds = allWireds[wiredType];

  function getPreImageName() {
    if (wiredType === "ativadores") return "ativador";
    else if (wiredType === "efeitos") return "efeito";
    else if (wiredType === "condicoes positivas") return "cond_positiva";
    else if (wiredType === "condicoes negativas") return "cond_negativa";
    else if (wiredType === "extras") return "extra";
  }

  function changeWiredType(wiredType: IWiredType) {
    setWiredType(wiredType);
  }

  return ( 
    <>
      <Navbar changeWiredType={changeWiredType} />

      <div className="px-6 py-8 grid grid-cols-6 gap-6">
        {filteredWireds.map((wired, index) => (
          <div key={wired.name} className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a href="#" className='flex justify-center my-6'>
                  <img className="rounded-t-lg" src={`/images/${getPreImageName()}${index + 1}.png`} alt="" />
              </a>

              <div className="p-5">
                  <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{wired.name}</h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{wired.help}</p>
              </div>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}

export default App
