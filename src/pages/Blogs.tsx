import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/FloatingContact";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blogs = () => {
  const blogs = [
    {
      title: "Essential Prenatal Care: What Every Expecting Mother Should Know",
      excerpt: "Learn about the key checkups, tests, and lifestyle choices during pregnancy for a healthy journey.",
      author: "Dr. [Name]",
      date: "November 15, 2024",
      category: "Pregnancy Care",
    },
    {
      title: "Understanding Your Baby's Vaccination Schedule",
      excerpt: "A comprehensive guide to immunizations in the first year, covering what vaccines your baby needs and when.",
      author: "Dr. [Name]",
      date: "November 10, 2024",
      category: "Pediatrics",
    },
    {
      title: "Postpartum Recovery: Tips for New Mothers",
      excerpt: "Navigate the first weeks after delivery with practical advice on physical recovery and emotional wellbeing.",
      author: "Dr. [Name]",
      date: "November 5, 2024",
      category: "Maternity",
    },
    {
      title: "Common Childhood Illnesses: When to Worry and When to Wait",
      excerpt: "Help parents distinguish between minor ailments and signs that require immediate medical attention.",
      author: "Dr. [Name]",
      date: "October 28, 2024",
      category: "Pediatrics",
    },
    {
      title: "Breastfeeding Success: Overcoming Common Challenges",
      excerpt: "Practical solutions for the most common breastfeeding difficulties faced by new mothers.",
      author: "Dr. [Name]",
      date: "October 20, 2024",
      category: "Maternity",
    },
    {
      title: "High-Risk Pregnancy: What You Need to Know",
      excerpt: "Understanding conditions that make pregnancy high-risk and how specialized care can help ensure positive outcomes.",
      author: "Dr. [Name]",
      date: "October 15, 2024",
      category: "Pregnancy Care",
    },
  ];

  const categories = ["All", "Pregnancy Care", "Maternity", "Pediatrics", "Women's Health"];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-secondary to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-heading">
                Health Insights & Articles
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Expert advice, tips, and information to support you through pregnancy, 
                delivery, and your child's early years.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-background border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-6 py-2 rounded-full font-medium transition-smooth ${
                    index === 0
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blogs Grid */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-medium transition-smooth border-2 hover:border-primary/20 cursor-pointer"
                >
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {blog.category}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-heading group-hover:text-primary transition-smooth line-clamp-2">
                      {blog.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{blog.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{blog.date}</span>
                      </div>
                    </div>
                    <button className="text-primary font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-smooth">
                      Read More <ArrowRight className="h-4 w-4" />
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Blogs;
