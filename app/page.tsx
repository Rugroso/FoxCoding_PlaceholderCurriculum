'use client'
import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, Github, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Navbar } from "@/components/navbar"
import { createClient } from "@/lib/supabaseClient"
import { useState, useEffect } from "react"


type Proyecto = {
  id: string
  title: string
  summary: string
  description: string
  technologies: string[]
  orderNumber: number
}

export default function CurriculumPage() {
  const supabase = createClient()
  const [proyectos, setProyectos] = useState<Proyecto[]>([])

  useEffect(() => {
    const fetchProyectos = async () => {
      const { data, error } = await supabase
        .from('proyectos')
        .select('*')
        .order('order_number', { ascending: true })
  
      if (error) {
        console.error('Error al obtener proyectos:', error)
      } else {
        setProyectos(data)
      }
    }
  
    fetchProyectos()
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="container mx-auto py-8 px-4 max-w-4xl">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start mb-8">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-background shadow-lg">
            <Image src="/portrait_placeholder.png" alt="Foto de perfil" fill className="object-cover" priority />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold">Nombre Apellido</h1>
            <h2 className="text-xl text-muted-foreground mt-1 mb-3">Desarrollador Full Stack</h2>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Badge variant="outline" className="flex items-center gap-1 px-3 py-1">
                <Mail className="h-3.5 w-3.5" />
                <span>email@ejemplo.com</span>
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1 px-3 py-1">
                <Phone className="h-3.5 w-3.5" />
                <span>+686 123 4567</span>
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1 px-3 py-1">
                <MapPin className="h-3.5 w-3.5" />
                <span>Mexicali, Baja California, México</span>
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1 px-3 py-1">
                <Linkedin className="h-3.5 w-3.5" />
                <span>linkedin.com/in/usuario</span>
              </Badge>
              <Badge variant="outline" className="flex items-center gap-1 px-3 py-1">
                <Github className="h-3.5 w-3.5" />
                <span>github.com/usuario</span>
              </Badge>
            </div>
          </div>

          <div className="mt-4 md:mt-0">
            <Button>Descargar CV</Button>
          </div>
        </div>

        <Separator className="my-8" />

        <section id="perfil" className="mb-10 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-4">Perfil Profesional</h2>
          <p className="text-muted-foreground">
            Desarrollador Full Stack con más de 5 años de experiencia en el desarrollo de aplicaciones web y móviles.
            Especializado en React, Next.js, Node.js y bases de datos SQL/NoSQL. Apasionado por crear soluciones
            eficientes y escalables, con un enfoque en la experiencia de usuario y las mejores prácticas de desarrollo.
          </p>
        </section>

        <section id="experiencia" className="mb-10 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-6">Experiencia Laboral</h2>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">Desarrollador Senior</h3>
                    <p className="text-muted-foreground">Empresa Tecnológica S.L.</p>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Enero 2021 - Presente</span>
                  </div>
                </div>
                <ul className="mt-4 list-disc list-inside text-muted-foreground space-y-1">
                  <li>Desarrollo de aplicaciones web utilizando React y Next.js</li>
                  <li>Implementación de APIs RESTful con Node.js y Express</li>
                  <li>Optimización de rendimiento y experiencia de usuario</li>
                  <li>Colaboración en equipos ágiles utilizando metodología Scrum</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">Desarrollador Frontend</h3>
                    <p className="text-muted-foreground">Agencia Digital S.A.</p>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Marzo 2018 - Diciembre 2020</span>
                  </div>
                </div>
                <ul className="mt-4 list-disc list-inside text-muted-foreground space-y-1">
                  <li>Desarrollo de interfaces de usuario con React</li>
                  <li>Implementación de diseños responsivos con CSS/SASS</li>
                  <li>Integración con APIs externas</li>
                  <li>Mantenimiento y mejora de aplicaciones existentes</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="educacion" className="mb-10 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-6">Educación</h2>

          <div className="space-y-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">Grado en Ingeniería Informática</h3>
                    <p className="text-muted-foreground">Universidad Politécnica</p>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>2014 - 2018</span>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  Especialización en Desarrollo de Software. Proyecto final: Plataforma de gestión de proyectos
                  colaborativos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                  <div>
                    <h3 className="text-xl font-semibold">Máster en Desarrollo Web</h3>
                    <p className="text-muted-foreground">Instituto de Tecnología Avanzada</p>
                  </div>
                  <div className="flex items-center text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>2018 - 2019</span>
                  </div>
                </div>
                <p className="mt-4 text-muted-foreground">
                  Enfoque en tecnologías modernas de desarrollo web, arquitectura de aplicaciones y experiencia de
                  usuario.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="habilidades" className="mb-10 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-6">Habilidades</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">Tecnologías Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>HTML5</Badge>
                  <Badge>CSS3</Badge>
                  <Badge>JavaScript</Badge>
                  <Badge>TypeScript</Badge>
                  <Badge>React</Badge>
                  <Badge>Next.js</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>Redux</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">Tecnologías Backend</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Node.js</Badge>
                  <Badge>Express</Badge>
                  <Badge>MongoDB</Badge>
                  <Badge>PostgreSQL</Badge>
                  <Badge>GraphQL</Badge>
                  <Badge>REST APIs</Badge>
                  <Badge>Firebase</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">Herramientas y Metodologías</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge>Git</Badge>
                  <Badge>Docker</Badge>
                  <Badge>CI/CD</Badge>
                  <Badge>Agile/Scrum</Badge>
                  <Badge>Jest</Badge>
                  <Badge>Cypress</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <h3 className="text-lg font-semibold mb-4">Idiomas</h3>
                <div className="space-y-2">
                  <div>
                    <span className="font-medium">Español:</span> Nativo
                  </div>
                  <div>
                    <span className="font-medium">Inglés:</span> Nivel C1 (Avanzado)
                  </div>
                  <div>
                    <span className="font-medium">Francés:</span> Nivel B1 (Intermedio)
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Proyectos */}
        <section id="proyectos" className="mb-10 scroll-mt-20">
          <h2 className="text-2xl font-bold mb-6">Proyectos Destacados</h2>

          <div className="space-y-6">
            {proyectos.map((proyecto) => (
              <Card key={proyecto.id}>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold">{proyecto.title}</h3>
                  <p className="text-muted-foreground mb-3">{proyecto.summary}</p>
                  <p className="text-muted-foreground mb-3">{proyecto.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {proyecto.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="certificaciones" className="scroll-mt-20">
          <h2 className="text-2xl font-bold mb-6">Certificaciones</h2>

          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:justify-between">
              <div>
                <h3 className="text-lg font-semibold">AWS Certified Developer - Associate</h3>
                <p className="text-muted-foreground">Amazon Web Services</p>
              </div>
              <div className="text-muted-foreground text-sm">2022</div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between">
              <div>
                <h3 className="text-lg font-semibold">Professional Scrum Master I (PSM I)</h3>
                <p className="text-muted-foreground">Scrum.org</p>
              </div>
              <div className="text-muted-foreground text-sm">2021</div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between">
              <div>
                <h3 className="text-lg font-semibold">MongoDB Certified Developer</h3>
                <p className="text-muted-foreground">MongoDB University</p>
              </div>
              <div className="text-muted-foreground text-sm">2020</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Nombre Apellido. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
