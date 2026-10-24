import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    title: "Share Your Question",
    body: "Call, WhatsApp or fill in the booking form. Tell us what is worrying you and, if you can, your date, time and place of birth.",
  },
  {
    title: "Pick A Time And How To Talk",
    body: "We confirm a slot for a video call, phone call or WhatsApp call, usually within a few days, wherever you live.",
  },
  {
    title: "Get A Clear Reading",
    body: "Sachin Jain studies your chart before the session and explains what it shows in plain language, with time for every question.",
  },
  {
    title: "Leave With Practical Next Steps",
    body: "You get specific guidance on timing and simple remedies you can follow, with no pressure to buy anything.",
  },
];

export function ProcessSteps() {
  return (
    <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <Reveal as="li" key={step.title} delay={i * 0.08} className="card p-6">
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-brand font-display text-lg font-bold text-night"
          >
            {i + 1}
          </span>
          <h3 className="mt-4 text-xl">{step.title}</h3>
          <p className="mt-2 text-[0.95rem] text-fg-muted">{step.body}</p>
        </Reveal>
      ))}
    </ol>
  );
}
