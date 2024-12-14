'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { CheckCircle2 } from 'lucide-react'

export default function Reserva() {
  const searchParams = useSearchParams()
  const eventoId = searchParams.get('evento')

  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [tipoEvento, setTipoEvento] = useState(eventoId ? 'Evento Específico' : '')
  const [reservaExitosa, setReservaExitosa] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para procesar la reserva
    console.log('Reserva enviada:', { nombre, email, fecha, tipoEvento, eventoId })
    // Limpiar el formulario
    setNombre('')
    setEmail('')
    setFecha('')
    setTipoEvento('')
    // Mostrar mensaje de éxito
    setReservaExitosa(true)
    // Ocultar el mensaje después de 5 segundos
    setTimeout(() => setReservaExitosa(false), 5000)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-primary/20 to-secondary/20">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Reserva de Evento</CardTitle>
          <CardDescription>Completa el formulario para reservar tu evento.</CardDescription>
        </CardHeader>
        <CardContent>
          {reservaExitosa && (
            <Alert className="mb-4">
              <CheckCircle2 className="h-4 w-4" />
              <AlertTitle>¡Reserva exitosa!</AlertTitle>
              <AlertDescription>
                Tu reserva ha sido realizada. Te contactaremos pronto para confirmar los detalles.
              </AlertDescription>
            </Alert>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block mb-1 text-sm font-medium">Nombre</label>
              <Input
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="fecha" className="block mb-1 text-sm font-medium">Fecha Deseada</label>
              <Input
                id="fecha"
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="tipoEvento" className="block mb-1 text-sm font-medium">Tipo de Evento</label>
              <Select value={tipoEvento} onValueChange={setTipoEvento}>
                <SelectTrigger>
                  <SelectValue placeholder="Seleccione un tipo de evento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Boda">Boda</SelectItem>
                  <SelectItem value="Concierto">Concierto</SelectItem>
                  <SelectItem value="Evento Corporativo">Evento Corporativo</SelectItem>
                  <SelectItem value="Otro">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">Enviar Solicitud de Reserva</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

