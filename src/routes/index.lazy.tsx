import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});
// import Countdown from "../components/Countdown";
import { textVide } from "text-vide";

function Index() {
  // Set countdown end date (example: 30 days from now)
  // const countdownEndDate = new Date("2025-08-03T06:59:50Z");

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lowercase items-start py-12 justify-center min-h-screen bg-neutral-950 text-white">
      <div className="max-w-lg mx-auto flex flex-col gap-4 p-4 w-full text-lg order-2 sm:order-1">
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

        <div className="flex gap-4 items-center">
          <a
            href="https://instagram.com/thedreamscape.space"
            className="underline hover:no-underline"
          >
            Instagram
          </a>
          <a
            href="https://discord.gg/tJDkCa7HVd"
            className="underline hover:no-underline"
          >
            Discord
          </a>
        </div>

        <p className="text-sm text-gray-400 pt-4">
          Of the Seekers, for the Dreamers, by the Makers
        </p>
      </div>

      <div className="flex justify-start py-4 order-1 sm:order-2">
        {/* <Countdown endDate={countdownEndDate} /> */}
        <div className="h-[500px] mx-auto overflow-y-auto">
          <blockquote
            className="instagram-media"
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/reel/DNUXe7fTzJn/?utm_source=ig_embed&utm_campaign=loading"
            data-instgrm-version="14"
            style={{
              background: "#FFF",
              border: 0,
              borderRadius: "3px",
              boxShadow:
                "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
              margin: "1px",
              maxWidth: "540px",
              minWidth: "326px",
              padding: 0,
              width: "calc(100% - 2px)",
            }}
          >
            <div style={{ padding: "16px" }}>
              <a
                href="https://www.instagram.com/reel/DNUXe7fTzJn/?utm_source=ig_embed&utm_campaign=loading"
                style={{
                  background: "#FFFFFF",
                  lineHeight: 0,
                  padding: "0 0",
                  textAlign: "center",
                  textDecoration: "none",
                  width: "100%",
                }}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#F4F4F4",
                      borderRadius: "50%",
                      flexGrow: 0,
                      height: "40px",
                      marginRight: "14px",
                      width: "40px",
                    }}
                  ></div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "#F4F4F4",
                        borderRadius: "4px",
                        flexGrow: 0,
                        height: "14px",
                        marginBottom: "6px",
                        width: "100px",
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: "#F4F4F4",
                        borderRadius: "4px",
                        flexGrow: 0,
                        height: "14px",
                        width: "60px",
                      }}
                    ></div>
                  </div>
                </div>
                <div style={{ padding: "19% 0" }}></div>
                <p
                  style={{
                    color: "#c9c8cd",
                    fontFamily: "Arial,sans-serif",
                    fontSize: "14px",
                    lineHeight: "17px",
                    marginBottom: 0,
                    marginTop: "8px",
                    overflow: "hidden",
                    padding: "8px 0 7px",
                    textAlign: "center",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  <a
                    href="https://www.instagram.com/reel/DNUXe7fTzJn/?utm_source=ig_embed&utm_campaign=loading"
                    style={{
                      color: "#c9c8cd",
                      fontFamily: "Arial,sans-serif",
                      fontSize: "14px",
                      fontStyle: "normal",
                      fontWeight: "normal",
                      lineHeight: "17px",
                      textDecoration: "none",
                    }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    A post shared by (dream)scape (@thedreamscape.space)
                  </a>
                </p>
              </a>
            </div>
          </blockquote>
          <script async src="//www.instagram.com/embed.js"></script>
        </div>
      </div>
    </section>
  );
}
