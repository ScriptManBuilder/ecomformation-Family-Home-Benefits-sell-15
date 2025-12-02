import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
  LegalPageContainer,
  LegalHeroSection,
  LegalTitle,
  LegalContent,
  LegalSection,
  LegalSectionTitle,
  LegalParagraph,
  LegalList,
  LegalListItem
} from '../styles/LegalPages.styles';

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Header />
      <LegalPageContainer>
        <LegalHeroSection>
          <LegalTitle>Privacy Policy</LegalTitle>
        </LegalHeroSection>

        <LegalContent>
          <LegalSection>
            <LegalSectionTitle>Introduction</LegalSectionTitle>
            <LegalParagraph>
              {process.env.REACT_APP_COMPANY_NAME} ("we," "us," or "our") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use 
              our family & home benefits membership services and visit our website.
            </LegalParagraph>
            <LegalParagraph>
              By using our services, you consent to the data practices described in this policy. If you do not agree 
              with this Privacy Policy, please do not use our services.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Information We Collect</LegalSectionTitle>
            <LegalParagraph>
              We collect several types of information to provide and improve our services:
            </LegalParagraph>
            
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1.5rem' }}>
              Personal Information
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Contact Information:</strong> Name, email address, phone number, business address</LegalListItem>
              <LegalListItem><strong>Account Information:</strong> Username, password, account preferences</LegalListItem>
              <LegalListItem><strong>Business Information:</strong> Company name, business type, tax identification number</LegalListItem>
              <LegalListItem><strong>Financial Information:</strong> Payment card details, bank account information, service transaction history</LegalListItem>
            </LegalList>

            <LegalParagraph style={{ fontWeight: 600, marginTop: '1.5rem' }}>
              Member and Service Data
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Service Claims:</strong> Home protection requests, family care appointments, service history, claim status</LegalListItem>
              <LegalListItem><strong>Family Information:</strong> Household member names, emergency contacts, service preferences, special requirements</LegalListItem>
              <LegalListItem><strong>Communication Records:</strong> Email correspondence, support tickets, service confirmations</LegalListItem>
            </LegalList>

            <LegalParagraph style={{ fontWeight: 600, marginTop: '1.5rem' }}>
              Technical Information
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Device Information:</strong> IP address, browser type, operating system, device identifiers</LegalListItem>
              <LegalListItem><strong>Usage Data:</strong> Pages visited, features used, time spent, click patterns</LegalListItem>
              <LegalListItem><strong>Cookies and Tracking:</strong> Session cookies, analytics cookies, preference cookies</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>How We Use Your Information</LegalSectionTitle>
            <LegalParagraph>
              We use the collected information for various purposes:
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Service Delivery:</strong> Process service claims, send service confirmations, manage appointments and repairs</LegalListItem>
              <LegalListItem><strong>Account Management:</strong> Create and maintain your membership account, authenticate users, provide support</LegalListItem>
              <LegalListItem><strong>Communication:</strong> Send service updates, benefit notifications, exclusive offers, membership benefits</LegalListItem>
              <LegalListItem><strong>Analytics:</strong> Analyze service patterns, improve service performance, develop new family benefit features</LegalListItem>
              <LegalListItem><strong>Compliance:</strong> Comply with legal obligations, prevent fraud, enforce our terms</LegalListItem>
              <LegalListItem><strong>Marketing:</strong> Send promotional benefits deals, personalize content, conduct market research</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>How We Share Your Information</LegalSectionTitle>
            <LegalParagraph>
              We may share your information with third parties in the following circumstances:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Service Providers:</strong> Home repair technicians, healthcare providers, identity protection services, payment processors, email service providers, 
                analytics platforms, cloud hosting providers who assist in delivering our family & home benefits services
              </LegalListItem>
              <LegalListItem>
                <strong>Business Partners:</strong> Service providers, warranty companies, telehealth platforms, and integration partners 
                with whom you've authorized data sharing
              </LegalListItem>
              <LegalListItem>
                <strong>Legal Requirements:</strong> Law enforcement, regulatory authorities, or courts when required 
                by law or to protect our rights
              </LegalListItem>
              <LegalListItem>
                <strong>Business Transfers:</strong> Potential buyers or investors in the event of a merger, acquisition, 
                or sale of assets
              </LegalListItem>
              <LegalListItem>
                <strong>With Your Consent:</strong> Other third parties when you have given explicit consent to share 
                your information
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              We do not sell your personal information to third parties for their marketing purposes.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Data Security</LegalSectionTitle>
            <LegalParagraph>
              We implement appropriate technical and organizational security measures to protect your information:
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Encryption:</strong> SSL/TLS encryption for data in transit, AES-256 encryption for data at rest</LegalListItem>
              <LegalListItem><strong>Access Controls:</strong> Role-based access, multi-factor authentication, regular access reviews</LegalListItem>
              <LegalListItem><strong>Network Security:</strong> Firewalls, intrusion detection systems, regular security audits</LegalListItem>
              <LegalListItem><strong>Monitoring:</strong> 24/7 security monitoring, incident response procedures</LegalListItem>
              <LegalListItem><strong>Compliance:</strong> PCI-DSS compliance for payment data, SOC 2 certification</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              However, no method of transmission over the Internet is 100% secure. While we strive to protect your 
              information, we cannot guarantee absolute security.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Data Retention</LegalSectionTitle>
            <LegalParagraph>
              We retain your information for as long as necessary to fulfill the purposes outlined in this Privacy Policy:
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Active Accounts:</strong> Account and transaction data retained while your account is active</LegalListItem>
              <LegalListItem><strong>Closed Accounts:</strong> Data retained for 7 years after account closure for legal and compliance purposes</LegalListItem>
              <LegalListItem><strong>Transaction Records:</strong> Financial records retained for 10 years as required by law</LegalListItem>
              <LegalListItem><strong>Marketing Data:</strong> Deleted within 3 years of last interaction or upon opt-out request</LegalListItem>
              <LegalListItem><strong>Anonymized Data:</strong> May be retained indefinitely for analytics and research</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Your Privacy Rights</LegalSectionTitle>
            <LegalParagraph>
              Depending on your location, you may have the following rights regarding your personal information:
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Access:</strong> Request a copy of the personal information we hold about you</LegalListItem>
              <LegalListItem><strong>Correction:</strong> Request correction of inaccurate or incomplete information</LegalListItem>
              <LegalListItem><strong>Deletion:</strong> Request deletion of your personal information, subject to legal requirements</LegalListItem>
              <LegalListItem><strong>Portability:</strong> Receive your data in a structured, machine-readable format</LegalListItem>
              <LegalListItem><strong>Restriction:</strong> Request limitation on how we process your information</LegalListItem>
              <LegalListItem><strong>Objection:</strong> Object to processing of your information for certain purposes</LegalListItem>
              <LegalListItem><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</LegalListItem>
              <LegalListItem><strong>Withdraw Consent:</strong> Withdraw previously given consent for data processing</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              To exercise these rights, please contact us using the information provided at the end of this policy.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Cookies and Tracking Technologies</LegalSectionTitle>
            <LegalParagraph>
              We use cookies and similar tracking technologies to enhance your experience:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Essential Cookies:</strong> Required for basic site functionality, authentication, and security
              </LegalListItem>
              <LegalListItem>
                <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website
              </LegalListItem>
              <LegalListItem>
                <strong>Functional Cookies:</strong> Remember your preferences and settings
              </LegalListItem>
              <LegalListItem>
                <strong>Marketing Cookies:</strong> Track visitor activity to deliver relevant advertisements
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              You can control cookie preferences through your browser settings. Note that disabling cookies may affect 
              the functionality of our services.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Third-Party Links</LegalSectionTitle>
            <LegalParagraph>
              Our website may contain links to third-party websites and services. We are not responsible for the privacy 
              practices or content of these external sites. We encourage you to review the privacy policies of any 
              third-party sites you visit.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Children's Privacy</LegalSectionTitle>
            <LegalParagraph>
              Our services are not intended for individuals under the age of 18. We do not knowingly collect personal 
              information from children. If we become aware that we have collected information from a child without 
              parental consent, we will take steps to delete that information.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>International Data Transfers</LegalSectionTitle>
            <LegalParagraph>
              Your information may be transferred to and processed in countries other than your country of residence. 
              These countries may have different data protection laws. We ensure appropriate safeguards are in place 
              to protect your information in accordance with this Privacy Policy and applicable laws.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Changes to This Privacy Policy</LegalSectionTitle>
            <LegalParagraph>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. 
              We will notify you of material changes by:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Posting the updated policy on our website with a new "Last Updated" date</LegalListItem>
              <LegalListItem>Sending an email notification to your registered email address</LegalListItem>
              <LegalListItem>Displaying a prominent notice on our website or dashboard</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Your continued use of our services after any changes indicates your acceptance of the updated Privacy Policy.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Contact Us</LegalSectionTitle>
            <LegalParagraph>
              If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1rem' }}>
              {process.env.REACT_APP_COMPANY_NAME}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600 }}>
              {process.env.REACT_APP_COMPANY_ADDRESS}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600 }}>
              Email: {process.env.REACT_APP_EMAIL_SUPPORT}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600 }}>
              Phone: {process.env.REACT_APP_PHONE_DISPLAY}
            </LegalParagraph>
            <LegalParagraph style={{ marginTop: '1.5rem', fontSize: '0.875rem', color: '#5a6c7d' }}>
              Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </LegalParagraph>
          </LegalSection>
        </LegalContent>
      </LegalPageContainer>
      <Footer />
    </>
  );
};

export default PrivacyPage;
