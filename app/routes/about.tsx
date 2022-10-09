import { LinksFunction } from "@remix-run/node";
import Layout from "../layouts/Layout";
import banners from "~/styles/banners.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: banners },
];

export default function AboutPage() {
  return (
    <Layout page="About Us">
      <section
        className="about-banner p-inside
        h-64 flex flex-col justify-between shadow-inner relative"
      >
        <h1 className="text-4xl text-teal-100 font-header font-bold absolute bottom-0">
          About Us
        </h1>
      </section>
      <section className="p-inside space-y-4">
        <p>
          {" "}
          Henderson Reporting & Transcribing Inc. incorporated in 2004 to
          service the Ministry of the Attorney General and private law firms
          with accurate, secure, and efficient audio recordings and transcripts.
          We pride ourselves on our small operation of 30-40 staff, finding a
          positive balance between a supportive workplace culture and the fire
          for career growth.
        </p>
        <p>
          Our team of courtroom monitors can be available in as little as 30
          minutes notice for court. They are well trained, accurate,
          professional, and have up-to-date training on the latest software.
          They each hold security clearance through Triton Canada and have
          signed confidentiality agreements within our firm.
        </p>
        <p>
          Our team of transcriptionists are certified through the Authorized
          Court Transcriptionist (ACT) of Ontario Association. They have been
          specially trained to produce verbatim transcriptions of court
          proceedings and other highly confidential recordings such as 911
          calls, police bodycam footage, cell phone calls, police video
          statements, and many other speech to text projects.{" "}
        </p>
      </section>
    </Layout>
  );
}
