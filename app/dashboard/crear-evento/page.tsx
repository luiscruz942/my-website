'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function CrearEvento() {
  const [nombre, setNombre] = useState('')
  const [fecha, setFecha] = useState('')
  const [lugar, setLugar] = useState('')
  const [tipo, setTipo] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // En una aplicación real, aquí se enviaría el nuevo evento a una API
    console.log('Nuevo evento:', { nombre, fecha, lugar, tipo })
    // Redirigir al dashboard
    router.push('/dashboard')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Crear Nuevo Evento</CardTitle>
          <CardDescription>Ingresa los detalles del nuevo evento</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                Nombre del Evento
              </label>
              <Input
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
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
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="lugar" className="block text-sm font-medium text-gray-700">
                Lugar
              </label>
              <Input
                id="lugar"
                value={lugar}
                onChange={(e) => setLugar(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="tipo" className="block text-sm font-medium text-gray-700">
                Tipo de Evento
              </label>
              <Select value={tipo} onValueChange={setTipo}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione un tipo de evento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Concierto público">Concierto público</SelectItem>
                  <SelectItem value="Evento privado">Evento privado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">Crear Evento</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

