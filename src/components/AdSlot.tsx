/**
 * AdSlot — placeholder ad container.
 *
 * The site's AdSense publisher ID (ca-pub-1515457038220036) is already wired in:
 *   - The AdSense loader script is loaded site-wide from src/app/layout.tsx
 *   - public/ads.txt declares the publisher line Google's crawler checks
 *   - A google-adsense-account verification meta tag is set in layout.tsx
 *
 * Once the account is approved, Auto ads (if enabled in the AdSense dashboard)
 * will start placing ads automatically without any further code changes.
 *
 * To place a manual, fixed ad unit in a specific spot like this one instead:
 *   1. Create an ad unit in the AdSense dashboard and copy its data-ad-slot ID
 *   2. Replace the placeholder <div> below with:
 *      <ins className="adsbygoogle" style={{ display: "block" }}
 *           data-ad-client="ca-pub-1515457038220036"
 *           data-ad-slot="YOUR_AD_SLOT_ID"
 *           data-ad-format="auto" data-full-width-responsive="true" />
 *      then push it client-side: (adsbygoogle = window.adsbygoogle || []).push({})
 */
export default function AdSlot({ label = "Advertisement" }: { label?: string }) {
  return (
    <div className="my-8 flex items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 py-8 text-xs font-medium uppercase tracking-widest text-slate-400">
      {label} slot — ads load once AdSense is approved
    </div>
  );
}
