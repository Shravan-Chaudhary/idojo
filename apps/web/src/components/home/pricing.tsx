"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Section } from "@/components/shared/section";
import { Heading } from "@/components/shared/heading";
import { Description } from "@/components/shared/description";
import { GradientBackground } from "@/components/shared/gradient-background";
import { PricingCard } from "@/components/shared/pricing-card";
import { PricingTierData } from "@/types/components";
import { fadeUp, fadeIn, stagger, smooth } from "@/lib/animations";

export function Pricing() {
  const tiers: PricingTierData[] = [
    {
      name: "Free",
      description: "Perfect for beginners to practice interviewing.",
      price: "$0",
      priceDetail: "forever",
      features: [
        "2 interview sessions per month",
        "Basic interview templates",
        "Text-based Q&A format",
        "Standard AI feedback",
        "Interview history (7 days)",
      ],
      buttonText: "Get Started",
      buttonVariant: "outline",
    },
    {
      name: "Pro",
      description: "For job seekers actively interviewing.",
      price: "$19",
      priceDetail: "per month",
      features: [
        "Unlimited interview sessions",
        "20+ industry-specific templates",
        "Advanced AI conversation",
        "Detailed performance analytics",
        "Interview history (unlimited)",
        "Custom interview scenarios",
        "Export transcripts & summaries",
      ],
      buttonText: "Start 7-Day Free Trial",
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "Team",
      description: "For career coaches and teams.",
      price: "$49",
      priceDetail: "per month",
      features: [
        "Everything in Pro",
        "Team management dashboard",
        "5 team member accounts",
        "Progress tracking",
        "Custom branding",
        "Interview sharing & feedback",
        "API access",
        "Priority support",
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline",
    },
  ];

  return (
    <Section
      variant="default"
      background="subtle"
      className="relative overflow-hidden bg-gradient-to-br from-gray-50/30 to-green-50/20 dark:from-slate-900 dark:to-green-900/10"
      id="pricing"
    >
      <GradientBackground variant="section" className="absolute inset-0" />

      {/* Decorative background elements */}
      <motion.div
        className="absolute inset-0 -z-10 overflow-hidden"
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="absolute w-[40rem] h-[40rem] rounded-full bg-green-800/5 dark:bg-green-400/5 -top-[10rem] -right-[10rem] blur-3xl"
          animate={{
            x: [0, -20, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
        <motion.div
          className="absolute w-[30rem] h-[30rem] rounded-full bg-emerald-800/5 dark:bg-emerald-400/5 top-[30rem] -left-[10rem] blur-3xl"
          animate={{
            x: [0, 25, 0],
            y: [0, -15, 0],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        ></motion.div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center opacity-[0.02] dark:opacity-[0.01] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:[mask-image:linear-gradient(180deg,black,rgba(0,0,0,0))]"></div>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10"
      >
        <motion.div
          className="flex flex-col items-center text-center mb-16 md:mb-20"
          variants={fadeUp}
        >
          <Heading
            level={2}
            size="3xl"
            align="center"
            variant="section"
            className="mb-6"
          >
            Simple,{" "}
            <span className="text-green-700 dark:text-green-400">
              Transparent
            </span>{" "}
            Pricing
          </Heading>
          <Description
            variant="section"
            align="center"
            size="xl"
            maxWidth="2xl"
          >
            Choose the plan that&apos;s right for you. All plans include a 7-day
            free trial.
          </Description>
        </motion.div>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {tiers.map((tier, index) => (
            <motion.div key={tier.name} variants={fadeUp}>
              <PricingCard tier={tier} index={index} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              ease: smooth,
              delay: 0.2,
            },
          }}
          viewport={{ once: true }}
        >
          <Heading level={3} size="xl" align="center" className="mb-4">
            Need something different?
          </Heading>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed mb-6">
            We offer custom plans for larger teams and organizations. Contact
            our sales team to create a plan tailored to your specific needs.
          </p>
          <Button
            variant="outline"
            className="hover:bg-green-50 dark:hover:bg-green-950/30 border-green-200 dark:border-green-700/50 hover:border-green-300 dark:hover:border-green-600"
            asChild
          >
            <Link href="/contact">Contact Sales</Link>
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
}
