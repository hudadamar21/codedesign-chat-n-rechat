<script lang="ts">
  import DownloadSection from "./components/sections/DownloadSection.svelte";
  import FaqSection from "./components/sections/FaqSection.svelte";
  import FiturSection from "./components/sections/FiturSection.svelte";
  import TeknologiSection from "./components/sections/TeknologiSection.svelte";
  import BerandaSection from "./components/sections/BerandaSection.svelte";
  import MainLayout from "./layouts/MainLayout.svelte";
</script>

<MainLayout>
  <main class="main-container">
    <BerandaSection />
    <FiturSection />
    <TeknologiSection />
    <DownloadSection />
  </main>
  <FaqSection />
</MainLayout>
