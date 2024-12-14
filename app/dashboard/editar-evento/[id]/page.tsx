'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

type Evento = {
  id: number
  nombre: string
  fecha: string
  lugar: string
  tipo: string
}

export default function EditarEvento({ params }: { params: { id: string } }) {
  const [evento, setEvento] = useState<Evento | null>(null)
  const router = useRouter()

  useEffect(() => {
    // En una aplicación real, aquí se cargaría el evento desde una API
    const eventoMock = {
      id: parseInt(params.id),
      nombre: 'Evento de Ejemplo',
      fecha: '2023-07-15',
      lugar: 'Lugar de Ejemplo',
      tipo: 'Concierto público'
    }
    setEvento(eventoMock)
  }, [params.id])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (evento) {
      // En una aplicación real, aquí se enviarían los cambios a una API
      console.log('Evento actualizado:', evento)
      // Redirigir al dashboard
      router.push('/dashboard')
    }
  }

  if (!evento) {
    return <div>Cargando...</div>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Editar Evento</CardTitle>
          <CardDescription>Modifica los detalles del evento</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                Nombre del Evento
              </label>
              <Input
                id="nombre"
                value={evento.nombre}
                onChange={(e) => setEvento({ ...evento, nombre: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="fecha" className="block text-sm font-medium text-gray-700">
                Fecha
              </label>
              <Input
                id="fecha"
                type="date"
                value={evento.fecha}
                onChange={(e) => setEvento({ ...evento, fecha: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="lugar" className="block text-sm font-medium text-gray-700">
                Lugar
              </label>
              <Input
                id="lugar"
                value={evento.lugar}
                onChange={(e) => setEvento({ ...evento, lugar: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="tipo" className="block text-sm font-medium text-gray-700">
                Tipo de Evento
              </label>
              <Select value={evento.tipo} onValueChange={(value) => setEvento({ ...evento, tipo: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione un tipo de evento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Concierto público">Concierto público</SelectItem>
                  <SelectItem value="Evento privado">Evento privado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">Guardar Cambios</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

