<script lang="ts">
  import { cubicOut } from "svelte/easing";
  import { fly, scale } from "svelte/transition";

  const photos = [
    {
      alt: "Xisco Sastre Cabot after finishing a half marathon",
    },
    {
      alt: "Xisco Sastre Cabot in the old town of Antwerp",
    },
    {
      alt: "Xisco Sastre Cabot riding a road bike",
    },
  ];

  const links = [
    {
      name: "GitHub",
      url: "https://github.com/xiscosc",
      icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="size-5"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/></svg>`,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/fsastrecabot/",
      icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="size-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"/></svg>`,
    },
    {
      name: "Strava",
      url: "https://www.strava.com/athletes/42254540",
      icon: `<svg viewBox="0 0 24 24" fill="currentColor" class="size-5"><path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169"/></svg>`,
    },
    {
      name: "Email",
      url: "mailto:hello@xiscosc.codes",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="size-5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    },
  ];

  let visible = $state(false);
  let currentImage = $state(0);

  $effect(() => {
    visible = true;
    const interval = setInterval(() => {
      currentImage = (currentImage + 1) % photos.length;
    }, 4800);

    return () => clearInterval(interval);
  });

  function showImage(index: number) {
    currentImage = index;
  }

  function showPrevious() {
    currentImage = (currentImage - 1 + photos.length) % photos.length;
  }

  function showNext() {
    currentImage = (currentImage + 1) % photos.length;
  }
</script>

<div
  class="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#fbf4e9_0%,#f8f0e3_40%,#f1e5d4_100%)] text-[#201611] [font-family:Geist,sans-serif]"
>
  <div
    class="pointer-events-none absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(32,22,17,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(32,22,17,0.04)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:radial-gradient(circle_at_center,black_35%,transparent_82%)]"
  ></div>
  <div
    class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(73,45,25,0.08)_100%)]"
  ></div>
  <div
    class="pointer-events-none absolute left-[-10rem] top-[-8rem] h-80 w-80 rounded-full bg-orange-300/35 blur-3xl"
  ></div>
  <div
    class="pointer-events-none absolute right-[-8rem] top-[10%] h-72 w-72 rounded-full bg-emerald-300/25 blur-3xl"
  ></div>
  <div
    class="pointer-events-none absolute bottom-[-10rem] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-200/30 blur-3xl"
  ></div>

  <main
    class="relative mx-auto flex min-h-screen w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-10 md:px-10 lg:px-16"
  >
    {#if visible}
      <div
        class="grid w-full gap-8 sm:gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] lg:items-center lg:gap-14"
      >
        <section
          class="flex flex-col items-center justify-center text-center lg:items-start lg:text-left"
        >
          <div
            in:fly={{ y: 24, duration: 650, easing: cubicOut }}
            class="space-y-5"
          >
            <h1
              class="text-[3.35rem] leading-[0.9] tracking-tight text-stone-900 [font-family:Fraunces,serif] sm:max-w-3xl sm:text-5xl lg:text-7xl"
            >
              <span class="block sm:inline">Xisco</span>
              <span class="block sm:inline">Sastre Cabot</span>
            </h1>
            <div
              class="flex flex-wrap items-center justify-center gap-3 text-sm text-stone-600 sm:text-base lg:justify-start"
            >
              <span
                class="-rotate-2 rounded-sm bg-orange-300 px-3 py-1.5 text-stone-950 shadow-[0_10px_24px_rgba(184,93,52,0.18)] [font-family:'Geist_Mono',monospace]"
              >
                Software Engineer 💻
              </span>
              <span>based in</span>
              <span
                class="rotate-2 rounded-sm border border-stone-900/10 bg-white/72 px-3 py-1.5 text-[1.05rem] tracking-[0.02em] text-stone-700 shadow-[0_10px_24px_rgba(60,40,20,0.08)] backdrop-blur [font-family:'Seaweed_Script',cursive] sm:text-lg"
              >
                Mallorca 🏃 🚴 🌴
              </span>
            </div>
          </div>

          <div
            in:fly={{ y: 18, duration: 550, delay: 250, easing: cubicOut }}
            class="mt-6 flex flex-wrap justify-center gap-3 sm:mt-8 lg:justify-start"
          >
            {#each links as link}
              <a
                href={link.url}
                target={link.url.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.url.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"}
                aria-label={link.name}
                class="group flex h-12 w-12 items-center justify-center rounded-full border border-white/85 bg-stone-950 text-white shadow-[0_18px_45px_rgba(60,40,20,0.14)] backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-orange-700 hover:text-white sm:h-13 sm:w-13"
              >
                {@html link.icon}
              </a>
            {/each}
          </div>
        </section>

        <section
          in:scale={{ duration: 700, start: 0.7, easing: cubicOut }}
          class="relative"
        >
          <div
            class="relative mx-auto w-full max-w-[24rem] sm:max-w-[29rem] lg:max-w-[34rem]"
          >
            <div class="relative">
              <div
                class="relative aspect-[4/5] overflow-hidden rounded-[1.35rem] border border-white/80 bg-stone-200 shadow-[0_22px_44px_rgba(60,40,20,0.16)] sm:rounded-[1.8rem] sm:shadow-[0_28px_55px_rgba(60,40,20,0.18)]"
              >
                <div class="absolute inset-0">
                  <enhanced:img
                    src="./assets/img1.jpg"
                    alt={photos[0]!.alt}
                    sizes="(min-width: 1024px) 544px, (min-width: 640px) 464px, 384px"
                    class="size-full object-cover transition-opacity duration-350 {currentImage === 0 ? 'opacity-100' : 'opacity-0'}"
                  />
                </div>
                <div class="absolute inset-0">
                  <enhanced:img
                    src="./assets/img2.jpg"
                    alt={photos[1]!.alt}
                    sizes="(min-width: 1024px) 544px, (min-width: 640px) 464px, 384px"
                    class="size-full object-cover transition-opacity duration-350 {currentImage === 1 ? 'opacity-100' : 'opacity-0'}"
                  />
                </div>
                <div class="absolute inset-0">
                  <enhanced:img
                    src="./assets/img3.jpeg"
                    alt={photos[2]!.alt}
                    sizes="(min-width: 1024px) 544px, (min-width: 640px) 464px, 384px"
                    class="size-full object-cover transition-opacity duration-350 {currentImage === 2 ? 'opacity-100' : 'opacity-0'}"
                  />
                </div>
              </div>

              <div
                class="mt-4 flex items-center justify-between gap-3 sm:mt-5 sm:gap-4"
              >
                <div class="flex items-center gap-2">
                  {#each photos as photo, index}
                    <button
                      type="button"
                      aria-label={`Show photo ${index + 1}`}
                      aria-pressed={currentImage === index}
                      class={`h-2 rounded-full transition-all duration-300 sm:h-2.5 ${currentImage === index ? "w-8 bg-stone-900 sm:w-10" : "w-2 bg-stone-400/60 hover:bg-stone-500 sm:w-2.5"}`}
                      onclick={() => showImage(index)}
                    ></button>
                  {/each}
                </div>

                <div class="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Previous photo"
                    class="flex h-9 w-9 items-center justify-center rounded-full border border-stone-900/10 bg-white/80 text-stone-700 shadow-[0_10px_24px_rgba(60,40,20,0.08)] transition duration-300 hover:bg-white hover:text-stone-900 sm:h-10 sm:w-10"
                    onclick={showPrevious}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="size-4"
                    >
                      <path d="m15 18-6-6 6-6"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    aria-label="Next photo"
                    class="flex h-9 w-9 items-center justify-center rounded-full border border-stone-900/10 bg-white/80 text-stone-700 shadow-[0_10px_24px_rgba(60,40,20,0.08)] transition duration-300 hover:bg-white hover:text-stone-900 sm:h-10 sm:w-10"
                    onclick={showNext}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="1.8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="size-4"
                    >
                      <path d="m9 18 6-6-6-6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    {/if}
  </main>
</div>
