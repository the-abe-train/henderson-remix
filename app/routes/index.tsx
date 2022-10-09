import Layout from "~/layouts/Layout";
import Scales from "~/images/icons/scales.svg";
import Globe from "~/images/icons/globe.svg";
import Computer from "~/images/icons/laptop.svg";
import Maple from "~/images/icons/maple.svg";
import Calendar from "~/images/icons/calendar.svg";
import Document from "~/images/icons/document.svg";
import Mail from "~/images/icons/mail.svg";
import Phone from "~/images/icons/phone.svg";
import mapToOffice from "~/images/screenshots/map_to_office.png";
import banners from "~/styles/banners.css";

import { Quote } from "~/lib/schemas";
import Carousel from "~/components/Carousel";
import { LinksFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import React from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: banners },
];

const servicesBrief = [
  {
    name: "ACT Certified Transcriptions",
    desc: "Courtroom proceedings, police DVDs, 911 calls, personal cell phone calls/videos.",
    icon: <img src={Scales} width={75} />,
  },
  {
    name: "Depositions & Examinations",
    desc: "In-house, at your location, or via Zoom conference.",
    icon: <img src={Document} width={75} />,
  },
  {
    name: "Court Reporting",
    desc: "Accurate and clear courtroom recordings at the OCJ and SCJ level.",
    icon: <img src={Computer} width={75} />,
  },
  {
    name: "Year-round Operations",
    desc: "Services are available 365 days a year.",
    icon: <img src={Calendar} width={75} />,
  },
  {
    name: "Multilingual",
    desc: "All our services are available in English and French. Other language options available. Contact us for further information.",
    icon: <img src={Globe} width={75} />,
  },
  {
    name: "Nationwide Services",
    desc: "In-person services across Ontario, digital services Canada-wide.",
    icon: <img src={Maple} width={75} />,
  },
];

const quotes: Quote[] = [
  {
    name: "Alexei Zaitsev, Esq.",
    org: "Mass Tsang LLP",
    quote: `“Whether I need a transcript for an urgent bail review or an appeal, I can trust that my transcripts will always be delivered on time.  Most importantly, I can trust that my transcripts are always accurate. The customer service is always top notch - prompt, courteous, responsive, and attentive.  You can’t go wrong with choosing Henderson Reporting for all your transcription needs!”`,
  },
  {
    name: "Robert Karrass, Esq.",
    org: "Karrass Law",
    quote: `“I've used Henderson Reporting & Transcribing Inc. on a number of occasions.  They are professional, very reliable, and have excellent turnaround time for transcripts.  I will absolutely use them again and I highly recommend them for all your court reporting needs.”`,
  },
];

export default function IndexPage() {
  return (
    <Layout page="Home">
      <section
        className={`home-banner p-inside h-64 md:h-[350px] shadow-inner z-0`}
      >
        <div
          className="flex flex-col w-fit justify-between h-56 md:pt-12
        sm:block sm:space-y-10"
        >
          <div>
            <h1 className="text-4xl md:text-5xl text-teal-800 font-header font-bold">
              Reporting & Transcriptions
            </h1>
            <p className="md:text-lg sm:my-5">
              Based in Toronto, available across Canada
            </p>
          </div>
          <Link to="/contact" className="mx-auto ">
            <button
              style={{ border: "1px solid green" }}
              className="sm:block sm:mx-auto
        text-white bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700
        hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 
        font-bold rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Book a Free Consultation
            </button>
          </Link>
        </div>
      </section>
      <section className="space-y-4 px-4 max-w-4xl mx-auto">
        <hr className="w-1/2 mx-auto" />
        <p className="text-center">
          <b>Henderson Reporting & Transcribing Inc.</b> We uphold a guaranteed
          standard of accuracy, efficiency, and security.
        </p>
        <hr className="w-1/2 mx-auto" />
      </section>
      <section className="px-4 max-w-4xl mx-auto">
        <h2 className="font-header text-3xl font-bold">What we do</h2>
        <div className="my-6 grid grid-cols-3 gap-y-6 md:grid-cols-9 auto-cols-min">
          {servicesBrief.map(({ name, desc, icon }) => {
            return (
              <React.Fragment key={name}>
                <div
                  key={name}
                  className="col-span-1 justify-self-center self-center"
                >
                  {icon}
                </div>
                <div className="col-span-2">
                  <h3 className="text-lg font-bold self-end">{name}</h3>
                  <p>{desc}</p>
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <Link to="/services" className="mt-4 underline">
          See all services
        </Link>
      </section>

      <Carousel quotes={quotes} title="Our Clients" image={true} />

      <section className="p-inside px-4 space-y-4 d:space-y-0">
        <h2 className="font-header text-3xl font-bold">How to Find Us</h2>
        <div className="md:flex space-y-4 md:space-y-0 md:space-x-4">
          <img
            src={mapToOffice}
            alt="light logo"
            className="border-2 border-black md:flex-grow md:h-60 w-1/3 self-center"
          />
          <div className="md:w-1/3 space-y-4">
            <div>
              <h3 className="text-lg font-bold leading-5 mb-1">
                Conveniently located at Yonge & Sheppard
              </h3>
              <p>1901-5000 Yonge Street</p>
              <p>North York, ON, M2N 7E9</p>
            </div>
            <div>
              <h3 className="text-lg font-bold">Office Hours</h3>
              <div className="grid">
                <p>Monday to Friday 8:00 a.m. to 5:00 p.m.</p>
                <p> (Weekend availability upon request)</p>
              </div>
            </div>
          </div>
          <div className="md:w-1/3 space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <p>Your first consultation is free!</p>
            <p className="m-2 text-sm">
              <img src={Mail} alt="mail" className="inline mx-2" />
              jennifer@hendersonreporting.com
            </p>
            <p className="m-2 text-sm">
              <img src={Phone} alt="phone" className="inline mx-2" />
              416-471-0699
            </p>
            <Link to="/contact" className="mx-auto ">
              <button
                className="w-fit mx-auto block
           text-white font-bold bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700
           file:hover:bg-gradient-to-br focus:ring-4 focus:ring-teal-300 
           file:font-bold rounded-lg text-sm px-5 py-2.5 text-center
           border border-green-800"
              >
                Book a Consultation Today
              </button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
