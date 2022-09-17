import { IWiredType } from "../wiredInterfaces";

interface INavbarProps {
  changeWiredType(wiredType: IWiredType): any;
}

interface INavItem {
  text: string;
  wiredType: IWiredType;
}

export const nav: INavItem[] = [
  {
    text: "Condições Positivas",
    wiredType: "condicoes positivas"
  },
  {
    text: "Condições Negativas",
    wiredType: "condicoes negativas"
  },
  {
    text: "Ativadores",
    wiredType: "ativadores"
  },
  {
    text: "Efeitos",
    wiredType: "efeitos"
  },
  {
    text: "Operadores",
    wiredType: "operadores"
  },
  {
    text: "Comparadores",
    wiredType: "comparadores"
  },
  {
    text: "Iron Wireds",
    wiredType: "iron wireds"
  },
  {
    text: "Extras",
    wiredType: "extras"
  },
]

export default function Navbar({ changeWiredType }: INavbarProps) {

  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="#" className="flex items-center">
            <img src="/images/ativador5.png" className="mr-3 h-6 sm:h-9" alt="Wired Docs Logo" />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Wired Docs</span>
        </a>

        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Abrir menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        </button>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {nav.map(item => (
              <li onClick={() => changeWiredType(item.wiredType)}>
                <a className="cursor-pointer block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}