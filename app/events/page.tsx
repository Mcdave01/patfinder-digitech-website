import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EventsSection from '@/components/EventsSection';

export const metadata = {
  title: 'Events - PathFinder DigiTech',
  description: 'See our upcoming, latest, and previous events.',
};

export const revalidate = 60;

export default function EventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="section-spacing bg-gradient-to-br from-white via-[hsl(var(--muted))] to-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="heading-lg mb-6">Events</h1>
              <p className="subheading mx-auto">
                Stay in the loop with what we&apos;ve been up to and what&apos;s coming next.
              </p>
            </div>
          </div>
        </section>

        <EventsSection title="Latest Event" category="latest" />
        <EventsSection
          title="Upcoming Events"
          category="upcoming"
          emptyMessage="No upcoming events right now — check back soon!"
        />
        <EventsSection title="Previous Events" category="previous" />
      </main>
      <Footer />
    </div>
  );
}
