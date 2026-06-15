import { MapPin, Calendar, Clock, MessageCircle } from 'lucide-react';
import { Countdown } from './components/Countdown';
import { Butterfly } from './components/Butterfly';
import { MusicPlayer } from './components/MusicPlayer';

export default function App() {
  // Set event date to November 20, 2026 at 21:00
  const eventDate = new Date('2026-11-20T21:00:00');
  const backgroundSong = new URL('../imports/Mac_Miller_-_Congratulations__instrumental___30_mins-1.mp3', import.meta.url).href;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] flex items-center justify-center p-4">
      {/* Container tipo tarjeta */}
      <div className="relative w-full max-w-[480px] bg-white shadow-2xl overflow-hidden min-h-screen">
        {/* Decorative Butterflies */}
        <Butterfly className="top-12 right-5 z-10 w-18" delay={0} />
        <Butterfly className="top-[300px] left-[-10px] w-12 z-10" delay={2} />
        <Butterfly className="top-[600px] right-8 w-15 z-10" delay={4} />
        <Butterfly className="top-[450px] right-3 w-[54px] z-10" delay={1.5} />
        <Butterfly className="top-[800px] left-5 w-[66px] z-10" delay={3} />
        <Butterfly className="top-[950px] right-12 w-18 z-10" delay={5} />

        {/* Header Section */}
        <header className="relative px-5 py-16 overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('https://thumbs.dreamstime.com/b/butterfly-background-beautiful-blue-butterflies-shade-306120123.jpg')`,
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-white/60" />
          
          {/* Header Content */}
          <div className="relative z-10 text-center">
            <p className="uppercase tracking-[3px] text-[10px] mb-3 text-gray-600">
              ESTÁS INVITADO A MIS
            </p>
            <h1 
              className="text-[3.2rem] mb-5 text-[#4A90E2]"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Quince Años
            </h1>
            
            <h2 
              className="text-[4rem] text-gray-700 mt-3"
              style={{ fontFamily: "'Dancing Script', cursive" }}
            >
              Luisina
            </h2>
          </div>
        </header>

        {/* Quote Card */}
        <div className="mx-5 my-5 p-10 bg-white/90 rounded-3xl shadow-md">
          <p className="italic text-gray-700 leading-relaxed text-center">
            "Hay momentos en la vida que son especiales por sí solos, pero compartirlos con las personas que más quieres los hace inolvidables."
          </p>
        </div>

        {/* Countdown Card */}
        <div className="mx-5 my-5 p-10 bg-white/90 rounded-3xl shadow-md">
          <h2 
            className="text-2xl text-[#5D9CEC] mb-4 text-center"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Falta muy poco
          </h2>
          <Countdown targetDate={eventDate} />
        </div>

        {/* Event Details Card */}
        <div className="mx-5 my-5 p-10 bg-white/90 rounded-3xl shadow-md text-center">
          <h2 
            className="text-2xl text-[#5D9CEC] mb-6"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Ceremonia
          </h2>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-center justify-center gap-2 text-gray-700">
              <Calendar className="w-5 h-5 text-[#5D9CEC]" />
              <p>Jueves 20 de Noviembre, 2026</p>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-gray-700">
              <Clock className="w-5 h-5 text-[#5D9CEC]" />
              <p>21:00 hs</p>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-gray-700">
              <MapPin className="w-5 h-5 text-[#5D9CEC]" />
              <p>Salón "El Evento"</p>
            </div>
          </div>
          
          <a 
            href="https://maps.google.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#5D9CEC] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            Ver Ubicación
          </a>
        </div>

        {/* Confirmation Card */}
        <div className="mx-5 my-5 p-10 bg-white/90 rounded-3xl shadow-md text-center">
          <h2 
            className="text-2xl text-[#5D9CEC] mb-4"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Confirmación
          </h2>
          
          <p className="text-gray-700 mb-6 leading-relaxed">
            Espero contar con tu presencia en esta noche mágica.
          </p>
          
          <a 
            href="https://wa.me/123456789" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#25D366] text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5" />
            Confirmar por WhatsApp
          </a>
        </div>

        {/* Music Player */}
        <MusicPlayer 
          songTitle="Congratulations (Instrumental)"
          audioUrl={backgroundSong}
        />

        {/* Footer */}
        <footer className="py-5 text-center text-sm opacity-70 text-gray-600">
          <p>Diseño inspirado en Modelo Azul Mariposas</p>
        </footer>
      </div>
    </div>
  );
}