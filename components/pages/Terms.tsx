import React from "react";

const TermsAndPrivacy: React.FC = () => (
  <div className="flex flex-col items-center text-start gap-2 w-full max-w-screen-lg px-4 py-6">
    <div className="w-full max-h-screen overflow-y-auto">
      <h1>Terms and Conditions</h1>
      <br/>
      <h2>1. Introduction</h2>
      <p>
        These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of our
        website (&ldquo;Site&rdquo;) and services (&ldquo;Services&rdquo;). By
        using our Site and Services, you agree to comply with these Terms.
      </p>
      <br/>
      <h2>2. Use of the Site</h2>
      <ul>
        <li>You must be at least 18 years old to use this Site.</li>
        <li>You agree to use the Site only for lawful purposes.</li>
        <li>
          You agree not to use the Site in a way that may impair the
          performance, corrupt the content, or otherwise reduce the overall
          functionality of the Site.
        </li>
      </ul>
      <br/>
      <h2>3. Intellectual Property</h2>
      <p>
        All content on the Site, including text, graphics, logos, and images, is
        the property of [Your Company Name] and is protected by intellectual
        property laws. You may not reproduce, distribute, or create derivative
        works from any content on the Site without our express written
        permission.
      </p>
      <br/>
      <h2>4. User Accounts</h2>
      <p>
        You are responsible for maintaining the confidentiality of your account
        information. You agree to notify us immediately of any unauthorized use
        of your account.
      </p>
      <br/>
      <h2>5. Limitation of Liability</h2>
      <p>
        The Site and Services are provided &quot;as is&quot; without any
        warranties of any kind. [Your Company Name] is not liable for any
        direct, indirect, incidental, or consequential damages arising from your
        use of the Site or Services.
      </p>
      <br/>
      <h2>6. Changes to Terms</h2>
      <p>
        We reserve the right to update these Terms at any time. Changes will be
        posted on this page, and it is your responsibility to review these Terms
        regularly.
      </p>
      <br/>
      <h2>7. Governing Law</h2>
      <p>
        These Terms are governed by and construed in accordance with the laws of
        [Your Country/State].
      </p>
      <h2>8. Contact Information</h2>
      {/* TODO: check about the contact */}
      <p>
        If you have any questions about these Terms, please contact us at
        info@burnerbuds.de.
      </p>
    </div>
    <br />
    <div className="w-full max-h-screen overflow-y-auto">
      <h1>Privacy Policy</h1>
      <br/>
      <h2>1. Introduction</h2>
      <p>
        We are committed to protecting your privacy. This Privacy Policy
        explains how we collect, use, and share your personal information.
      </p>
      <br/>
      <h2>2. Information We Collect</h2>
      <ul>
        <li>
          Personal data you provide: Name, email address, phone number, etc.
        </li>
        <li>
          Automatically collected data: IP address, browser type, operating
          system, etc.
        </li>
        <li>
          Cookies and similar technologies: Used to enhance your experience on
          our Site.
        </li>
        <li>
          Location data: We only collect and use your location data to provide
          our Services. This includes geolocation data from your device.
        </li>
      </ul>
      <br/>
      <h2>3. How We Use Your Information</h2>
      <ul>
        <li>To provide and improve our Services.</li>
        <li>To communicate with you about updates, offers, and promotions.</li>
        <li>To analyze Site usage and improve our content and offerings.</li>
      </ul>
      <br/>
      <h2>4. Legal Basis for Processing</h2>
      <p>
        We process your personal data based on your consent, the necessity to
        perform a contract, compliance with legal obligations, or our legitimate
        interests.
      </p>
      <br/>
      <h2>5. Sharing Your Information</h2>
      <ul>
        <li>We do not sell your personal information to third parties.</li>
        <li>
          We may share your information with service providers who assist us in
          operating our Site and Services.
        </li>
        <li>
          We may disclose your information if required by law or to protect our
          rights.
        </li>
      </ul>
      <br/>
      <h2>6. Google AdSense</h2>
      <p>
        We use Google AdSense to serve ads on our Site. Google may use cookies
        and collect information about your visits to provide personalized ads.
        For more information about Google AdSense and how to opt out, visit{" "}
        <a
          href="https://policies.google.com/technologies/ads"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google AdSense Privacy & Terms
        </a>
        .
      </p>
      <br/>
      <h2>7. Your Rights</h2>
      <ul>
        <li>
          You have the right to access, rectify, or erase your personal data.
        </li>
        <li>
          You have the right to object to or restrict the processing of your
          data.
        </li>
        <li>You have the right to data portability.</li>
      </ul>
      <br/>
      <h2>8. Data Retention</h2>
      <p>
        We retain your personal data only for as long as necessary to fulfill
        the purposes for which it was collected and to comply with legal
        obligations.
      </p>
      <br/>
      <h2>9. Security</h2>
      <p>
        We implement appropriate technical and organizational measures to
        protect your personal data against unauthorized access, loss, or misuse.
      </p>
      <br/>
      <h2>10. Changes to this Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page, and it is your responsibility to review this
        Privacy Policy regularly.
      </p>
      <br/>
      <h2>11. Contact Information</h2>
      {/* <TODO: check about the contact */}
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at info@burnerbuds.de.
      </p>
      <br/>
      <h2>12. Complaints</h2>
      <p>
        If you believe your privacy rights have been violated, you have the
        right to file a complaint with a supervisory authority in your country.
      </p>
    </div>
  </div>
);

export default TermsAndPrivacy;
