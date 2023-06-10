<script>
  import { fly } from 'svelte/transition';
  import { clickOutside } from "../../utils/clickOutside";
  import { onMount } from "svelte";

  let menuOpen = false;
  let isTop = true;
  onMount(() => {
    window.addEventListener('scroll', () => {
      isTop = window.scrollY < 100
    })
  })
</script>

<header class=" fixed top-0 left-0 bg-secondary/80 backdrop-blur z-30 w-full">
  <div class="{`main-container flex items-center justify-between px-5 md:px-0 py-5 transition-[padding] duration-300 ${isTop ? 'md:py-10' : 'md:py-5'}`}">
    <img src="/logo.png" alt="logo" />
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <nav
      use:clickOutside
      on:click_outside={() => (menuOpen = false)}
      transition:fly="{{ y: 200, duration: 2000 }}"
      class={`fixed md:static top-16 right-3 z-20 p-5 md:p-0 w-44 md:w-auto rounded-xl shadow-md shadow-primary/10 md:shadow-none bg-white md:bg-transparent flex flex-col md:flex-row md:space-x-12 space-y-5 md:space-y-0 ${
        menuOpen ? "flex" : "hidden md:flex"
      }`}
    >
      <a href="#beranda" on:click={() => (menuOpen = false)}>Beranda</a>
      <a href="#fitur" on:click={() => (menuOpen = false)}>Fitur-fitur</a>
      <a href="#teknologi" on:click={() => (menuOpen = false)}>Teknologi</a>
      <a href="#faq" on:click={() => (menuOpen = false)}>FAQ</a>
      <a
        href="#download"
        on:click={() => (menuOpen = false)}
        class="block md:hidden bg-primary text-white text-center rounded-lg px-6 py-2 text-base font-semibold"
        >Download</a
      >
    </nav>
    <button on:click={() => (menuOpen = !menuOpen)} class="text-primary block md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"
        ><path
          fill="currentColor"
          d="M224 120v16a8 8 0 0 1-8 8H40a8 8 0 0 1-8-8v-16a8 8 0 0 1 8-8h176a8 8 0 0 1 8 8Zm-8 56H40a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8v-16a8 8 0 0 0-8-8Zm0-128H40a8 8 0 0 0-8 8v16a8 8 0 0 0 8 8h176a8 8 0 0 0 8-8V56a8 8 0 0 0-8-8Z"
        /></svg
      >
    </button>
    <a
      href="#download"
      class="hidden md:block bg-primary text-white rounded-lg px-6 py-2 text-lg font-semibold shadow-xl shadow-primary/25"
      >Download</a
    >
  </div>
</header>
