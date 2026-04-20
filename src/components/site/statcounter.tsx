import Script from "next/script";

/**
 * Statcounter tracking snippet for annualtabletop.com.
 * Project ID + security token provided by Statcounter.
 *
 * Loads with `afterInteractive` so it never blocks initial render.
 * The <noscript> pixel is the fallback for users with JS disabled.
 */
export function Statcounter() {
  return (
    <>
      <Script id="statcounter-config" strategy="afterInteractive">
        {`var sc_project=13223164;
var sc_invisible=1;
var sc_security="6729842b";`}
      </Script>
      <Script
        id="statcounter-counter"
        src="https://www.statcounter.com/counter/counter.js"
        strategy="afterInteractive"
      />
      <noscript>
        <div className="statcounter">
          <a
            title="Web Analytics Made Easy - Statcounter"
            href="https://statcounter.com/"
            target="_blank"
            rel="noreferrer"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="statcounter"
              src="https://c.statcounter.com/13223164/0/6729842b/1/"
              alt="Web Analytics Made Easy - Statcounter"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </a>
        </div>
      </noscript>
    </>
  );
}
