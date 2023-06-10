<script>
  let menuOpen = true;
</script>

<header class="max-w-screen-lg mx-auto w-full flex items-center justify-between py-5 md:py-10 px-3">
  <img src="/logo.png" alt="logo" />
  <nav
    class={`fixed top-16 right-3 z-20 p-5 w-36 rounded-xl shadow-md shadow-primary/10 bg-white md:static flex flex-col md:flex-row md:space-x-12 space-y-5 md:space-y-0 ${
      menuOpen ? "block" : "hidden md:block"
    }`}
  >
    <a href="#beranda">Beranda</a>
    <a href="#fitur">Fitur-fitur</a>
    <a href="#teknologi">Teknologi</a>
    <a href="#faq">FAQ</a>
    <a
      href="#download"
      class="hidden md:block bg-primary text-white rounded-lg px-6 py-2 text-lg font-semibold shadow-xl shadow-primary/25"
      >Download</a
    >
  </nav>
  <button on:click={() => (menuOpen = !menuOpen)} class="text-primary">
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
</header>
