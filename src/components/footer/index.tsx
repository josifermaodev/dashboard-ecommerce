// components/Footer.tsx
export default function Footer (){
  const year = new Date().getFullYear();

  return (
    <div>
        <footer className="w-full border-t bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-400">
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
                <p className="text-sm">
                &copy; {year} Dashboard Pro desenvolvido por <a href="https://github.com/josifermaodev" target="_blank" className="text-blue-500">josidev</a>. Todos os direitos reservados.
                </p>
                <div className="flex space-x-4 mt-2 md:mt-0">
                <a href="/termos" className="hover:text-primary transition-colors text-sm">Termos</a>
                <a href="/privacidade" className="hover:text-primary transition-colors text-sm">Privacidade</a>
                <a href="/contato" className="hover:text-primary transition-colors text-sm">Contato</a>
                </div>
            </div>
        </footer>
    </div>
    
  );
};


