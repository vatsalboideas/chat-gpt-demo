import Hero from './components/Hero';
import InvestmentCalculator from './components/InvestmentCalculator';
import OwnershipSection from './components/OwnerShipSection';
import OfferingsSection from './components/OfferingsSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <OwnershipSection/>
      <OfferingsSection/>
      <InvestmentCalculator />
    </>
  );
}
