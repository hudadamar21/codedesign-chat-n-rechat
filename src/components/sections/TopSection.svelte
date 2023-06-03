<script>
  import IconArrowRight from "../icon/IconArrowRight.svelte";
  import IconDownload from "../icon/IconDownload.svelte";
  import IconUser from "../icon/IconUser.svelte";

</script>
<section class="grid grid-cols-2 gap-10 mt-20">
  <div>
    <div class="text-primary text-sm font-semibold mb-4">
      CHAT N’ RECHAT
    </div>
    <h1 class="text-4xl mb-6">
      Sebuah aplikasi chatting yang bisa bikin kamu lupa diri, tapi tidak lupa jasa pahlawan!
    </h1>
    <p class="text-lg text-dark/60 mb-6">
      Sebenernya banyak banget aplikasi chatting yang lebih bagus dari ini, maka dari itu lebih baik pake yang lain aja deh ya daripada pake aplikasi yang ini.
    </p>
    <div class="flex items-center gap-5 mb-14">
      <a href="#" class="flex items-center justify-center gap-3 bg-primary rounded-lg px-[45px] py-[15px] text-lg font-semibold text-white shadow-xl shadow-primary/25">
        Register
        <IconArrowRight/>
      </a>
      <a href="#" class="flex items-center justify-center gap-3 bg-primary rounded-lg px-[45px] py-[15px] text-lg font-semibold text-primary bg-primary/5">
        Learn More
      </a>
    </div>
    <div class="flex itemsc-center gap-10 divide-x">
      <div class="flex items-start gap-8">
        <i class="mt-1"><IconDownload/></i>
        <div>
          <small class="text-xs text-dark/60">TOTAL DON’TLOUD</small>
          <div class="text-2xl font-semibold">1,501,234</div>
        </div>
      </div>
      <div class="flex items-start gap-8 pl-10">
        <i class="mt-1"><IconUser/></i>
        <div>
          <small class="text-xs text-dark/60">TOTAL USERS</small>
          <div class="text-2xl font-semibold">1,318,829</div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <img class="w-full h-full scale-[1.15]" src="/images/top-image.svg" alt="top">
  </div>
</section>

<section class="bg-primary/5 w-full rounded-2xl py-14 flex items-center justify-center gap-10 mt-32">
  <img src="/images/sponsors/cnn.png" alt="cnn">
  <img src="/images/sponsors/tirto.png" alt="tirto">
  <img src="/images/sponsors/forbes.png" alt="forbes">
  <img src="/images/sponsors/google.png" alt="google">
  <img src="/images/sponsors/the-new-york-times.png" alt="the new york times">
</section>