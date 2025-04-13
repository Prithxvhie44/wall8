import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  featuresData,
  howItWorksData,
  statsData,
  testimonialsData,
} from "@/data/landing";
import HeroSection from "@/components/hero";
import Link from "next/link";

const LandingPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-b from-white to-blue-50/70">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="group perspective">
                <div className="relative preserve-3d duration-500 group-hover:rotate-y-180 h-[200px]">
                  {/* Front of card */}
                  <div className="absolute inset-0 backface-hidden">
                    <div className="h-full bg-white rounded-2xl p-6 shadow-md flex flex-col items-center justify-center">
                      <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
                        {stat.value}
                      </div>
                      <div className="text-gray-600 font-medium text-center">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                  
                  {/* Back of card */}
                  <div className="absolute inset-0 rotate-y-180 backface-hidden">
                    <div className="h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 shadow-md flex items-center justify-center">
                      <p className="text-white text-center text-sm font-medium">
                        {index === 0 && "Join our active community of financial enthusiasts making smarter decisions every day"}
                        {index === 1 && "Every transaction tracked is a step towards better financial awareness"}
                        {index === 2 && "Smart budgeting leads to financial freedom - start your journey today"}
                        {index === 3 && "Your financial goals are achievable with the right tools and insights"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join our growing community of users who trust Wall8 for their financial management
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative py-32 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Revolutionize Your Finances
          </h2>
          <p className="text-gray-600 text-center mb-24 max-w-2xl mx-auto text-lg">
            Discover the tools that will transform your financial future
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {featuresData.map((feature, index) => (
              <div key={index} className="relative bg-white rounded-lg shadow-md p-6 transition-transform duration-300 hover:scale-105 overflow-hidden">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-110">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-center mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
                {/* Optional overlay for creative effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600 to-transparent opacity-20"></div>
              </div>
            ))}
          </div>

          <div className="mt-32 text-center animate-float">
            <Link href="/dashboard">
              <Button className="bg-blue-600 text-white hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                Explore More Features
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorksData.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-4">
                  <div className="flex items-center mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div className="ml-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600">{testimonial.quote}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already managing their finances
            smarter with Wall8
          </p>
          <Link href="/dashboard">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 animate-bounce"
            >
              Start Free Trial
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;