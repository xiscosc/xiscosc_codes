<script lang="ts">
  import { cubicOut } from "svelte/easing";
  import { fade, fly, scale } from "svelte/transition";

  let visible = $state(false);

  $effect(() => {
    visible = true;
  });

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
      name: "Email",
      url: "mailto:xiscosastre@gmail.com",
      icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="size-5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    },
  ];
</script>

<div
  class="animated-gradient min-h-screen flex items-center justify-center px-6 bg-linear-to-br from-orange-200 via-rose-100 to-sky-200"
>
  <div class="max-w-md w-full flex flex-col items-center">
    {#if visible}
      <!-- Photo -->
      <div
        in:scale={{ duration: 700, start: 0.6, easing: cubicOut }}
        class="mb-8"
      >
        <div
          class="size-44 rounded-full overflow-hidden ring-4 ring-white/60 shadow-2xl hover:scale-105 active:scale-105 transition-transform duration-300"
        >
          <enhanced:img
            src="./assets/10050822.jpg"
            alt="Xisco Sastre Cabot"
            class="size-full object-cover"
          />
        </div>
      </div>

      <!-- Name -->
      <div
        in:fly={{ y: 30, duration: 600, delay: 200, easing: cubicOut }}
        class="text-center mb-2"
      >
        <h1
          class="text-3xl font-semibold tracking-tight text-stone-800"
        >
          Xisco Sastre Cabot
        </h1>
      </div>

      <!-- Emojis -->
      <div
        in:fade={{ duration: 500, delay: 400 }}
        class="flex gap-3 text-xl mb-4"
        aria-label="coding, running, cycling, trail running"
      >
        <span class="hover:scale-125 active:scale-125 transition-transform duration-200 cursor-default">💻</span>
        <span class="hover:scale-125 active:scale-125 transition-transform duration-200 cursor-default">🏃</span>
        <span class="hover:scale-125 active:scale-125 transition-transform duration-200 cursor-default">🚴</span>
        <span class="hover:scale-125 active:scale-125 transition-transform duration-200 cursor-default">👟</span>
      </div>

      <!-- Bio -->
      <div
        in:fly={{ y: 20, duration: 600, delay: 500, easing: cubicOut }}
        class="mb-8"
      >
        <p class="flex flex-col items-center gap-4">
          <span class="font-mono bg-stone-900 text-white px-2 py-0.5 rounded-sm inline-block -rotate-2">Software Engineer</span>
          <span class="bg-stone-200 text-stone-600 text-sm tracking-widest uppercase px-2 py-0.5 rounded-sm inline-block rotate-2 border border-stone-300">based in Mallorca 🌴</span>
        </p>
      </div>

      <!-- Social links -->
      <div
        in:fly={{ y: 20, duration: 600, delay: 650, easing: cubicOut }}
        class="flex gap-3"
      >
        {#each links as link}
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.name}
            class="flex items-center justify-center size-10 rounded-full bg-white/50 backdrop-blur-sm text-stone-500 hover:bg-white hover:text-orange-500 hover:shadow-lg hover:scale-110 active:bg-white active:text-orange-500 active:shadow-lg active:scale-110 transition-all duration-200"
          >
            {@html link.icon}
          </a>
        {/each}
      </div>
    {/if}
  </div>
</div>
