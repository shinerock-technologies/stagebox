import Nav from "@/components/Nav";
import HeroAlt from "@/components/HeroAlt";
import HeroSecondaryAltAlt from "@/components/HeroSecondaryAltAlt";
import Intro from "@/components/Intro";
import ComparisonTables from "@/components/ComparisonTables";
import Features from "@/components/Features";
import TestersTestimonials from "@/components/TestersTestimonials";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import data from "@/data/data.json";
import Script from "next/script";

export default function Home() {
  const sections = data.sections.reduce(
    (acc, section) => {
      acc[section.id] = section;
      return acc;
    },
    {} as Record<string, any>
  );

  return (
    <>
      <Script
        id="prefetch-hero-iframe"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            // Prefetch hero iframe to start loading immediately
            const link = document.createElement('link');
            link.rel = 'prefetch';
            link.href = 'https://timer-pro-sandy.vercel.app/room/demo?demoTime=100&timerId=timer-3&playing=true';
            link.as = 'document';
            document.head.appendChild(link);
          `,
        }}
      />
      <main
        className="min-h-screen"
        style={{ backgroundColor: "rgb(20, 20, 20)" }}>
        <Nav
          brand={data.brand}
          ctaText={data.hero_cta_primary}
          ctaUrl={data.hero_cta_primary_redirect_url}
        />
        <HeroAlt
          brand={data.brand}
          headline={data.headline}
          subheadline={data.subheadline}
          ctaPrimary={data.hero_cta_primary}
          ctaSecondary={data.hero_cta_secondary}
          redirectUrlPrimary={data.hero_cta_primary_redirect_url}
          redirectUrlSecondary={data.hero_cta_secondary_redirect_url}
          iframeUrl="https://timer-pro-sandy.vercel.app/room/demo?demoTime=100&timerId=timer-3&playing=true"
          imageUrl={data.hero_image_url}
        />
        <HeroSecondaryAltAlt
          colorIndex={0}
          label={data.hero_secondary.label}
          title={data.hero_secondary.title}
          description={data.hero_secondary.description}
          ctaText={data.hero_secondary.cta_text}
          ctaUrl={data.hero_secondary.cta_url}
          ipadUrl="https://timer-pro-sandy.vercel.app/display?room=demo&clock=false&agenda=true&messages=false"
          iphoneUrl="https://timer-pro-sandy.vercel.app/display?room=demo&clock=true&agenda=false&messages=false"
        />
        <Intro colorIndex={1} data={sections.intro} />
        <ComparisonTables colorIndex={2} data={sections.comparison_tables} />
        <Features colorIndex={3} data={sections.features} />

        <TestersTestimonials
          colorIndex={4}
          data={sections.testers_testimonials}
        />
        <CTASection colorIndex={5} data={sections.cta_section} />
        <FAQ colorIndex={6} data={sections.faq} />
        <Footer data={data.footer} />
      </main>
    </>
  );
}
