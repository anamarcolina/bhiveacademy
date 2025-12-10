import React from 'react';
import { Section } from '../components/ui/Section';
import { Card } from '../components/ui/Card';
import { useLanguage } from '../i18n/LanguageContext';
import { Layers, BrainCircuit, UserCheck, MessageSquare, Zap, Clock, Users, ShieldCheck } from 'lucide-react';

export const Methodology = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* --- LAYERS --- */}
      <Section className="relative overflow-hidden">
        {/* Background glow for depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-primary-gradient">{t('threeLayers')}</h2>
          <p className="dark:text-bhive-subtext light:text-gray-600">{t('layersDesc')}</p>
        </div>

        <div className="relative z-10 grid lg:grid-cols-3 gap-8">
           <Card className="group">
              <div className="absolute top-0 left-0 w-1 h-full bg-blue-500/50"></div>
              <div className="mb-6 bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center border border-blue-500/20 backdrop-blur-sm">
                 <Layers className="text-blue-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{t('layer1Title')}</h3>
              <p className="text-sm font-semibold dark:text-blue-400 light:text-blue-600 mb-4 uppercase tracking-wider">{t('layer1Subtitle')}</p>
              <p className="dark:text-bhive-subtext light:text-gray-600 text-sm leading-relaxed mb-6">
                 {t('layer1Desc')}
              </p>
           </Card>

           {/* Special glass gradient for the center card */}
           <Card className="group border-orange-500/30 dark:bg-gradient-to-b dark:from-white/[0.08] dark:to-orange-950/30 light:bg-gradient-to-b light:from-orange-50 light:to-orange-100/50">
              <div className="absolute top-0 left-0 w-1 h-full bg-orange-500"></div>
              <div className="mb-6 bg-orange-500/10 w-12 h-12 rounded-lg flex items-center justify-center border border-orange-500/20 backdrop-blur-sm">
                 <BrainCircuit className="text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{t('layer2Title')}</h3>
              <p className="text-sm font-semibold dark:text-orange-400 light:text-orange-600 mb-4 uppercase tracking-wider">{t('layer2Subtitle')}</p>
              <p className="dark:text-bhive-subtext light:text-gray-600 text-sm leading-relaxed mb-6">
                 {t('layer2Desc')}
              </p>
           </Card>

           <Card className="group">
              <div className="absolute top-0 left-0 w-1 h-full bg-purple-500/50"></div>
              <div className="mb-6 bg-purple-500/10 w-12 h-12 rounded-lg flex items-center justify-center border border-purple-500/20 backdrop-blur-sm">
                 <UserCheck className="text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{t('layer3Title')}</h3>
              <p className="text-sm font-semibold dark:text-purple-400 light:text-purple-600 mb-4 uppercase tracking-wider">{t('layer3Subtitle')}</p>
              <p className="dark:text-bhive-subtext light:text-gray-600 text-sm leading-relaxed mb-6">
                 {t('layer3Desc')}
              </p>
           </Card>
        </div>
      </Section>

      {/* --- MANIFESTO --- */}
      <div className="py-32 dark:bg-[#000000] light:bg-gray-50 text-center px-6 relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <p className="text-2xl md:text-3xl font-serif dark:text-bhive-subtext light:text-gray-600 italic">"{t('manifestQuote1')}"</p>
          <p className="text-2xl md:text-3xl font-serif dark:text-bhive-subtext light:text-gray-600 italic">"{t('manifestQuote2')}"</p>

          {/* YouTube Video */}
          <div className="w-full max-w-4xl mx-auto mt-8">
            <div className="relative w-full pt-[56.25%] overflow-hidden rounded-2xl shadow-2xl">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/Xrdyu92tZ1Y?autoplay=1&mute=1&controls=1"
                title="Bhive Academy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <p className="text-3xl md:text-4xl font-bold dark:text-white light:text-gray-900">
            {t('manifestMain')} <span className="text-orange-500">{t('manifestMainHighlight')}</span> {t('manifestMainEnd')}
          </p>
        </div>
      </div>

      {/* --- NEUROSCIENCE --- */}
      <Section id="neuro" className="dark:bg-[#000000] light:bg-[#000000] relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 dark:opacity-30 light:opacity-30 pointer-events-none">
          <img
            src="https://i.ibb.co/YT8nY6sQ/inteligencia-artificial.webp"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-primary-gradient">{t('aiNeuroscienceTitle')}</h2>
          <p className="dark:text-bhive-subtext light:text-white">{t('aiNeuroscienceDesc')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {[
            { icon: Zap, color: "dark:text-yellow-400 light:text-yellow-400", title: t('predictiveCoach'), desc: t('predictiveCoachDesc') },
            { icon: BrainCircuit, color: "dark:text-pink-400 light:text-pink-400", title: t('learningGraph'), desc: t('learningGraphDesc') },
            { icon: Layers, color: "dark:text-cyan-400 light:text-cyan-400", title: t('activeRecall'), desc: t('activeRecallDesc') },
            { icon: Clock, color: "dark:text-green-400 light:text-green-400", title: t('sleepSmartReviews'), desc: t('sleepSmartReviewsDesc') },
            { icon: Users, color: "dark:text-indigo-400 light:text-indigo-400", title: t('socialLearning'), desc: t('socialLearningDesc') },
            { icon: ShieldCheck, color: "dark:text-red-400 light:text-red-400", title: t('cognitiveLoadBalancer'), desc: t('cognitiveLoadBalancerDesc') },
          ].map((item, index) => (
            <div key={index} className="p-6 rounded-2xl dark:bg-gradient-to-b dark:from-white/[0.05] dark:to-white/[0.01] light:bg-gradient-to-b light:from-white/[0.05] light:to-white/[0.01] backdrop-blur-xl border dark:border-white/10 light:border-white/10 dark:hover:from-white/[0.1] dark:hover:to-white/[0.02] light:hover:from-white/[0.08] light:hover:to-white/[0.02] dark:hover:border-white/20 light:hover:border-white/20 transition-all duration-300 shadow-lg dark:shadow-black/20 light:shadow-black/10">
              <item.icon className={`${item.color} mb-4 w-8 h-8`} />
              <h4 className="text-lg font-bold dark:text-white light:text-white mb-2">{item.title}</h4>
              <p className="text-sm dark:text-bhive-subtext light:text-white/70">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};