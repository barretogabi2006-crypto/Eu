import { Dumbbell, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-green-500/20 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 p-2 rounded-lg">
                <Dumbbell className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                PrimeForm
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transforme seu corpo com inteligência artificial. Planos personalizados de treino e alimentação 
              baseados em análise fotográfica avançada.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors cursor-pointer">
                <span className="text-white font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors cursor-pointer">
                <span className="text-white font-bold">ig</span>
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-green-500 transition-colors cursor-pointer">
                <span className="text-white font-bold">tw</span>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-green-400 transition-colors">Funcionalidades</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-green-400 transition-colors">Planos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Testemunhos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contacto - EDITE AQUI */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400">
                <Mail className="h-4 w-4 mr-2 text-green-400" />
                suportprimeform@gmail.com
              </li>
              <li className="flex items-center text-gray-400">
                <Phone className="h-4 w-4 mr-2 text-green-400" />
                +351 935949961
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin className="h-4 w-4 mr-2 text-green-400" />
                Lisboa, Portugal
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 PrimeForm. Todos os direitos reservados. | 
            <a href="#" className="text-green-400 hover:underline ml-1">Política de Privacidade</a> | 
            <a href="#" className="text-green-400 hover:underline ml-1">Termos de Serviço</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
