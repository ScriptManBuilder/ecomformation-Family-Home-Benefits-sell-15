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

const DataProcessingPage: React.FC = () => {
  return (
    <>
      <Header />
      <LegalPageContainer>
        <LegalHeroSection>
          <LegalTitle>Data Processing Agreement</LegalTitle>
        </LegalHeroSection>

        <LegalContent>
          <LegalSection>
            <LegalSectionTitle>1. Definitions and Interpretation</LegalSectionTitle>
            <LegalParagraph>
              This Data Processing Agreement ("DPA") forms part of the service agreement between you ("Data Controller") 
              and {process.env.REACT_APP_COMPANY_NAME} ("Data Processor") for the provision of family & home benefits membership and services.
            </LegalParagraph>
            <LegalParagraph>
              For the purposes of this DPA:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>"Data Protection Laws"</strong> means all applicable laws relating to data protection and privacy, 
                including GDPR, CCPA, and other regional regulations
              </LegalListItem>
              <LegalListItem>
                <strong>"Personal Data"</strong> means any information relating to an identified or identifiable natural person 
                processed under this agreement
              </LegalListItem>
              <LegalListItem>
                <strong>"Processing"</strong> has the meaning given in applicable Data Protection Laws
              </LegalListItem>
              <LegalListItem>
                <strong>"Data Subject"</strong> means the individual to whom Personal Data relates
              </LegalListItem>
              <LegalListItem>
                <strong>"Sub-processor"</strong> means any third party engaged by the Data Processor to process Personal Data
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>2. Scope and Purpose of Processing</LegalSectionTitle>
            <LegalParagraph>
              The Data Processor shall process Personal Data only for the following purposes:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Providing family & home benefits and membership services as described in the service agreement</LegalListItem>
              <LegalListItem>Analyzing household needs to recommend suitable services and benefits</LegalListItem>
              <LegalListItem>Communicating with members regarding service claims and benefits</LegalListItem>
              <LegalListItem>Processing payments and managing service transactions</LegalListItem>
              <LegalListItem>Providing customer support and family assistance</LegalListItem>
              <LegalListItem>Generating service reports and analytics for the Data Controller</LegalListItem>
              <LegalListItem>Complying with legal obligations and regulatory requirements</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              The categories of Personal Data processed include: names, email addresses, phone numbers, billing addresses, 
              payment information, service claim history, household details, service preferences, and communication records.
            </LegalParagraph>
            <LegalParagraph>
              The categories of Data Subjects include: members, family members, potential members, and authorized representatives of 
              the Data Controller.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>3. Data Processor's Obligations</LegalSectionTitle>
            <LegalParagraph>
              The Data Processor shall:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Process Only on Instructions:</strong> Process Personal Data only on documented instructions from 
                the Data Controller, unless required by law
              </LegalListItem>
              <LegalListItem>
                <strong>Confidentiality:</strong> Ensure that persons authorized to process Personal Data have committed 
                themselves to confidentiality
              </LegalListItem>
              <LegalListItem>
                <strong>Security Measures:</strong> Implement appropriate technical and organizational measures to ensure 
                security of Personal Data
              </LegalListItem>
              <LegalListItem>
                <strong>Sub-processor Management:</strong> Only engage Sub-processors with prior written consent and ensure 
                they are bound by equivalent obligations
              </LegalListItem>
              <LegalListItem>
                <strong>Data Subject Rights:</strong> Assist the Data Controller in responding to Data Subject requests 
                regarding their rights
              </LegalListItem>
              <LegalListItem>
                <strong>Breach Notification:</strong> Notify the Data Controller without undue delay upon becoming aware 
                of a Personal Data breach
              </LegalListItem>
              <LegalListItem>
                <strong>Data Protection Impact Assessments:</strong> Assist the Data Controller with data protection impact 
                assessments when required
              </LegalListItem>
              <LegalListItem>
                <strong>Deletion or Return:</strong> Delete or return all Personal Data at the end of the service provision, 
                unless retention is required by law
              </LegalListItem>
              <LegalListItem>
                <strong>Audit Cooperation:</strong> Make available all information necessary to demonstrate compliance and 
                allow for audits
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>4. Data Controller's Obligations</LegalSectionTitle>
            <LegalParagraph>
              The Data Controller shall:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                Ensure that instructions for processing Personal Data comply with Data Protection Laws
              </LegalListItem>
              <LegalListItem>
                Obtain all necessary consents and provide required notices to Data Subjects
              </LegalListItem>
              <LegalListItem>
                Ensure the lawfulness of data collection and transfer to the Data Processor
              </LegalListItem>
              <LegalListItem>
                Promptly inform the Data Processor of any restrictions or changes to processing instructions
              </LegalListItem>
              <LegalListItem>
                Respond to Data Subject requests regarding their rights under applicable Data Protection Laws
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>5. Security Measures</LegalSectionTitle>
            <LegalParagraph>
              The Data Processor implements the following security measures to protect Personal Data:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Encryption:</strong> Personal Data is encrypted in transit using TLS 1.2+ and at rest using AES-256 encryption
              </LegalListItem>
              <LegalListItem>
                <strong>Access Controls:</strong> Role-based access controls and multi-factor authentication for system access
              </LegalListItem>
              <LegalListItem>
                <strong>Network Security:</strong> Firewalls, intrusion detection systems, and regular security monitoring
              </LegalListItem>
              <LegalListItem>
                <strong>Data Segregation:</strong> Logical separation of customer data using database-level isolation
              </LegalListItem>
              <LegalListItem>
                <strong>Secure Development:</strong> Secure coding practices, code reviews, and regular security testing
              </LegalListItem>
              <LegalListItem>
                <strong>Vulnerability Management:</strong> Regular security assessments, penetration testing, and patch management
              </LegalListItem>
              <LegalListItem>
                <strong>Incident Response:</strong> Documented incident response procedures and security event logging
              </LegalListItem>
              <LegalListItem>
                <strong>Physical Security:</strong> Secure data centers with 24/7 monitoring, biometric access controls
              </LegalListItem>
              <LegalListItem>
                <strong>Employee Training:</strong> Regular security awareness training for all personnel
              </LegalListItem>
              <LegalListItem>
                <strong>Compliance Certifications:</strong> PCI-DSS compliance and SOC 2 Type II certification
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>6. Sub-processors</LegalSectionTitle>
            <LegalParagraph>
              The Data Controller provides general authorization for the Data Processor to engage Sub-processors for specific 
              processing activities.
            </LegalParagraph>
            <LegalParagraph>
              Current Sub-processors include:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Cloud Infrastructure Providers:</strong> AWS, Microsoft Azure (data hosting and storage)
              </LegalListItem>
              <LegalListItem>
                <strong>Payment Processors:</strong> Stripe, PayPal (payment processing services)
              </LegalListItem>
              <LegalListItem>
                <strong>Email Service Providers:</strong> SendGrid, Amazon SES (transactional email delivery)
              </LegalListItem>
              <LegalListItem>
                <strong>Analytics Providers:</strong> Google Analytics (anonymized usage analytics)
              </LegalListItem>
              <LegalListItem>
                <strong>Customer Support Tools:</strong> Zendesk, Intercom (customer communication)
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              The Data Processor shall inform the Data Controller of any intended changes concerning the addition or replacement 
              of Sub-processors, giving the Data Controller 30 days to object.
            </LegalParagraph>
            <LegalParagraph>
              The Data Processor shall ensure that all Sub-processors are bound by data protection obligations equivalent to 
              those in this DPA.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>7. International Data Transfers</LegalSectionTitle>
            <LegalParagraph>
              Personal Data may be transferred to and processed in countries outside the European Economic Area (EEA) or 
              the jurisdiction where the Data Controller is located.
            </LegalParagraph>
            <LegalParagraph>
              When transferring Personal Data internationally, the Data Processor ensures appropriate safeguards are in place:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                Standard Contractual Clauses (SCCs) approved by the European Commission
              </LegalListItem>
              <LegalListItem>
                Adequacy decisions recognizing recipient countries as providing adequate data protection
              </LegalListItem>
              <LegalListItem>
                Binding Corporate Rules (BCRs) where applicable
              </LegalListItem>
              <LegalListItem>
                Privacy Shield certification (where still recognized)
              </LegalListItem>
              <LegalListItem>
                Additional technical and organizational measures to ensure data protection
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              The Data Processor shall inform the Data Controller of any changes to data processing locations.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>8. Data Subject Rights</LegalSectionTitle>
            <LegalParagraph>
              The Data Processor shall assist the Data Controller in fulfilling Data Subject rights requests, including:
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Right of Access:</strong> Providing copies of Personal Data held about the Data Subject</LegalListItem>
              <LegalListItem><strong>Right to Rectification:</strong> Correcting inaccurate or incomplete Personal Data</LegalListItem>
              <LegalListItem><strong>Right to Erasure:</strong> Deleting Personal Data when legally required ("right to be forgotten")</LegalListItem>
              <LegalListItem><strong>Right to Restriction:</strong> Limiting processing in certain circumstances</LegalListItem>
              <LegalListItem><strong>Right to Data Portability:</strong> Providing Personal Data in a structured, machine-readable format</LegalListItem>
              <LegalListItem><strong>Right to Object:</strong> Objecting to processing based on legitimate interests</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              The Data Processor shall respond to requests from the Data Controller within 7 business days and provide all 
              necessary assistance to enable timely responses to Data Subjects.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>9. Personal Data Breach Notification</LegalSectionTitle>
            <LegalParagraph>
              In the event of a Personal Data breach, the Data Processor shall:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                Notify the Data Controller without undue delay and in any event within 24 hours of becoming aware of the breach
              </LegalListItem>
              <LegalListItem>
                Provide the following information: nature of the breach, categories and approximate number of Data Subjects affected, 
                categories and approximate number of Personal Data records affected
              </LegalListItem>
              <LegalListItem>
                Describe the likely consequences of the breach and measures taken or proposed to address the breach
              </LegalListItem>
              <LegalListItem>
                Provide the name and contact details of the data protection officer or other contact point
              </LegalListItem>
              <LegalListItem>
                Cooperate with the Data Controller in investigating and remediating the breach
              </LegalListItem>
              <LegalListItem>
                Preserve all evidence and maintain records of the breach and response actions
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              The Data Processor shall take immediate steps to mitigate the effects of the breach and prevent further unauthorized 
              access or disclosure.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>10. Audits and Compliance</LegalSectionTitle>
            <LegalParagraph>
              The Data Controller has the right to audit the Data Processor's compliance with this DPA:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Audit Frequency:</strong> Up to once per year, or more frequently if required by law or following a security incident
              </LegalListItem>
              <LegalListItem>
                <strong>Audit Scope:</strong> Review of security measures, processing activities, and compliance with data protection obligations
              </LegalListItem>
              <LegalListItem>
                <strong>Audit Notice:</strong> Data Controller shall provide 30 days' written notice before conducting an audit
              </LegalListItem>
              <LegalListItem>
                <strong>Third-Party Auditors:</strong> Data Controller may engage independent third-party auditors subject to 
                confidentiality obligations
              </LegalListItem>
              <LegalListItem>
                <strong>Audit Reports:</strong> Data Processor may provide existing compliance certifications (SOC 2, ISO 27001) 
                in lieu of an audit
              </LegalListItem>
              <LegalListItem>
                <strong>Audit Costs:</strong> Each party bears its own audit costs, except where material non-compliance is discovered
              </LegalListItem>
              <LegalListItem>
                <strong>Remediation:</strong> If non-compliance is identified, Data Processor shall implement corrective actions 
                within agreed timelines
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>11. Data Retention and Deletion</LegalSectionTitle>
            <LegalParagraph>
              Upon termination or expiration of the service agreement:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                The Data Processor shall, at the Data Controller's choice, delete or return all Personal Data within 30 days
              </LegalListItem>
              <LegalListItem>
                Deletion shall be certified in writing upon request by the Data Controller
              </LegalListItem>
              <LegalListItem>
                The Data Processor may retain Personal Data to the extent required by applicable law, with continued security protections
              </LegalListItem>
              <LegalListItem>
                Backup copies shall be securely deleted or overwritten in accordance with the Data Processor's retention schedule
              </LegalListItem>
              <LegalListItem>
                Anonymized data that cannot be attributed to individuals may be retained for statistical purposes
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>12. Liability and Indemnification</LegalSectionTitle>
            <LegalParagraph>
              Liability provisions:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                Each party is liable for damages caused by its failure to comply with obligations under this DPA and applicable 
                Data Protection Laws
              </LegalListItem>
              <LegalListItem>
                The Data Processor is liable for damages caused by Sub-processors to the same extent as if caused directly
              </LegalListItem>
              <LegalListItem>
                Liability is limited as set forth in the service agreement, except where prohibited by Data Protection Laws
              </LegalListItem>
              <LegalListItem>
                Each party shall indemnify the other against third-party claims arising from its breach of this DPA
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>13. Term and Termination</LegalSectionTitle>
            <LegalParagraph>
              This DPA:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                Comes into effect on the date of the service agreement and continues for the duration of the processing activities
              </LegalListItem>
              <LegalListItem>
                Automatically terminates upon termination of the service agreement, subject to data retention and deletion obligations
              </LegalListItem>
              <LegalListItem>
                May be terminated by either party if the other party materially breaches data protection obligations
              </LegalListItem>
              <LegalListItem>
                Survives termination for obligations relating to data deletion, confidentiality, and audit rights
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>14. Amendments</LegalSectionTitle>
            <LegalParagraph>
              This DPA may be amended to reflect changes in Data Protection Laws or business requirements. The Data Processor 
              shall provide 30 days' notice of material changes. Continued use of services after the notice period constitutes 
              acceptance of the amended DPA.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>15. Contact Information</LegalSectionTitle>
            <LegalParagraph>
              For questions or concerns regarding data processing, contact:
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1rem' }}>
              {process.env.REACT_APP_COMPANY_NAME}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600 }}>
              Data Protection Officer
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

export default DataProcessingPage;
