'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

type Evento = {
  id: number
  nombre: string
  fecha: string
  lugar: string
  tipo: string
  precio: number
  imagen: string
}

export default function Eventos() {
  const [ubicacion, setUbicacion] = useState('')
  const [tipo, setTipo] = useState('todos')

  // En una aplicación real, estos datos vendrían de una base de datos o API
  const eventos: Evento[] = [
    { id: 1, nombre: 'Concierto en el Parque', fecha: '2023-07-15', lugar: 'Parque Central', tipo: 'Concierto público', precio: 0, imagen: '/placeholder.svg?height=200&width=400&text=Concierto+en+el+Parque' },
    { id: 2, nombre: 'Boda de María y Juan', fecha: '2023-08-20', lugar: 'Hotel Elegante', tipo: 'Evento privado', precio: 0, imagen: '/placeholder.svg?height=200&width=400&text=Boda+de+María+y+Juan' },
    { id: 3, nombre: 'Festival de Verano', fecha: '2023-09-05', lugar: 'Playa del Sol', tipo: 'Concierto público', precio: 25, imagen: '/placeholder.svg?height=200&width=400&text=Festival+de+Verano' },
  ]

  const eventosFiltrados = eventos.filter(evento => 
    (ubicacion === '' || evento.lugar.toLowerCase().includes(ubicacion.toLowerCase())) &&
    (tipo === 'todos' || tipo === '' || evento.tipo === tipo)
  )

  const handleCompra = (evento: Evento) => {
    // Aquí iría la lógica para procesar la compra o registro
    console.log(`Procesando ${evento.precio > 0 ? 'compra' : 'registro'} para el evento: ${evento.nombre}`)
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Próximos Eventos</h1>
      
      <div className="mb-8 flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <Label htmlFor="ubicacion">Filtrar por ubicación</Label>
          <Input
            id="ubicacion"
            placeholder="Ingrese una ubicación"
            value={ubicacion}
            onChange={(e) => setUbicacion(e.target.value)}
          />
        </div>
        <div className="flex-1">
          <Label htmlFor="tipo">Filtrar por tipo de evento</Label>
          <Select value={tipo} onValueChange={setTipo}>
            <SelectTrigger id="tipo">
              <SelectValue placeholder="Seleccione un tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos</SelectItem>
              <SelectItem value="Concierto público">Concierto público</SelectItem>
              <SelectItem value="Evento privado">Evento privado</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {eventosFiltrados.map((evento) => (
          <Card key={evento.id}>
            <CardHeader>
              <CardTitle>{evento.nombre}</CardTitle>
              <CardDescription>{evento.fecha}</CardDescription>
            </CardHeader>
            <CardContent>
              <img src={evento.imagen} alt={evento.nombre} className="w-full h-48 object-cover rounded-md mb-4" />
              <p>Lugar: {evento.lugar}</p>
              <p>Tipo: {evento.tipo}</p>
              <p>Precio: {evento.precio > 0 ? `$${evento.precio}` : 'Gratis'}</p>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full">{evento.precio > 0 ? 'Comprar Boleto' : 'Registrarse'}</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{evento.precio > 0 ? 'Comprar Boleto' : 'Registrarse'} para {evento.nombre}</DialogTitle>
                    <DialogDescription>
                      {evento.precio > 0
                        ? `El precio del boleto es $${evento.precio}. ¿Desea proceder con la compra?`
                        : '¿Desea registrarse para este evento gratuito?'}
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter>
                    <Button onClick={() => handleCompra(evento)}>
                      {evento.precio > 0 ? 'Comprar' : 'Registrarse'}
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

