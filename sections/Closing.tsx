import React, { useState } from 'react';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../i18n/LanguageContext';
import { ChevronDown, ChevronUp, Mail, MapPin, Instagram, Linkedin } from 'lucide-react';

// FAQ Component
const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b dark:border-white/5 light:border-white/20 last:border-0">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-white group-hover:text-orange-400 transition-colors">{question}</span>
        {isOpen ? <ChevronUp className="text-orange-500" /> : <ChevronDown className="text-white group-hover:text-orange-400 transition-colors" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-white/80 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export const Closing = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* --- ONBOARDING --- */}
      <Section id="start">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-primary-gradient">{t('howWeStart')}</h2>

        <div className="grid md:grid-cols-4 gap-4">
           {[
             { step: "01", title: t('diagnosis'), desc: t('diagnosisDesc') },
             { step: "02", title: t('pilot'), desc: t('pilotDesc') },
             { step: "03", title: t('setup'), desc: t('setupDesc') },
             { step: "04", title: t('expansion'), desc: t('expansionDesc') },
           ].map((item, i) => (
             <div key={i} className="relative p-6 dark:bg-gradient-to-b dark:from-white/[0.05] dark:to-white/[0.01] light:bg-gradient-to-b light:from-gray-100 light:to-gray-50 backdrop-blur-2xl border dark:border-white/10 light:border-gray-200 rounded-2xl dark:hover:from-white/[0.08] dark:hover:to-white/[0.02] light:hover:from-gray-200 light:hover:to-gray-100 dark:hover:border-white/20 light:hover:border-gray-300 hover:-translate-y-1 transition-all duration-300 group shadow-lg">
                <span className="text-5xl font-bold dark:text-white/[0.03] light:text-gray-900/[0.06] absolute top-4 right-4 dark:group-hover:text-white/[0.08] light:group-hover:text-gray-900/[0.12] transition-colors">{item.step}</span>
                <h3 className="text-xl font-bold text-orange-500 mb-2">{item.title}</h3>
                <p className="text-sm dark:text-bhive-subtext light:text-gray-600 relative z-10">{item.desc}</p>
             </div>
           ))}
        </div>
        
        <div className="mt-12 text-center">
           <a href="https://calendly.com/ana-lpdigital/30min" target="_blank" rel="noopener noreferrer">
             <Button className="shadow-2xl shadow-orange-500/20">{t('scheduleDemo')}</Button>
           </a>
        </div>
      </Section>

      {/* --- FAQ --- */}
      <Section id="faq" bg="darker" className="relative overflow-hidden py-16">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover pointer-events-none dark:opacity-30 light:opacity-50"
        >
          <source src="/faq-background.mp4" type="video/mp4" />
        </video>

        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">{t('faq')}</h2>
          <div className="dark:bg-gradient-to-b dark:from-white/[0.05] dark:to-white/[0.01] light:bg-gradient-to-b light:from-gray-50 light:to-white backdrop-blur-3xl rounded-3xl p-6 md:p-8 border dark:border-white/10 light:border-gray-200 shadow-2xl shadow-black/50">
            <FAQItem
              question={t('faqQ1')}
              answer={t('faqA1')}
            />
            <FAQItem
              question={t('faqQ2')}
              answer={t('faqA2')}
            />
            <FAQItem
              question={t('faqQ3')}
              answer={t('faqA3')}
            />
            <FAQItem
              question={t('faqQ4')}
              answer={t('faqA4')}
            />
          </div>
        </div>
      </Section>

      {/* --- FINAL CTA --- */}
      <Section className="text-center py-32 relative overflow-hidden">
        {/* Abstract Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-orange-500/10 to-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-3xl mx-auto space-y-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-primary-gradient">
            {t('readyForLive')} <br/>
            {t('readyForLiveHighlight')}
          </h2>
          <p className="text-xl dark:text-bhive-subtext light:text-gray-600">
            {t('readyDesc')}
          </p>
          <a href="https://calendly.com/ana-lpdigital/30min" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="px-12 shadow-orange-500/30">{t('speakWithExpert')}</Button>
          </a>
        </div>
      </Section>

      {/* --- FOOTER --- */}
      <footer className="dark:bg-black light:bg-gray-50 py-12 px-6 border-t dark:border-white/10 light:border-gray-200 relative">
         <div className="absolute inset-0 dark:bg-white/[0.01] light:bg-gray-50 pointer-events-none"></div>
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
            <div className="text-center md:text-left">
               <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                 <img
                   src="https://i.ibb.co/bMQg7tQJ/bhive-academy-t-pdf.png"
                   alt="Bhive Academy Logo"
                   className="h-8 object-contain"
                 />
               </div>
               <p className="text-sm dark:text-bhive-subtext light:text-gray-600">{t('livelearning')}</p>
            </div>

            <div className="flex flex-col md:flex-row gap-8 text-sm dark:text-bhive-subtext light:text-gray-600">
               <a href="mailto:contatos@lpdigital.ai" className="flex items-center gap-2 dark:hover:text-white light:hover:text-gray-900 transition-colors">
                  <Mail className="w-4 h-4" />
                  {t('email')}
               </a>
               <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {t('location')}
               </div>
               <a href="https://www.instagram.com/lpd.ai/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 dark:hover:text-white light:hover:text-gray-900 transition-colors">
                  <Instagram className="w-4 h-4" />
                  Instagram
               </a>
               <a href="http://linkedin.com/company/launchpad-digital-ai/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 dark:hover:text-white light:hover:text-gray-900 transition-colors">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
               </a>
            </div>
         </div>
         <div className="max-w-7xl mx-auto mt-12 pt-8 border-t dark:border-white/5 light:border-gray-200 text-center text-xs dark:text-bhive-subtext/50 light:text-gray-500 relative z-10">
            {t('allRightsReserved')}
         </div>
      </footer>
    </>
  );
};