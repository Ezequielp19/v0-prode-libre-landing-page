import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Smartphone, Users, Trophy, Calendar } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-secondary py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,107,53,0.1),transparent_50%)]" />
        <div className="container relative mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <div className="mb-8 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Prode Libre Logo"
                width={200}
                height={200}
                className="h-32 w-32 md:h-48 md:w-48"
                priority
              />
            </div>
            <h1 className="mb-6 text-balance text-4xl font-bold text-secondary-foreground md:text-6xl lg:text-7xl">
              Prode Libre
            </h1>
            <p className="mb-4 text-xl text-secondary-foreground/90 md:text-2xl">Pronósticos Deportivos</p>
            <p className="mb-12 max-w-2xl text-pretty text-lg leading-relaxed text-secondary-foreground/80 md:text-xl">
              Prode Libre es una plataforma creada para que disfrutes del deporte como nunca antes. Con ella, puedes
              editar tus equipos, organizar torneos personalizados, crear grupos de amigos y competir gratis en una
              experiencia dinámica, entretenida y social.
            </p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Android Card */}
            <Card className="overflow-hidden border-2 border-primary/20 bg-card p-8 transition-all hover:border-primary/40 hover:shadow-lg">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Smartphone className="h-10 w-10 text-primary" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-card-foreground md:text-3xl">Android</h2>
                <p className="mb-6 text-muted-foreground">Descarga la app desde Google Play Store</p>
                <a
                  href="https://play.google.com/store/apps/details?id=com.prodelibre.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mb-6 block"
                >
                  <div className="rounded-lg bg-white p-4 shadow-md">
                    <Image
                      src="/qr-playstore.png"
                      alt="QR Code Play Store"
                      width={200}
                      height={200}
                      className="h-48 w-48"
                    />
                  </div>
                </a>
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.prodelibre.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Descargar para Android
                  </a>
                </Button>
              </div>
            </Card>

            {/* iOS Card */}
            <Card className="overflow-hidden border-2 border-primary/20 bg-card p-8 transition-all hover:border-primary/40 hover:shadow-lg">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                  <Smartphone className="h-10 w-10 text-primary" />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-card-foreground md:text-3xl">iOS</h2>
                <p className="mb-6 text-muted-foreground">
                  Estamos empezando y aún no tenemos el presupuesto para publicar en App Store
                </p>
                <div className="mb-6 rounded-lg bg-muted p-6">
                  <p className="mb-4 text-sm text-muted-foreground">
                    Si tienes iOS, puedes usar este enlace y descargar la app como acceso directo en tu dispositivo
                  </p>
                </div>
                <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                  <a href="https://prode-libre-three.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Descargar para iOS
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
            ¿Qué puedes hacer con Prode Libre?
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <Card className="bg-card p-6 text-center transition-all hover:shadow-lg">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Edita Equipos</h3>
              <p className="text-sm text-muted-foreground">Personaliza y gestiona tus equipos favoritos</p>
            </Card>

            <Card className="bg-card p-6 text-center transition-all hover:shadow-lg">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Organiza Torneos</h3>
              <p className="text-sm text-muted-foreground">Crea torneos personalizados a tu medida</p>
            </Card>

            <Card className="bg-card p-6 text-center transition-all hover:shadow-lg">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">Grupos de Amigos</h3>
              <p className="text-sm text-muted-foreground">Compite con tus amigos en grupos privados</p>
            </Card>

            <Card className="bg-card p-6 text-center transition-all hover:shadow-lg">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-card-foreground">100% Gratis</h3>
              <p className="text-sm text-muted-foreground">Disfruta de todas las funciones sin costo</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-balance text-3xl font-bold text-secondary-foreground md:text-4xl">
            ¡Únete a la comunidad de Prode Libre!
          </h2>
          <p className="mb-8 text-pretty text-lg text-secondary-foreground/80 md:text-xl">
            Descarga la app y comienza a disfrutar del deporte de una manera única
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">© 2025 Prode Libre. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}
