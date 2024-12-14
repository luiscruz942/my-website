'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function Contacto() {
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para enviar el formulario, por ejemplo, a una API
    console.log('Formulario enviado:', { nombre, email, mensaje })
    // Reiniciar el formulario
    setNombre('')
    setEmail('')
    setMensaje('')
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-primary/20 to-secondary/20">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Contacto</CardTitle>
          <CardDescription>Envíame un mensaje y me pondré en contacto contigo pronto.</CardDescription>
        </CardHeader>
        <CardContent>
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
              <label htmlFor="mensaje" className="block mb-1 text-sm font-medium">Mensaje</label>
              <Textarea
                id="mensaje"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
              />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">Enviar Mensaje</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

