import { ReactElement } from "react";

const terms = [
  [
    "Terms",
    'Please read these Terms of Use ("Terms") carefully before accessing or using the service on the internet website located at ssytutor.org (the "Site"), which is operated by Global Share Support Youth Association ("GSSYA", "organization", "we", "us" or "our").',
  ],
  [
    "Binding Agreement",
    "This is a binding agreement between you and GSSYA. By using the Site, you agree to abide by these Terms of Use. If you don’t agree to any part of these Terms of Use, you must leave the Site and cease all use of it immediately. Your access to and use of the service and the Site is conditioned on your acceptance of and compliance with these Terms.",
  ],
  [
    "Audience Age",
    "These Terms apply to all individuals, including visitors, users and others, who access or use the Site and the service, regardless of age. If you are a parent or legal guardian and your children are under 18 years old, you not only give your consent to the Terms, also provide the consent on behalf of your children. You supervise your children's activities and grant your permission to allow your children to use the service and the Site in compliance with these Terms.",
  ],
  [
    "Privacy Policy",
    `We respect your privacy and are committed to protecting it.
    The organization may collect information that can be used to identify an individual ("User Data"), such as your name, phone number, image, video, email etc. We may collect User Data:
    from you and your children, either directly or indirectly;
    manually or automatically as you and your children access or use our service and the Site.
    We use information that we collect or that you and children provide to us, including any User Data, to present our service and its contents to you and others; provide you with information and service ; communicate with you about the changes of service; carry out our obligations and enforce our rights arising from any contracts entered into between you and us; use for any other purpose with your consent.
    We may process the User Data without your knowledge or consent, in compliance with the above rules, where this is required or permitted by law.
    We may disclose aggregated information and information that does not identify any individual, without restriction and your consent. We may disclose User Data:
    to fulfill the purpose for which you and your children provide it;
    to comply with any court order, law, or legal request;
    to enforce or apply our Terms and other contracts with you;
    to contractors, suppliers and business partners in support of our non-profit business under the Canada Not-for-profit Corporations Act;
    with your content;
    and if we believe disclosure is necessary or appropriate to protect the rights, property, or safety of GSSYA.
    We use advanced technology and security measures to protect your information from unauthorized access and help safeguard your User Data for appropriate use. The security and safety of your User Data depend on you too. You are responsible for keeping your information confidential. Never give your information to others. If you give or leak your information and other User Data to others, which enables unauthorized access to you on our Site and use of service, we are not responsible for the damage, loss and all the consequences caused by such an incident.`,
  ],
  [
    "Site Content",
    'Our Site allows you to post, display, perform, upload, or distribute information or content to the Site ("Site Content"), you grant the organization, its affiliates, officers, directors, and representatives a permanent, non-exclusive permit to use Site Content in connection with the operation of the businesses of the organization, its affiliates, officers, directors, and representatives, including without limitation, a right to copy, distribute, transmit, publicly display, publicly perform, reproduce, edit, translate and reformat Site Content. You are not seeking monetary compensation for any Site Content. You agree that the organization may publish or disclose your name in connection with your Site Content. By providing the Site Content, you warrant and represent that you own the rights to the Site Content or are otherwise authorized to post, distribute, display, perform, transmit, or otherwise distribute Site Content.',
  ],
  [
    "No Warranties",
    'WE HEREBY DISCLAIM ALL WARRANTIES. WE ARE MAKING THE SITE AVAILABLE "AS IS" WITHOUT WARRANTY OF ANY KIND. YOU ASSUME THE RISK OF ANY AND ALL DAMAGE OR LOSS FROM USE OF, OR INABILITY TO USE, THE SITE OR THE SERVICE. WE DO NOT WARRANT THAT THE SITE OR THE SERVICE WILL MEET YOUR REQUIREMENTS OR THAT THE OPERATION OF THE SITE OR THE SERVICE WILL BE UNINTERRUPTED OR ERROR-FREE.',
  ],
  [
    "Limited Liability",
    "OUR LIABILITY TO YOU IS LIMITED. TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL WE BE LIABLE FOR DAMAGES OF ANY KIND ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SITE OR ANY OTHER MATERIALS OR SERVICES PROVIDED TO YOU BY US. This limitation shall apply regardless of whether the damages arise out of breach of contract, tort, or any other legal theory or form of action.",
  ],
  [
    "Governing Law",
    "These Terms of Use shall be construed under and governed by the laws of Ontario and Canada, without reference to rules regarding conflicts of law.",
  ],
  [
    "Severability",
    "If, for whatever reason, a court of competent jurisdiction finds any term or condition in these Terms of Use to be unenforceable, all other terms and conditions will remain unaffected and in full force and effect.",
  ],
  [
    "Ammendments",
    "The organization reserves the right to amend these Terms at any time in our sole discretion. When the amendment is made, we will publish the notice on the Site.",
  ],
  [
    "Translation",
    "The Site may be translated to other languages by the translation service. You agree that the English text posted on the Site shall prevail in the case of a dispute.",
  ],
  ["Date", "November 2020"],
];

interface PageProps {}

export default function Page({}: PageProps): ReactElement {
  return (
    <div className="mt-16 p-5">
      <p className="font-bold text-2xl">Terms and Conditions</p>
      {terms.map(([title, content], index) => (
        <div key={index}>
          <p className="font-semibold">{title}</p>
          <p>{content}</p>
        </div>
      ))}
    </div>
  );
}
