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

const ESignaturePage: React.FC = () => {
  return (
    <>
      <Header />
      <LegalPageContainer>
        <LegalHeroSection>
          <LegalTitle>E-Signature Disclosure Agreement</LegalTitle>
        </LegalHeroSection>

        <LegalContent>
          <LegalSection>
            <LegalSectionTitle>Introduction</LegalSectionTitle>
            <LegalParagraph>
              This E-Signature Disclosure Agreement ("Agreement") explains your rights and responsibilities when 
              you choose to conduct business with {process.env.REACT_APP_COMPANY_NAME} electronically, including 
              the use of electronic signatures, electronic records, and electronic communications.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Consent to Electronic Signatures</LegalSectionTitle>
            <LegalParagraph>
              By using our services and agreeing to this disclosure, you consent to:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Conduct transactions electronically</LegalListItem>
              <LegalListItem>Receive disclosures, notices, and other documents electronically</LegalListItem>
              <LegalListItem>Use electronic signatures to sign agreements and documents</LegalListItem>
              <LegalListItem>Accept that electronic signatures have the same legal effect as handwritten signatures</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>System Requirements</LegalSectionTitle>
            <LegalParagraph>
              To access and retain electronic records, you must have:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>A computer or mobile device with internet access</LegalListItem>
              <LegalListItem>A current web browser (Chrome, Firefox, Safari, or Edge) with cookies enabled</LegalListItem>
              <LegalListItem>A valid email address</LegalListItem>
              <LegalListItem>Adobe Acrobat Reader or equivalent PDF viewer</LegalListItem>
              <LegalListItem>Sufficient storage space to save or print documents</LegalListItem>
              <LegalListItem>A printer or ability to download and save documents</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>How to Withdraw Consent</LegalSectionTitle>
            <LegalParagraph>
              You have the right to withdraw your consent to receive electronic communications at any time. 
              To withdraw consent, contact us at:
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1rem' }}>
              Email: {process.env.REACT_APP_EMAIL_SUPPORT}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600 }}>
              Phone: {process.env.REACT_APP_PHONE_DISPLAY}
            </LegalParagraph>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Please note that withdrawing consent may affect our ability to provide certain services to you.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Updating Your Contact Information</LegalSectionTitle>
            <LegalParagraph>
              It is your responsibility to keep your email address and other contact information current. 
              To update your information, please contact us using the contact details provided above.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>How to Request Paper Copies</LegalSectionTitle>
            <LegalParagraph>
              You may request paper copies of any electronic record by contacting us. We may charge a reasonable 
              fee for paper copies. Current fee schedule:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>First copy: Free</LegalListItem>
              <LegalListItem>Additional copies: $5.00 per document</LegalListItem>
              <LegalListItem>Shipping and handling charges may apply</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Electronic Record Retention</LegalSectionTitle>
            <LegalParagraph>
              We recommend that you print or download and save copies of all electronic records for your records. 
              You should retain these records for at least the same period that you would retain paper records.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Delivery of Electronic Communications</LegalSectionTitle>
            <LegalParagraph>
              Electronic communications will be considered received when:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Posted on our website or application</LegalListItem>
              <LegalListItem>Sent to the email address you have provided</LegalListItem>
              <LegalListItem>Made available through your online account</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              It is your responsibility to check your email and online account regularly.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Federal Law Compliance</LegalSectionTitle>
            <LegalParagraph>
              This Agreement complies with the Electronic Signatures in Global and National Commerce Act (E-SIGN Act) 
              and the Uniform Electronic Transactions Act (UETA).
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Changes to This Agreement</LegalSectionTitle>
            <LegalParagraph>
              We may update this Agreement from time to time. We will notify you of any material changes by 
              posting the updated Agreement on our website or by sending you an email. Your continued use of 
              our services after such notification constitutes acceptance of the updated Agreement.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Contact Information</LegalSectionTitle>
            <LegalParagraph>
              For questions about this E-Signature Disclosure Agreement, please contact:
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

export default ESignaturePage;
