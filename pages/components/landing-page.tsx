import CompanyValues from '@/components/company-value/company-values';
import MainBanner from '@/components/main-banner/main-banner';
import MainServicesAction from '@/components/main-services-actions/main-services-actions';
import Plans from '@/components/plans/plans';
import ProfessionalAccompaniment from '@/components/professional-accompaniment/professional-accompaniment';
import Start from '@/components/start/start';

export default function LandingPage() {
  return (
    <div style={{ paddingTop: 0, overflow: 'hidden' }}>
      <MainBanner />
      <MainServicesAction />
      <ProfessionalAccompaniment />
      <CompanyValues />
      <Plans />
      {/* <FrequentlyQuestions /> */}
      {/* <Benefits /> */}
      <Start />
    </div>
  );
}
