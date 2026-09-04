#!/bin/bash
# Run this from your project root to see which required images are missing.
echo "Checking public/images/ against articles.ts..."
echo ""
missing=0
for f in \
  solar-power-banks-buying-guide \
  budget-smartphones-under-200-zimbabwe \
  smart-plugs-load-shedding \
  budget-wireless-earbuds-under-30 \
  fitness-trackers-everyday-zimbabweans \
  home-inverter-battery-backup-guide \
  budget-laptops-students-africa \
  smart-bulbs-worth-it-zimbabwe \
  dual-sim-phones-travelers-sa-zim \
  portable-solar-panels-off-grid-guide \
  budget-bluetooth-speakers-under-50 \
  smartwatch-vs-fitness-band \
  power-banks-for-long-load-shedding \
  budget-home-security-cameras \
  budget-tablets-online-learning \
  smart-home-starter-kit-guide \
  rechargeable-lanterns-torches-power-cuts \
  refurbished-vs-new-phones-zimbabwe \
  car-chargers-inverters-mobile-power \
  data-saving-apps-settings-smartphone
do
  if [ -f "public/images/$f.jpg" ]; then
    echo "OK      $f.jpg"
  else
    echo "MISSING $f.jpg"
    missing=$((missing+1))
  fi
done
echo ""
echo "$missing missing file(s)."
