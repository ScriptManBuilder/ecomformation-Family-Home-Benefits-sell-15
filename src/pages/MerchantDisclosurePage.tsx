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

const MerchantDisclosurePage: React.FC = () => {
  return (
    <>
      <Header />
      <LegalPageContainer>
        <LegalHeroSection>
          <LegalTitle>Service Provider Disclosure</LegalTitle>
        </LegalHeroSection>

        <LegalContent>
          <LegalSection>
            <LegalSectionTitle>Service Provider Information</LegalSectionTitle>
            <LegalParagraph>
              This disclosure provides important information about {process.env.REACT_APP_COMPANY_NAME}, the service provider 
              providing family & home benefits membership and services. This information is provided in compliance with consumer protection 
              laws and payment card industry regulations.
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1.5rem' }}>
              Legal Business Name:
            </LegalParagraph>
            <LegalParagraph>
              {process.env.REACT_APP_COMPANY_NAME}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1rem' }}>
              Business Address:
            </LegalParagraph>
            <LegalParagraph>
              {process.env.REACT_APP_COMPANY_ADDRESS}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1rem' }}>
              Contact Information:
            </LegalParagraph>
            <LegalParagraph>
              Phone: {process.env.REACT_APP_PHONE_DISPLAY}
            </LegalParagraph>
            <LegalParagraph>
              Email: {process.env.REACT_APP_EMAIL_SUPPORT}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1rem' }}>
              Business Hours:
            </LegalParagraph>
            <LegalParagraph>
              24/7 Family Support Available
            </LegalParagraph>
            <LegalParagraph>
              Member Services: Monday - Friday: 9:00 AM - 6:00 PM EST
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Nature of Business</LegalSectionTitle>
            <LegalParagraph>
              {process.env.REACT_APP_COMPANY_NAME} is a family & home benefits membership service provider that offers exclusive 
              benefits and services to members. Our services include:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Service Claims:</strong> Home protection requests, family care appointments, emergency assistance, and service coordination
              </LegalListItem>
              <LegalListItem>
                <strong>Member Benefits:</strong> Exclusive discounts and access to member-only family & home benefits
              </LegalListItem>
              <LegalListItem>
                <strong>Payment Processing:</strong> Secure processing of credit card, debit card, and other payment methods for membership and services
              </LegalListItem>
              <LegalListItem>
                <strong>Account Management:</strong> Tools for members to manage claims, view benefits, and update preferences
              </LegalListItem>
              <LegalListItem>
                <strong>Family Support:</strong> Personalized family assistance and customer support services
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              We act as a family & home benefits service provider and merchant of record for services processed through our platform. 
              Established in {process.env.REACT_APP_COMPANY_BIRTH}, we serve families seeking comprehensive protection and exclusive benefits.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Billing Descriptor</LegalSectionTitle>
            <LegalParagraph>
              When you make a payment through our platform, the following descriptors may appear on your credit card or 
              bank statement:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Primary Descriptor:</strong> "NIVORIX BENEFITS" or "NIVORIX*[Service]"
              </LegalListItem>
              <LegalListItem>
                <strong>Alternative Descriptors:</strong> May include "{process.env.REACT_APP_BRAND_NAME?.toUpperCase() || 'NIVORIX'}" or service provider names for specific claims
              </LegalListItem>
              <LegalListItem>
                <strong>Phone Number:</strong> {process.env.REACT_APP_PHONE_DISPLAY} will appear on your statement for customer service inquiries
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              If you do not recognize a charge on your statement with these descriptors, please contact us immediately 
              at {process.env.REACT_APP_PHONE_DISPLAY} or {process.env.REACT_APP_EMAIL_SUPPORT} for assistance.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Transaction Processing</LegalSectionTitle>
            <LegalParagraph>
              Information about how transactions are processed:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Payment Processors:</strong> We use industry-leading payment processors including Stripe and PayPal 
                to securely process transactions
              </LegalListItem>
              <LegalListItem>
                <strong>Processing Time:</strong> Most transactions are processed immediately upon authorization
              </LegalListItem>
              <LegalListItem>
                <strong>Settlement:</strong> Charges typically appear on your statement within 1-3 business days
              </LegalListItem>
              <LegalListItem>
                <strong>Currency:</strong> All transactions are processed in United States Dollars (USD) unless otherwise specified
              </LegalListItem>
              <LegalListItem>
                <strong>Authorization Holds:</strong> A temporary authorization hold may appear before the final charge is processed
              </LegalListItem>
              <LegalListItem>
                <strong>Failed Transactions:</strong> If a transaction fails, you will be notified and given an opportunity 
                to update payment information
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Customer Service and Support</LegalSectionTitle>
            <LegalParagraph>
              We are committed to providing excellent customer service:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Contact Methods:</strong> You may reach us by phone at {process.env.REACT_APP_PHONE_DISPLAY}, 
                by email at {process.env.REACT_APP_EMAIL_SUPPORT}, or through our website contact form
              </LegalListItem>
              <LegalListItem>
                <strong>Response Time:</strong> We aim to respond to all customer inquiries within 24 hours during business days
              </LegalListItem>
              <LegalListItem>
                <strong>Support Languages:</strong> Customer support is available in English
              </LegalListItem>
              <LegalListItem>
                <strong>Emergency Support:</strong> For urgent payment issues or suspected fraud, please call our phone line 
                for immediate assistance
              </LegalListItem>
              <LegalListItem>
                <strong>Self-Service Options:</strong> Many common issues can be resolved through your account dashboard, 
                including updating payment information and reviewing transaction history
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Refund Policy</LegalSectionTitle>
            <LegalParagraph>
              Our refund policy is designed to be fair and transparent:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Service Provider Refunds:</strong> Refunds for home repairs, family care appointments, or other services must be requested 
                according to the specific provider's cancellation policy
              </LegalListItem>
              <LegalListItem>
                <strong>Membership Fees:</strong> Refunds for membership fees are governed by our Refund Policy, available on our website
              </LegalListItem>
              <LegalListItem>
                <strong>Processing Time:</strong> Approved refunds are processed within 5-10 business days to your original 
                payment method
              </LegalListItem>
              <LegalListItem>
                <strong>Refund Requests:</strong> To request a refund, contact {process.env.REACT_APP_EMAIL_SUPPORT} with 
                your transaction details
              </LegalListItem>
              <LegalListItem>
                <strong>Disputed Charges:</strong> If you believe a charge is incorrect or unauthorized, contact us immediately 
                before initiating a chargeback
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              For complete refund terms and conditions, please refer to our Refund Policy document.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Payment Methods Accepted</LegalSectionTitle>
            <LegalParagraph>
              We accept the following payment methods:
            </LegalParagraph>
            <LegalList>
              <LegalListItem><strong>Credit Cards:</strong> Visa, Mastercard, American Express, Discover</LegalListItem>
              <LegalListItem><strong>Debit Cards:</strong> Visa Debit, Mastercard Debit with major card networks</LegalListItem>
              <LegalListItem><strong>Digital Wallets:</strong> PayPal, Apple Pay, Google Pay</LegalListItem>
              <LegalListItem><strong>Bank Transfers:</strong> ACH transfers for qualified business accounts</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              All payment methods are processed through PCI-DSS compliant payment processors. We do not store complete 
              credit card information on our servers.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Pricing and Fees</LegalSectionTitle>
            <LegalParagraph>
              Transparency in pricing and fees:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Membership Fees:</strong> Monthly or annual membership subscription fees provide access to exclusive family & home benefits
              </LegalListItem>
              <LegalListItem>
                <strong>Service Fees:</strong> We may charge a small service fee on certain claims or service requests
              </LegalListItem>
              <LegalListItem>
                <strong>No Hidden Fees:</strong> All fees are clearly displayed before you complete your service request or membership purchase
              </LegalListItem>
              <LegalListItem>
                <strong>Currency Conversion:</strong> If applicable, currency conversion fees are disclosed before transaction completion
              </LegalListItem>
              <LegalListItem>
                <strong>Flexible Service Options:</strong> Any fees associated with flexible service scheduling or priority assistance options are disclosed 
                at the time of transaction
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Data Security and Privacy</LegalSectionTitle>
            <LegalParagraph>
              We take data security seriously:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>PCI-DSS Compliance:</strong> We maintain Payment Card Industry Data Security Standard (PCI-DSS) Level 1 compliance
              </LegalListItem>
              <LegalListItem>
                <strong>Encryption:</strong> All payment information is encrypted using industry-standard SSL/TLS encryption 
                during transmission
              </LegalListItem>
              <LegalListItem>
                <strong>Secure Storage:</strong> Sensitive data is encrypted at rest using AES-256 encryption
              </LegalListItem>
              <LegalListItem>
                <strong>Tokenization:</strong> Credit card numbers are tokenized and stored securely by our payment processors
              </LegalListItem>
              <LegalListItem>
                <strong>Privacy Policy:</strong> Our collection, use, and protection of personal information is governed by 
                our Privacy Policy
              </LegalListItem>
              <LegalListItem>
                <strong>Third-Party Security:</strong> Our payment processors are certified PCI-DSS compliant and follow 
                strict security protocols
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              For detailed information about how we protect your data, please review our Privacy Policy and Data Processing Agreement.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Dispute Resolution Process</LegalSectionTitle>
            <LegalParagraph>
              If you have a dispute regarding a transaction:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Step 1 - Contact Us:</strong> Reach out to our customer service team at {process.env.REACT_APP_EMAIL_SUPPORT} 
                or {process.env.REACT_APP_PHONE_DISPLAY} with your concerns
              </LegalListItem>
              <LegalListItem>
                <strong>Step 2 - Investigation:</strong> We will investigate your dispute and respond within 5-7 business days
              </LegalListItem>
              <LegalListItem>
                <strong>Step 3 - Resolution:</strong> If your dispute is valid, we will process a refund or take corrective action
              </LegalListItem>
              <LegalListItem>
                <strong>Step 4 - Escalation:</strong> If you are not satisfied with our response, you may escalate to your 
                card issuer or payment provider
              </LegalListItem>
              <LegalListItem>
                <strong>Chargeback Rights:</strong> You retain the right to dispute charges with your card issuer, but we 
                encourage resolution through direct contact first
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Fraud Prevention and Detection</LegalSectionTitle>
            <LegalParagraph>
              We employ multiple measures to prevent and detect fraudulent transactions:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Real-Time Monitoring:</strong> Transactions are monitored in real-time for suspicious activity
              </LegalListItem>
              <LegalListItem>
                <strong>Address Verification:</strong> AVS (Address Verification Service) checks billing address information
              </LegalListItem>
              <LegalListItem>
                <strong>CVV Verification:</strong> Card security codes (CVV/CVC) are required for card-not-present transactions
              </LegalListItem>
              <LegalListItem>
                <strong>3D Secure:</strong> Additional authentication may be required for high-risk transactions
              </LegalListItem>
              <LegalListItem>
                <strong>Fraud Scoring:</strong> Machine learning algorithms assess transaction risk in real-time
              </LegalListItem>
              <LegalListItem>
                <strong>Reporting Fraud:</strong> If you suspect fraudulent activity on your account, contact us immediately 
                at {process.env.REACT_APP_PHONE_DISPLAY}
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Regulatory Compliance</LegalSectionTitle>
            <LegalParagraph>
              We comply with all applicable regulations and industry standards:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Payment Card Industry Standards:</strong> PCI-DSS Level 1 compliance maintained
              </LegalListItem>
              <LegalListItem>
                <strong>Data Protection Laws:</strong> GDPR (General Data Protection Regulation) and CCPA (California Consumer 
                Privacy Act) compliant
              </LegalListItem>
              <LegalListItem>
                <strong>Electronic Signatures:</strong> E-SIGN Act and UETA (Uniform Electronic Transactions Act) compliance
              </LegalListItem>
              <LegalListItem>
                <strong>Consumer Protection:</strong> Federal Trade Commission (FTC) guidelines and state consumer protection laws
              </LegalListItem>
              <LegalListItem>
                <strong>Anti-Money Laundering:</strong> AML and KYC (Know Your Customer) procedures for high-value transactions
              </LegalListItem>
              <LegalListItem>
                <strong>State Registrations:</strong> Registered in all required states for payment processing operations
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Recurring Payments and Subscriptions</LegalSectionTitle>
            <LegalParagraph>
              If your transaction includes recurring payments or subscriptions:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Authorization:</strong> You authorize recurring charges to your payment method until you cancel
              </LegalListItem>
              <LegalListItem>
                <strong>Billing Cycle:</strong> Charges occur on a monthly, quarterly, or annual basis as specified at signup
              </LegalListItem>
              <LegalListItem>
                <strong>Payment Reminders:</strong> You will receive email notifications before each recurring charge
              </LegalListItem>
              <LegalListItem>
                <strong>Cancellation:</strong> You may cancel subscriptions at any time through your account dashboard or 
                by contacting customer service
              </LegalListItem>
              <LegalListItem>
                <strong>Refund for Canceled Subscriptions:</strong> No refunds are provided for the remainder of the current 
                billing period after cancellation
              </LegalListItem>
              <LegalListItem>
                <strong>Failed Recurring Payments:</strong> If a recurring payment fails, we will notify you and attempt to 
                retry the charge with updated payment information
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Terms and Conditions</LegalSectionTitle>
            <LegalParagraph>
              Use of our services is governed by:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Terms of Service:</strong> Complete terms governing the use of our platform and services
              </LegalListItem>
              <LegalListItem>
                <strong>Privacy Policy:</strong> Details on how we collect, use, and protect your personal information
              </LegalListItem>
              <LegalListItem>
                <strong>Refund Policy:</strong> Terms and conditions for refunds and cancellations
              </LegalListItem>
              <LegalListItem>
                <strong>End-User Terms:</strong> Specific terms for end-users completing transactions through our platform
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              All terms and policies are available on our website and were provided at the time of transaction. By completing 
              a transaction, you agree to these terms.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Changes to This Disclosure</LegalSectionTitle>
            <LegalParagraph>
              We may update this Service Disclosure from time to time to reflect changes in our business practices, 
              regulatory requirements, or contact information. Material changes will be posted on our website and, where 
              appropriate, communicated to customers via email.
            </LegalParagraph>
            <LegalParagraph>
              The current version of this disclosure is always available at our website. We encourage you to review it 
              periodically to stay informed about how we process transactions and protect your information.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Contact Information</LegalSectionTitle>
            <LegalParagraph>
              For any questions about this Service Disclosure or our family & home benefits services:
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1rem' }}>
              {process.env.REACT_APP_COMPANY_NAME}
            </LegalParagraph>
            <LegalParagraph style={{ fontWeight: 600 }}>
              Attention: Customer Service Department
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
            <LegalParagraph style={{ fontWeight: 600, marginTop: '1rem' }}>
              Business Hours: Monday - Friday, 9:00 AM - 6:00 PM EST
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

export default MerchantDisclosurePage;
