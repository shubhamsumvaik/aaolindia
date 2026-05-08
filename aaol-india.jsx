export default function PremiumChemicalProductPage() {
  const [activeTab, setActiveTab] = React.useState("Specifications");
  const specs = [
    ["CAS Number", "6192-52-5"],
    ["Molecular Formula", "C7H8O3S·H2O"],
    ["Molecular Weight", "190.21"],
    ["Purity", ">98.0%"],
    ["Storage", "Cool, dry place under inert atmosphere"],
    ["Shelf Life", "60 Months"],
  ];

  const properties = [
    ["Appearance", "White to off-white crystalline powder"],
    ["Melting Point", "103–106°C"],
    ["Solubility", "Highly soluble in water & alcohols"],
    ["Water (KF)", "9–11%"],
    ["Assay", "Min 98%"],
    ["Hazard Class", "Corrosive / Irritant"],
  ];

  const documents = [
    "Safety Data Sheet (SDS)",
    "Certificate of Analysis (COA)",
    "Technical Datasheet",
    "Analytical Charts",
    "TDS & Product Brochure",
    "REACH / Compliance Declaration",
  ];

  const competitorSections = [
    {
      title: "Industrial Applications",
      description:
        "Widely utilized across pharmaceutical synthesis, agrochemical manufacturing, surfactant production, polymer chemistry, resin processing, and specialty catalyst systems requiring strong organic acid functionality.",
    },
    {
      title: "Manufacturing Infrastructure",
      description:
        "Equipped with advanced sulfonation reactors, in-house analytical laboratories, controlled storage systems, and large-scale production capabilities ensuring consistent product quality.",
    },
    {
      title: "Quality Assurance",
      description:
        "Each production batch undergoes stringent analytical testing for purity, moisture content, assay performance, appearance consistency, and process reliability.",
    },
    {
      title: "Packaging & Logistics",
      description:
        "Available in customized industrial packaging formats with secure domestic and international shipping support for bulk and export requirements.",
    },
    {
      title: "Regulatory & Documentation",
      description:
        "Comprehensive technical documentation including SDS, COA, specification sheets, compliance declarations, and product handling guidance available upon request.",
    },
    {
      title: "Custom Manufacturing Support",
      description:
        "Flexible production and private-label support for industrial buyers requiring tailored specifications, bulk quantities, or application-specific solutions.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Top Navigation */}
      <header className="relative z-50 w-full bg-white shadow-sm">
        {/* Top Ribbon */}
        <div className="bg-[#1d2554] text-white">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 text-sm">
            <p className="tracking-wide text-slate-200">
              Welcome to the World of Sulfonation
            </p>

            <div className="flex items-center gap-3">
              <span className="text-slate-300">Follow Us On:</span>
              <div className="flex h-7 w-7 items-center justify-center rounded bg-white/10 text-xs font-bold">
                in
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl border-4 border-[#1d2554] bg-white text-3xl font-black text-[#1d2554] shadow-lg">
              A
            </div>

            <div>
              <h1 className="text-3xl font-black tracking-tight text-[#1d2554]">
                AROMATIC
              </h1>
              <p className="font-medium text-slate-500">
                Allied &amp; Organics Pvt. Ltd.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-10">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-xl">
                ✉️
              </div>
              <div>
                <p className="text-sm text-slate-400">Email Address</p>
                <p className="font-semibold text-slate-700">
                  sales@aaolindia.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-xl">
                📞
              </div>
              <div>
                <p className="text-sm text-slate-400">Phone Number</p>
                <p className="font-semibold text-slate-700">
                  +91-9871176909
                </p>
              </div>
            </div>

            <button className="rounded-xl bg-[#1d2554] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-[#101739]">
              REQUEST A QUOTE
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-[#1d2554] text-white shadow-lg">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-8 px-6 py-4 text-sm font-medium uppercase tracking-wide">
            {[
              "Home",
              "About Us",
              "Our Products",
              "Our Infrastructure",
              "Our Certification",
              "Contact Us",
            ].map((item) => (
              <button
                key={item}
                className="transition-all hover:text-cyan-200"
              >
                {item}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-20 top-10 h-72 w-72 rounded-full bg-cyan-500 blur-3xl" />
          <div className="absolute right-20 bottom-0 h-80 w-80 rounded-full bg-blue-700 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <div className="mb-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur">
                Organic Acid Catalyst
              </span>
              <span className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm font-medium text-emerald-200">
                Research Grade
              </span>
              <span className="rounded-full bg-amber-500/20 px-4 py-2 text-sm font-medium text-amber-100">
                &gt;98% Purity
              </span>
            </div>

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-blue-200">
              Product No. CX-PTSA-29423
            </p>

            <h2 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight">
              p‑Toluenesulfonic Acid Monohydrate
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              High-performance strong organic acid catalyst optimized for
              esterification, protection/deprotection, polymer synthesis, and
              advanced research workflows.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-2xl bg-white px-6 py-4 font-semibold text-slate-900 shadow-2xl hover:scale-[1.02] transition-transform">
                Download SDS
              </button>
              <button className="rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-semibold text-white backdrop-blur hover:bg-white/20">
                View COA
              </button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
              {specs.map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <p className="text-xs uppercase tracking-wider text-slate-400">
                    {label}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-white">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Product Visualization */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-xl rounded-[2rem] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-2xl">
              <div className="absolute -right-4 -top-4 rounded-2xl bg-red-500 px-4 py-2 text-sm font-bold text-white shadow-xl">
                CORROSIVE
              </div>

              <div className="flex flex-col items-center justify-center rounded-[2rem] bg-white p-10 shadow-inner">
                <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-full border-4 border-blue-100 bg-blue-50 text-4xl font-bold text-blue-700 shadow-lg">
                  PTSA
                </div>

                <div className="space-y-4 text-center text-slate-700">
                  <div>
                    <p className="text-sm uppercase tracking-widest text-slate-400">
                      Molecular Formula
                    </p>
                    <p className="mt-1 text-xl font-bold">C₇H₈O₃S·H₂O</p>
                  </div>

                  <div>
                    <p className="text-sm uppercase tracking-widest text-slate-400">
                      CAS Number
                    </p>
                    <p className="mt-1 text-xl font-bold">6192-52-5</p>
                  </div>

                  <div className="rounded-2xl bg-slate-100 p-5 text-left shadow-inner">
                    <p className="mb-2 text-sm font-semibold text-slate-500">
                      Key Applications
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>• Esterification catalyst</li>
                      <li>• Organic synthesis</li>
                      <li>• Polymer chemistry</li>
                      <li>• Dehydration reactions</li>
                      <li>• Pharmaceutical intermediates</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Content Banner */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="max-w-5xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1d2554]">
              Enterprise Sulfonation Solutions
            </p>

            <h2 className="mt-4 text-5xl font-black leading-tight tracking-tight text-slate-900">
              Sulphonic Acids for Industrial Synthesis, Catalysis &amp; Specialty Applications
            </h2>

            <p className="mt-6 text-lg leading-9 text-slate-600">
              Engineered for modern chemical manufacturing and advanced research workflows,
              our sulfonic acid portfolio delivers consistent catalytic performance,
              superior purity standards, optimized logistics support, and complete
              documentation infrastructure for laboratories, process industries,
              pharmaceutical synthesis, and industrial-scale production environments.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <main className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-12 lg:grid-cols-3">
        {/* Left Side */}
        <div className="space-y-8 lg:col-span-2">
          {/* Tabs */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-3 shadow-sm">
            <div className="flex flex-wrap gap-3">
              {[
                "Specifications",
                "Applications",
                "Safety",
                "Storage",
                "Documentation",
              ].map((tab, idx) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-2xl px-5 py-3 text-sm font-semibold transition-all ${activeTab === tab
                    ? "bg-blue-700 text-white shadow-lg scale-[1.05]"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {activeTab === "Specifications" && (
            <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
                    Technical Data
                  </p>
                  <h3 className="mt-2 text-3xl font-bold tracking-tight">
                    Product Specifications
                  </h3>
                </div>

                <div className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                  Verified Research Batch
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200">
                {properties.map(([label, value], idx) => (
                  <div
                    key={label}
                    className={`grid grid-cols-1 gap-4 px-6 py-5 md:grid-cols-2 ${idx % 2 === 0 ? "bg-slate-50" : "bg-white"
                      }`}
                  >
                    <p className="font-semibold text-slate-700">{label}</p>
                    <p className="text-slate-600">{value}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === "Applications" && (
            <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-10 grid gap-8 lg:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#1d2554]">
                    Competitive Technical Positioning
                  </p>

                  <h3 className="mt-3 text-4xl font-black leading-tight tracking-tight text-slate-900">
                    Why Leading Manufacturers Choose Our Sulphonic Acid Systems
                  </h3>
                </div>

                <div className="rounded-3xl bg-slate-50 p-6 leading-8 text-slate-600">
                  Our integrated manufacturing infrastructure combines advanced sulfonation
                  technology, rigorous analytical validation, industrial-scale production
                  capabilities, and supply-chain reliability to support pharmaceutical,
                  specialty chemical, agrochemical, resin, surfactant, and catalyst industries.
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 mb-12">
                {[
                  ["Advanced Purity Control", "Validated analytical systems ensuring reproducibility and batch consistency."],
                  ["Global Documentation Standards", "Complete SDS, COA, regulatory, and compliance-ready documentation."],
                  ["Flexible Manufacturing", "Research quantities to industrial bulk production with scalable logistics."],
                  ["Technical Application Support", "Specialized chemistry assistance for synthesis and process optimization."],
                ].map(([title, desc]) => (
                  <div
                    key={title}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1d2554] text-2xl text-white shadow-lg">
                      ✓
                    </div>

                    <h4 className="text-lg font-bold leading-snug text-slate-900">
                      {title}
                    </h4>

                    <p className="mt-3 leading-7 text-slate-600">
                      {desc}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mb-12 rounded-[2rem] bg-gradient-to-br from-[#101739] via-[#162253] to-[#1d2554] p-10 text-white shadow-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
                  Enterprise Product Ecosystem
                </p>

                <h3 className="mt-4 text-4xl font-black leading-tight tracking-tight">
                  Complete Information Architecture Expected From Modern Chemical Manufacturers
                </h3>

                <p className="mt-6 max-w-4xl text-lg leading-9 text-slate-300">
                  Designed using best practices observed across leading global and Indian chemical manufacturers,
                  this layout combines industrial credibility, scientific depth, compliance visibility,
                  manufacturing transparency, and inquiry-driven lead generation without ecommerce cart workflows.
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3 mb-14">
                {competitorSections.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1d2554] text-2xl text-white shadow-lg">
                      ⚙️
                    </div>

                    <h4 className="text-2xl font-bold leading-tight text-slate-900">
                      {item.title}
                    </h4>

                    <p className="mt-4 leading-8 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-cyan-700">
                  Workflow Integration
                </p>
                <h3 className="mt-2 text-3xl font-bold tracking-tight">
                  Research Applications
                </h3>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {[
                  [
                    "Organic Synthesis",
                    "Widely used as a strong organic acid catalyst for condensation, protection/deprotection, and rearrangement reactions.",
                  ],
                  [
                    "Polymer Chemistry",
                    "Supports resin curing, polymer modification, and specialty material development.",
                  ],
                  [
                    "Pharmaceutical Research",
                    "Suitable for advanced medicinal chemistry and process development workflows.",
                  ],
                  [
                    "Industrial Catalysis",
                    "Efficient solid acid alternative to liquid mineral acids for scalable synthesis.",
                  ],
                ].map(([title, desc]) => (
                  <div
                    key={title}
                    className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 transition-all hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-700 text-xl text-white shadow-lg">
                      ⚗️
                    </div>
                    <h4 className="text-xl font-bold">{title}</h4>
                    <p className="mt-3 leading-7 text-slate-600">{desc}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {activeTab === "Safety" && (
            <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm animate-in fade-in duration-500">
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
                  Safety & Compliance
                </p>
                <h3 className="mt-2 text-3xl font-bold tracking-tight">
                  Handling & Regulatory Information
                </h3>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="rounded-3xl border-2 border-red-100 bg-red-50 p-8">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600 text-3xl text-white shadow-lg">
                    ⚠️
                  </div>
                  <h4 className="text-2xl font-bold text-red-900">Hazard Class</h4>
                  <p className="mt-4 text-lg leading-relaxed text-red-800">
                    Corrosive / Irritant. May cause severe skin burns and eye damage.
                    Handle with appropriate PPE in a well-ventilated area.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <span className="rounded-lg bg-red-200 px-3 py-1 text-xs font-bold text-red-900 uppercase">GHS05</span>
                    <span className="rounded-lg bg-red-200 px-3 py-1 text-xs font-bold text-red-900 uppercase">GHS07</span>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-3xl border border-slate-200 p-6">
                    <h4 className="font-bold text-slate-900">First Aid Measures</h4>
                    <ul className="mt-4 space-y-3 text-slate-600">
                      <li>• <strong>Eye Contact:</strong> Rinse immediately with plenty of water for 15 minutes.</li>
                      <li>• <strong>Skin Contact:</strong> Wash off immediately with soap and plenty of water.</li>
                      <li>• <strong>Inhalation:</strong> Move to fresh air. If breathing is difficult, give oxygen.</li>
                    </ul>
                  </div>
                  <div className="rounded-3xl border border-slate-200 p-6">
                    <h4 className="font-bold text-slate-900">Environmental Precautions</h4>
                    <p className="mt-3 text-slate-600">
                      Do not flush into surface water or sanitary sewer system.
                      Collect contaminated wash water separately.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeTab === "Storage" && (
            <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm animate-in fade-in duration-500">
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-blue-700">
                  Logistics & Stability
                </p>
                <h3 className="mt-2 text-3xl font-bold tracking-tight">
                  Storage Conditions
                </h3>
              </div>

              <div className="grid gap-6 md:grid-cols-3">
                {[
                  ["Temperature", "Keep in a cool, dry place. Ideal range: 15-25°C.", "🌡️"],
                  ["Atmosphere", "Store under inert atmosphere to prevent moisture absorption.", "🛡️"],
                  ["Shelf Life", "60 Months from date of manufacture if stored correctly.", "📅"],
                ].map(([label, desc, icon]) => (
                  <div key={label} className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
                    <div className="mb-4 text-3xl">{icon}</div>
                    <h4 className="text-lg font-bold text-slate-900">{label}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-3xl bg-[#1d2554] p-8 text-white">
                <h4 className="text-xl font-bold">Packaging Integrity</h4>
                <p className="mt-3 text-slate-300 leading-relaxed">
                  Our products are sealed in industrial-grade, moisture-resistant packaging.
                  Always ensure the seal is intact upon receipt. If the seal is compromised,
                  contact our technical support team immediately.
                </p>
              </div>
            </section>
          )}

          {activeTab === "Documentation" && (
            <section className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm animate-in fade-in duration-500">
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-400">
                  Compliance & Analysis
                </p>
                <h3 className="mt-2 text-3xl font-bold tracking-tight">
                  Technical Documentation
                </h3>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {documents.map((doc) => (
                  <div
                    key={doc}
                    className="flex items-center justify-between rounded-2xl border border-slate-100 p-5 hover:bg-slate-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-xl">
                        📄
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{doc}</p>
                        <p className="text-xs text-slate-500">Standard PDF Format</p>
                      </div>
                    </div>
                    <button className="text-sm font-bold text-blue-700 hover:underline">
                      Download
                    </button>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex items-center justify-center rounded-3xl border-2 border-dashed border-slate-200 p-10">
                <div className="text-center">
                  <p className="text-slate-500">Need custom documentation or batch-specific analysis?</p>
                  <button className="mt-4 rounded-xl bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-lg hover:bg-slate-800 transition-all">
                    Request Custom COA
                  </button>
                </div>
              </div>
            </section>
          )}
        </div>

        {/* Right Sidebar */}
        <aside className="lg:sticky lg:top-8 self-start space-y-8">
          {/* Purchase Card */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-xl">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm uppercase tracking-widest text-slate-400">
                  Available Pack Sizes
                </p>
                <h3 className="mt-2 text-2xl font-bold">Procurement</h3>
              </div>
              <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                In Stock
              </div>
            </div>

            <div className="mb-6 rounded-2xl border border-blue-100 bg-blue-50 p-5 leading-7 text-slate-700">
              <p className="font-semibold text-[#1d2554]">
                Bulk Industrial Supply Available
              </p>

              <p className="mt-2 text-sm text-slate-600">
                Pricing depends on purity requirements, packaging format,
                application suitability, order quantity, export destination,
                and logistics specifications.
              </p>
            </div>

            <div className="space-y-4">
              {[
                ["500 g", "Laboratory Grade"],
                ["1 kg", "Pilot Scale"],
                ["5 kg", "Industrial Packaging"],
                ["25 kg", "Bulk Supply"],
              ].map(([size, price]) => (
                <div
                  key={size}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 p-5 transition-all hover:border-blue-400 hover:shadow-md"
                >
                  <div>
                    <p className="font-semibold">{size}</p>
                    <p className="text-sm text-slate-500">
                      Research Packaging
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold">{price}</p>
                    <p className="text-xs text-slate-400">Per Unit</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-6 w-full rounded-2xl bg-[#1d2554] py-4 text-lg font-semibold text-white shadow-xl transition-all hover:scale-[1.01] hover:bg-[#101739]">
              Get Best Quote
            </button>

            <button className="mt-4 w-full rounded-2xl border border-slate-300 py-4 text-lg font-semibold text-slate-700 hover:bg-slate-100">
              Contact Technical Support
            </button>
          </div>

          {/* Documents */}
          <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
            <div className="mb-6">
              <p className="text-sm uppercase tracking-widest text-slate-400">
                Documentation
              </p>
              <h3 className="mt-2 text-2xl font-bold">Technical Files</h3>
            </div>

            <div className="space-y-4">
              {documents.map((doc) => (
                <div
                  key={doc}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 px-5 py-4 hover:bg-slate-50"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-xl">
                      📄
                    </div>
                    <div>
                      <p className="font-semibold">{doc}</p>
                      <p className="text-sm text-slate-500">
                        PDF Download
                      </p>
                    </div>
                  </div>

                  <button className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-semibold hover:bg-slate-200">
                    Open
                  </button>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </main>

      {/* Footer */}
      <footer className="bg-[#081021] text-slate-300">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-4">
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border-4 border-white bg-[#1d2554] text-2xl font-black text-white shadow-lg">
                A
              </div>

              <div>
                <h3 className="text-2xl font-black tracking-tight text-white">
                  AROMATIC
                </h3>
                <p className="text-sm text-slate-400">
                  Allied &amp; Organics Pvt. Ltd.
                </p>
              </div>
            </div>

            <p className="leading-7 text-slate-400">
              Incorporated in the year 1993, AAOL is a technology-led research
              driven chemical company with strategic manufacturing capabilities
              and rigorous quality standards.
            </p>
          </div>

          <div>
            <h4 className="mb-6 text-xl font-bold text-white">
              Quick Links
            </h4>

            <ul className="space-y-4 text-slate-400">
              <li>→ About Us</li>
              <li>→ Certifications</li>
              <li>→ Testimonials</li>
              <li>→ Blog</li>
              <li>→ Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xl font-bold text-white">
              Our Products
            </h4>

            <ul className="space-y-4 text-slate-400">
              <li>→ Sulphonic Acids</li>
              <li>→ Hydrotropes</li>
              <li>→ API Intermediates</li>
              <li>→ Specialty Catalysts</li>
              <li>→ Industrial Chemicals</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-xl font-bold text-white">
              Contact Us
            </h4>

            <ul className="space-y-5 text-slate-400">
              <li>📍 Site No. 14, Sector-14, Gurugram 122001</li>
              <li>📞 +91-9871176909</li>
              <li>✉️ sales@aaolindia.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 bg-[#050b17] py-5 text-center text-sm text-slate-500">
          Aromatic Allied &amp; Organics Pvt Ltd &copy; 2024 All Rights Reserved
        </div>
      </footer>
    </div>
  );
}
