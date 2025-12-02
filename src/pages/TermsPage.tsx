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

const TermsPage: React.FC = () => {
  return (
    <>
      <Header />
      <LegalPageContainer>
        <LegalHeroSection>
          <LegalTitle>Terms & Conditions</LegalTitle>
        </LegalHeroSection>

        <LegalContent>
          <LegalSection>
            <LegalSectionTitle>Agreement to Terms</LegalSectionTitle>
            <LegalParagraph>
              These Terms and Conditions ("Terms") constitute a legally binding agreement between you and {process.env.REACT_APP_COMPANY_NAME} 
              ("Company," "we," "us," or "our") concerning your access to and use of our services, including our website and 
              family & home benefits membership program.
            </LegalParagraph>
            <LegalParagraph>
              By accessing or using our services, you agree that you have read, understood, and agree to be bound by these Terms. 
              If you do not agree with these Terms, you must not access or use our services.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Services Description</LegalSectionTitle>
            <LegalParagraph>
              {process.env.REACT_APP_COMPANY_NAME} provides exclusive family and home benefits and membership services designed to help 
              members protect their homes, care for their families, and save on everyday expenses. Our services include:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Comprehensive home protection plans covering appliances, systems, and repairs</LegalListItem>
              <LegalListItem>Family care services including telehealth, prescription discounts, and wellness programs</LegalListItem>
              <LegalListItem>24/7 emergency assistance for home repairs and family support</LegalListItem>
              <LegalListItem>Identity theft protection, credit monitoring, and fraud resolution</LegalListItem>
              <LegalListItem>Legal consultations and document review services</LegalListItem>
              <LegalListItem>Exclusive shopping discounts and lifestyle benefits</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>User Accounts</LegalSectionTitle>
            <LegalParagraph>
              To access certain features of our services, you may be required to create an account. You agree to:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Provide accurate, current, and complete information during registration</LegalListItem>
              <LegalListItem>Maintain and promptly update your account information</LegalListItem>
              <LegalListItem>Maintain the security of your account credentials</LegalListItem>
              <LegalListItem>Accept responsibility for all activities that occur under your account</LegalListItem>
              <LegalListItem>Notify us immediately of any unauthorized access or security breach</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              We reserve the right to suspend or terminate your account if we believe you have violated these Terms or 
              engaged in fraudulent or illegal activities.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Membership Fees and Billing</LegalSectionTitle>
            <LegalParagraph>
              Our family & home benefits membership is provided on a subscription basis, as detailed in your membership agreement. 
              Billing terms include:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Membership fees are charged according to your selected membership plan</LegalListItem>
              <LegalListItem>Payments are processed through secure third-party payment processors</LegalListItem>
              <LegalListItem>Membership fees are billed in advance on a recurring basis</LegalListItem>
              <LegalListItem>Service requests and claims are processed according to your coverage plan</LegalListItem>
              <LegalListItem>Membership fees are non-refundable except as required by law or stated in our Refund Policy</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Acceptable Use</LegalSectionTitle>
            <LegalParagraph>
              You agree not to use our services for any unlawful or prohibited purpose. Prohibited activities include:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Violating any applicable laws, regulations, or third-party rights</LegalListItem>
              <LegalListItem>Transmitting malicious code, viruses, or harmful software</LegalListItem>
              <LegalListItem>Attempting to gain unauthorized access to our systems or networks</LegalListItem>
              <LegalListItem>Interfering with or disrupting the integrity or performance of our services</LegalListItem>
              <LegalListItem>Using our services to send spam, unsolicited communications, or fraudulent messages</LegalListItem>
              <LegalListItem>Impersonating any person or entity or misrepresenting your affiliation</LegalListItem>
              <LegalListItem>Collecting or harvesting personal information without consent</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Intellectual Property Rights</LegalSectionTitle>
            <LegalParagraph>
              All content, features, and functionality of our services, including but not limited to text, graphics, logos, 
              software, and trademarks, are owned by {process.env.REACT_APP_COMPANY_NAME} or our licensors and are protected 
              by copyright, trademark, and other intellectual property laws.
            </LegalParagraph>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              You are granted a limited, non-exclusive, non-transferable license to access and use our services for their 
              intended purpose. You may not:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Copy, modify, or create derivative works of our services or content</LegalListItem>
              <LegalListItem>Reverse engineer, decompile, or disassemble our software</LegalListItem>
              <LegalListItem>Remove or alter any copyright, trademark, or proprietary notices</LegalListItem>
              <LegalListItem>Use our services or content for commercial purposes without authorization</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Data Privacy and Security</LegalSectionTitle>
            <LegalParagraph>
              We are committed to protecting your privacy and the security of your data. Our collection, use, and disclosure 
              of personal information are governed by our Privacy Policy, which is incorporated into these Terms by reference.
            </LegalParagraph>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              By using our services, you acknowledge and agree that we may collect, process, and store your data as described 
              in our Privacy Policy and Data Processing Agreement.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Service Availability and Modifications</LegalSectionTitle>
            <LegalParagraph>
              We strive to maintain high availability of our services but do not guarantee uninterrupted or error-free operation. 
              We reserve the right to:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Modify, suspend, or discontinue any aspect of our services at any time</LegalListItem>
              <LegalListItem>Perform scheduled maintenance and updates with or without notice</LegalListItem>
              <LegalListItem>Change these Terms at any time by posting updated Terms on our website</LegalListItem>
              <LegalListItem>Change our pricing, features, or service offerings with reasonable notice</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Continued use of our services after any modifications constitutes acceptance of the revised Terms.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Limitation of Liability</LegalSectionTitle>
            <LegalParagraph>
              To the maximum extent permitted by law, {process.env.REACT_APP_COMPANY_NAME} and its officers, directors, 
              employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive 
              damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Your access to or use of or inability to access or use our services</LegalListItem>
              <LegalListItem>Any conduct or content of any third party on our services</LegalListItem>
              <LegalListItem>Unauthorized access, use, or alteration of your transmissions or content</LegalListItem>
              <LegalListItem>Statements or conduct of any third party on our services</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Our total liability for any claims arising from or related to these Terms or our services shall not exceed 
              the amount you paid to us in the twelve (12) months preceding the claim.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Indemnification</LegalSectionTitle>
            <LegalParagraph>
              You agree to defend, indemnify, and hold harmless {process.env.REACT_APP_COMPANY_NAME} and its affiliates, 
              officers, directors, employees, contractors, and agents from and against any claims, liabilities, damages, 
              losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Your access to or use of our services</LegalListItem>
              <LegalListItem>Your violation of these Terms</LegalListItem>
              <LegalListItem>Your violation of any third-party rights, including intellectual property or privacy rights</LegalListItem>
              <LegalListItem>Any content or information you submit or transmit through our services</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Dispute Resolution and Governing Law</LegalSectionTitle>
            <LegalParagraph>
              These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming, 
              United States, without regard to its conflict of law provisions.
            </LegalParagraph>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Any disputes arising from or relating to these Terms or our services shall be resolved through binding 
              arbitration in accordance with the rules of the American Arbitration Association, except that either party 
              may seek injunctive or equitable relief in a court of competent jurisdiction.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Termination</LegalSectionTitle>
            <LegalParagraph>
              Either party may terminate this agreement at any time:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>You may cancel your account through your account settings or by contacting support</LegalListItem>
              <LegalListItem>We may terminate or suspend your account immediately for violation of these Terms</LegalListItem>
              <LegalListItem>We may terminate your account with 30 days' notice for any reason</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Upon termination, your right to use our services will immediately cease. Provisions that by their nature 
              should survive termination shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Contact Information</LegalSectionTitle>
            <LegalParagraph>
              For questions about these Terms, please contact us:
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

export default TermsPage;
