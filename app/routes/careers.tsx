import Carousel from "~/components/Carousel";
import Layout from "~/layouts/Layout";
import banners from "~/styles/banners.css";
import { LinksFunction } from "@remix-run/node";
import canadaCourt from "~/images/stock/canada court.jpg";
import courtRoom from "~/images/stock/writer.jpg";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: banners },
];

const quotes = [
  {
    name: "Shannon Bardin",
    org: "Courtroom Monitor",
    quote: `“Working at Henderson Reporting and Transcribing Inc. for three out of the four years of my undergraduate education has provided me with the experience and practical knowledge that aided me in getting into law school and succeeding once I was there. The position allowed me to connect with judges and lawyers that no mentorship program could have provided me with, and I was being compensated for doing it. Henderson Reporting and Transcribing Inc. is truly a wonderful place to work for students interested in the legal field.”`,
  },
  {
    name: "Jennifer Grabel",
    org: "Director",
    quote: `“I am always happy to assist my interns with the next level of their career. They have been very successful in securing spots in law school or full-time positions within the Ministry of the Attorney General.  I take pride in watching my young staff climb the ladder of success.”`,
  },
  {
    name: "Lily Yang",
    org: "Courtroom Monitor",
    quote: `“I worked at Henderson Reporting and Transcribing throughout my undergraduate career, and I am proud to say that this is the best work experience I have had. It is eye-opening for me to witness and participate in the court proceedings that no other jobs or textbooks can teach you. I had the opportunity to connect with judges and lawyers and really understand the law more in-depth. I urge any students who are interested in the legal field to work at Henderson Reporting and Transcribing. We received a great training program before we start. Other seniors were always happy to help newcomers. We have such a great working environment, and the job also gave me the chance to connect with other students who are interested in the same path. More importantly, the management team really cares about their employees. My manager was extremely accommodating to my busy school schedule. Through my time working with Jennifer, I have always felt motivated to work and received immersive support from her. She is also extremely protective of us and gave clear, direct and consistent communication with her employees. I urge any students who are interested in the legal field to join Henderson Reporting. This is the proudest working experience on my resume. The skills I learned from this role and working under Henderson Reporting are applicable to any other fields as well.”`,
  },
];

export default function CareersPage() {
  return (
    <Layout page="Careers">
      <section
        className="careers-banner p-inside flex flex-col
        justify-between shadow-inner relative"
      >
        <h1 className="text-4xl text-teal-100 font-header font-bold absolute bottom-0">
          Careers
        </h1>
      </section>
      <section className="p-inside">
        <h2 className="font-header text-2xl font-bold mb-4">Open Roles</h2>
        <div className="space-y-4 sm:space-y-0 sm:flex justify-between">
          <div
            className="p-4 space-y-4 drop-shadow-xl bg-green-100 rounded 
        max-w-sm border-[1px] border-black h-min"
          >
            <img
              src={canadaCourt}
              alt="Court room"
              height={250}
              className="drop-shadow-md rounded mx-auto block"
            />
            <h3 className="font-header text-xl font-bold">Courtroom Monitor</h3>
            <div>
              <h3 className="font-bold">Job Description</h3>
              <ul className="list-disc list-inside">
                <li>On-call</li>
                <li>
                  Responsible for recording/note-taking in a courthouse using
                  Liberty Court Recorder
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Acceptance Criteria</h3>
              <ul className="list-disc list-inside">
                <li>1st to 3rd year undergraduate students</li>
                <li>Full day availability 2-4 days per week year-round</li>
                <li>Must be fluent in English</li>
                <li>Cannot have a criminal record or outstanding warrants</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Assets (not required)</h3>
              <ul className="list-disc list-inside">
                <li>Access to a car</li>
                <li>Weekend availability</li>
              </ul>
            </div>
          </div>
          <div
            className="p-4 space-y-4 drop-shadow-xl bg-green-100 
        h-min rounded max-w-sm border-[1px] border-black"
          >
            <img
              src={courtRoom}
              alt="Court room"
              height={250}
              className="drop-shadow-md rounded mx-auto block"
            />
            <h3 className="font-header text-xl font-bold">
              Certified Transcriptionist
            </h3>
            <div>
              <h3 className="font-bold">Job Description</h3>
              <ul className="list-disc list-inside">
                <li>
                  Use a Windows based computer and Microsoft Word to type up
                  court proceedings from recording media
                </li>
                <li>Pay is based on completed pages and not hours worked</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">
                Acceptance Criteria (same applies to English and French)
              </h3>
              <ul className="list-disc list-inside">
                <li>ACT Certified</li>
                <li>
                  Access to a computer with Microsoft Office and high speed
                  internet
                </li>
                <li>Excellent grammar and attention to detail</li>
                <li>Must have ability to listen to difficult case matter</li>
                <li>Cannot have a criminal record or outstanding warrants</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold">Assets (not required)</h3>
              <ul className="list-disc list-inside">
                <li>Access to a car</li>
                <li>Weekday and/or weekend availability</li>
              </ul>
            </div>
          </div>
        </div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLScPQjzhhFtrR41tpTScinYMkFzCHDHxmmOnqFYcI_Y5LqxTsg/viewform">
          <button
            className="w-fit mx-auto block
            text-white font-bold bg-gradient-to-r from-teal-500 via-teal-600
            to-teal-700
            file:hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 
            file:font-bold rounded-lg text-lg px-5 py-2.5 text-center
            border border-green-800 my-8"
          >
            Click here to apply!
          </button>
        </a>
      </section>
      <Carousel quotes={quotes} title={"Employee Testimonials"} />
      <section className="p-inside"></section>
    </Layout>
  );
}
