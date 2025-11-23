"use client";

import { useState } from "react";

export default function FAQPage() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Traamp?",
      answer:
        "Traamp is a travel companion platform that helps tourists discover destinations, connect with local guides, explore hidden spots, and have safer and smarter journeys.",
    },
    {
      question: "Is Traamp free to use?",
      answer:
        "Yes! Traamp is completely free to explore. Premium features for guides and businesses may be added in the future.",
    },
    {
      question: "How does the location feature work?",
      answer:
        "Traamp uses your device's location permission to suggest nearby attractions, restaurants, and verified guides. Your data is processed securely and never sold.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can reach us through the contact page or by emailing infotraamp@gmail.com.",
    },
    {
      question: "Is my data safe?",
      answer:
        "Absolutely. Your privacy and safety are our top priority. We follow industry-standard security practices. Read more in our Privacy Policy.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-lg">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Find answers to common questions about Traamp and our features.
        </p>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-4 cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-gray-800 text-lg">
                  {faq.question}
                </h3>
                <span className="text-xl font-bold text-gray-500">
                  {openQuestion === index ? "−" : "+"}
                </span>
              </div>

              {openQuestion === index && (
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
