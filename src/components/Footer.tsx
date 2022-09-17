export default function Footer() {
  return (
    <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <p className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a target="_blank" href="http://github.com/rodrigofplourenco" className="hover:underline">
          WiredDocs™</a>. Feito com amor por HiSkell para a comunidade do Habblet. Agradecimento especial a Jcol.
        </p>
    </footer>
  );
}