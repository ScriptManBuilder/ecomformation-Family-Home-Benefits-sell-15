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

const DigitalProductsPage: React.FC = () => {
  return (
    <>
      <Header />
      <LegalPageContainer>
        <LegalHeroSection>
          <LegalTitle>Digital Products Policy</LegalTitle>
        </LegalHeroSection>

        <LegalContent>
          <LegalSection>
            <LegalSectionTitle>Introduction</LegalSectionTitle>
            <LegalParagraph>
              This Digital Products Policy governs your purchase and use of digital products and services offered by 
              {process.env.REACT_APP_COMPANY_NAME}. By purchasing or accessing our digital products, you agree to the 
              terms outlined in this policy.
            </LegalParagraph>
            <LegalParagraph>
              Our digital products include membership portal access, service management platform, mobile applications, 
              API access, and any other digital services we provide.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Types of Digital Products</LegalSectionTitle>
            <LegalParagraph>
              We offer the following categories of digital products:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Membership Portal:</strong> Cloud-based family benefits management platform accessible via web browser
              </LegalListItem>
              <LegalListItem>
                <strong>API Access:</strong> RESTful API for partners and affiliates to integrate family & home benefits services
              </LegalListItem>
              <LegalListItem>
                <strong>Service Dashboard:</strong> Tools to view claims, track benefits, and access service reports
              </LegalListItem>
              <LegalListItem>
                <strong>Mobile Applications:</strong> iOS and Android apps for managing service claims and your membership
              </LegalListItem>
              <LegalListItem>
                <strong>Benefit Guides:</strong> Digital resources, home protection information, and member benefits documentation
              </LegalListItem>
              <LegalListItem>
                <strong>Documentation & Support:</strong> Help articles, service tutorials, FAQs, and family care tips
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Purchase and Payment</LegalSectionTitle>
            <LegalParagraph>
              When purchasing digital products from us:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Pricing:</strong> All prices are displayed in USD and exclude applicable taxes unless otherwise stated
              </LegalListItem>
              <LegalListItem>
                <strong>Payment Methods:</strong> We accept major credit cards, PayPal, and bank transfers for qualified businesses
              </LegalListItem>
              <LegalListItem>
                <strong>Billing Cycles:</strong> Subscriptions are billed monthly or annually, depending on your selected plan
              </LegalListItem>
              <LegalListItem>
                <strong>Auto-Renewal:</strong> Subscriptions automatically renew unless canceled before the renewal date
              </LegalListItem>
              <LegalListItem>
                <strong>Price Changes:</strong> We may change pricing with 30 days' notice; existing customers are grandfathered 
                for their current billing cycle
              </LegalListItem>
              <LegalListItem>
                <strong>Taxes:</strong> You are responsible for any applicable sales tax, VAT, or other taxes
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Delivery and Access</LegalSectionTitle>
            <LegalParagraph>
              Digital products are delivered and accessed as follows:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Immediate Access:</strong> Membership portal is accessible immediately upon successful enrollment
              </LegalListItem>
              <LegalListItem>
                <strong>Login Credentials:</strong> Account credentials and access instructions are provided via email
              </LegalListItem>
              <LegalListItem>
                <strong>Download Links:</strong> Mobile apps can be downloaded from App Store or Google Play
              </LegalListItem>
              <LegalListItem>
                <strong>Email Delivery:</strong> Service confirmations, membership details, and benefit documents are sent to your email
              </LegalListItem>
              <LegalListItem>
                <strong>Account Required:</strong> An active membership account is required for access to exclusive family & home benefits
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>License and Usage Rights</LegalSectionTitle>
            <LegalParagraph>
              Your license to use our digital products is subject to the following terms:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>License Grant:</strong> We grant you a non-exclusive, non-transferable, revocable license to use our 
                digital products for your internal business purposes
              </LegalListItem>
              <LegalListItem>
                <strong>Account-Based:</strong> Licenses are tied to your account and cannot be shared or transferred without authorization
              </LegalListItem>
              <LegalListItem>
                <strong>User Limits:</strong> Usage is subject to user limits, API rate limits, and data processing caps as 
                specified in your plan
              </LegalListItem>
              <LegalListItem>
                <strong>Prohibited Uses:</strong> You may not reverse engineer, decompile, redistribute, resell, or create 
                derivative works from our products
              </LegalListItem>
              <LegalListItem>
                <strong>Intellectual Property:</strong> All rights, title, and interest in our digital products remain with 
                {process.env.REACT_APP_COMPANY_NAME}
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Returns and Refunds for Digital Products</LegalSectionTitle>
            <LegalParagraph>
              Due to the nature of digital products, special refund terms apply:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>No Returns:</strong> Digital products cannot be "returned" in the traditional sense once accessed or downloaded
              </LegalListItem>
              <LegalListItem>
                <strong>30-Day Guarantee:</strong> New customers can request a full refund within 30 days if not satisfied with the service
              </LegalListItem>
              <LegalListItem>
                <strong>Technical Issues:</strong> Refunds may be granted if the product is fundamentally broken or inaccessible 
                due to our fault
              </LegalListItem>
              <LegalListItem>
                <strong>Subscription Refunds:</strong> Monthly subscriptions are non-refundable; annual subscriptions may be 
                eligible for prorated refunds within 30 days
              </LegalListItem>
              <LegalListItem>
                <strong>Refund Process:</strong> All refund requests must be submitted to {process.env.REACT_APP_EMAIL_SUPPORT} 
                with account details and reason
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              For complete refund terms, please refer to our Refund Policy.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Product Updates and Modifications</LegalSectionTitle>
            <LegalParagraph>
              We continuously improve our digital products:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Automatic Updates:</strong> SaaS products are automatically updated with new features, bug fixes, 
                and security patches
              </LegalListItem>
              <LegalListItem>
                <strong>Breaking Changes:</strong> We will provide advance notice of any updates that may affect your integration 
                or usage
              </LegalListItem>
              <LegalListItem>
                <strong>Feature Changes:</strong> Features may be added, modified, or deprecated based on business needs and 
                user feedback
              </LegalListItem>
              <LegalListItem>
                <strong>Version Support:</strong> API versions are supported for a minimum of 12 months after deprecation notice
              </LegalListItem>
              <LegalListItem>
                <strong>No Obligation:</strong> We are not obligated to provide any specific updates or maintain features indefinitely
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Service Level and Availability</LegalSectionTitle>
            <LegalParagraph>
              We strive to provide reliable access to our digital products:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Uptime Target:</strong> We aim for 99.9% uptime for our SaaS products, excluding scheduled maintenance
              </LegalListItem>
              <LegalListItem>
                <strong>Maintenance Windows:</strong> Scheduled maintenance is performed during off-peak hours with advance notice
              </LegalListItem>
              <LegalListItem>
                <strong>Monitoring:</strong> Our systems are monitored 24/7 for performance and availability issues
              </LegalListItem>
              <LegalListItem>
                <strong>Status Updates:</strong> Service status and incident reports are available on our status page
              </LegalListItem>
              <LegalListItem>
                <strong>No Guarantee:</strong> While we strive for high availability, we do not guarantee uninterrupted or 
                error-free service
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Technical Support</LegalSectionTitle>
            <LegalParagraph>
              Support for digital products includes:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Documentation:</strong> Comprehensive guides, API references, and FAQs available in your account
              </LegalListItem>
              <LegalListItem>
                <strong>Email Support:</strong> Technical support via email at {process.env.REACT_APP_EMAIL_SUPPORT}
              </LegalListItem>
              <LegalListItem>
                <strong>Response Times:</strong> We aim to respond to support requests within 24 hours on business days
              </LegalListItem>
              <LegalListItem>
                <strong>Priority Support:</strong> Higher-tier plans include priority support with faster response times
              </LegalListItem>
              <LegalListItem>
                <strong>Community Forum:</strong> Access to user community for peer-to-peer assistance
              </LegalListItem>
              <LegalListItem>
                <strong>Scope:</strong> Support covers product functionality, not custom development or third-party integrations
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Data Ownership and Export</LegalSectionTitle>
            <LegalParagraph>
              Regarding data processed through our digital products:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Your Data:</strong> You retain ownership of all data you input, upload, or generate using our products
              </LegalListItem>
              <LegalListItem>
                <strong>Data Export:</strong> You can export your data at any time in standard formats (CSV, JSON, XML)
              </LegalListItem>
              <LegalListItem>
                <strong>Data Portability:</strong> We provide tools to help you migrate to other platforms if you choose
              </LegalListItem>
              <LegalListItem>
                <strong>Post-Cancellation:</strong> After account cancellation, data is retained for 30 days, then permanently deleted
              </LegalListItem>
              <LegalListItem>
                <strong>Anonymized Data:</strong> We may retain anonymized, aggregated data for analytics and product improvement
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Termination and Suspension</LegalSectionTitle>
            <LegalParagraph>
              Your access to digital products may be terminated or suspended:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                <strong>Non-Payment:</strong> Membership accounts with outstanding dues may be suspended after grace period
              </LegalListItem>
              <LegalListItem>
                <strong>Terms Violation:</strong> Violation of our Terms of Service may result in immediate termination
              </LegalListItem>
              <LegalListItem>
                <strong>Fraudulent Activity:</strong> Suspected fraud or abuse will result in account suspension pending investigation
              </LegalListItem>
              <LegalListItem>
                <strong>Voluntary Cancellation:</strong> You may cancel your subscription at any time from your account settings
              </LegalListItem>
              <LegalListItem>
                <strong>Effect of Termination:</strong> Upon termination, your license to use our products ends immediately
              </LegalListItem>
            </LegalList>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Warranty Disclaimer</LegalSectionTitle>
            <LegalParagraph>
              Our digital products are provided "as is" without warranties of any kind:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>
                We do not warrant that our products will meet your specific requirements or expectations
              </LegalListItem>
              <LegalListItem>
                We do not guarantee that our products will be uninterrupted, timely, secure, or error-free
              </LegalListItem>
              <LegalListItem>
                We do not warrant that results obtained from using our products will be accurate or reliable
              </LegalListItem>
              <LegalListItem>
                Any material downloaded or accessed through our products is done at your own risk
              </LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Some jurisdictions do not allow disclaimer of warranties, so some of the above may not apply to you.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Limitation of Liability</LegalSectionTitle>
            <LegalParagraph>
              To the maximum extent permitted by law, {process.env.REACT_APP_COMPANY_NAME} shall not be liable for:
            </LegalParagraph>
            <LegalList>
              <LegalListItem>Any indirect, incidental, special, consequential, or exemplary damages</LegalListItem>
              <LegalListItem>Loss of profits, revenue, data, or business opportunities</LegalListItem>
              <LegalListItem>Service interruptions or data loss</LegalListItem>
              <LegalListItem>Errors or bugs in the software</LegalListItem>
            </LegalList>
            <LegalParagraph style={{ marginTop: '1rem' }}>
              Our total liability for any claim related to digital products shall not exceed the amount you paid for the 
              product in the 12 months preceding the claim.
            </LegalParagraph>
          </LegalSection>

          <LegalSection>
            <LegalSectionTitle>Contact Us</LegalSectionTitle>
            <LegalParagraph>
              For questions about our digital products or this policy, contact:
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

export default DigitalProductsPage;
