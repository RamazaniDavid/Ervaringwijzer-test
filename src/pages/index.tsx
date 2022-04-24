import Assertion from '@/components/assertion/Assertion';
import Banner from '@/components/banner/Banner';
import Benefit from '@/components/benefit/Benefit';
import Roadmap from '@/components/roadmap/Roadmap';
import Summary from '@/components/summary/Summary';
import { Layout } from '@/layout/MainLayout';
import { Meta } from '@/layout/Meta';

const Index = () => {
  return (
    <Layout
      meta={
        <Meta
          title="Ervaringwijzer"
          description="Met de API van Ervaringwijzer automatiseer je alle onderdelen van Ervaringwijzer. Creeër, verstuur en zie resultaten van alle onderzoeken van ieder deel van de organisatie."
        />
      }
    >
      <Banner />
      <Assertion />
      <Roadmap />
      <Benefit />
      <Summary />
    </Layout>
  );
};

export default Index;
