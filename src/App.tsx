import Countdown from "./components/Countdown";
import { textVide } from "text-vide";

function App() {
  // Set countdown end date (example: 30 days from now)
  const countdownEndDate = new Date("2025-08-03T06:59:50Z");

  return (
    <section className="flex flex-col lowercase items-center justify-center h-screen bg-neutral-950 text-white">
      <div className="max-w-2xl mx-auto flex flex-col gap-4 p-4 w-full text-lg">
        <h1 className="font-bold">[Dream]Scape (n.)</h1>

        <p className="font-normal whitespace-break-spaces">
          The space for those who dream.
        </p>

        <div
          ref={(el) => {
            if (el) {
              el.innerHTML = textVide(
                `Through warmth and chill, through ache and quiet joy, we look at what we've built. The bounty we sought came at an unspoken cost. Did we find our way, or just end up here, the purpose blurring somewhere along the climb?

Like a faint memory, we looked for an inner child. What truly makes us, isn't fitting in, but the wild fire of our passions—reasons that are just ours.

This is a quiet invitation. A space for every dreamer and
maker, where genuine passions are welcomed. Let's redraw our dreamscape—not just one peak, but a wide, bright space, shaped by our real desires.
`
              );
            }
          }}
          className="font-normal whitespace-break-spaces py-8 block text-left normal-case"
        />

        <div className="flex justify-start py-4">
          <Countdown endDate={countdownEndDate} />
        </div>

        <div className="flex gap-4 items-center">
          <a
            href="https://instagram.com"
            className="underline hover:no-underline"
          >
            Instagram
          </a>
          <a
            href="https://discord.com"
            className="underline hover:no-underline"
          >
            Discord
          </a>
        </div>

        <p className="text-sm text-gray-400 pt-4">
          Of the Seekers, for the Dreamers, by the Makers
        </p>
      </div>
    </section>
  );
}

export default App;
