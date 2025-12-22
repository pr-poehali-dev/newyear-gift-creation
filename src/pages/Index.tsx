import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [snowflakes, setSnowflakes] = useState<Array<{id: number, left: string, duration: string, delay: string}>>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const carouselImages = [
    { src: 'https://cdn.poehali.dev/files/IMAGE 2025-12-22 11:08:57.jpg', alt: 'Наряжаем ёлку с героем фильма' },
    { src: 'https://cdn.poehali.dev/files/IMAGE 2025-12-22 11:09:00.jpg', alt: 'Стань Дедом Морозом или Снегурочкой' },
    { src: 'https://cdn.poehali.dev/files/IMAGE 2025-12-22 11:09:07.jpg', alt: 'Подари веру в волшебство' },
    { src: 'https://cdn.poehali.dev/files/freepik__-img1-__66246.png', alt: 'Ваше фото со звёздами фильма' },
    { src: 'https://cdn.poehali.dev/files/freepik__-img1-80-__90885.png', alt: 'Открытка в стиле 80-х' },
    { src: 'https://cdn.poehali.dev/files/freepik__-img1-__90888.png', alt: 'Съёмки с любимым актёром' },
    { src: 'https://cdn.poehali.dev/files/freepik__-img1-__90886.png', alt: 'Попробуй красной икры на Красной площади' },
    { src: 'https://cdn.poehali.dev/files/freepik__-img1-__74106.png', alt: 'Персональная ёлочная игрушка' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  useEffect(() => {
    const flakes = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${10 + Math.random() * 10}s`,
      delay: `${Math.random() * 5}s`
    }));
    setSnowflakes(flakes);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const services = [
    { name: '🎬 Видео от Деда Мороза', price: '1 490₽' },
    { name: '🎬 Видео от кумира', price: '1 700₽' },
    { name: '📸 Фотосессия Голливуд', desc: '10 фото разных стилей', price: '3 500₽' },
    { name: '📸 Фото с кумиром', desc: 'северный стиль, студийные', price: '500₽/шт' },
    { name: '👧 Фото с героями мультфильмов', price: '1 490₽' },
    { name: '👨‍👩‍👧‍👦 Семейная фотосессия', price: '1 490₽' },
    { name: '🎨 Открытки в стиле 80-х', price: '500₽' },
    { name: '🎄 Ёлочные игрушки', price: '500₽' },
    { name: '🎊 Видеоколлажи', price: '1 599₽' },
    { name: '🎭 Видеосказки', price: '1 999₽' },
  ];

  const portfolio = [
    { type: 'video', title: 'Видео от Конора', desc: 'Клиент плакал 10 минут', emoji: '🎬' },
    { type: 'video', title: 'Дед Мороз', desc: 'Личное поздравление по имени', emoji: '🎄' },
    { type: 'photo', title: 'Фотосессия Голливуд', desc: '10 студийных фото 4K', emoji: '📸' },
    { type: 'photo', title: 'Фото с кумиром', desc: 'Реалистичная композиция', emoji: '⭐' },
    { type: 'video', title: 'Видеосказка про семью', desc: '60 сек, 4K, с музыкой', emoji: '🎭' },
    { type: 'photo', title: 'Северный стиль', desc: 'Ледяной дворец, огни', emoji: '❄️' },
  ];

  const stats = [
    { icon: 'CheckCircle2', value: '100+', text: 'подарков создано' },
    { icon: 'Zap', value: '24-48ч', text: 'быстрый результат' },
    { icon: 'Sparkles', value: '4K', text: 'качество файлов' },
  ];

  const steps = [
    { num: 1, title: 'Заявка', desc: 'Пиши в Telegram за 5 мин', icon: 'MessageCircle' },
    { num: 2, title: 'Создаём', desc: '4K видео за 24-48 часов', icon: 'Film' },
    { num: 3, title: 'Проверяешь', desc: 'Правки бесплатно', icon: 'Eye' },
    { num: 4, title: 'Даришь', desc: 'Люди плачут от радости', icon: 'Gift' },
  ];

  const faq = [
    { q: 'Это реально?', a: 'Да, AI-видео выглядит как от реального кумира' },
    { q: '48 часов реально?', a: 'Да, обычно быстрее 20-24 часа' },
    { q: 'Не понравится?', a: 'Пересделаем бесплатно' },
    { q: 'Цена дешевая?', a: 'Да, новогодняя -20%, обычно 750-1000₽' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1f3f] via-[#1a2f4f] to-[#0a1f3f] text-white overflow-hidden relative">
      {modalImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setModalImage(null)}
        >
          <button
            onClick={() => setModalImage(null)}
            className="absolute top-4 right-4 bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0a1f3f] rounded-full p-3 shadow-xl transition-all hover:scale-110 z-10"
            aria-label="Закрыть"
          >
            <Icon name="X" size={24} />
          </button>
          <div className="max-w-4xl max-h-[90vh] relative">
            <img 
              src={modalImage} 
              alt="Увеличенное фото" 
              className="w-full h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: flake.left,
            animationDuration: flake.duration,
            animationDelay: flake.delay
          }}
        >
          ❄️
        </div>
      ))}

      <header className="py-4 px-6 border-b border-white/10 backdrop-blur-sm sticky top-0 z-50 bg-[#0a1f3f]/80">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🎁</span>
            <span className="text-2xl font-bold text-[#FFD700]">StaniStudio</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#services" className="hover:text-[#FFD700] transition-colors">Услуги</a>
            <a href="#portfolio" className="hover:text-[#FFD700] transition-colors">Портфолио</a>
            <a href="#process" className="hover:text-[#FFD700] transition-colors">Процесс</a>
            <a href="#faq" className="hover:text-[#FFD700] transition-colors">FAQ</a>
          </nav>
          <Button className="bg-[#DC143C] hover:bg-[#DC143C]/90 text-white font-bold">
            <Icon name="Send" size={16} className="mr-2" />
            Telegram
          </Button>
        </div>
      </header>

      <section className="py-20 px-6 text-center relative">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-block mb-6 px-6 py-2 bg-[#DC143C] rounded-full text-sm font-bold animate-pulse">
                🔥 ПОСЛЕ 28 ДЕКАБРЯ - РОСТ ЦЕН, УСПЕВАЙ СЕЙЧАС
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                <span className="text-[#FFD700]">ПОДАРОК</span> КОТОРЫЙ<br />
                ПОМНЯТ <span className="text-[#DC143C]">10 ЛЕТ</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-300">
                Видео от кумира • Фотосессия мечты • Оживление фото за 24 часов
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-[#DC143C] hover:bg-[#DC143C]/90 text-white font-bold text-lg px-8 py-6 hover:scale-105 transition-transform">
                  <Icon name="Gift" size={20} className="mr-2" />
                  Получить подарок
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#0a1f3f] font-bold text-lg px-8 py-6">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть примеры
                </Button>
              </div>
              <div className="text-base md:text-lg text-gray-400 italic">
                "Люди помнят 10% что слышат, 25% что видят,<br />
                но <span className="text-[#FFD700] font-bold">65% что ЧУВСТВУЮТ</span>"
              </div>
            </div>
            
            <div className="relative space-y-4">
              <div className="absolute -left-12 top-1/4 hidden xl:flex flex-col gap-6 text-4xl animate-bounce" style={{ animationDuration: '3s' }}>
                <span className="opacity-70 hover:opacity-100 transition-opacity cursor-default">🎄</span>
                <span className="opacity-60 hover:opacity-100 transition-opacity cursor-default">✨</span>
                <span className="opacity-70 hover:opacity-100 transition-opacity cursor-default">🎁</span>
              </div>
              
              <div className="absolute -right-12 top-1/3 hidden xl:flex flex-col gap-6 text-4xl animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>
                <span className="opacity-60 hover:opacity-100 transition-opacity cursor-default">⭐</span>
                <span className="opacity-70 hover:opacity-100 transition-opacity cursor-default">🎅</span>
                <span className="opacity-60 hover:opacity-100 transition-opacity cursor-default">❄️</span>
              </div>

              <div className="relative max-w-md mx-auto lg:mx-0">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FFD700] hover:scale-105 transition-transform duration-300">
                  <img 
                    src="https://cdn.poehali.dev/files/IMAGE 2025-12-22 11:00:49.jpg" 
                    alt="Пример AI-видео с кумиром" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#DC143C] text-white px-4 py-2 rounded-lg font-bold text-sm shadow-xl">
                  ⭐ Пример работы
                </div>
              </div>
              
              <div className="relative max-w-md mx-auto lg:mx-0 overflow-visible">
                <button
                  onClick={prevSlide}
                  className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0a1f3f] rounded-full p-2 shadow-xl transition-all hover:scale-110"
                  aria-label="Предыдущий слайд"
                >
                  <Icon name="ChevronLeft" size={24} />
                </button>
                
                <button
                  onClick={nextSlide}
                  className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0a1f3f] rounded-full p-2 shadow-xl transition-all hover:scale-110"
                  aria-label="Следующий слайд"
                >
                  <Icon name="ChevronRight" size={24} />
                </button>

                <div className="overflow-hidden rounded-lg">
                  <div 
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 33.333}%)` }}
                  >
                    {carouselImages.map((image, index) => (
                      <div 
                        key={index}
                        className="min-w-[33.333%] px-1.5"
                      >
                        <div 
                          className="rounded-lg overflow-hidden shadow-lg border-2 border-[#FFD700]/50 hover:border-[#FFD700] hover:scale-105 transition-all duration-300 cursor-pointer"
                          onClick={() => setModalImage(image.src)}
                        >
                          <img 
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-32 object-cover"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center gap-2 mt-3">
                  {carouselImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-[#FFD700] w-6' : 'bg-white/30 hover:bg-white/50'
                      }`}
                      aria-label={`Слайд ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <Icon name={stat.icon as any} size={48} className="mx-auto mb-4 text-[#FFD700]" />
                <div className="text-4xl font-black text-[#DC143C] mb-2">{stat.value}</div>
                <div className="text-lg text-gray-300">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              👀 СМОТРИ ЧТО МЫ <span className="text-[#DC143C]">СОЗДАЁМ</span>
            </h2>
            <p className="text-xl text-gray-300">Реальные примеры из 100 выполненных подарков</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {portfolio.map((item, i) => (
              <Card key={i} className="bg-white/10 border-white/20 hover:bg-white/15 transition-all hover:scale-105 backdrop-blur-sm group cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">{item.emoji}</div>
                  <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                  <div className="mt-4 inline-flex items-center text-[#FFD700] group-hover:underline">
                    <Icon name="Play" size={16} className="mr-1" />
                    Смотреть
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button size="lg" className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white font-bold text-lg px-8">
              <Icon name="ExternalLink" size={20} className="mr-2" />
              Смотреть все работы в Telegram
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            <span className="text-[#FFD700]">15+</span> УСЛУГ НА ВЫБОР
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, i) => (
              <Card key={i} className="bg-white/10 border-white/20 hover:bg-white/15 transition-all hover:scale-105 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{service.name}</h3>
                  {service.desc && <p className="text-sm text-gray-400 mb-3">{service.desc}</p>}
                  <div className="text-2xl font-black text-[#FFD700]">{service.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <Card className="bg-gradient-to-br from-[#DC143C] to-[#8B0000] border-[#FFD700] border-4 hover:scale-105 transition-transform">
            <CardContent className="p-8 text-center">
              <div className="text-5xl mb-4">🎁</div>
              <h3 className="text-3xl font-black mb-4 text-white">КОМБО (ЛУЧШЕЕ ПРЕДЛОЖЕНИЕ)</h3>
              <p className="text-xl mb-4 text-white/90">Видео + Фотосессия + Открытка</p>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-2xl text-white/50 line-through">6 500₽</span>
                <span className="text-5xl font-black text-[#FFD700]">4 990₽</span>
              </div>
              <Button size="lg" className="bg-[#FFD700] text-[#0a1f3f] hover:bg-[#FFD700]/90 font-bold text-lg px-8">
                <Icon name="Star" size={20} className="mr-2" />
                Заказать комбо
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="process" className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            КАК МЫ СОЗДАЁМ <span className="text-[#FFD700]">ЧУДЕСА</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#DC143C] to-[#8B0000] flex items-center justify-center text-3xl font-black text-white group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <Icon name={step.icon as any} size={40} className="mx-auto mb-3 text-[#FFD700] group-hover:animate-pulse" />
                <h3 className="text-2xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full">
                    <Icon name="ArrowRight" size={24} className="text-[#FFD700]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-6 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-12">
            ЧАСТО ЗАДАВАЕМЫЕ <span className="text-[#DC143C]">ВОПРОСЫ</span>
          </h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faq.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-white/10 border-white/20 rounded-lg px-6 backdrop-blur-sm">
                <AccordionTrigger className="text-xl font-bold text-white hover:text-[#FFD700]">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-gray-300">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-20 px-6 text-center bg-gradient-to-br from-[#DC143C] to-[#8B0000]">
        <div className="container mx-auto max-w-4xl">
          <div className="text-6xl mb-6">🎄✨</div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
            ГОТОВ СОЗДАТЬ НЕЗАБЫВАЕМЫЙ ПОДАРОК?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Осталось всего 20 мест со скидкой -20%
          </p>
          <Button size="lg" className="bg-[#FFD700] text-[#0a1f3f] hover:bg-[#FFD700]/90 font-bold text-xl px-12 py-8 hover:scale-105 transition-transform">
            <Icon name="Send" size={24} className="mr-2" />
            Написать в Telegram
          </Button>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-white/10 text-center">
        <div className="container mx-auto">
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="text-3xl">🎁</span>
            <span className="text-2xl font-bold text-[#FFD700]">StaniStudio</span>
          </div>
          <p className="text-gray-400 mb-2">Первая в Приморье студия нейроподарков</p>
          <p className="text-sm text-gray-500">© 2024-2025 StaniStudio</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;