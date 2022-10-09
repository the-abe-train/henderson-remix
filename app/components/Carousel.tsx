import { useEffect, useReducer, useState } from "react";
import Left from "~/images/icons/left.svg";
import Right from "~/images/icons/right.svg";
import { Quote } from "~/lib/schemas";
import Handshake from "~/images/stock/handshake.jpg";

type Props = { quotes: Quote[]; title: string; image?: boolean };

export default function Carousel({ quotes, title, image }: Props) {
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [quote, setQuote] = useState("");

  function reducer(state: number, action: "next" | "prev") {
    switch (action) {
      case "next":
        return state < quotes.length - 1 ? state + 1 : 0;
      case "prev":
        return state !== 0 ? state - 1 : quotes.length - 1;
      default:
        throw new Error();
    }
  }

  const [quoteIdx, dispatch] = useReducer(reducer, 0);
  useEffect(() => {
    setName(quotes[quoteIdx].name);
    setOrg(quotes[quoteIdx].org);
    setQuote(quotes[quoteIdx].quote);
  }, [quoteIdx]);

  return (
    <section className={`p-inside bg-teal-900 text-green-50 px-4 py-16`}>
      <h2 className="font-header text-3xl font-bold">{title}</h2>
      <div className="sm:flex sm:space-x-4">
        {image && (
          <img
            src={Handshake}
            alt="handshake"
            width={400}
            // aspectRatio={3 / 2}
            className="my-4 rounded-lg drop-shadow-lg"
          />
        )}
        <div
          className="relative space-y-20"
          style={{ width: image ? "80%" : "100%" }}
        >
          <blockquote className="py-3">{quote}</blockquote>
          <div className="flex justify-between">
            <div className="absolute bottom-4 left-0">
              <b>{name}</b>
              <br />
              <b>{org}</b>
            </div>
            <div className="flex w-24 my-auto space-x-12 absolute bottom-4 right-0">
              <img
                src={Left}
                className="cursor-pointer"
                height={30}
                width={20}
                onClick={() => dispatch("prev")}
              />
              <img
                src={Right}
                className="cursor-pointer"
                height={30}
                width={20}
                onClick={() => dispatch("next")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
