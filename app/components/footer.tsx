import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Dairo de la Cruz</h3>
            <p>Creando experiencias musicales inolvidables para todos tus eventos especiales.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-blue-600">Inicio</Link></li>
              <li><Link href="/eventos" className="hover:text-blue-600">Eventos</Link></li>
              <li><Link href="/portafolio" className="hover:text-blue-600">Portafolio</Link></li>
              <li><Link href="/contacto" className="hover:text-blue-600">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Sígueme</h3>
            <div className="flex space-x-4">
              <a href="https://es-es.facebook.com/dayro.delacruzsantiago/" className="text-gray-600 hover:text-blue-600">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.instagram.com/dayrodelacruzgmailcom/" className="text-gray-600 hover:text-blue-600">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Dairo de la Cruz. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

