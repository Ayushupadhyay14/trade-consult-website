interface Section {
  heading: string;
  body: React.ReactNode[];
}

interface LegalPageProps {
  title: string;
  updated?: string;
  sections: Section[];
}

export default function LegalPage({ title, updated, sections }: LegalPageProps) {
  return (
    <div className="bg-slate-50 py-8 sm:py-16">
      <div className="container-site max-w-4xl">
        <h1 className="section-title">{title}</h1>
        {updated && <p className="mt-2 text-xs text-slate-500 sm:text-sm">Last updated: {updated}</p>}
        <div className="mt-6 space-y-4 sm:mt-10 sm:space-y-8">
          {sections.map((s) => (
            <section key={s.heading} className="card">
              <h2 className="text-base font-semibold text-navy-900 sm:text-lg">{s.heading}</h2>
              {s.body.map((p, i) => (
                <p key={i} className="mt-2 text-xs leading-relaxed text-slate-600 sm:mt-3 sm:text-sm">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
