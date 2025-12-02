import React, { useState } from 'react';
import {
  FAQContainer,
  FAQContent,
  FAQTitle,
  FAQDescription,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  FAQIcon
} from '../styles/FAQSection.styles';

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What services are included with membership?',
      answer: 'Members receive comprehensive home appliance and system coverage, full telehealth and prescription discount programs, 24/7 emergency support services, identity theft protection and monitoring, professional legal consultations, and exclusive discounts at thousands of retail partners nationwide.'
    },
    {
      question: 'When can I start using my benefits?',
      answer: 'Your membership portal becomes accessible immediately after completing registration. Browse available services, select the ones matching your household needs, and begin utilizing benefits instantly. Discounts and coverage automatically apply when using our verified provider network.'
    },
    {
      question: 'Are there any coverage waiting periods?',
      answer: 'Most benefits activate immediately upon enrollment. Home appliance protection may include a standard 30-day waiting period for pre-existing conditions only. All coverage details, terms, and limitations are clearly outlined in your membership documentation with complete transparency.'
    },
    {
      question: 'Can my entire family use the benefits?',
      answer: 'Yes! Your membership extends complete coverage to all household residents. Medical services, home protection, and identity monitoring cover everyone in your home. Retail discounts and lifestyle perks are available to each family member listed on the membership account.'
    },
    {
      question: 'What types of home repairs are covered?',
      answer: 'Coverage includes major appliances such as refrigerators, washers, and dryers, plus HVAC systems, plumbing networks, electrical systems, and more. Emergency repairs receive priority response with no service call fees for all covered items under your protection plan.'
    },
    {
      question: 'How much can I realistically save?',
      answer: 'Average members save between $2,500-$4,500 annually through repair coverage, prescription savings, retail discounts, and lifestyle benefits combined. A single major appliance repair can save $600-$1,800 alone, while medication programs often cover the full annual membership cost.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQContainer id="faq">
      <FAQContent>
        <FAQTitle>Frequently Asked Questions</FAQTitle>
        <FAQDescription>
          Everything you need to know about our elite family and home membership program
        </FAQDescription>
        <FAQList>
          {faqs.map((faq, index) => (
            <FAQItem key={index} $isOpen={openIndex === index}>
              <FAQQuestion onClick={() => toggleFAQ(index)}>
                {faq.question}
                <FAQIcon $isOpen={openIndex === index}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                  </svg>
                </FAQIcon>
              </FAQQuestion>
              <FAQAnswer $isOpen={openIndex === index}>
                {faq.answer}
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQList>
      </FAQContent>
    </FAQContainer>
  );
};

export default FAQSection;
