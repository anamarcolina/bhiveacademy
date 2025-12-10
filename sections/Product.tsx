import React from 'react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../i18n/LanguageContext';
import { MessageSquare, CheckCircle, XCircle } from 'lucide-react';

export const Product = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* --- SASHA SECTION --- */}
      <Section id="sasha" className="border-y dark:border-white/5 light:border-gray-200 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>

        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          
          <div className="relative group">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden relative shadow-2xl border dark:border-white/10 light:border-gray-200 dark:bg-white/5 light:bg-gray-100 backdrop-blur-sm">
              <img
                src="https://i.ibb.co/tnzmw0w/Sasha-Upscalle.png"
                alt="Sasha Avatar"
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 dark:bg-gradient-to-t dark:from-[#121212] dark:via-transparent dark:to-transparent light:bg-gradient-to-t light:from-white light:via-transparent light:to-transparent"></div>
              
              {/* Glass Chat UI Overlay - More transparent */}
              <div className="absolute bottom-8 left-6 right-6">
                <div className="dark:bg-black/30 light:bg-black/30 backdrop-blur-2xl p-5 rounded-2xl border dark:border-white/10 light:border-white/10 animate-slide-up shadow-2xl shadow-black/50">
                  <div className="flex items-start gap-3">
                    <img
                      src="https://i.ibb.co/DnJPB7D/Sasha-icon.png"
                      alt="Sasha"
                      className="w-8 h-8 rounded-full shrink-0 shadow-lg shadow-orange-500/20 object-cover"
                    />
                    <div>
                      <p className="text-sm text-white mb-3 font-light leading-relaxed">
                        {t('sashaMessage')}
                      </p>
                      <div className="flex gap-2">
                         <button className="text-xs dark:bg-white/10 light:bg-white/10 dark:hover:bg-white/20 light:hover:bg-white/20 px-3 py-1.5 rounded-full text-white transition border dark:border-white/5 light:border-white/5">{t('yes')}</button>
                         <button className="text-xs bg-transparent border dark:border-white/10 light:border-white/10 dark:hover:bg-white/5 light:hover:bg-white/5 px-3 py-1.5 rounded-full text-white transition">{t('notNow')}</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-400 font-medium mb-6 backdrop-blur-sm">
                <MessageSquare className="w-4 h-4" />
                {t('livetutoring')}
             </div>
             <h2 className="text-4xl font-bold mb-4">{t('sashaTitle')}</h2>
             <p className="text-xl text-white mb-8">
               {t('sashaDesc')}
             </p>

             <ul className="space-y-6 mb-10">
                <li className="flex gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-orange-500 shrink-0 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                  <div>
                    <h4 className="dark:text-white light:text-gray-900 font-bold">{t('organizesJourney')}</h4>
                    <p className="text-sm dark:text-bhive-subtext light:text-gray-600">{t('organizesJourneyDesc')}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 w-2 h-2 rounded-full bg-orange-500 shrink-0 shadow-[0_0_10px_rgba(249,115,22,0.5)]" />
                  <div>
                    <h4 className="dark:text-white light:text-gray-900 font-bold">{t('identifiesRisks')}</h4>
                    <p className="text-sm dark:text-bhive-subtext light:text-gray-600">{t('identifiesRisksDesc')}</p>
                  </div>
                </li>
             </ul>

             <a href="https://calendly.com/ana-lpdigital/30min" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="backdrop-blur-sm dark:bg-white/5 light:bg-gray-100 dark:border-white/10 light:border-gray-200 dark:hover:bg-white/10 light:hover:bg-gray-200">{t('seeSashaInAction')}</Button>
             </a>
          </div>

        </div>
      </Section>

      {/* --- AUDIENCE --- */}
      <Section id="audience" bg="darker" className="relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 dark:opacity-40 light:opacity-60 pointer-events-none">
          <img
            src="https://i.ibb.co/Pzvb68ph/fundof.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="text-center mb-12 relative z-10">
           <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-primary-gradient">{t('whoIsFor')}</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto relative z-10">
           {/* Green Glass Card */}
           <div className="p-8 rounded-2xl bg-gradient-to-b from-green-500/[0.35] to-green-500/[0.15] backdrop-blur-2xl border border-green-500/20 hover:border-green-500/30 transition-all duration-300 shadow-xl">
              <h3 className="text-xl font-bold dark:text-green-400 light:text-green-600 mb-6 flex items-center gap-2">
                 <CheckCircle className="w-6 h-6" /> {t('forYouIf')}
              </h3>
              <ul className="space-y-4">
                 {[t('forYou1'), t('forYou2'), t('forYou3'), t('forYou4')].map((item, i) => (
                    <li key={i} className="text-white text-sm flex items-start gap-2">
                      <span className="text-green-300 mt-1">•</span> {item}
                    </li>
                 ))}
              </ul>
           </div>

           {/* Red Glass Card */}
           <div className="p-8 rounded-2xl bg-gradient-to-b from-red-500/[0.35] to-red-500/[0.15] backdrop-blur-2xl border border-red-500/20 hover:border-red-500/30 transition-all duration-300 shadow-xl">
              <h3 className="text-xl font-bold dark:text-red-400 light:text-red-600 mb-6 flex items-center gap-2">
                 <XCircle className="w-6 h-6" /> {t('notForYou')}
              </h3>
               <ul className="space-y-4">
                 {[t('notForYou1'), t('notForYou2'), t('notForYou3')].map((item, i) => (
                    <li key={i} className="text-white text-sm flex items-start gap-2">
                      <span className="text-red-300 mt-1">•</span> {item}
                    </li>
                 ))}
              </ul>
           </div>
        </div>
      </Section>
    </>
  );
};