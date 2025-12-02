import React, { useState } from 'react';
import {
  SupportContainer,
  SupportHero,
  HeroContent,
  HeroTitle,
  HeroDescription,
  HeroImageWrapper,
  HeroImage,
  ContactInfo,
  PhoneNumber,
  PhoneIcon,
  AvailabilityText,
  ActionButtons,
  ActionButton,
  HelpSection,
  HelpTitle,
  HelpSubtitle,
  HelpGrid,
  HelpCard,
  HelpIcon,
  HelpCardTitle,
  HelpCardDescription,
  FAQSection,
  FAQSectionTitle,
  FAQSectionDescription,
  FAQList,
  FAQItem,
  FAQQuestion,
  FAQAnswer,
  FAQIcon
} from '../styles/SupportPage.styles';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SupportPage: React.FC = () => {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How do I activate my family benefits membership?',
      answer: 'Simply log into your member portal and complete your profile. You can immediately access home protection services, family care benefits, and shopping discounts. For service requests, use our 24/7 support hotline.'
    },
    {
      question: 'What family and home benefits are included in my membership?',
      answer: 'Your membership includes home protection for appliances and systems, family care services with telehealth and prescription discounts, 24/7 emergency assistance, identity theft protection, legal consultations, and exclusive shopping discounts at major retailers.'
    },
    {
      question: 'Can my entire family use the benefits?',
      answer: 'Absolutely! All benefits extend to your entire household. Family care services, home protection, and identity theft protection cover everyone living at your residence. All family members can use the shopping and lifestyle perks.'
    },
    {
      question: 'How do I file a home protection claim?',
      answer: 'You can file claims 24/7 through your member portal or by calling our support line. A service technician will be dispatched to assess and repair covered items. Most emergency repairs receive same-day or next-day service.'
    },
    {
      question: 'What if I need to cancel or modify my membership?',
      answer: 'You can modify or cancel your membership anytime through your member portal. Our support team is available 24/7 to assist with changes. Refer to our refund policy for details on cancellations and pro-rated refunds.'
    },
    {
      question: 'Is there a customer service line I can call anytime?',
      answer: 'Yes! Our family support team is available 24/7 at the number listed above. Whether you need help with a home repair, have questions about your benefits, or need emergency assistance, we\'re always here to help.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  const helpTopics = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      title: 'Membership & Enrollment',
      description: 'Help with signing up and activating your family benefits membership'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
        </svg>
      ),
      title: 'Home Protection',
      description: 'Support with home warranty claims, repairs, and service requests'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
      ),
      title: 'Family Care Services',
      description: 'Questions about telehealth, prescriptions, and wellness programs'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </svg>
      ),
      title: 'Emergency Assistance',
      description: 'Priority help with urgent home repairs and family emergencies'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
        </svg>
      ),
      title: 'Billing & Payments',
      description: 'Questions about membership fees, charges, and payment methods'
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
        </svg>
      ),
      title: 'Identity Protection',
      description: 'Information about credit monitoring, fraud alerts, and security'
    }
  ];

  const handleEmailClick = () => {
    window.location.href = `mailto:${process.env.REACT_APP_EMAIL_SUPPORT}`;
  };

  const handleContactClick = () => {
    window.location.href = '/#contact';
  };

  return (
    <>
      <Header />
      <SupportContainer>
        <SupportHero>
          <div>
            <HeroImageWrapper>
              <HeroImage src="/heroSupport3.png" alt="Customer Support" />
            </HeroImageWrapper>
            <HeroContent>
              <HeroTitle>Family Benefits Customer Support</HeroTitle>
              <HeroDescription>Need help with your family and home benefits? We're here for you 24/7.</HeroDescription>
            
            <ContactInfo>
              <PhoneIcon>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </PhoneIcon>
              <div>
                <PhoneNumber>{process.env.REACT_APP_PHONE_DISPLAY}</PhoneNumber>
                <AvailabilityText>Available 24/7 - Call Anytime for Family Support</AvailabilityText>
              </div>
            </ContactInfo>
            
            <ActionButtons>
              <ActionButton onClick={handleEmailClick}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Email Family Support
              </ActionButton>
              {/* <ActionButton onClick={handleContactClick}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                </svg>
                Chat with Specialist
              </ActionButton> */}
              <ActionButton onClick={handleContactClick}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"/>
                </svg>
                Member Support
              </ActionButton>
            </ActionButtons>
          </HeroContent>
          </div>
        </SupportHero>
        
        <HelpSection>
          <HelpTitle>How Can We Help Your Family Today?</HelpTitle>
          <HelpSubtitle>Choose a topic below to get instant support from our expert family benefits team</HelpSubtitle>
          <HelpGrid>
            {helpTopics.map((topic, index) => (
              <HelpCard key={index} onClick={handleContactClick} style={{ cursor: 'pointer' }}>
                <HelpIcon>{topic.icon}</HelpIcon>
                <HelpCardTitle>{topic.title}</HelpCardTitle>
                <HelpCardDescription>{topic.description}</HelpCardDescription>
              </HelpCard>
            ))}
          </HelpGrid>
        </HelpSection>

        <FAQSection>
          <FAQSectionTitle>Frequently Asked Questions</FAQSectionTitle>
          <FAQSectionDescription>Quick answers to common family benefits membership questions</FAQSectionDescription>
          <FAQList>
            {faqs.map((faq, index) => (
              <FAQItem key={index}>
                <FAQQuestion onClick={() => toggleFAQ(index)} $isOpen={openFAQIndex === index}>
                  <span>{faq.question}</span>
                  <FAQIcon $isOpen={openFAQIndex === index}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 10l5 5 5-5z"/>
                    </svg>
                  </FAQIcon>
                </FAQQuestion>
                {openFAQIndex === index && (
                  <FAQAnswer>
                    {faq.answer}
                    <div style={{ marginTop: '1rem' }}>
                      <ActionButton 
                        onClick={handleContactClick} 
                        style={{ 
                          fontSize: '0.9rem', 
                          padding: '0.6rem 1.25rem',
                          display: 'inline-flex'
                        }}
                      >
                        Contact Family Support
                      </ActionButton>
                    </div>
                  </FAQAnswer>
                )}
              </FAQItem>
            ))}
          </FAQList>
        </FAQSection>
      </SupportContainer>
      <Footer />
    </>
  );
};

export default SupportPage;
