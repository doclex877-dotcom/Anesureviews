/**
 * AdSlot — placeholder ad container.
 *
 * IMPORTANT: No AdSense publisher ID or ad unit ID is baked into this project.
 * This site uses its own, separate AdSense account from any other property.
 *
 * To go live with real ads once the site is AdSense-approved:
 *   1. Add the AdSense script to src/app/layout.tsx <head>:
 *      <script
 *        async
 *        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
 *        crossOrigin="anonymous"
 *      />
 *   2. Replace the placeholder <div> below with the real <ins class="adsbygoogle">
 *      unit and call (adsbygoogle = window.adsbygoogle || []).push({}) client-side.
 *   3. Create /public/ads.txt with the real publisher line, e.g.
 *      google.com, pub-XXXXXXXXXXXXXXXX, DIRECT, f08c47fec0942fa0
 */
export default function AdSlot({ label = "Advertisement" }: { label?: string }) {
  return (
    <div className="my-8 flex items-center justify-center rounded-lg border border-dashed border-slate-300 bg-slate-50 py-8 text-xs font-medium uppercase tracking-widest text-slate-400">
      {label} slot — ads load once AdSense is approved
    </div>
  );
}
