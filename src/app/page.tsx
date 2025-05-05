import Image from "next/image";
import { Clock, Package, MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CarouselWithEffects from "@/components/carousel-with-effects";
import AliviolFlashSteps from "@/components/aliviol-flash-steps";
import VideoPlayer from "@/components/video-player";
import Link from "next/link";
import AnimatedBackground from "@/components/animated-background";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      

      {/* Hero Section */}
      <CarouselWithEffects />
      
      {/* Product Description Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              ¿Qué es Aliviol Flash?
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Aliviol Flash es un shot bebible de acción rápida que alivia
              dolores extremos en solo 10 minutos. Sin agua, sin pausas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {/*
              <Card className="border-2 border-red-500 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-red-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">
                  Alivio en solo 10 minutos
                </h3>
                <p className="text-gray-600">
                  Actúa rápidamente para que puedas volver a tu rutina sin
                  interrupciones.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-500 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-red-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <CheckCircle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Shot fácil de tomar</h3>
                <p className="text-gray-600">
                  Sin necesidad de agua, tómalo directamente cuando lo
                  necesites.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-500 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-red-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <Package className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">Portátil y práctico</h3>
                <p className="text-gray-600">
                  Formato ideal para llevar a donde vayas, adaptado a tu ritmo
                  de vida.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-500 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="rounded-full bg-red-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">
                  Disponible en farmacias
                </h3>
                <p className="text-gray-600">
                  Encuentra Aliviol Flash en tu farmacia más cercana.
                </p>
              </CardContent>
            </Card>
            
            */}
          </div>
        </div>
      </section>

      {/* Why Choose Aliviol Flash Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              El dolor no espera. Tu alivio tampoco.
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Aliviol Flash se diferencia por su rapidez comprobada y formato
              práctico, superando a la competencia.
            </p>
          </div>

          <div className=" rounded-xl shadow-lg p-6 md:p-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 border-b md:border-b-0 md:border-r border-gray-200">
                <div className="text-red-600 font-bold text-lg mb-2">
                  Aliviol Flash
                </div>
                <div className="font-black text-2xl mb-2">10 minutos</div>
                <p className="text-gray-600">Alivio comprobado</p>
              </div>
              <div className="text-center p-4 border-b md:border-b-0 md:border-r border-gray-200">
                <div className="text-gray-600 font-bold text-lg mb-2">
                  Competidor A
                </div>
                <div className="font-bold text-2xl mb-2">30+ minutos</div>
                <p className="text-gray-600">Alivio lento</p>
              </div>
              <div className="text-center p-4">
                <div className="text-gray-600 font-bold text-lg mb-2">
                  Competidor B
                </div>
                <div className="font-bold text-2xl mb-2">20+ minutos</div>
                <p className="text-gray-600">Requiere agua</p>
              </div>
            </div>

            <div className="mt-8 p-4 bg-red-50 rounded-lg border-l-4 border-red-500">
              <p className="font-bold text-center">
                "Un shot bebible que alivia el dolor en solo 10 minutos, sin
                interrupciones, llevando tu bienestar a donde vayas."
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-gradient-to-r from-red-600 to-orange-500 text-white relative">
        <div className="absolute top-0 left-0 right-0 transform rotate-[180deg] transform:rotateY(180deg)">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Porque el dolor no avisa...
            </h2>
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              El dolor interrumpe tu rutina, te hace menos productivo y te roba
              tiempo. Aliviol Flash es tu solución inmediata: eficaz, práctica y
              rápida.
            </p>
          </div>

          <div className=" text-red-600 rounded-xl p-6 max-w-2xl mx-auto text-center shadow-lg">
            <h3 className="text-2xl md:text-3xl font-black">
              10 minutos bastan para volver a tu ritmo.
            </h3>
          </div>
          {/* 
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="font-bold text-xl mb-4">Reconocimiento</h3>
              <p>Que todos conozcan Aliviol Flash en su lanzamiento.</p>
            </div>
            <div className="/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="font-bold text-xl mb-4">Posicionamiento</h3>
              <p>Asociarlo con rapidez y eficacia: 10 minutos.</p>
            </div>
            <div className="/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="font-bold text-xl mb-4">Venta</h3>
              <p>Incentivar compra por medios tradicionales y digitales.</p>
            </div>
            <div className="/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <h3 className="font-bold text-xl mb-4">Recomendación</h3>
              <p>Impulsar que quienes lo prueban, lo recomienden.</p>
            </div>
          </div>
            */}
        </div>
      </section>
      <section className="relative bg-gradient-to-r from-red-600 to-orange-500 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10">
            <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">
              Quitate el dolor en un Flash
            </h1>
            <p className="text-xl md:text-2xl font-bold mb-8">
              Alivio extremo en solo 10 minutos. Práctico, potente y listo para
              usar.
            </p>
            <Button
              size="lg"
              className=" text-red-600 hover:bg-gray-100 font-bold text-lg"
            >
              Descubrí cómo funciona
            </Button>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <div className="relative">
              <Image
                src="/VALLA MONTAJE_.png"
                alt="Aliviol Flash Product"
                width={700}
                height={500}
                className="relative z-10"
              />
              <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-60 animate-pulse"></div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>
      {/* Consumer Segments Section */}
      <section className="py-16 bg-transparent ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Hecho para tu ritmo de vida
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Sin importar tu estilo de vida, Aliviol Flash se adapta a tus
              necesidades.
            </p>
          </div>

          <Tabs defaultValue="worker" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="worker">Trabajador</TabsTrigger>
              <TabsTrigger value="professional">Profesional</TabsTrigger>
              <TabsTrigger value="homemaker">Ama de casa</TabsTrigger>
              <TabsTrigger value="entrepreneur">Emprendedor</TabsTrigger>
            </TabsList>
            <TabsContent value="worker" className="mt-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/2">
                  <Image
                    src="/worker.png"
                    alt="Trabajador de oficio"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">
                    Trabajador de oficio
                  </h3>
                  <p className="text-lg mb-4">
                    Cuando el dolor muscular o articular aparece, no puedes
                    detener tu jornada. Aliviol Flash te permite seguir con tu
                    trabajo sin interrupciones.
                  </p>
                  <div className="font-bold text-red-600 text-xl">
                    "No podés parar. Aliviol te sigue el paso."
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="professional" className="mt-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/2">
                  <Image
                    src="/woman.png"
                    alt="Mujer profesional"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">Mujer profesional</h3>
                  <p className="text-lg mb-4">
                    Entre reuniones, presentaciones y deadlines, los dolores
                    menstruales o migrañas no pueden frenarte. Aliviol Flash
                    actúa rápidamente para que mantengas tu productividad.
                  </p>
                  <div className="font-bold text-red-600 text-xl">
                    "Tu rutina no se detiene. Tu alivio tampoco."
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="homemaker" className="mt-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/2">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Ama de casa multifuncional"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">
                    Ama de casa multifuncional
                  </h3>
                  <p className="text-lg mb-4">
                    Manejar un hogar requiere energía constante. La tensión
                    muscular o dolores menstruales no pueden detener tus
                    responsabilidades diarias.
                  </p>
                  <div className="font-bold text-red-600 text-xl">
                    "Tu día tiene mil tareas. Aliviol las acompaña sin dolor."
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="entrepreneur" className="mt-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="md:w-1/2">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Emprendedor/Freelance"
                    width={400}
                    height={300}
                    className="rounded-lg"
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold mb-4">
                    Emprendedor/Freelance
                  </h3>
                  <p className="text-lg mb-4">
                    Cuando tu negocio depende de ti, las cefaleas o la fatiga no
                    pueden ser un obstáculo. Aliviol Flash te mantiene enfocado
                    en lo que importa.
                  </p>
                  <div className="font-bold text-red-600 text-xl">
                    "Tu foco es tu negocio. Aliviol te mantiene activo."
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* The Problem We Solve Section */}
             {/* Campaign and Advertising Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          
          <AliviolFlashSteps></AliviolFlashSteps>
          {/*
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Lo viste en la calle, ahora sentilo en vos
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Nuestra campaña publicitaria está presente en múltiples formatos
              para que no te pierdas los beneficios de Aliviol Flash.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Post Estático"
                    width={400}
                    height={300}
                    className="w-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-bold">Post Estático</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Post Carrusel"
                    width={400}
                    height={300}
                    className="w-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-bold">Post Carrusel</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Post Formato Valla"
                    width={400}
                    height={300}
                    className="w-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-bold">Post Formato Valla</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Post Stopper"
                    width={400}
                    height={300}
                    className="w-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-bold">Post Stopper</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Portada Facebook"
                    width={400}
                    height={300}
                    className="w-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-bold">Portada Facebook</h3>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Collage Redes Sociales"
                    width={400}
                    height={300}
                    className="w-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h3 className="text-white font-bold">
                      Collage Redes Sociales
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          */}
        </div>
      </section>
      {/* Where to Buy Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Dónde Comprar
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Encuentra Aliviol Flash en las principales farmacias del país.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Aliviol Flash Packaging"
                width={400}
                height={400}
                className="mx-auto"
              />
            </div>
            <div className="md:w-1/2 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4">Disponible en:</h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-red-600" />
                  Farmacias de cadena nacional
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-red-600" />
                  Farmacias independientes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-6 w-6 text-red-600" />
                  Tiendas de conveniencia seleccionadas
                </li>
              </ul>
              <Button size="lg" className="mt-8 bg-red-600 hover:bg-red-700">
                Encontralo cerca de vos
              </Button>
            </div>
          </div>
        </div>
      </section>

     
            
      {/* Testimonials Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Experiencias reales
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Descubre lo que dicen quienes ya probaron Aliviol Flash.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="bg-gray-50">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-300 mb-2"></div>
                  <h3 className="font-bold">María L.</h3>
                  <p className="text-sm text-gray-500">Profesional</p>
                </div>
                <p className="text-center italic">
                  "Increíble cómo en solo 10 minutos pude sentir alivio de mi
                  dolor de cabeza. Lo llevo siempre en mi bolso."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-300 mb-2"></div>
                  <h3 className="font-bold">Carlos R.</h3>
                  <p className="text-sm text-gray-500">
                    Trabajador de construcción
                  </p>
                </div>
                <p className="text-center italic">
                  "El formato es super práctico. Lo tomo sin agua y sigo con mi
                  trabajo. El dolor muscular desaparece rápidamente."
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-50">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-gray-300 mb-2"></div>
                  <h3 className="font-bold">Laura M.</h3>
                  <p className="text-sm text-gray-500">Emprendedora</p>
                </div>
                <p className="text-center italic">
                  "Con mis migrañas frecuentes, Aliviol Flash ha sido un
                  salvavidas. Actúa rápido y puedo seguir con mis reuniones."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <VideoPlayer></VideoPlayer>
      {/* Footer / Contact Section */}
      <section className="py-12 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-black mb-4">
              Síguenos en redes sociales
            </h2>
            <p className="text-lg">
              Comparte tu experiencia con #AlivioEnUnFlash
            </p>
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="font-bold text-2xl mb-4">
                Alviol<span className="text-yellow-500">Flash</span>
              </div>
              <p className="text-gray-400">
                El alivio ultrarrápido que necesitas para recuperar tu libertad
                de movimiento.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Enlaces</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link
                    href="#beneficios"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Beneficios
                  </Link>
                </li>
                <li>
                  <Link
                    href="#como-funciona"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Cómo Funciona
                  </Link>
                </li>
                <li>
                  <Link
                    href="#testimonios"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Testimonios
                  </Link>
                </li>
                <li>
                  <Link
                    href="#comprar"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Comprar
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  <span className="block">Email:</span>
                  <a
                    href="mailto:info@alviolflash.com"
                    className="hover:text-white transition-colors"
                  >
                    info@alviolflash.com
                  </a>
                </li>
                <li className="text-gray-400">
                  <span className="block">Teléfono:</span>
                  <a
                    href="tel:+34900123456"
                    className="hover:text-white transition-colors"
                  >
                    900 123 456
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Síguenos</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            <p>
              &copy; {new Date().getFullYear()} Alviol Flash. Todos los derechos
              reservados.
            </p>
            <div className="flex justify-center mt-4 space-x-6">
              <Link href="#" className="hover:text-white transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Términos y Condiciones
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Aviso Legal
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
