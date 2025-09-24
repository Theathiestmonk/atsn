import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#F6F6F6] text-[#2E2E2E]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#2E2E2E]/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-[#9E005C] to-[#FF4D94] bg-clip-text text-transparent">
              atsn ai
            </div>
            <Link
              to="/"
              className="flex items-center space-x-2 text-[#2E2E2E]/70 hover:text-[#2E2E2E] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="pt-20 pb-12">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-[#2E2E2E] via-[#9E005C] to-[#FF4D94] bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <p className="text-sm text-[#2E2E2E]/60 mb-8">
              Last updated: 24/09/2025
            </p>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-sm text-[#2E2E2E]/60 mb-8">
                <strong>Effective date:</strong> 24/09/2025
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-[#2E2E2E]">
                1. Introduction
              </h2>
              <p className="mb-6 text-[#2E2E2E]/80">
                Welcome to atsn ai ("we," "our," or "us"). We are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI agent platform and related services.
              </p>
              <p className="mb-6 text-[#2E2E2E]/80">
                By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-[#2E2E2E]">
                2. Information We Collect
              </h2>
              <h3 className="text-xl font-semibold mb-3 text-[#2E2E2E]">
                2.1 Personal Information
              </h3>
              <p className="mb-4 text-[#2E2E2E]/80">
                We may collect the following personal information:
              </p>
              <ul className="mb-6 text-[#2E2E2E]/80 list-disc list-inside space-y-2">
                <li>Name and contact information (email address, phone number)</li>
                <li>Account credentials and authentication data</li>
                <li>Business information and preferences</li>
                <li>Payment and billing information</li>
                <li>Profile information and settings</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-[#2E2E2E]">
                2.2 Usage Data
              </h3>
              <p className="mb-4 text-[#2E2E2E]/80">
                We automatically collect information about how you use our services:
              </p>
              <ul className="mb-6 text-[#2E2E2E]/80 list-disc list-inside space-y-2">
                <li>Log data (IP address, browser type, access times)</li>
                <li>Device information and identifiers</li>
                <li>Usage patterns and interactions with AI agents</li>
                <li>Performance data and error logs</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-[#2E2E2E]">
                2.3 Content and Communications
              </h3>
              <p className="mb-4 text-[#2E2E2E]/80">
                We may collect:
              </p>
              <ul className="mb-6 text-[#2E2E2E]/80 list-disc list-inside space-y-2">
                <li>Content you create or upload to our platform</li>
                <li>Communications with our AI agents</li>
                <li>Feedback, reviews, and support requests</li>
                <li>Social media integration data (with your consent)</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-[#2E2E2E]">
                3. How We Use Your Information
              </h2>
              <p className="mb-4 text-[#2E2E2E]/80">
                We use the collected information for the following purposes:
              </p>
              <ul className="mb-6 text-[#2E2E2E]/80 list-disc list-inside space-y-2">
                <li>Provide, maintain, and improve our AI agent services</li>
                <li>Process transactions and manage your account</li>
                <li>Personalize your experience and content recommendations</li>
                <li>Train and improve our AI models (with appropriate safeguards)</li>
                <li>Send you service updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>Detect, prevent, and address technical issues and security threats</li>
                <li>Comply with legal obligations and enforce our terms of service</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-[#2E2E2E]">
                4. Information Sharing and Disclosure
              </h2>
              <p className="mb-4 text-[#2E2E2E]/80">
                We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
              </p>

              <h3 className="text-xl font-semibold mb-3 text-[#2E2E2E]">
                4.1 Service Providers
              </h3>
              <p className="mb-4 text-[#2E2E2E]/80">
                We may share information with trusted third-party service providers who assist us in:
              </p>
              <ul className="mb-6 text-[#2E2E2E]/80 list-disc list-inside space-y-2">
                <li>Hosting and infrastructure services</li>
                <li>Payment processing and billing</li>
                <li>Analytics and performance monitoring</li>
                <li>Customer support and communication</li>
                <li>AI model training and optimization (with appropriate safeguards)</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-[#2E2E2E]">
                4.2 Legal Requirements
              </h3>
              <p className="mb-4 text-[#2E2E2E]/80">
                We may disclose your information if required by law or in response to:
              </p>
              <ul className="mb-6 text-[#2E2E2E]/80 list-disc list-inside space-y-2">
                <li>Valid legal requests from government authorities</li>
                <li>Court orders or subpoenas</li>
                <li>Protection of our rights, property, or safety</li>
                <li>Prevention of fraud or security threats</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-[#2E2E2E]">
                4.3 Business Transfers
              </h3>
              <p className="mb-6 text-[#2E2E2E]/80">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction, subject to the same privacy protections.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-[#2E2E2E]">
                5. Data Security
              </h2>
              <p className="mb-4 text-[#2E2E2E]/80">
                We implement appropriate technical and organizational measures to protect your information:
              </p>
              <ul className="mb-6 text-[#2E2E2E]/80 list-disc list-inside space-y-2">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection</li>
                <li>Incident response and breach notification procedures</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-[#2E2E2E]">
                6. Data Retention
              </h2>
              <p className="mb-4 text-[#2E2E2E]/80">
                We retain your information for as long as necessary to:
              </p>
              <ul className="mb-6 text-[#2E2E2E]/80 list-disc list-inside space-y-2">
                <li>Provide our services and maintain your account</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce agreements</li>
                <li>Improve our services and AI models</li>
              </ul>
              <p className="mb-6 text-[#2E2E2E]/80">
                You may request deletion of your account and associated data at any time, subject to legal and contractual requirements.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-[#2E2E2E]">
                7. Your Rights and Choices
              </h2>
              <p className="mb-4 text-[#2E2E2E]/80">
                You have the following rights regarding your personal information:
              </p>
              <ul className="mb-6 text-[#2E2E2E]/80 list-disc list-inside space-y-2">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                <li><strong>Objection:</strong> Object to certain processing activities</li>
                <li><strong>Restriction:</strong> Request limitation of data processing</li>
                <li><strong>Withdrawal:</strong> Withdraw consent for data processing</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-[#2E2E2E]">
                8. Cookies and Tracking Technologies
              </h2>
              <p className="mb-4 text-[#2E2E2E]/80">
                We use cookies and similar technologies to:
              </p>
              <ul className="mb-6 text-[#2E2E2E]/80 list-disc list-inside space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze website usage and performance</li>
                <li>Provide personalized content and recommendations</li>
                <li>Ensure security and prevent fraud</li>
              </ul>
              <p className="mb-6 text-[#2E2E2E]/80">
                You can control cookie settings through your browser preferences. However, disabling certain cookies may affect the functionality of our services.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-[#2E2E2E]">
                9. Third-Party Services
              </h2>
              <p className="mb-4 text-[#2E2E2E]/80">
                Our services may integrate with third-party platforms and services:
              </p>
              <ul className="mb-6 text-[#2E2E2E]/80 list-disc list-inside space-y-2">
                <li>Social media platforms (Facebook, Instagram, Twitter)</li>
                <li>Payment processors (Stripe, PayPal)</li>
                <li>Analytics services (Google Analytics)</li>
                <li>Cloud storage and hosting providers</li>
              </ul>
              <p className="mb-6 text-[#2E2E2E]/80">
                These third-party services have their own privacy policies. We encourage you to review their policies before using these integrations.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-[#2E2E2E]">
                10. International Data Transfers
              </h2>
              <p className="mb-4 text-[#2E2E2E]/80">
                Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for international data transfers, including:
              </p>
              <ul className="mb-6 text-[#2E2E2E]/80 list-disc list-inside space-y-2">
                <li>Standard contractual clauses</li>
                <li>Adequacy decisions</li>
                <li>Other appropriate safeguards as required by law</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-[#2E2E2E]">
                11. Children's Privacy
              </h2>
              <p className="mb-6 text-[#2E2E2E]/80">
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-[#2E2E2E]">
                12. Changes to This Privacy Policy
              </h2>
              <p className="mb-4 text-[#2E2E2E]/80">
                We may update this Privacy Policy from time to time. We will notify you of any material changes by:
              </p>
              <ul className="mb-6 text-[#2E2E2E]/80 list-disc list-inside space-y-2">
                <li>Posting the updated policy on our website</li>
                <li>Sending you an email notification</li>
                <li>Displaying a notice in our application</li>
              </ul>
              <p className="mb-6 text-[#2E2E2E]/80">
                Your continued use of our services after any changes constitutes acceptance of the updated Privacy Policy.
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-[#2E2E2E]">
                13. Contact Us
              </h2>
              <p className="mb-6 text-[#2E2E2E]/80">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <p className="mb-6 text-[#2E2E2E]/80">
                <strong>Email:</strong> services@atsnai.com<br />
                <strong>Address:</strong> Gala Magnus, 314, Safal Parisar Rd, South Bopal, Bopal, Ahmedabad, Gujarat 380057
              </p>

              <h2 className="text-2xl font-semibold mb-4 text-[#2E2E2E]">
                14. Legal Basis for Processing (EU/EEA Users)
              </h2>
              <p className="mb-4 text-[#2E2E2E]/80">
                For users in the European Union and European Economic Area, we process your personal information based on:
              </p>
              <ul className="mb-6 text-[#2E2E2E]/80 list-disc list-inside space-y-2">
                <li><strong>Consent:</strong> When you explicitly agree to data processing</li>
                <li><strong>Contract:</strong> To provide our services and fulfill agreements</li>
                <li><strong>Legitimate Interest:</strong> To improve our services and ensure security</li>
                <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 text-[#2E2E2E]">
                15. California Privacy Rights (CCPA)
              </h2>
              <p className="mb-4 text-[#2E2E2E]/80">
                California residents have additional rights under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="mb-6 text-[#2E2E2E]/80 list-disc list-inside space-y-2">
                <li>Right to know what personal information is collected and how it's used</li>
                <li>Right to delete personal information</li>
                <li>Right to opt-out of the sale of personal information</li>
                <li>Right to non-discrimination for exercising privacy rights</li>
              </ul>
              <p className="mb-6 text-[#2E2E2E]/80">
                To exercise these rights, please contact us at services@atsnai.com.
              </p>

              <p className="mb-6 text-[#2E2E2E]/80 text-sm">
                This Privacy Policy is effective as of the date listed above and applies to all users of atsn ai services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;