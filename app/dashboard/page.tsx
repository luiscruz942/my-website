'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

type Evento = {
  id: number
  nombre: string
  fecha: string
  lugar: string
  tipo: string
}

export default function Dashboard() {
  const [eventos, setEventos] = useState<Evento[]>([])
  const router = useRouter()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) {
      router.push('/login')
    } else {
      // En una aplicación real, aquí se cargarían los eventos desde una API
      setEventos([
        { id: 1, nombre: 'Concierto en el Parque', fecha: '2023-07-15', lugar: 'Parque Central', tipo: 'Concierto público' },
        { id: 2, nombre: 'Boda de María y Juan', fecha: '2023-08-20', lugar: 'Hotel Elegante', tipo: 'Evento privado' },
        { id: 3, nombre: 'Festival de Verano', fecha: '2023-09-05', lugar: 'Playa del Sol', tipo: 'Concierto público' },
      ])
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    router.push('/login')
  }

  const handleDeleteEvento = (id: number) => {
    // En una aplicación real, aquí se eliminaría el evento de la base de datos
    setEventos(eventos.filter(evento => evento.id !== id))
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Dashboard</h1>
        <Button onClick={handleLogout}>Cerrar Sesión</Button>
      </div>
      <div className="mb-8">
        <Button asChild>
          <Link href="/dashboard/crear-evento">Crear Nuevo Evento</Link>
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {eventos.map((evento) => (
          <Card key={evento.id}>
            <CardHeader>
              <CardTitle>{evento.nombre}</CardTitle>
              <CardDescription>{evento.fecha}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Lugar: {evento.lugar}</p>
              <p>Tipo: {evento.tipo}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline">
                <Link href={`/dashboard/editar-evento/${evento.id}`}>Editar</Link>
              </Button>
              <Button variant="destructive" onClick={() => handleDeleteEvento(evento.id)}>Eliminar</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

