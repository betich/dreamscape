import Countdown from "./components/Countdown";

function App() {
  // Set countdown end date (example: 30 days from now)
  const countdownEndDate = new Date("2025-08-03T06:59:50Z");

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-neutral-950 text-white">
      <div className="max-w-lg mx-auto flex flex-col gap-4 p-4 w-full text-lg">
        <h1 className="font-bold">[Dream]Scape (n.)</h1>

        <p className="font-normal whitespace-break-spaces">
          The space for those who dream.
        </p>

        <p className="font-normal whitespace-break-spaces py-4">
          The space for those who dream. The space for those who dream. The
          space for those who dream. The space for those who dream.
        </p>

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
      </div>
    </section>
  );
}

export default App;
