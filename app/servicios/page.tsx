'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

type Servicio = {
  id: number
  titulo: string
  descripcion: string
  detalles: string[]
  precio: string
}

const servicios: Servicio[] = [
  {
    id: 1,
    titulo: "Bodas",
    descripcion: "Música para tu día especial, creando momentos mágicos e inolvidables.",
    detalles: [
      "Ceremonia y recepción",
      "Repertorio personalizado",
      "Equipo de sonido profesional",
      "Coordinación con otros proveedores"
    ],
    precio: "Desde $1000"
  },
  {
    id: 2,
    titulo: "Coros",
    descripcion: "Dirección y participación en coros, elevando la experiencia musical colectiva.",
    detalles: [
      "Dirección de coro",
      "Arreglos vocales",
      "Ensayos y preparación",
      "Presentaciones en vivo"
    ],
    precio: "Desde $500 por evento"
  },
  {
    id: 3,
    titulo: "Eventos Corporativos",
    descripcion: "Ameniza tus eventos empresariales con música profesional y de alta calidad.",
    detalles: [
      "Música de fondo para cenas",
      "Presentaciones en vivo",
      "Adaptación a la temática del evento",
      "Equipo de sonido incluido"
    ],
    precio: "Desde $800"
  }
]

export default function Servicios() {
  const [servicioSeleccionado, setServicioSeleccionado] = useState<Servicio | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Nuestros Servicios</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {servicios.map((servicio) => (
          <Card key={servicio.id} className="bg-gradient-to-r from-blue-600 to-blue-400 text-white">
            <CardHeader>
              <CardTitle>{servicio.titulo}</CardTitle>
              <CardDescription className="text-blue-100">{servicio.descripcion}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="font-bold">{servicio.precio}</p>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="secondary" className="w-full" onClick={() => setServicioSeleccionado(servicio)}>
                    Ver más detalles
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{servicioSeleccionado?.titulo}</DialogTitle>
                    <DialogDescription>{servicioSeleccionado?.descripcion}</DialogDescription>
                  </DialogHeader>
                  <div className="py-4">
                    <h4 className="font-bold mb-2">Detalles del servicio:</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {servicioSeleccionado?.detalles.map((detalle, index) => (
                        <li key={index}>{detalle}</li>
                      ))}
                    </ul>
                    <p className="mt-4 font-bold">{servicioSeleccionado?.precio}</p>
                  </div>
                  <DialogFooter>
                    <Button asChild>
                      <a href="/contacto">Solicitar este servicio</a>
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

