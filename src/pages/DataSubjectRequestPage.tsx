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

const DataSubjectRequestPage: React.FC = () => {
  return (
    <>
      <Header />
      <LegalPageContainer>
        <LegalHeroSection>
          <LegalTitle>Data Subject Request Form</LegalTitle>
        </LegalHeroSection>

        <LegalContent>
          <LegalSection>
            <LegalSectionTitle>Your Privacy Rights</LegalSectionTitle>
            <LegalParagraph>
              {process.env.REACT_APP_COMPANY_NAME} respects your privacy rights under applicable data protection laws. 
              This form allows you to exercise your rights regarding your personal information.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Available Rights</LegalSectionTitle>
            <LegalParagraph>
              Depending on your location and applicable laws, you may have the following rights:
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Right to Access:</strong> Request a copy of the personal information we hold about you</LegalListItem>
              <LegalListItem><strong>Right to Rectification:</strong> Request correction of inaccurate or incomplete data</LegalListItem>
              <LegalListItem><strong>Right to Erasure:</strong> Request deletion of your personal information</LegalListItem>
              <LegalListItem><strong>Right to Restriction:</strong> Request limitation on how we process your data</LegalListItem>
              <LegalListItem><strong>Right to Data Portability:</strong> Receive your data in a structured, machine-readable format</LegalListItem>
              <LegalListItem><strong>Right to Object:</strong> Object to processing of your personal information</LegalListItem>
              <LegalListItem><strong>Right to Opt-Out:</strong> Opt out of the sale or sharing of your personal information</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>How to Submit a Request</LegalSectionTitle>
            <LegalParagraph>
              To exercise any of these rights, please contact us at:
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1rem' }}>
              Email: {process.env.REACT_APP_EMAIL_SUPPORT}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600 }}>
              Phone: {process.env.REACT_APP_PHONE_DISPLAY}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600 }}>
              Address: {process.env.REACT_APP_COMPANY_ADDRESS}
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Information Required</LegalSectionTitle>
            <LegalParagraph>
              To process your request, please provide:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Your full name</LegalListItem>
              <LegalListItem>Email address associated with our services</LegalListItem>
              <LegalListItem>Phone number (if applicable)</LegalListItem>
              <LegalListItem>Detailed description of your request</LegalListItem>
              <LegalListItem>Proof of identity (for security purposes)</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Response Timeline</LegalSectionTitle>
            <LegalParagraph>
              We will respond to your request within 45 days of receipt. In some cases, we may require an additional 
              45 days to respond, in which case we will notify you of the extension and the reason for the delay.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Verification Process</LegalSectionTitle>
            <LegalParagraph>
              To protect your privacy and security, we must verify your identity before processing your request. 
              We may request additional information to confirm your identity and ensure we are disclosing 
              information only to the authorized individual.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>No Discrimination</LegalSectionTitle>
            <LegalParagraph>
              We will not discriminate against you for exercising any of your privacy rights. This means we will not:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Deny you goods or services</LegalListItem>
              <LegalListItem>Charge you different prices or rates for goods or services</LegalListItem>
              <LegalListItem>Provide you a different level or quality of goods or services</LegalListItem>
              <LegalListItem>Suggest that you may receive a different price or quality of goods or services</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Questions or Concerns</LegalSectionTitle>
            <LegalParagraph>
              If you have questions about this form or our privacy practices, please contact us using the 
              information provided above.
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

export default DataSubjectRequestPage;
