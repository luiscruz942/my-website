import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-20 bg-gradient-to-r from-blue-600 to-blue-400 text-white">
        <h1 className="text-5xl font-bold mb-4">Bienvenido al Mundo de Dayro De La Cruz</h1>
        <p className="text-xl mb-8">Creando experiencias musicales inolvidables para todos tus eventos especiales</p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/contacto">Contáctame</Link>
        </Button>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center">Próximos Eventos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>Concierto en el Parque {i}</CardTitle>
                <CardDescription>15 de Julio, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  src={`/placeholder.svg?height=200&width=400&text=Evento+${i}`}
                  alt={`Evento ${i}`}
                  width={400}
                  height={200}
                  className="rounded-md object-cover"
                />
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={`/eventos/${i}`}>Más información</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link href="/eventos">Ver todos los eventos</Link>
          </Button>
        </div>
      </section>

      <section className="bg-gray-100 py-12 rounded-lg">
        <h2 className="text-3xl font-semibold mb-8 text-center">Servicios Ofrecidos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-400 text-white">
            <CardHeader>
              <CardTitle>Bodas</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Música para tu día especial, creando momentos mágicos e inolvidables.</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-blue-600 to-blue-400 text-white">
            <CardHeader>
              <CardTitle>Coros</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Dirección y participación en coros, elevando la experiencia musical colectiva.</p>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-r from-blue-600 to-blue-400 text-white">
            <CardHeader>
              <CardTitle>Eventos Corporativos</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Ameniza tus eventos empresariales con música profesional y de alta calidad.</p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-8 text-center">
          <Button variant="secondary" asChild>
            <Link href="/servicios">Ver todos los servicios</Link>
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-8 text-center">Testimonios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[1, 2].map((i) => (
            <Card key={i}>
              <CardContent className="pt-6">
                <p className="italic mb-4">"La música de Dayro De La Cruz hizo que nuestra boda fuera verdaderamente especial. ¡Increíble talento!"</p>
                <p className="font-semibold">- Cliente Satisfecho {i}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

