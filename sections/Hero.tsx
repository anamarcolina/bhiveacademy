import React from 'react';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../i18n/LanguageContext';
import { Play, ArrowRight, Brain, Activity, Zap } from 'lucide-react';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex items-center pt-16 px-6 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-8 items-center">

        {/* Text Content */}
        <div className="space-y-4 z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full dark:bg-white/5 light:bg-gray-100 border dark:border-white/10 light:border-gray-200 text-sm text-orange-400 font-medium backdrop-blur-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            {t('neuroscience')}
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            {t('heroTitle')} <br />
            <span className="text-transparent bg-clip-text bg-primary-gradient">
              {t('heroSubtitle')}
            </span>
          </h1>

          <p className="text-lg md:text-xl dark:text-bhive-subtext light:text-gray-600 font-light">
            {t('heroDesc')}
          </p>

          <div className="space-y-3 border-l-2 border-orange-500/30 pl-6 py-2">
            <p className="text-sm md:text-base dark:text-bhive-subtext light:text-gray-600">
              {t('heroQuote1')}
            </p>
            <p className="text-sm md:text-base dark:text-white light:text-gray-900 font-medium">
              {t('heroQuote2')}
            </p>
          </div>

          <div className="space-y-2">
            {[
              t('heroBullet1'),
              t('heroBullet2'),
              t('heroBullet3')
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 dark:text-bhive-subtext light:text-gray-600 text-sm">
                <div className="h-1.5 w-1.5 rounded-full bg-orange-500 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a href="https://calendly.com/ana-lpdigital/30min" target="_blank" rel="noopener noreferrer">
              <Button className="group shadow-2xl shadow-orange-500/20 text-sm">
                {t('heroHowWorks')}
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="https://calendly.com/ana-lpdigital/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" className="dark:bg-white/5 light:bg-gray-100 dark:border-white/10 light:border-gray-200 backdrop-blur-md dark:hover:bg-white/10 light:hover:bg-gray-200 text-sm">
                {t('heroSchedule')}
              </Button>
            </a>
          </div>
        </div>

        {/* Visual / Abstract Interface */}
        <div className="relative hidden lg:block h-[450px] w-full perspective-1000">
           <div className="absolute inset-0 dark:bg-gradient-to-br dark:from-white/[0.08] dark:to-white/[0.02] light:bg-gradient-to-br light:from-gray-100 light:to-gray-50 backdrop-blur-2xl rounded-3xl border dark:border-white/10 light:border-gray-200 shadow-2xl p-6 flex flex-col transform rotate-y-12 rotate-2 hover:rotate-0 hover:rotate-y-0 transition-transform duration-700 ease-out">
              {/* Fake UI Header */}
              <div className="flex justify-between items-center mb-8 border-b dark:border-white/5 light:border-gray-200 pb-4">
                 <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-green-500/50" />
                 </div>
                 <div className="text-xs dark:text-bhive-subtext light:text-gray-600 tracking-widest uppercase font-mono dark:opacity-50 light:opacity-70">Learning Graph Active</div>
              </div>

              {/* Visualization */}
              <div className="flex-1 relative">
                 <div className="absolute top-10 left-10 p-4 dark:bg-[#1E1E1E]/60 light:bg-white/80 backdrop-blur-xl rounded-xl border dark:border-white/10 light:border-gray-200 shadow-xl animate-float">
                    <div className="flex items-center gap-3 mb-2">
                       <Brain className="w-5 h-5 text-purple-400" />
                       <span className="text-sm font-semibold dark:text-white light:text-gray-900">Carga Cognitiva</span>
                    </div>
                    <div className="w-32 h-1.5 bg-neutral-800 rounded-full overflow-hidden">
                       <div className="h-full bg-purple-500 w-[70%] shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                    </div>
                 </div>

                 <div className="absolute bottom-20 right-10 p-4 dark:bg-[#1E1E1E]/60 light:bg-white/80 backdrop-blur-xl rounded-xl border dark:border-white/10 light:border-gray-200 shadow-xl animate-float-delayed">
                    <div className="flex items-center gap-3 mb-2">
                       <Activity className="w-5 h-5 text-orange-400" />
                       <span className="text-sm font-semibold dark:text-white light:text-gray-900">Engajamento</span>
                    </div>
                    <div className="text-2xl font-bold dark:text-white light:text-gray-900">94% <span className="text-xs text-green-500 font-normal">▲ 12%</span></div>
                 </div>

                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-orange-500/10 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full border border-orange-500/20 flex items-center justify-center animate-pulse-slow">
                       <div className="w-32 h-32 rounded-full bg-orange-500/10 backdrop-blur-xl flex items-center justify-center border border-orange-500/30 shadow-[0_0_30px_rgba(249,115,22,0.2)]">
                          <Zap className="w-12 h-12 text-orange-500 drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
                       </div>
                    </div>
                 </div>
              </div>

              {/* Code/Data snippets */}
              <div className="mt-6 space-y-2 font-mono text-xs dark:text-bhive-subtext light:text-gray-600 dark:opacity-50 light:opacity-70">
                 <p className="typing-effect">{`> analyzing_student_focus(id=492)... OK`}</p>
                 <p>{`> generating_intervention(type="active_recall")...`}</p>
                 <p>{`> sasha_avatar_status: listening`}</p>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};