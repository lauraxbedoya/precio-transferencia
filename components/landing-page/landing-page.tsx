import Declaration from "./declaration/declaration";
import FrequentlyQuestions from "./frequently-questions/frequently-questions";
import MainBanner from "./main-banner/main-banner";
import MainServicesAction from "./main-services-action/main-services-action";
import PaidPlans from "./paid-plans/paid-plans";

export default function LandingPage() {
  return (
    <div style={{ paddingTop: 0, overflow: 'hidden' }}>
      <MainBanner />
      <MainServicesAction />
      <PaidPlans />
      <Declaration />
      <FrequentlyQuestions />
    </div>
  )
}