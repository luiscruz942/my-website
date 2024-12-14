import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Portafolio() {
  const trabajos = [
    { id: 1, titulo: 'Boda de Verano', descripcion: 'Música para una hermosa boda en la playa', imagen: '/placeholder.svg?height=300&width=400&text=Boda+de+Verano' },
    { id: 2, titulo: 'Concierto Benéfico', descripcion: 'Actuación en un concierto para recaudar fondos', imagen: '/placeholder.svg?height=300&width=400&text=Concierto+Benéfico' },
    { id: 3, titulo: 'Coro Navideño', descripcion: 'Dirección del coro en el festival navideño de la ciudad', imagen: '/placeholder.svg?height=300&width=400&text=Coro+Navideño' },
  ]

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Mi Portafolio</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {trabajos.map((trabajo) => (
          <Card key={trabajo.id}>
            <Image src={trabajo.imagen} alt={trabajo.titulo} width={400} height={300} className="w-full h-48 object-cover rounded-t-lg" />
            <CardHeader>
              <CardTitle>{trabajo.titulo}</CardTitle>
              <CardDescription>{trabajo.descripcion}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}

