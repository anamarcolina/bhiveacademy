import React from 'react';
import { Section } from '../components/ui/Section';
import { Card, NumberedCard } from '../components/ui/Card';
import { AlertCircle, BarChart3, Users, PlayCircle, Cpu, HeartHandshake, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../i18n/LanguageContext';

export const Context = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* --- PROBLEM SECTION --- */}
      <Section id="problem" bg="darker" className="relative overflow-hidden">
        {/* Abstract Glow Background */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-orange-500/10 to-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-primary-gradient">{t('problemTitle')} <br /><span className="dark:text-white/40 light:text-gray-400">{t('problemSubtitle')}</span></h2>
          <p className="text-lg dark:text-bhive-subtext light:text-gray-600">{t('problemDesc')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 relative z-10">
          <Card className="hover:border-red-500/30 group">
            <div className="w-12 h-12 bg-red-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-red-500/20 transition-colors">
              <PlayCircle className="text-red-500 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">{t('platformShelf')}</h3>
            <p className="dark:text-bhive-subtext light:text-gray-600">
              {t('platformShelfDesc')}
            </p>
          </Card>

          <Card className="hover:border-yellow-500/30 group">
             <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-yellow-500/20 transition-colors">
              <BarChart3 className="text-yellow-500 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">{t('incompleteMetrics')}</h3>
            <p className="dark:text-bhive-subtext light:text-gray-600">
              {t('incompleteMetricsDesc')}
            </p>
          </Card>

          <Card className="hover:border-blue-500/30 group">
             <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
              <Users className="text-blue-500 w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">{t('overloadedHumans')}</h3>
            <p className="dark:text-bhive-subtext light:text-gray-600">
              {t('overloadedHumansDesc')}
            </p>
          </Card>
        </div>

        <div className="text-center border-t dark:border-white/5 light:border-gray-200 pt-12 relative z-10">
          <p className="text-2xl font-light dark:text-white light:text-gray-900">
            {t('solutionContext')} <br/>
            <span className="text-orange-500 font-semibold">{t('solutionContextHighlight')}</span>
          </p>
        </div>
      </Section>

      {/* --- SOLUTION SECTION --- */}
      <Section id="solution">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="sticky top-32">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-primary-gradient">{t('solutionTitle')} {t('solutionTitleHighlight')}</h2>
            <p className="text-lg dark:text-bhive-subtext light:text-gray-600 mb-8 leading-relaxed">
              {t('solutionDesc')}
            </p>
            <a href="https://calendly.com/ana-lpdigital/30min" target="_blank" rel="noopener noreferrer">
              <Button className="group">
                {t('seeOrganization')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          <div className="grid gap-6">
            <div className="h-[280px]">
              <NumberedCard number="01" title={t('liveLearning')} bgImage="https://i.ibb.co/nsYV5wGd/image.png">
                {t('liveLearningDesc')}
              </NumberedCard>
            </div>
            <div className="h-[280px]">
              <NumberedCard number="02" title={t('continuousIntelligence')} bgImage="https://i.ibb.co/R4gVN5Nm/image.png">
                {t('continuousIntelligenceDesc')}
              </NumberedCard>
            </div>
             <div className="h-[280px]">
              <NumberedCard number="03" title={t('pedagogicalCare')} bgImage="https://i.ibb.co/xqs0zbZD/image.png">
                {t('pedagogicalCareDesc')}
              </NumberedCard>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};