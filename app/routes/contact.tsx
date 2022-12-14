import Layout from "../layouts/Layout";

import Mail from "../images/icons/mail.svg";
import Phone from "../images/icons/phone.svg";
import MapImage from "../images/icons/map.svg";

import mapToOffice from "../images/screenshots/map_to_office.png";

import banners from "~/styles/banners.css";
import { ActionArgs, json, LinksFunction, redirect } from "@remix-run/node";
import { Form, useActionData, useTransition } from "@remix-run/react";
import { sendEmail } from "~/util/nodemailer";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: banners },
];

// import type { ActionArgs } from "@remix-run/node";
// export async function action({ request }: ActionArgs) {
//   // console.log(request);
//   try {
//     const formData = await request.formData();
//     const firstName = formData.get("first-name");
//     const lastName = formData.get("last-name");
//     const phone = formData.get("phone");
//     const email = formData.get("email");
//     const subject = formData.get("subject");
//     const text = formData.get("text");
//     const baseUrl = request.url;
//     const body = `bot-field=&form-name=contact&first-name=${firstName}&last-name=${lastName}&phone=${phone}&email=${email}&subject=${subject}&text=${text}`;
//     const response = await fetch(`${baseUrl}`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//       body,
//     });
//     if (response.status === 200) return json({ message: "Form submitted!" });
//   } catch (e) {
//     return json({
//       message:
//         "An error occurred. Please reach out to Henderson Reporting by email at jennifer@hendersonreporting.com",
//     });
//   }
//   return json({
//     message:
//       "An error occurred. Please reach out to Henderson Reporting by email at jennifer@hendersonreporting.com",
//   });
// }

export async function action({ request }: ActionArgs) {
  const getEntry = (formData: FormData, entry: string) => {
    const value = formData.get(entry);
    if (typeof value !== "string" || !value) {
      return "";
    }
    return value;
  };
  const formData = await request.formData();
  const firstName = getEntry(formData, "first-name");
  const lastName = getEntry(formData, "last-name");
  const phone = getEntry(formData, "phone");
  const email = getEntry(formData, "email");
  const subject = getEntry(formData, "subject");
  const text = getEntry(formData, "text");

  const errors = {
    email: email ? null : "Email is required",
    text: text ? null : "Message is required",
    firstName: firstName ? null : "First name is required",
    lastName: lastName ? null : "Last name is required",
    phone: phone ? null : "Phone is required",
    subject: subject ? null : "Subject is required",
  };
  const hasErrors = Object.values(errors).some(Boolean);
  if (hasErrors) {
    return json({
      ...errors,
      message: "Please make sure all fields are filled out.",
    });
  }

  const emailSubject = "New email from company website";
  const emailBody = `<p>Name: ${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Phone: ${phone}</p>
  <p>Subject: ${subject}</p>
  <p>${text}</p>`;

  console.log(emailBody);

  try {
    // Takes too long to actually wait for the response
    sendEmail({ emailSubject, emailBody });
    const finish = () => {
      return new Promise<Record<"message", string>>((res) => {
        setTimeout(() => res({ message: "Email sent!" }), 2000);
      });
    };
    const x = await finish();
    return json(x);
  } catch (e) {
    return json({ message: "An error occurred, please try again later." });
  }
}

export default function ContactPage() {
  const actionData = useActionData<typeof action>();
  const transition = useTransition();
  return (
    <Layout page="Contact">
      <section
        className="contact-banner p-inside  h-64 flex flex-col
        justify-between shadow-inner relative"
      >
        <h1 className="text-4xl text-teal-100 font-header font-bold absolute bottom-0 hidden sm:inline">
          Contact Us
        </h1>
      </section>
      <section className="p-inside space-y-4 sm:space-y-8">
        <p>
          Your first consultation is free! Use the form below to send us a
          message and we will get back to you as soon as possible.
        </p>

        <div
          className="grid w-2/3 items-center gap-4 sm:gap-8 m-4
        sm:flex sm:w-full mx-auto sm:justify-around"
        >
          <div className="flex items-center space-x-2">
            <img src={Mail} alt="mail" className="inline" />
            <p className="col-start-2">jennifer@hendersonreporting.com</p>
          </div>
          <div className="flex items-center space-x-2">
            <img src={Phone} alt="phone" className="inline" />
            <p>416-471-0699</p>
          </div>
          <div className="flex items-center space-x-2">
            <img src={MapImage} alt="map" className="inline" height={24} />
            <div>
              <p>1901 - 5000 Yonge Street</p>
              <p>North York, ON, M2N 7E9</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row sm:space-x-16 justify-between">
          <Form
            method="post"
            // action="/?contact"
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
            className="grid my-8 sm:my-0 grid-cols-2 gap-2"
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <input
              type="text"
              placeholder="First Name"
              className="border-2 border-gray-600 p-2 rounded-md"
              name="first-name"
              required
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border-2 border-gray-600 p-2 rounded-md"
              name="last-name"
              required
            />
            <input
              type="tel"
              placeholder="Phone number"
              className="border-2 border-gray-600 p-2 rounded-md"
              name="phone"
            />
            <input
              type="email"
              placeholder="Email"
              className="border-2 border-gray-600 p-2 rounded-md"
              name="email"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="border-2 border-gray-600 p-2 rounded-md col-span-2"
              name="subject"
              required
            />
            <textarea
              placeholder="How may we help you?"
              className="border-2 border-gray-600 p-2 col-span-2 h-48 resize-y"
              name="text"
              required
            />
            <button
              style={{ border: "1px solid green" }}
              type="submit"
              className="w-fill sm:w-1/3 sm:mx-auto col-span-2 text-white 
        bg-gradient-to-r from-teal-500 via-teal-600 to-teal-700
        disabled:bg-none
        disabled:bg-teal-700
        hover:bg-gradient-to-br focus:ring-4 
        focus:ring-teal-300 
        font-bold rounded-lg text-sm px-10 py-2.5 text-center"
              disabled={
                Boolean(actionData?.message) || transition.state !== "idle"
              }
            >
              Send
            </button>
            <p className="col-span-2">{actionData?.message}</p>
            {/* {actionData?.message && <p>{}</p>} */}
          </Form>
          <img
            src={mapToOffice}
            width={300}
            alt="light logo"
            className="border-2 border-black md:flex-grow md:h-60 self-center
            object-cover h-auto max-w-lg"
          />
        </div>
      </section>
    </Layout>
  );
}
