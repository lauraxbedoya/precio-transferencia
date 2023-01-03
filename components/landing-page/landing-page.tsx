import MainBanner from "./main-banner/main-banner";
import MainServicesAction from "./main-services-action/main-services-action";

export default function LandingPage() {
  return (
    <div style={{ paddingTop: 0, overflow: 'hidden' }}>
      <MainBanner />
      <MainServicesAction />
    </div>
  )
}