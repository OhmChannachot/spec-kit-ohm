import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    id: "faq-1",
    question: "How many days are ideal?",
    answer:
      "Plan for 3 to 5 days to capture the main neighborhoods and a day trip.",
  },
  {
    id: "faq-2",
    question: "Is this destination family-friendly?",
    answer:
      "Yes. Families should focus on slower-paced neighborhoods and morning activities.",
  },
  {
    id: "faq-3",
    question: "When should I book accommodations?",
    answer:
      "Book 6 to 8 weeks ahead for peak seasons to secure boutique stays.",
  },
];

export function DestinationFaq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {faqItems.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>{item.question}</AccordionTrigger>
          <AccordionContent className="text-sm text-neutral-600">
            {item.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
