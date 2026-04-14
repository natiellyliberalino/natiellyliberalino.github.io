import React, { useState, useEffect } from 'react';
import { Mail, Phone, Instagram, Linkedin, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Footer() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'cooldown'>('idle');
  const [cooldownRemaining, setCooldownRemaining] = useState(0);

  useEffect(() => {
    let timer: any;
    if (cooldownRemaining > 0) {
      timer = setInterval(() => {
        setCooldownRemaining((prev) => prev - 1);
      }, 1000);
    } else if (status === 'cooldown') {
      setStatus('idle');
    }
    return () => clearInterval(timer);
  }, [cooldownRemaining, status]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check Rate Limit (2 minutes)
    const lastSent = localStorage.getItem('last_email_sent');
    const now = Date.now();
    const COOLDOWN_MS = 2 * 60 * 1000;

    if (lastSent && now - parseInt(lastSent) < COOLDOWN_MS) {
      const remaining = Math.ceil((COOLDOWN_MS - (now - parseInt(lastSent))) / 1000);
      setCooldownRemaining(remaining);
      setStatus('cooldown');
      return;
    }

    setStatus('loading');
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        localStorage.setItem('last_email_sent', Date.now().toString());
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };
  return (
    <footer className="bg-fendi/10 pt-32 pb-10 px-6 border-t border-fendi/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start mb-24">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 text-brown-dark leading-tight">
              Vamos conversar?
            </h2>
            <p className="text-xl text-brown-dark/70 max-w-md mb-12 font-light">
              Estou disponível para novos projetos e oportunidades de carreira.
            </p>

            <div className="space-y-6">
              <a href="tel:+5527988055746" className="flex items-center gap-6 group w-fit cursor-pointer">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-fendi/10 group-hover:bg-brown-dark group-hover:text-white transition-all duration-500">
                  <Phone className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-fendi mb-1 font-bold">Telefone</p>
                  <p className="text-xl text-brown-dark font-medium leading-none">27 98805-5746</p>
                </div>
              </a>

              <a href="mailto:natiellyliberalino@hotmail.com" className="flex items-center gap-6 group w-fit cursor-pointer">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-fendi/10 group-hover:bg-brown-dark group-hover:text-white transition-all duration-500">
                  <Mail className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-fendi mb-1 font-bold">E-mail</p>
                  <p className="text-xl text-brown-dark font-medium leading-none break-all">natiellyliberalino@hotmail.com</p>
                </div>
              </a>

              <a href="https://www.instagram.com/natyserena/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group w-fit cursor-pointer">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-fendi/10 group-hover:bg-brown-dark group-hover:text-white transition-all duration-500">
                  <Instagram className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-fendi mb-1 font-bold">Instagram</p>
                  <p className="text-xl text-brown-dark font-medium leading-none">@natyserena</p>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/natielly-liberalino" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group w-fit cursor-pointer">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-fendi/10 group-hover:bg-brown-dark group-hover:text-white transition-all duration-500">
                  <Linkedin className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-fendi mb-1 font-bold">LinkedIn</p>
                  <p className="text-xl text-brown-dark font-medium leading-none">Natielly Liberalino</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-white p-10 md:p-14 rounded-[48px] shadow-2xl border border-fendi/5 relative overflow-hidden group">
            {/* Decorações tipo Raio de Sol */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-fendi/5 rounded-full -mr-20 -mt-20 transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-brown-dark/5 rounded-full -mr-12 -mt-12 transition-transform duration-700 group-hover:scale-125 delay-100" />
            <div className="absolute top-0 right-0 w-16 h-16 bg-[#D4AF37]/10 rounded-full -mr-4 -mt-4 transition-transform duration-500 group-hover:scale-150 delay-200" />

            <h3 className="text-2xl font-bold mb-8 text-brown-dark">Mande uma mensagem</h3>
            <form
              onSubmit={handleSubmit}
              action="https://formspree.io/f/xwvappww"
              method="POST"
              className="space-y-4"
            >
              {/* Spam Honeypot */}
              <input type="text" name="_gotcha" className="hidden" />

              <input
                type="email"
                name="email"
                required
                placeholder="Seu e-mail"
                className="w-full px-8 py-5 rounded-3xl border border-fendi/10 focus:outline-none focus:border-brown-dark/30 transition-all bg-pastel-yellow/20"
              />
              <textarea
                name="message"
                required
                placeholder="Como posso te ajudar?"
                rows={4}
                className="w-full px-8 py-5 rounded-3xl border border-fendi/10 focus:outline-none focus:border-brown-dark/30 transition-all bg-pastel-yellow/20 resize-none"
              ></textarea>
              <button
                type="submit"
                disabled={status === 'loading' || status === 'cooldown'}
                className="w-full bg-brown-dark text-white py-5 rounded-3xl font-bold hover:bg-fendi transition-all shadow-lg hover:shadow-brown-dark/20 uppercase tracking-widest text-sm flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : 'Enviar Mensagem'}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-green-600 font-medium text-sm animate-in fade-in slide-in-from-top-1">
                  <CheckCircle2 className="w-5 h-5" />
                  Mensagem enviada com sucesso!
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 text-red-600 font-medium text-sm animate-in fade-in slide-in-from-top-1">
                  <AlertCircle className="w-5 h-5" />
                  Ocorreu um erro. Tente novamente.
                </div>
              )}

              {status === 'cooldown' && (
                <div className="flex items-center gap-2 text-amber-600 font-medium text-sm animate-in fade-in slide-in-from-top-1">
                  <AlertCircle className="w-5 h-5" />
                  Aguarde {cooldownRemaining}s para enviar novamente.
                </div>
              )}
            </form>
          </div>
        </div>

        <div className="pt-10 border-t border-fendi/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-fendi uppercase tracking-[0.2em] font-bold">
            Natielly Liberalino © 2026
          </p>
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-fendi/60">
            <span>Direitos Reservados</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
