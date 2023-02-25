import Benefits from "./benefits/benefits";
import CompanyValues from "./company-value/company-values";
import FrequentlyQuestions from "./frequently-questions/frequently-questions";
import MainBanner from "./main-banner/main-banner";
import MainServicesAction from "./main-services-actions/main-services-actions";
import Plans from "./plans/plans";
import ProfessionalAccompaniment from "./professional-accompaniment/professional-accompaniment";
import Start from "./start/start";

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
  )
}