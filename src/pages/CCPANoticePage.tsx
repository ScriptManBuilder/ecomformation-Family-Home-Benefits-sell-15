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

const CCPANoticePage: React.FC = () => {
  return (
    <>
      <Header />
      <LegalPageContainer>
        <LegalHeroSection>
          <LegalTitle>California Consumer Privacy Act (CCPA) Notice</LegalTitle>
        </LegalHeroSection>

        <LegalContent>
          <LegalSection>
            <LegalSectionTitle>Your California Privacy Rights</LegalSectionTitle>
            <LegalParagraph>
              This notice applies to California residents and describes how {process.env.REACT_APP_COMPANY_NAME} collects, 
              uses, and shares your personal information, and explains your rights under the California Consumer 
              Privacy Act (CCPA) and California Privacy Rights Act (CPRA).
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Categories of Personal Information We Collect</LegalSectionTitle>
            <LegalParagraph>
              We may collect the following categories of personal information:
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Identifiers:</strong> Name, email address, phone number, postal address, IP address</LegalListItem>
              <LegalListItem><strong>Commercial Information:</strong> Payment history, transaction records, purchase patterns</LegalListItem>
              <LegalListItem><strong>Financial Information:</strong> Payment card details, bank account information</LegalListItem>
              <LegalListItem><strong>Internet Activity:</strong> Browsing history, search history, interaction with our website</LegalListItem>
              <LegalListItem><strong>Geolocation Data:</strong> Physical location or movements</LegalListItem>
              <LegalListItem><strong>Professional Information:</strong> Employment details, business information</LegalListItem>
              <LegalListItem><strong>Inferences:</strong> Preferences, characteristics, behavior patterns</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>How We Use Personal Information</LegalSectionTitle>
            <LegalParagraph>
              We use personal information for the following business purposes:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Processing payments and transactions</LegalListItem>
              <LegalListItem>Providing customer service and support</LegalListItem>
              <LegalListItem>Communicating about our services</LegalListItem>
              <LegalListItem>Detecting and preventing fraud</LegalListItem>
              <LegalListItem>Complying with legal obligations</LegalListItem>
              <LegalListItem>Improving our services and website</LegalListItem>
              <LegalListItem>Marketing and advertising (with your consent)</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Categories of Third Parties We Share Information With</LegalSectionTitle>
            <LegalParagraph>
              We may share your personal information with:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Service providers and business partners</LegalListItem>
              <LegalListItem>Payment processors and financial institutions</LegalListItem>
              <LegalListItem>Marketing and analytics providers</LegalListItem>
              <LegalListItem>Legal and regulatory authorities</LegalListItem>
              <LegalListItem>Professional advisors</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Your CCPA Rights</LegalSectionTitle>
            <LegalParagraph>
              As a California resident, you have the following rights:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Right to Know:</strong> Request disclosure of the categories and specific pieces of personal 
                information we have collected about you
              </LegalListItem>
              <LegalListItem>
                <strong>Right to Delete:</strong> Request deletion of your personal information, subject to certain exceptions
              </LegalListItem>
              <LegalListItem>
                <strong>Right to Correct:</strong> Request correction of inaccurate personal information
              </LegalListItem>
              <LegalListItem>
                <strong>Right to Opt-Out:</strong> Opt out of the sale or sharing of your personal information
              </LegalListItem>
              <LegalListItem>
                <strong>Right to Limit:</strong> Limit the use and disclosure of sensitive personal information
              </LegalListItem>
              <LegalListItem>
                <strong>Right to Non-Discrimination:</strong> Exercise your rights without discriminatory treatment
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Sale and Sharing of Personal Information</LegalSectionTitle>
            <LegalParagraph>
              We do not sell your personal information in exchange for monetary consideration. However, we may 
              share certain information with third parties for advertising purposes, which may be considered a 
              "sale" or "sharing" under CCPA.
            </LegalParagraph>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              To opt out of the sale or sharing of your personal information, please contact us using the 
              information below.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Sensitive Personal Information</LegalSectionTitle>
            <LegalParagraph>
              We do not collect or process sensitive personal information for purposes other than those permitted 
              by the CCPA. Sensitive personal information includes information such as Social Security numbers, 
              driver's license numbers, precise geolocation, racial or ethnic origin, religious beliefs, and 
              health information.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>How to Exercise Your Rights</LegalSectionTitle>
            <LegalParagraph>
              To exercise your CCPA rights, please submit a request by:
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1rem' }}>
              Email: {process.env.REACT_APP_EMAIL_SUPPORT}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600 }}>
              Phone: {process.env.REACT_APP_PHONE_DISPLAY}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600 }}>
              Mail: {process.env.REACT_APP_COMPANY_ADDRESS}
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Verification Process</LegalSectionTitle>
            <LegalParagraph>
              To protect your privacy, we must verify your identity before processing your request. We will 
              request information to match with our records. The information we request may vary depending on 
              the type of request and the sensitivity of the information involved.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Response Timeline</LegalSectionTitle>
            <LegalParagraph>
              We will respond to verifiable consumer requests within 45 days of receipt. If we require more time 
              (up to 90 days total), we will inform you of the reason and extension period in writing.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Authorized Agent</LegalSectionTitle>
            <LegalParagraph>
              You may designate an authorized agent to submit requests on your behalf. To verify an authorized 
              agent's authority, we require:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Written authorization signed by you</LegalListItem>
              <LegalListItem>Proof of the agent's identity</LegalListItem>
              <LegalListItem>Verification of your identity</LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Data Retention</LegalSectionTitle>
            <LegalParagraph>
              We retain personal information for as long as necessary to fulfill the purposes for which it was 
              collected, comply with legal obligations, resolve disputes, and enforce our agreements.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Children's Privacy</LegalSectionTitle>
            <LegalParagraph>
              Our services are not directed to individuals under 18 years of age. We do not knowingly collect 
              personal information from children under 18. If we learn that we have collected personal information 
              from a child under 18, we will delete it promptly.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Changes to This Notice</LegalSectionTitle>
            <LegalParagraph>
              We may update this CCPA notice from time to time. The "Last Updated" date at the bottom of this 
              notice indicates when it was last revised. Any changes will become effective when we post the 
              revised notice.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Contact Information</LegalSectionTitle>
            <LegalParagraph>
              For questions about this CCPA notice or our privacy practices, contact:
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

export default CCPANoticePage;
