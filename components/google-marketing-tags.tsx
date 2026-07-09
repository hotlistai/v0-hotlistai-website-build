import Script from "next/script"

const HOTLIST_ENGINE_GA_MEASUREMENT_ID = "G-VFM0J3WGTN"

const rawGaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
const rawGtmId = process.env.NEXT_PUBLIC_GTM_ID

const isGaMeasurementId = (measurementId?: string): measurementId is string =>
  Boolean(measurementId && /^G-[A-Z0-9]+$/.test(measurementId))

const gaMeasurementIds = Array.from(
  new Set([HOTLIST_ENGINE_GA_MEASUREMENT_ID, rawGaMeasurementId].filter(isGaMeasurementId)),
)
const gtmId = rawGtmId?.startsWith("GTM-") ? rawGtmId : undefined

export function GoogleAnalyticsHeadTags() {
  return (
    <>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${HOTLIST_ENGINE_GA_MEASUREMENT_ID}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            ${gaMeasurementIds.map((measurementId) => `gtag('config', '${measurementId}');`).join("\n            ")}
          `,
        }}
      />
    </>
  )
}

export function GoogleMarketingTags() {
  return (
    <>
      {gtmId ? (
        <>
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer',${JSON.stringify(gtmId)});
            `}
          </Script>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
              title="Google Tag Manager"
            />
          </noscript>
        </>
      ) : null}
    </>
  )
}
