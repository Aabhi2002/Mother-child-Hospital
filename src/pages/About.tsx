import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Heart, Users, Award, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-secondary to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
                Our Story: Three Decades of Care
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                What began as a small maternity clinic has grown into a trusted healthcare institution, 
                serving generations of families with compassion and excellence.
              </p>
            </div>
          </div>
        </section>

        {/* Our Legacy */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-heading">
                Our Legacy
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Founded over 30 years ago by Dr. [Name], Mother & Child Hospital began with a simple mission: 
                  to provide safe, compassionate maternity care to women in our community. In an era when healthcare 
                  options were limited, Dr. [Name] envisioned a place where every mother would feel supported, 
                  respected, and cared for during one of life's most significant moments.
                </p>
                <p>
                  Over the decades, we've had the privilege of welcoming thousands of babies into the world. 
                  We've celebrated with families, supported them through challenges, and built relationships 
                  that span generations. Many of the babies we delivered are now bringing their own children 
                  to us — a testament to the trust we've earned over the years.
                </p>
                <p>
                  Our hospital has always been more than just a medical facility. It's been a pillar of the 
                  community, a place where families know they'll find not just medical expertise, but genuine 
                  care and understanding.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Evolution */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 font-heading">
                Our Evolution: Adding Pediatric Care
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  As we watched the children we delivered grow, a natural question emerged: Why should families 
                  have to go elsewhere for their child's healthcare needs? The trust they placed in us during 
                  pregnancy and delivery shouldn't end when the baby is born.
                </p>
                <p>
                  This realization led to the expansion of our services to include comprehensive pediatric care. 
                  Today, we offer everything from routine checkups and vaccinations to developmental monitoring 
                  and specialized pediatric consultations. The same hands that helped bring your child into the 
                  world can now care for them as they grow.
                </p>
                <p>
                  This evolution represents our commitment to complete family care — supporting not just mothers, 
                  but entire families through every stage of their journey.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center font-heading">
                Our Values
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8 rounded-2xl bg-card shadow-soft border-2 hover:border-primary/20 transition-smooth">
                  <Heart className="h-12 w-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-3 font-heading">Compassion</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every patient is treated with warmth, respect, and understanding. We recognize that 
                    behind every medical case is a person with hopes, fears, and dreams.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-card shadow-soft border-2 hover:border-primary/20 transition-smooth">
                  <Award className="h-12 w-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-3 font-heading">Excellence</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We maintain the highest standards of medical care, continuously updating our knowledge 
                    and skills to provide the best possible outcomes.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-card shadow-soft border-2 hover:border-primary/20 transition-smooth">
                  <Users className="h-12 w-12 text-success mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-3 font-heading">Community</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We're not just a hospital; we're part of the community fabric. Building long-term 
                    relationships with families is at the heart of what we do.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-card shadow-soft border-2 hover:border-primary/20 transition-smooth">
                  <TrendingUp className="h-12 w-12 text-coral mb-4" />
                  <h3 className="text-2xl font-bold text-foreground mb-3 font-heading">Continuity</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    From preconception to pediatrics, we offer seamless care throughout your family's 
                    healthcare journey, ensuring consistency and familiarity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
