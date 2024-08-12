import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Array of FAQs
const faqs = [
  {
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question: "How secure is the app?",
    answer: "We use industry-standard encryption to protect your data.",
  },
  {
    question: "Can I link multiple bank accounts?",
    answer: "Yes, you can link and manage multiple bank accounts within the app.",
  },
  {
    question: "What happens if I forget my password?",
    answer: "You can reset your password through the 'Forgot Password' link on the login page.",
  },
  {
    question: "Is there a mobile version of the app?",
    answer: "Yes, the app is fully responsive and available on both iOS and Android.",
  },
];

const FAQ = () => {
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg mt-16">
      <h2 className="text-3xl font-extrabold mb-6 text-center text-gray-800">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionTrigger className="text-xl font-semibold text-gray-700">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-base text-gray-600">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
