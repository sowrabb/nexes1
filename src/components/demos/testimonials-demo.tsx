import { Testimonials } from "@/components/ui/testimonials"

const testimonials = [
  {
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3',
    text: 'The team delivered our iOS app 2 weeks ahead of schedule. Their attention to UX details and performance optimization exceeded our expectations. Highly recommend for enterprise mobile development.',
    name: 'Marcus Chen',
    username: 'CEO @ TechFlow Solutions',
    social: 'https://www.linkedin.com/in/marcus-chen'
  },
  {
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3',
    text: 'Our e-commerce app went from concept to App Store in just 3 months. The React Native development was flawless and the backend integration seamless. Sales increased 40% in the first quarter.',
    name: 'Sarah Mitchell',
    username: 'Founder @ EcoMarket',
    social: 'https://www.linkedin.com/in/sarah-mitchell'
  },
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3',
    text: 'Best development partner we\'ve worked with. They understood our complex fintech requirements and delivered a secure, scalable app that passed all regulatory audits on first try.',
    name: 'David Rodriguez',
    username: 'CTO @ FinanceFirst',
    social: 'https://www.linkedin.com/in/david-rodriguez'
  },
  {
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3',
    text: 'The healthcare app they built handles 10,000+ daily users flawlessly. HIPAA compliance, real-time chat, and telehealth features work perfectly. Our patients love the intuitive interface.',
    name: 'Dr. Emily Zhang',
    username: 'Medical Director @ HealthConnect',
    social: 'https://www.linkedin.com/in/dr-emily-zhang'
  },
  {
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3',
    text: 'Transformed our logistics operations with a custom fleet management app. Real-time GPS tracking, route optimization, and driver communication - everything we needed in one polished solution.',
    name: 'James Wilson',
    username: 'Operations Manager @ SwiftLogistics',
    social: 'https://www.linkedin.com/in/james-wilson'
  },
  {
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3',
    text: 'Our educational platform serves 50,000 students globally. The team built a robust LMS with video streaming, assessments, and progress tracking. Zero downtime since launch 8 months ago.',
    name: 'Lisa Park',
    username: 'VP Product @ EduTech Global',
    social: 'https://www.linkedin.com/in/lisa-park'
  },
  {
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3',
    text: 'Incredible work on our social fitness app. 100k+ downloads in first month, 4.8 star rating. The gamification features and social integrations are exactly what our users wanted.',
    name: 'Alex Thompson',
    username: 'Founder @ FitTogether',
    social: 'https://www.linkedin.com/in/alex-thompson'
  },
  {
    image: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3',
    text: 'They rebuilt our legacy CRM into a modern mobile-first solution. Data migration was seamless, new features improved team productivity by 35%. Best investment we\'ve made in years.',
    name: 'Rachel Kumar',
    username: 'COO @ SalesForce Pro',
    social: 'https://www.linkedin.com/in/rachel-kumar'
  },
  {
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3',
    text: 'Outstanding delivery of our restaurant management system. POS integration, inventory tracking, staff scheduling - all in one app. Reduced operational costs by 25% immediately.',
    name: 'Michael Foster',
    username: 'Owner @ Urban Bistro Chain',
    social: 'https://www.linkedin.com/in/michael-foster'
  },
  {
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3',
    text: 'The real estate app they developed features AR property tours, mortgage calculators, and agent chat. Our agents close deals 40% faster now. Truly innovative solution.',
    name: 'Jennifer Adams',
    username: 'Regional Director @ Premier Realty',
    social: 'https://www.linkedin.com/in/jennifer-adams'
  },
  {
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3',
    text: 'Perfect execution of our IoT dashboard app. Connects to 1000+ sensors, real-time analytics, predictive maintenance alerts. Manufacturing efficiency up 30% since deployment.',
    name: 'Robert Kim',
    username: 'Plant Manager @ AutoTech Industries',
    social: 'https://www.linkedin.com/in/robert-kim'
  },
  {
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&auto=format&fit=crop&ixlib=rb-4.0.3',
    text: 'Their travel booking app handles complex multi-city itineraries beautifully. Payment processing, seat selection, loyalty rewards - everything our customers need in a sleek package.',
    name: 'Amanda Taylor',
    username: 'Product Lead @ JetStream Travel',
    social: 'https://www.linkedin.com/in/amanda-taylor'
  }
];

export function TestimonialsDemo() {
  return (
    <div className="container py-10">
      <Testimonials 
        testimonials={testimonials}
        title="What Our Clients Say"
        description="Real feedback from businesses who trusted us to build their mobile and web applications."
      />
    </div>
  )
} 