/**
 * GreenGrid — Dynamic Blog Details Script
 * Reads ?id=... from the URL and dynamically renders the matching article content.
 */
(function() {
  'use strict';

  var articles = {
    'residential-guide': {
      title: "The Complete Guide to Residential Solar Panel Installation in 2026",
      category: "Comprehensive Guide",
      badgeIcon: '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>',
      date: "November 10, 2026",
      author: "GreenGrid Editorial Team",
      authorRole: "Renewable Energy Specialists & Field Engineers",
      authorInitials: "GG",
      readTime: "12 min read",
      image: "https://i.pinimg.com/1200x/20/52/30/20523000260126a702e60537e3a98f8e.jpg",
      fallbackImage: "../images/complete-guide-residential-solar-2026.jpg",
      lead: "Transitioning your home to solar power is one of the most impactful investments you can make toward energy self-sufficiency, financial predictability, and environmental stewardship. With advancements in photovoltaic cell efficiency and modern battery integration, residential solar has reached unprecedented levels of reliability and return on investment.",
      introParagraph2: "However, navigating roof orientation, capacity sizing, inverter options, and local permitting can seem daunting for first-time buyers. This comprehensive 2026 guide demystifies the entire journey, walking you through each stage from initial site assessment to continuous post-activation monitoring.",
      keyTakeaway: "A customized solar setup designed specifically around your roof geometry and seasonal energy consumption pattern delivers significantly higher yields than one-size-fits-all packages.",
      toc: [
        { id: "step-assessment", label: "1. Needs & Roof Assessment" },
        { id: "step-sizing", label: "2. Sizing & Equipment Selection" },
        { id: "step-installation", label: "3. The Installation Workflow" },
        { id: "step-commissioning", label: "4. Testing & Grid Interconnection" },
        { id: "step-maintenance", label: "5. Post-Activation Care" }
      ],
      sections: [
        {
          id: "step-assessment",
          heading: "1. Needs & Roof Assessment",
          content: "<p>Before placing a single mounting bracket, our certified energy auditors review past utility bills to map peak consumption periods. Roof structural integrity, pitch angle, shading from surrounding canopy, and azimuth orientation are accurately calculated using high-resolution drone mapping and shading simulations.</p>"
        },
        {
          id: "step-sizing",
          heading: "2. System Sizing & Equipment Selection",
          content: "<p>System capacity is sized to balance daily generation with nighttime demand. High-efficiency monocrystalline panels (exceeding 21% efficiency) maximize wattage per square foot, while smart hybrid inverters orchestrate simultaneous power flow to home circuits, battery reserves, and the public grid.</p>"
        },
        {
          quote: "Solar isn't just about generating electricity; it's about intelligent energy management that adapts seamlessly to your lifestyle while reducing dependency on unpredictable utility tariffs."
        },
        {
          id: "step-installation",
          heading: "3. The Installation Workflow",
          content: "<p>A standard residential rooftop installation is completed in 1 to 3 days by our licensed technicians:</p><ol><li><strong>Rafter Anchoring:</strong> Heavy-duty flashings and brackets are secured into structural roof trusses with watertight seals.</li><li><strong>Racking Assembly:</strong> Anodized lightweight aluminum rails are precision-leveled across the roof planes.</li><li><strong>Panel Fastening:</strong> Photovoltaic modules are mounted, grounded, and wired into optimized series/parallel strings.</li><li><strong>Electrical Conduit Run:</strong> Heavy-gauge UV-resistant conduits channel DC power safely down to the inverter location.</li></ol>"
        },
        {
          id: "step-commissioning",
          heading: "4. Testing & Grid Interconnection",
          content: "<p>Once mechanical installation finishes, our Master Electrician performs open-circuit voltage tests, polarity verifications, insulation resistance audits, and rapid-shutdown drills before activating the bi-directional net meter with the local utility.</p>"
        },
        {
          id: "step-maintenance",
          heading: "5. Post-Activation Care",
          content: "<p>Modern solar arrays contain zero moving parts, making ongoing maintenance remarkably low. Periodic washing with pure water and an annual check of inverter heat sinks and cable terminations ensure peak energy harvesting for 25+ years.</p>"
        }
      ],
      diagramLabel: "Architecture",
      diagramTitle: "How a Residential Solar System Works",
      diagramSubtitle: "A seamless journey from photon capture to household power distribution.",
      stats: [
        { val: "25+ Years", label: "Standard PV Module Service Life" },
        { val: "98.5%", label: "Peak Inverter Conversion Efficiency" },
        { val: "1–3 Days", label: "Average On-Site Installation Time*" }
      ],
      related: ["how-solar-works", "system-sizing", "battery-storage"]
    },

    'how-solar-works': {
      title: "How Solar Panels Convert Sunlight into Electricity",
      category: "How Solar Works",
      badgeIcon: '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>',
      date: "October 28, 2026",
      author: "Dr. Elena Vance",
      authorRole: "Lead Photovoltaic Systems Engineer",
      authorInitials: "EV",
      readTime: "7 min read",
      image: "https://i.pinimg.com/1200x/ac/3b/bb/ac3bbb55972fab96d20594eda5c68fc8.jpg",
      fallbackImage: "../images/how-solar-panels-convert-sunlight.jpg",
      lead: "Every hour, the sun bathes Earth with more energy than humanity consumes in an entire year. Modern photovoltaic (PV) modules harness this cosmic engine through solid-state physics, converting photons directly into usable electrical current without a single mechanical moving part.",
      introParagraph2: "Understanding the science behind solar generation helps homeowners appreciate why panel quality, cell manufacturing purity, and anti-reflective nanocoatings make a profound difference to real-world energy harvesting.",
      keyTakeaway: "Monocrystalline silicon wafers doped with phosphorus and boron create an internal electric field that knocks electrons free upon photon impact, generating steady direct current (DC).",
      toc: [
        { id: "step-pv-effect", label: "1. The Photovoltaic Effect" },
        { id: "step-pn-junction", label: "2. The Silicon P-N Junction" },
        { id: "step-dc-to-ac", label: "3. Direct Current to 240V AC" },
        { id: "step-cell-types", label: "4. Mono vs Polycrystalline" },
        { id: "step-temp-coefficient", label: "5. Temperature & Efficiency" }
      ],
      sections: [
        {
          id: "step-pv-effect",
          heading: "1. The Photovoltaic Effect",
          content: "<p>When sunlight strikes a photovoltaic cell, light packets called photons penetrate the protective anti-reflective glass and collide with atoms in the semiconductor layer. If the photon possesses sufficient energy, it dislodges an electron from its covalent bond, creating a mobile electron-hole pair.</p>"
        },
        {
          id: "step-pn-junction",
          heading: "2. The Silicon P-N Junction",
          content: "<p>Each solar cell is manufactured by fusing two differently doped silicon layers: n-type (with excess electrons) and p-type (with electron vacancies or holes). The boundary between them forms a permanent electrostatic field that forces dislodged electrons to flow exclusively in one direction toward thin silver busbars on the surface.</p>"
        },
        {
          quote: "Clean photon-to-electron conversion is the closest technology gets to pure alchemy — silent, emission-free, and operating reliably for over three decades."
        },
        {
          id: "step-dc-to-ac",
          heading: "3. Direct Current to 240V AC",
          content: "<p>The electrons collected by the busbars travel as Direct Current (DC) down heavy-gauge solar cables into a solid-state inverter. The inverter switches the current back and forth 50 or 60 times per second, synthesizing a clean 240V sinusoidal Alternating Current (AC) wave identical to utility electricity.</p>"
        },
        {
          id: "step-cell-types",
          heading: "4. Monocrystalline vs Polycrystalline Cells",
          content: "<p>Modern Tier-1 panels exclusively utilize monocrystalline silicon grown from a single continuous cylindrical crystal ingot. By eliminating crystal grain boundaries, electrons move with zero friction, allowing modern panels to surpass 22.5% lab-verified efficiency compared to 15% in legacy poly arrays.</p>"
        },
        {
          id: "step-temp-coefficient",
          heading: "5. Temperature & Real-World Efficiency",
          content: "<p>Counter-intuitively, solar panels operate at maximum efficiency in bright, cold sunshine rather than scorching heat. High-grade modules maintain a temperature coefficient of -0.29%/°C, ensuring that roof ventilation channels preserve high voltage generation even on 100°F summer afternoons.</p>"
        }
      ],
      diagramLabel: "Quantum Physics",
      diagramTitle: "Photovoltaic Energy Conversion Cycle",
      diagramSubtitle: "Tracing photon collisions from wafer excitation to AC power delivery.",
      stats: [
        { val: "22.8%", label: "Monocrystalline Peak Cell Efficiency" },
        { val: "0.00s", label: "Zero Moving Parts or Mechanical Wear" },
        { val: "30+ Yrs", label: "Silicon Crystalline Stability" }
      ],
      related: ["residential-guide", "system-sizing", "battery-storage"]
    },

    'system-sizing': {
      title: "How to Choose the Right Solar System Size for Your Home",
      category: "System Sizing",
      badgeIcon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>',
      date: "October 15, 2026",
      author: "Marcus Thorne",
      authorRole: "Solar Design Architect",
      authorInitials: "MT",
      readTime: "9 min read",
      image: "https://i.pinimg.com/1200x/68/9f/1e/689f1e1ae3fa09ddbdff6e0ecb9be7cb.jpg",
      fallbackImage: "../images/choose-right-solar-system-size.jpg",
      lead: "Selecting the ideal solar array size is a balancing act between your annual kilowatt-hour (kWh) consumption, roof geometry, and future electrification plans such as electric vehicle charging or heat pump heating.",
      introParagraph2: "Under-sizing leaves you exposed to soaring utility peak tariffs, while arbitrary over-sizing without battery storage yields diminished returns under modern Net Metering 3.0 export rules. Here is our engineering methodology for dialing in the perfect system capacity.",
      keyTakeaway: "Match your system capacity to offset 100% to 110% of annual kWh consumption, factoring in a 25% buffer if you plan to install an EV charger or electric heat pump within three years.",
      toc: [
        { id: "step-bill-audit", label: "1. Auditing Past kWh Usage" },
        { id: "step-sun-hours", label: "2. Peak Sun Hours & Derate Factors" },
        { id: "step-sizing-formula", label: "3. The Core Sizing Formula" },
        { id: "step-future-loads", label: "4. EV & Heat Pump Future-Proofing" },
        { id: "step-roi-optimization", label: "5. Payback Period Optimization" }
      ],
      sections: [
        {
          id: "step-bill-audit",
          heading: "1. Auditing Past kWh Usage",
          content: "<p>Start by collecting 12 consecutive months of electric bills. Note your total annual kilowatt-hours rather than monthly dollar totals, as utility tier rates shift throughout the year. The average American home uses 10,500 kWh annually, or roughly 29 kWh per day.</p>"
        },
        {
          id: "step-sun-hours",
          heading: "2. Peak Sun Hours & Derate Factors",
          content: "<p>A 'peak sun hour' is not just any hour of daylight, but one hour where solar irradiance averages 1,000 Watts per square meter. Depending on your latitude, expect between 3.8 and 5.5 peak sun hours daily. Environmental derate factors (dust, temperature, inverter wiring losses) typically reduce raw output by 14% to 18%.</p>"
        },
        {
          quote: "A well-sized solar array behaves like a custom-tailored suit: it accommodates every kilowatt your household needs without wasteful excess or tight bottlenecks."
        },
        {
          id: "step-sizing-formula",
          heading: "3. The Core Sizing Formula",
          content: "<p>Calculate needed kW size with this formula: <code>(Daily kWh needed) ÷ (Peak Sun Hours × 0.82 Derate) = Array kW</code>. For a home consuming 30 kWh/day with 4.5 peak sun hours: <code>30 ÷ (4.5 × 0.82) = 8.13 kW</code>. With modern 400W panels, this requires 20 to 21 panels.</p>"
        },
        {
          id: "step-future-loads",
          heading: "4. EV & Heat Pump Future-Proofing",
          content: "<p>Driving an EV 12,000 miles per year requires approximately 3,600 additional kWh annually, which equates to roughly 8 additional 400W solar panels. Transitioning from natural gas to an inverter heat pump adds another 2,500 to 4,000 kWh annually. Pre-sizing your inverter today avoids costly replacements later.</p>"
        },
        {
          id: "step-roi-optimization",
          heading: "5. Payback Period Optimization",
          content: "<p>Under Net Billing (NEM 3.0), daytime grid export rates are lower than retail rates. Sizing a slightly smaller system that focuses on immediate self-consumption or combining an 8 kW array with an LFP battery achieves the fastest breakeven period (typically 5.2 to 6.8 years).</p>"
        }
      ],
      diagramLabel: "Engineering Sizing",
      diagramTitle: "Solar Array Sizing Workflow",
      diagramSubtitle: "From electric bill baseline to optimal kilowatt capacity.",
      stats: [
        { val: "8.2 kW", label: "Average Optimal Residential Array Size" },
        { val: "20–22", label: "Standard 400W Tier-1 Panels Needed" },
        { val: "5.8 Yrs", label: "Average Capital Breakeven Timeframe" }
      ],
      related: ["residential-guide", "battery-storage", "max-output"]
    },

    'battery-storage': {
      title: "Solar Battery Storage: Is It Worth the Investment?",
      category: "Battery Storage",
      badgeIcon: '<rect x="1" y="6" width="18" height="12" rx="2" ry="2"/>',
      date: "October 5, 2026",
      author: "Sarah Jenkins",
      authorRole: "Energy Storage Systems Lead",
      authorInitials: "SJ",
      readTime: "10 min read",
      image: "https://i.pinimg.com/1200x/4e/d1/72/4ed1729f28d2bb93760aa2e962d64ff7.jpg",
      fallbackImage: "../images/solar-battery-storage-investment.jpg",
      lead: "Solar panels without battery storage are like rainwater harvesting without a tank. As utility companies shift to aggressive Time-of-Use (TOU) tariffs and storm-related grid outages become frequent, home batteries have transformed from luxury backups into indispensable financial assets.",
      introParagraph2: "Modern Lithium Iron Phosphate (LiFePO4) chemistry offers 10-year warranties, zero thermal runaway risk, and over 6,000 charge cycles. Here is an honest financial and technical evaluation of whether battery storage makes sense for your property.",
      keyTakeaway: "In jurisdictions with Time-of-Use rates or reduced net metering export credits, an intelligent battery system can shave up to 85% off evening grid bills while providing instant blackout resilience.",
      toc: [
        { id: "step-economics", label: "1. The Economics of TOU Shifting" },
        { id: "step-chemistry", label: "2. LiFePO4 vs Traditional Lithium-Ion" },
        { id: "step-backup", label: "3. Whole-Home vs Critical Loads" },
        { id: "step-incentives", label: "4. Federal Tax Credits & SGIP" },
        { id: "step-lifespan", label: "5. Degradation & 15-Year Longevity" }
      ],
      sections: [
        {
          id: "step-economics",
          heading: "1. The Economics of TOU Shifting",
          content: "<p>Peak electricity costs often reach $0.55/kWh between 4:00 PM and 9:00 PM, precisely when solar generation fades. A smart battery charges during sunny midday hours on 100% free solar electricity and discharges automatically during peak utility rates, shielding your household from exorbitant bills.</p>"
        },
        {
          id: "step-chemistry",
          heading: "2. LiFePO4 vs Traditional Lithium-Ion",
          content: "<p>Unlike earlier cobalt-based electric vehicle batteries, Lithium Iron Phosphate (LFP) chemistry does not release oxygen when punctured or overheated, eliminating thermal runaway risk. Furthermore, LFP cells endure 6,000+ daily full cycles to 80% capacity — equivalent to 16+ years of daily use.</p>"
        },
        {
          quote: "A home battery turns your property into an energy island, providing silent, emission-free resilience while generating financial returns every single evening."
        },
        {
          id: "step-backup",
          heading: "3. Whole-Home vs Critical Loads",
          content: "<p>A single 10 kWh battery easily backs up essential circuits: refrigeration, Wi-Fi router, LED lighting, medical equipment, and device charging for multiple days. Two modular units stacked together (20–27 kWh) can power heavy central air conditioning and electric ovens during extended grid failures.</p>"
        },
        {
          id: "step-incentives",
          heading: "4. Federal Tax Credits & SGIP",
          content: "<p>Under Section 25D of the Internal Revenue Code, standalone and solar-paired battery storage qualifies for the full 30% Federal Clean Energy Tax Credit. In addition, state-level programs like California's SGIP provide direct rebates of up to $1,500 to $2,500 per unit.</p>"
        },
        {
          id: "step-lifespan",
          heading: "5. Degradation & 15-Year Longevity",
          content: "<p>Tier-1 storage units guarantee at least 70% retention after 10 years or 36.5 Megawatt-hours of throughput. With cloud telemetry constantly balancing cell voltages and temperature control, modern home batteries routinely exceed 15 operational years.</p>"
        }
      ],
      diagramLabel: "Storage Cycle",
      diagramTitle: "24-Hour Solar + Storage Daily Curve",
      diagramSubtitle: "Storing surplus midday solar for expensive evening peak hours.",
      stats: [
        { val: "6,000+", label: "Guaranteed Full Discharge Cycles" },
        { val: "30%", label: "Federal Clean Energy Tax Credit" },
        { val: "< 10ms", label: "Seamless Grid Blackout Cutover" }
      ],
      related: ["residential-guide", "how-solar-works", "system-sizing"]
    },

    'panel-cleaning': {
      title: "How Often Should You Clean Your Solar Panels?",
      category: "Maintenance",
      badgeIcon: '<path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>',
      date: "September 22, 2026",
      author: "Carlos Rodriguez",
      authorRole: "Senior Field Maintenance Technician",
      authorInitials: "CR",
      readTime: "6 min read",
      image: "https://i.pinimg.com/1200x/1e/d2/7a/1ed27ada7a32df7c994819be95f9ecd6.jpg",
      fallbackImage: "../images/how-often-clean-solar-panels.jpg",
      lead: "Dust, pollen, airborne pollution, agricultural debris, and bird droppings form a thin film across solar glass known as 'soiling.' If left unchecked, heavy soiling can reduce your system's annual kilowatt-hour yield by 5% to 25%, directly undermining your financial returns.",
      introParagraph2: "While natural rain provides light rinsing on steeply pitched roofs, it often fails to dissolve stubborn baked-on sap and mineral deposits. Here is our certified technician guide on cleaning frequency, safe equipment, and preserving your panel manufacturer warranty.",
      keyTakeaway: "Clean your solar panels twice per year — once in early spring to clear winter soot, and once in late summer to remove wildfire ash and dry pollen.",
      toc: [
        { id: "step-soiling-impact", label: "1. The Physics of Soiling Loss" },
        { id: "step-cleaning-schedule", label: "2. The Optimal Cleaning Calendar" },
        { id: "step-diy-vs-pro", label: "3. DIY Safety vs Professional Care" },
        { id: "step-cleaning-tools", label: "4. Permitted Tools & Detergents" },
        { id: "step-telemetry-monitoring", label: "5. Spotting Soiling in App Data" }
      ],
      sections: [
        {
          id: "step-soiling-impact",
          heading: "1. The Physics of Soiling Loss",
          content: "<p>Because solar cells are wired in electrical series, even a localized patch of opaque debris (such as a bird dropping) acts as an electrical bottleneck. It forces adjacent cells to dissipate power as heat, triggering bypass diodes and slashing output across the entire string.</p>"
        },
        {
          id: "step-cleaning-schedule",
          heading: "2. The Optimal Cleaning Calendar",
          content: "<p>For temperate suburban roofs, washing panels twice annually maximizes payback. Properties adjacent to highways, agricultural fields, construction zones, or commercial flight paths benefit from quarterly cleanings, particularly during dry summer droughts.</p>"
        },
        {
          quote: "Clean solar glass is not cosmetic; it is an active optical conduit. Restoring clarity directly boosts daily kilowatt generation back to peak factory ratings."
        },
        {
          id: "step-diy-vs-pro",
          heading: "3. DIY Safety vs Professional Care",
          content: "<p>Never climb onto a wet, pitched roof without OSHA-rated fall arrest harness systems. If your roof is easily accessible from ground level with a telescopic pole, homeowner washing is straightforward; otherwise, hire insured technicians who carry specialized deionized wash systems.</p>"
        },
        {
          id: "step-cleaning-tools",
          heading: "4. Permitted Tools & Detergents",
          content: "<p><strong>CRITICAL:</strong> Never use pressure washers, hard bristle brushes, abrasive scouring powders, or harsh alkaline detergents. These can micro-scratch the anti-reflective nanocoating and void your 25-year manufacturer warranty. Use only soft-bristle water-fed poles with pure deionized water.</p>"
        },
        {
          id: "step-telemetry-monitoring",
          heading: "5. Spotting Soiling in App Data",
          content: "<p>Check your GreenGrid mobile telemetry app on clear, cloudless days. If your peak kilowatt curve shows a flat-topped plateau 10% below historical seasonal benchmarks, a gentle washing will immediately restore full power.</p>"
        }
      ],
      diagramLabel: "Maintenance",
      diagramTitle: "Solar Glass Clarity vs Energy Yield",
      diagramSubtitle: "How periodic washing eliminates optical bottlenecks.",
      stats: [
        { val: "12–25%", label: "Average Output Restored Post-Wash" },
        { val: "2x / Year", label: "Recommended Cleaning Frequency" },
        { val: "0 Scratch", label: "Deionized Water & Microfiber Spec" }
      ],
      related: ["service-check", "max-output", "residential-guide"]
    },

    'service-check': {
      title: "5 Signs Your Solar System May Need a Service Check",
      category: "Performance",
      badgeIcon: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
      date: "September 10, 2026",
      author: "Carlos Rodriguez",
      authorRole: "Senior Field Maintenance Technician",
      authorInitials: "CR",
      readTime: "7 min read",
      image: "https://i.pinimg.com/1200x/32/8f/7c/328f7ca93eac17eaf9e2f85d9bda4c59.jpg",
      fallbackImage: "../images/5-signs-solar-service-check.jpg",
      lead: "Solar systems are renowned for extraordinary reliability, routinely operating for decades without major faults. However, exposure to intense UV, lightning transients, thermal expansion cycles, and rodent nesting can occasionally cause component degradation.",
      introParagraph2: "Knowing how to spot subtle warning signs before they escalate into complete inverter shutdowns or roof leaks ensures your solar investment continues generating clean power uninterrupted.",
      keyTakeaway: "Schedule a professional diagnostic inspection immediately if your inverter displays steady amber/red LED status lights or if your electric utility bill spikes inexplicably.",
      toc: [
        { id: "step-bill-spike", label: "1. Unexpected Utility Bill Surges" },
        { id: "step-led-codes", label: "2. Inverter Error Codes & LEDs" },
        { id: "step-physical-inspection", label: "3. Discoloration & Delamination" },
        { id: "step-conduit-wiring", label: "4. Loose Conduits & Critter Damage" },
        { id: "step-telemetry-drop", label: "5. Gateway Communication Outages" }
      ],
      sections: [
        {
          id: "step-bill-spike",
          heading: "1. Unexpected Utility Bill Surges",
          content: "<p>The clearest real-world symptom of a solar malfunction is an abrupt increase in your monthly power bill with no corresponding change in household electricity habits. This often signals that a DC breaker tripped or an inverter string shut down silently.</p>"
        },
        {
          id: "step-led-codes",
          heading: "2. Inverter Error Codes & LEDs",
          content: "<p>Walk over to your central or hybrid inverter during midday sunshine. A healthy system emits a steady green LED. Blinking yellow indicates grid voltage fluctuations, while solid amber or red signifies internal isolation faults, ground faults, or failed DC relays.</p>"
        },
        {
          quote: "Preventative diagnostics catch minor connector resistance spikes before they evolve into costly equipment replacements or system downtime."
        },
        {
          id: "step-physical-inspection",
          heading: "3. Discoloration & Delamination",
          content: "<p>Inspect your rooftop array from ground level with binoculars. Dark brownish burn marks on individual cells indicate hot-spots caused by cracked silicon. Milky white haze beneath the glass suggests moisture ingress and EVA polymer delamination.</p>"
        },
        {
          id: "step-conduit-wiring",
          heading: "4. Loose Conduits & Critter Damage",
          content: "<p>Squirrels and birds frequently seek shelter beneath warm solar panels, occasionally chewing through DC cable jackets and tripping ground-fault sensors. Loose metallic conduit clamps can also cause cables to rub against abrasive roofing shingles during wind storms.</p>"
        },
        {
          id: "step-telemetry-drop",
          heading: "5. Gateway Communication Outages",
          content: "<p>If your monitoring app stops updating production metrics for more than 48 hours, the issue may be as simple as an unplugged Wi-Fi bridge or as serious as a blown surge protector on your communication board. A certified audit quickly isolates the fault.</p>"
        }
      ],
      diagramLabel: "Diagnostics",
      diagramTitle: "Solar System Diagnostic Triage",
      diagramSubtitle: "Isolating electrical and mechanical faults safely.",
      stats: [
        { val: "24–48h", label: "Average Technician Diagnostic Turnaround" },
        { val: "100%", label: "Thermal Imaging & Resistance Verification" },
        { val: "25-Yr", label: "Workmanship & Hardware Warranty Backing" }
      ],
      related: ["panel-cleaning", "max-output", "residential-guide"]
    },

    'max-output': {
      title: "Maximising Your Solar Panel Output: Practical Tips",
      category: "Optimisation",
      badgeIcon: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
      date: "August 28, 2026",
      author: "Marcus Thorne",
      authorRole: "Solar Design Architect",
      authorInitials: "MT",
      readTime: "8 min read",
      image: "https://i.pinimg.com/736x/38/d2/e4/38d2e4fc3893a5c2155f81cb01d52cee.jpg",
      fallbackImage: "../images/maximising-solar-panel-output.jpg",
      lead: "Installing high-efficiency solar panels is step one. Step two is fine-tuning how and when your household interacts with that clean power to squeeze the maximum possible economic value out of every single sun hour.",
      introParagraph2: "Through intelligent load shifting, micro-inverter telemetry, and seasonal shading control, homeowners can boost their effective solar self-consumption savings by 20% to 40% without spending a dime on new equipment.",
      keyTakeaway: "Run energy-intensive domestic appliances (dishwashers, pool pumps, EV chargers, laundry) between 10:00 AM and 2:30 PM to consume solar electricity when generation is at its absolute daily peak.",
      toc: [
        { id: "step-load-shifting", label: "1. Daytime Load Shifting" },
        { id: "step-tree-canopy", label: "2. Managing Tree Canopy & Shading" },
        { id: "step-panel-tilt", label: "3. Optimized Angle & Heat Dissipation" },
        { id: "step-mlpe", label: "4. Micro-Inverters & DC Optimizers" },
        { id: "step-smart-home", label: "5. Home Automation Integration" }
      ],
      sections: [
        {
          id: "step-load-shifting",
          heading: "1. Daytime Load Shifting",
          content: "<p>Under modern net billing tariffs, selling power to the utility grid yields pennies, whereas avoiding utility purchases saves full retail dollars. Setting appliance timers to run during midday hours ensures your free rooftop power goes directly into your home rather than being exported at discount rates.</p>"
        },
        {
          id: "step-tree-canopy",
          heading: "2. Managing Tree Canopy & Shading",
          content: "<p>A tree that cast no shadow when your array was installed five years ago may now shade your southern roof planes by mid-afternoon. Pruning back fast-growing branches preserves unobstructed irradiance across all panel strings.</p>"
        },
        {
          quote: "Energy efficiency isn't about using less; it's about using the right energy at the right time from your own personal roof power station."
        },
        {
          id: "step-panel-tilt",
          heading: "3. Optimized Angle & Heat Dissipation",
          content: "<p>Ensuring an airflow gap of at least 4 to 6 inches between your roof tiles and panel backing allows natural convection to cool the silicon modules. Keeping cells cooler prevents high-temperature voltage droop on sweltering days.</p>"
        },
        {
          id: "step-mlpe",
          heading: "4. Micro-Inverters & DC Optimizers",
          content: "<p>Module-Level Power Electronics (MLPE) ensure that each solar panel operates at its individual Maximum Power Point (MPPT). If a passing cloud or chimney shadow falls on one panel, the remaining panels continue generating at 100% capacity.</p>"
        },
        {
          id: "step-smart-home",
          heading: "5. Home Automation Integration",
          content: "<p>Connect your inverter to smart home ecosystems (Apple Home, Google Home, Home Assistant). Automated relays can turn on your water heater or EV charger the instant solar production crosses 4,000 Watts.</p>"
        }
      ],
      diagramLabel: "Optimisation",
      diagramTitle: "Daily Solar Generation vs Self-Consumption",
      diagramSubtitle: "Aligning energy consumption with natural sunlight curves.",
      stats: [
        { val: "+35%", label: "Higher Value with Daytime Load Shifting" },
        { val: "100%", label: "Independent Panel MPPT Tracking" },
        { val: "$450+", label: "Average Extra Annual Household Savings" }
      ],
      related: ["system-sizing", "battery-storage", "service-check"]
    },

    'adoption-trends': {
      title: "Renewable Energy Adoption Trends to Watch in 2026",
      category: "Industry News",
      badgeIcon: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
      date: "August 15, 2026",
      author: "Dr. Elena Vance",
      authorRole: "Lead Photovoltaic Systems Engineer",
      authorInitials: "EV",
      readTime: "9 min read",
      image: "https://i.pinimg.com/736x/9e/8a/5a/9e8a5ac9c1f1036daa4df75df9d21777.jpg",
      fallbackImage: "../images/renewable-energy-adoption-trends-2026.jpg",
      lead: "The global energy landscape is undergoing a permanent tectonic shift. In 2026, renewable energy accounts for the vast majority of new power generation capacity worldwide, propelled by relentless cost declines, perovskite tandem breakthroughs, and commercial microgrid expansions.",
      introParagraph2: "From residential solar roofs acting as Virtual Power Plants (VPPs) to community solar farms empowering apartment renters, clean energy has evolved from an environmental initiative into the undeniable foundation of the 21st-century economy.",
      keyTakeaway: "The convergence of artificial intelligence grid forecasting, solid-state batteries, and next-gen tandem solar cells is pushing energy generation costs to historic record lows.",
      toc: [
        { id: "step-perovskite", label: "1. Perovskite Tandem Cells" },
        { id: "step-vpp", label: "2. Virtual Power Plants (VPPs)" },
        { id: "step-grid-resilience", label: "3. Distributed Grid Resilience" },
        { id: "step-policy-ira", label: "4. Policy & Tax Credit Accelerators" },
        { id: "step-agrivoltaics", label: "5. Multi-Use Agrivoltaics" }
      ],
      sections: [
        {
          id: "step-perovskite",
          heading: "1. Perovskite Tandem Cells",
          content: "<p>Commercial perovskite-on-silicon tandem panels are finally entering commercial production, absorbing different wavelengths of the solar spectrum and achieving lab-validated efficiencies exceeding 31%. This delivers one-third more power from the exact same roof footprint.</p>"
        },
        {
          id: "step-vpp",
          heading: "2. Virtual Power Plants (VPPs)",
          content: "<p>Utilities are actively contracting with residential battery owners to form Virtual Power Plants. When regional electricity demand spikes, software aggregates thousands of home batteries to supply instantaneous power, paying homeowners lucrative monthly participation dividends.</p>"
        },
        {
          quote: "The future grid will not be built of centralized coal towers, but of millions of interconnected rooftops producing and exchanging clean energy democratically."
        },
        {
          id: "step-grid-resilience",
          heading: "3. Distributed Grid Resilience",
          content: "<p>Decentralized solar microgrids are proving vastly more resilient to wildfires, hurricanes, and polar vortex grid collapses than century-old transmission corridors. Local generation ensures communities remain electrified during catastrophic grid failures.</p>"
        },
        {
          id: "step-policy-ira",
          heading: "4. Policy & Tax Credit Accelerators",
          content: "<p>The long-term extension of clean energy investment tax credits has granted manufacturers and developers decade-long certainty, attracting trillions in private capital and domestic battery manufacturing gigafactories.</p>"
        },
        {
          id: "step-agrivoltaics",
          heading: "5. Multi-Use Agrivoltaics",
          content: "<p>Dual-use solar farming — elevating panels above crop beds and sheep grazing pastures — creates microclimates that conserve soil moisture while generating renewable power, bridging agriculture and clean energy into a unified symbiotic sector.</p>"
        }
      ],
      diagramLabel: "Market Trends",
      diagramTitle: "Global Clean Energy Expansion 2026-2030",
      diagramSubtitle: "The rapid trajectory of global decentralized photovoltaic capacity.",
      stats: [
        { val: "31%+", label: "Next-Gen Perovskite Cell Efficiency" },
        { val: "2.4x", label: "VPP Battery Network Growth Rate" },
        { val: "85%", label: "Share of All New Global Power Capacity" }
      ],
      related: ["carbon-footprint", "sustainable-communities", "residential-guide"]
    },

    'carbon-footprint': {
      title: "Why Switching to Solar Significantly Reduces Your Carbon Footprint",
      category: "Sustainability",
      badgeIcon: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
      date: "August 2, 2026",
      author: "Sarah Jenkins",
      authorRole: "Energy Storage Systems Lead",
      authorInitials: "SJ",
      readTime: "6 min read",
      image: "https://i.pinimg.com/736x/c8/cb/12/c8cb12ad5e90ded4d80a103d18a5d9f6.jpg",
      fallbackImage: "../images/switching-solar-reduces-carbon-footprint.jpg",
      lead: "When you flip on a light switch, you rarely think about the coal or natural gas burned hundreds of miles away to generate that voltage. Transitioning your roof to photovoltaic generation is the single largest personal carbon reduction action a homeowner can take.",
      introParagraph2: "An average residential solar system offsets more than 175 metric tons of CO2 throughout its operational lifecycle — equivalent to burning 190,000 pounds of coal or driving an average gasoline sedan for 430,000 miles.",
      keyTakeaway: "Within 18 to 24 months of operation, modern solar panels generate all the energy required for their mining, silicon refinement, manufacturing, and transport — operating 100% net-carbon negative for the next 28+ years.",
      toc: [
        { id: "step-carbon-math", label: "1. The Raw Carbon Math" },
        { id: "step-energy-payback", label: "2. Energy Payback Time (EPBT)" },
        { id: "step-peaker-displacement", label: "3. Displacing Fossil Peaker Plants" },
        { id: "step-ev-heatpump-synergy", label: "4. Pairing with EVs & Heat Pumps" },
        { id: "step-recycling", label: "5. End-of-Life Material Recycling" }
      ],
      sections: [
        {
          id: "step-carbon-math",
          heading: "1. The Raw Carbon Math",
          content: "<p>The average American home produces approximately 14,000 pounds of carbon emissions annually from utility electricity consumption. An 8 kW solar installation generates roughly 12,000 kWh of emission-free power every year, removing the equivalent of three passenger vehicles from the road permanently.</p>"
        },
        {
          id: "step-energy-payback",
          heading: "2. Energy Payback Time (EPBT)",
          content: "<p>Critics often cite the energy used to manufacture photovoltaic panels. Life cycle assessment (LCA) studies confirm modern monocrystalline panels repay their entire embedded carbon debt in under 2 years, delivering over 25 years of pure zero-emission generation.</p>"
        },
        {
          quote: "Every kilowatt-hour harvested from your roof is a kilowatt-hour that never needed to be extracted from an oil well, fracked shale deposit, or coal mine."
        },
        {
          id: "step-peaker-displacement",
          heading: "3. Displacing Fossil Peaker Plants",
          content: "<p>When citywide power demand surges on hot summer afternoons, utilities activate highly polluting diesel and simple-cycle natural gas 'peaker plants.' Distributed rooftop solar peaks at the exact same hours, preventing these dirty peakers from ever firing up.</p>"
        },
        {
          id: "step-ev-heatpump-synergy",
          heading: "4. Pairing with EVs & Heat Pumps",
          content: "<p>When you combine solar with an electric car and heat pump HVAC, you decouple your family from fossil fuels across power, transportation, and home heating — cutting total household direct carbon emissions by up to 85%.</p>"
        },
        {
          id: "step-recycling",
          heading: "5. End-of-Life Material Recycling",
          content: "<p>Over 95% of a solar panel by weight consists of recyclable materials: high-grade glass, aluminum frames, copper wiring, and pure silicon wafers. Established circular economy supply chains ensure decommissioned panels are processed into new modules.</p>"
        }
      ],
      diagramLabel: "Ecological Impact",
      diagramTitle: "25-Year Emissions Offsetting Trajectory",
      diagramSubtitle: "The tangible environmental dividend of clean rooftop generation.",
      stats: [
        { val: "175 Tons", label: "Average Lifetime Household CO2 Avoided" },
        { val: "4,000+", label: "Equivalent Mature Tree Seedlings Planted" },
        { val: "< 2 Yrs", label: "Full Lifecycle Carbon Payback Period" }
      ],
      related: ["sustainable-communities", "adoption-trends", "how-solar-works"]
    },

    'sustainable-communities': {
      title: "The Role of Solar Energy in Building Sustainable Communities",
      category: "Clean Energy",
      badgeIcon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
      date: "July 20, 2026",
      author: "GreenGrid Editorial Team",
      authorRole: "Renewable Energy Specialists & Field Engineers",
      authorInitials: "GG",
      readTime: "8 min read",
      image: "https://i.pinimg.com/736x/05/ff/cc/05ffcc537f9d4a56b1a800d7a465c300.jpg",
      fallbackImage: "../images/role-solar-energy-sustainable-communities.jpg",
      lead: "Solar power is transforming from an individual homeowner lifestyle decision into the bedrock of municipal infrastructure, community resilience, and economic equity across cities and rural communities alike.",
      introParagraph2: "Through community solar co-ops, municipal microgrids, and local workforce development, clean energy is empowering neighborhoods to take control of their economic and environmental futures.",
      keyTakeaway: "Community solar programs allow apartment renters and shaded homes to subscribe to local clean energy farms, unlocking 10% to 20% utility bill discounts with zero equipment installation required.",
      toc: [
        { id: "step-community-solar", label: "1. Democratizing Access with Shared Solar" },
        { id: "step-microgrids", label: "2. Neighborhood Islanding Microgrids" },
        { id: "step-green-jobs", label: "3. Local Clean Energy Workforce" },
        { id: "step-energy-equity", label: "4. Lowering the Energy Burden" },
        { id: "step-city-blueprints", label: "5. 100% Renewable Municipal Blueprints" }
      ],
      sections: [
        {
          id: "step-community-solar",
          heading: "1. Democratizing Access with Shared Solar",
          content: "<p>Nearly 50% of households cannot install rooftop solar due to renting, living in multi-family apartments, or excessive tree canopy. Community solar farms solve this by allowing residents to subscribe to off-site arrays and receive net metering credits directly on their electric bills.</p>"
        },
        {
          id: "step-microgrids",
          heading: "2. Neighborhood Islanding Microgrids",
          content: "<p>Modern communities are integrating shared battery storage and rooftop solar with smart switchgear. In the event of a regional blackout, the neighborhood disconnects from the transmission grid and continues operating as a self-sustaining energy island.</p>"
        },
        {
          quote: "Sustainable communities do not wait for the power grid to heal itself; they build localized clean infrastructure that never goes dark."
        },
        {
          id: "step-green-jobs",
          heading: "3. Local Clean Energy Workforce",
          content: "<p>Solar installation and electrical maintenance are inherently local trades that cannot be outsourced. Every megawatt of solar deployed creates between 5 and 10 skilled career opportunities for electricians, roofers, and telemetry technicians right in the community.</p>"
        },
        {
          id: "step-energy-equity",
          heading: "4. Lowering the Energy Burden",
          content: "<p>Low- and moderate-income households often spend over 10% of their total income on utility bills. Community solar initiatives prioritized for vulnerable zip codes help alleviate this energy poverty, providing guaranteed monthly electricity discounts.</p>"
        },
        {
          id: "step-city-blueprints",
          heading: "5. 100% Renewable Municipal Blueprints",
          content: "<p>Forward-thinking municipalities are installing solar arrays across civic libraries, public schools, water treatment plants, and transit depots — turning public buildings into net electricity producers that reduce taxpayer expenses.</p>"
        }
      ],
      diagramLabel: "Community Grid",
      diagramTitle: "Decentralized Community Microgrid Flow",
      diagramSubtitle: "Shared generation, battery resilience, and democratic power distribution.",
      stats: [
        { val: "100%", label: "Access for Renters & Shaded Homes" },
        { val: "15–20%", label: "Average Community Solar Bill Savings" },
        { val: "Zero", label: "Blackout Downtime with Islanding Microgrids" }
      ],
      related: ["adoption-trends", "carbon-footprint", "residential-guide"]
    }
  };

  function getQueryParam(name) {
    var params = new URLSearchParams(window.location.search);
    return params.get(name);
  }

  function renderArticle(slug) {
    var article = articles[slug] || articles['residential-guide'];

    // 1. Update Document Title
    document.title = article.title + " | GreenGrid Solar Energy";

    // 2. Update Breadcrumb
    var bcCurrent = document.querySelector('.breadcrumb-current');
    if (bcCurrent) bcCurrent.textContent = article.category;

    // 3. Update Hero Badge & Title
    var heroBadge = document.querySelector('.article-hero .badge');
    if (heroBadge) {
      heroBadge.innerHTML = '<svg class="emoji-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + article.badgeIcon + '</svg> ' + article.category;
    }

    var heroTitle = document.querySelector('.article-hero h1');
    if (heroTitle) heroTitle.textContent = article.title;

    // 4. Update Meta items (Date, Author, Read time)
    var metaItems = document.querySelectorAll('.article-hero .meta-item');
    if (metaItems.length >= 3) {
      metaItems[0].innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> ' + article.date;
      metaItems[1].innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> ' + article.author;
      metaItems[2].innerHTML = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> ' + article.readTime;
    }

    // 5. Update Featured Media Image
    var mediaImg = document.querySelector('.article-featured-media img');
    if (mediaImg) {
      mediaImg.src = article.image;
      mediaImg.alt = article.title;
      mediaImg.onerror = function() {
        this.onerror = null;
        this.src = article.fallbackImage;
      };
    }

    // 6. Update Intro section
    var leadP = document.querySelector('.lead-paragraph');
    if (leadP) leadP.textContent = article.lead;

    var introP2 = document.querySelector('.intro-section .article-content > p:not(.lead-paragraph)');
    if (introP2 && article.introParagraph2) introP2.textContent = article.introParagraph2;

    var highlight = document.querySelector('.article-highlight');
    if (highlight && article.keyTakeaway) {
      highlight.innerHTML = '<strong><svg class="emoji-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg> Key Takeaway:</strong> ' + article.keyTakeaway;
    }

    // 7. Update Table of Contents
    var tocList = document.querySelector('.toc-widget ul');
    if (tocList && article.toc) {
      var tocHtml = '';
      article.toc.forEach(function(item) {
        tocHtml += '<li><a href="#' + item.id + '" style="color: var(--color-forest-green); text-decoration: none;">' + item.label + '</a></li>';
      });
      tocList.innerHTML = tocHtml;
    }

    // 8. Update Author Card in Sidebar
    var authorCard = document.querySelector('.author-card');
    if (authorCard) {
      var initialsEl = authorCard.querySelector('div[style*="border-radius: 50%"]');
      if (initialsEl) initialsEl.textContent = article.authorInitials || 'GG';
      var nameEl = authorCard.querySelector('h5');
      if (nameEl) nameEl.textContent = article.author;
      var roleEl = authorCard.querySelector('p');
      if (roleEl) roleEl.textContent = article.authorRole;
    }

    // 9. Update Main Content Section (Section 3)
    var contentDiv = document.querySelector('.content-section .article-content');
    if (contentDiv && article.sections) {
      var sectionsHtml = '';
      article.sections.forEach(function(sec) {
        if (sec.quote) {
          sectionsHtml += '<div class="article-pullquote"><p style="font-style: italic; font-size: 1.15rem; color: var(--color-text-primary); margin: 0;">&ldquo;' + sec.quote + '&rdquo;</p></div>';
        } else {
          sectionsHtml += '<h2 id="' + sec.id + '">' + sec.heading + '</h2>' + sec.content;
        }
      });
      contentDiv.innerHTML = sectionsHtml;
    }

    // 10. Update Diagram / Infographic Section (Section 4)
    var diagLabel = document.querySelector('.infographic-section .section-label');
    if (diagLabel && article.diagramLabel) diagLabel.textContent = article.diagramLabel;

    var diagTitle = document.querySelector('.infographic-section .section-title');
    if (diagTitle && article.diagramTitle) diagTitle.textContent = article.diagramTitle;

    var diagSub = document.querySelector('.infographic-section .section-subtitle');
    if (diagSub && article.diagramSubtitle) diagSub.textContent = article.diagramSubtitle;

    var statCards = document.querySelectorAll('.infographic-section .diagram-stat');
    if (statCards.length >= 3 && article.stats && article.stats.length >= 3) {
      for (var s = 0; s < 3; s++) {
        var valEl = statCards[s].querySelector('.stat-val');
        if (valEl) valEl.textContent = article.stats[s].val;
        var descEl = statCards[s].querySelector('p');
        if (descEl) descEl.textContent = article.stats[s].label;
      }
    }

    // 11. Update Related Articles (Section 5)
    var relatedContainer = document.querySelector('.related-articles');
    if (relatedContainer && article.related) {
      var relHtml = '';
      article.related.forEach(function(relKey) {
        var rel = articles[relKey];
        if (!rel) return;
        relHtml += '<article class="card article-card">' +
          '<img src="' + rel.image + '" alt="' + rel.title + '" loading="lazy" referrerpolicy="no-referrer" onerror="this.onerror=null; this.src=\'' + rel.fallbackImage + '\';" style="width: 100%; height: 200px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 1.25rem;">' +
          '<div style="font-size: 0.8rem; font-weight: 700; color: var(--color-forest-green); text-transform: uppercase; margin-bottom: 0.5rem;">' + rel.category + '</div>' +
          '<h3 style="font-size: 1.15rem; font-weight: 700; margin-bottom: 0.75rem; line-height: 1.35;"><a href="blog-details.html?id=' + relKey + '" style="color: var(--color-text-primary); text-decoration: none;">' + rel.title + '</a></h3>' +
          '<p style="font-size: 0.9rem; color: var(--color-text-secondary); margin-bottom: 1rem; line-height: 1.6;">' + rel.lead.substring(0, 140) + '...</p>' +
          '<a href="blog-details.html?id=' + relKey + '" class="btn-link" style="color: var(--color-forest-green); font-weight: 600; text-decoration: none;">Read More &rarr;</a>' +
        '</article>';
      });
      relatedContainer.innerHTML = relHtml;
    }

    // 12. Update Share Buttons
    try {
      var currentUrl = encodeURIComponent(window.location.href);
      var currentTitle = encodeURIComponent(article.title || document.title);
      var twBtn = document.querySelector('.share-twitter, a[aria-label="Share on Twitter"]');
      if (twBtn) {
        twBtn.href = 'https://twitter.com/intent/tweet?text=' + currentTitle + '&url=' + currentUrl;
        twBtn.target = '_blank';
        twBtn.rel = 'noopener noreferrer';
      }
      var liBtn = document.querySelector('.share-linkedin, a[aria-label="Share on LinkedIn"]');
      if (liBtn) {
        liBtn.href = 'https://www.linkedin.com/sharing/share-offsite/?url=' + currentUrl;
        liBtn.target = '_blank';
        liBtn.rel = 'noopener noreferrer';
      }
      var fbBtn = document.querySelector('.share-facebook, a[aria-label="Share on Facebook"]');
      if (fbBtn) {
        fbBtn.href = 'https://www.facebook.com/sharer/sharer.php?u=' + currentUrl;
        fbBtn.target = '_blank';
        fbBtn.rel = 'noopener noreferrer';
      }
    } catch (e) {
      // ignore
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    var currentId = getQueryParam('id') || 'residential-guide';
    renderArticle(currentId);
  });

  window.addEventListener('popstate', function() {
    var currentId = getQueryParam('id') || 'residential-guide';
    renderArticle(currentId);
  });
})();

