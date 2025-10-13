import { useState } from 'react';
import { MapPin, MessageCircle, Sparkles, Share2 } from 'lucide-react';
import { Button } from './components/ui/button';
import inviteTemplate from 'figma:asset/8bf9ac7de9db2f1fa315dceac9ba9553d836c68f.png';

export default function App() {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleConfirmPresence = () => {
    const phoneNumber = '+5511958378220';
    const message = 'CONFIRMADO';
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  const handleLocation = () => {
    const locationUrl = 'https://www.google.com/maps/place/Est.+do+Guai%C3%B3,+935+-+Po%C3%A1,+SP,+08568-720/data=!4m2!3m1!1s0x94ce7aa727b0e1e5:0xdffe3c910a2ab724?sa=X&ved=1t:242&ictx=111';
    window.open(locationUrl, '_blank');
  };

  const handleShareInvite = () => {
    const inviteUrl = window.location.href;
    const whatsappShareUrl = `https://wa.me/?text=${encodeURIComponent(inviteUrl)}`;
    window.open(whatsappShareUrl, '_blank');
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{
        background: `linear-gradient(135deg, #F9DFCC 0%, #E4D0C8 50%, #F9DFCC 100%)`
      }}
    >
      <div className="w-full max-w-sm flex flex-col items-center">
        {/* Convite Principal usando a imagem como base */}
        <div 
          className="relative rounded-3xl shadow-2xl overflow-hidden aspect-[3/5] bg-cover bg-center bg-no-repeat w-full"
          style={{ 
            backgroundImage: `url(${inviteTemplate})`,
            minHeight: '750px'
          }}
        >
          {/* Botões Interativos Posicionados sobre a Imagem */}
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            {/* Container dos botões na parte inferior */}
            <div className="flex gap-1 mb-4 px-2" style={{ marginTop: 'auto' }}>
              {/* Botão Confirmar Presença */}
              <Button
                onClick={handleConfirmPresence}
                className={`flex-1 h-16 text-white rounded-2xl shadow-lg transform transition-all duration-300 border-0 ${
                  isAnimating ? 'scale-105 shadow-xl' : 'hover:scale-105'
                }`}
                style={{
                  backgroundColor: '#E4B5A3',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  minWidth: '45%'
                }}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                <div className="flex flex-col items-center">
                  <span className="text-sm leading-tight">Confirmar</span>
                  <span className="text-sm leading-tight">Presença</span>
                </div>
                {isAnimating && <Sparkles className="ml-2 h-5 w-5 animate-spin" />}
              </Button>

              {/* Botão Ver Localização */}
              <Button
                onClick={handleLocation}
                className="flex-1 h-16 text-white rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 border-0"
                style={{
                  backgroundColor: '#E4B5A3',
                  fontFamily: 'system-ui, -apple-system, sans-serif',
                  minWidth: '45%'
                }}
              >
                <MapPin className="mr-2 h-5 w-5" />
                <div className="flex flex-col items-center">
                  <span className="text-sm leading-tight">Ver</span>
                  <span className="text-sm leading-tight">Localização</span>
                </div>
              </Button>
            </div>
          </div>

          {/* Elementos decorativos sutis */}
          <div 
            className="absolute top-6 right-6 w-2 h-2 rounded-full shadow-sm opacity-40 animate-pulse"
            style={{ backgroundColor: '#E4B5A3' }}
          ></div>
          <div 
            className="absolute top-12 left-8 w-1.5 h-1.5 rounded-full shadow-sm opacity-40 animate-pulse"
            style={{ 
              backgroundColor: '#D4A592',
              animationDelay: '0.5s'
            }}
          ></div>
          <div 
            className="absolute bottom-32 right-8 w-1.5 h-1.5 rounded-full shadow-sm opacity-40 animate-pulse"
            style={{ 
              backgroundColor: '#F2C9B7',
              animationDelay: '1s'
            }}
          ></div>
        </div>

        {/* Informações Adicionais - Complemento elegante */}
        <div 
          className="mt-6 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
          style={{
            backgroundColor: 'rgba(242, 201, 183, 0.85)',
            width: '100%'
          }}
        >
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <span 
                className="tracking-wide text-lg" 
                style={{ color: '#8B4513' }}
              >
                ✨ Sua presença é muito especial! ✨
              </span>
            </div>
            
            {/* Botão Compartilhar Convite */}
            <Button
              onClick={handleShareInvite}
              className="w-full h-14 text-white rounded-2xl shadow-lg hover:scale-105 transition-all duration-300 border-0"
              style={{
                backgroundColor: '#8A008A',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
            >
              <Share2 className="mr-2 h-5 w-5" />
              <div className="flex flex-col items-center">
                <span className="text-sm leading-tight">Compartilhar Convite</span>
                <span className="text-xs leading-tight opacity-90">via WhatsApp</span>
              </div>
            </Button>
          </div>
        </div>

        {/* Detalhes do Evento */}
        <div 
          className="mt-4 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
          style={{
            backgroundColor: 'rgba(228, 181, 163, 0.90)',
            width: '100%'
          }}
        >
          <h3 
            className="text-center mb-5 tracking-wide" 
            style={{ color: '#8B4513' }}
          >
            🌸 Detalhes do Evento 🌸
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm w-full">
            <div 
              className="text-center p-4 rounded-xl shadow-sm w-full"
              style={{
                backgroundColor: 'rgba(242, 201, 183, 0.6)'
              }}
            >
              <div className="text-xl mb-2">🎂</div>
              <div className="text-xs mb-1" style={{ color: '#8B4513' }}>Aniversariante</div>
              <div className="tracking-wide" style={{ color: '#8B4513' }}>Rafaela</div>
            </div>
            <div 
              className="text-center p-4 rounded-xl shadow-sm w-full"
              style={{
                backgroundColor: 'rgba(212, 165, 146, 0.6)'
              }}
            >
              <div className="text-xl mb-2">🎈</div>
              <div className="text-xs mb-1" style={{ color: '#8B4513' }}>Idade</div>
              <div className="tracking-wide" style={{ color: '#8B4513' }}>15 anos</div>
            </div>
            <div 
              className="text-center p-4 rounded-xl shadow-sm w-full"
              style={{
                backgroundColor: 'rgba(228, 181, 163, 0.7)'
              }}
            >
              <div className="text-xl mb-2">📅</div>
              <div className="text-xs mb-1" style={{ color: '#8B4513' }}>Data</div>
              <div className="tracking-wide" style={{ color: '#8B4513' }}>07/12</div>
            </div>
            <div 
              className="text-center p-4 rounded-xl shadow-sm w-full"
              style={{
                backgroundColor: 'rgba(242, 201, 183, 0.8)'
              }}
            >
              <div className="text-xl mb-2">⏰</div>
              <div className="text-xs mb-1" style={{ color: '#8B4513' }}>Horário</div>
              <div className="tracking-wide" style={{ color: '#8B4513' }}>12:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}