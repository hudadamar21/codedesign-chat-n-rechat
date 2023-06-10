<script>
  import IconArrowRight from "../icon/IconArrowRight.svelte";
  import IconDownload from "../icon/IconDownload.svelte";
  import IconUser from "../icon/IconUser.svelte";
</script>

<section id="beranda" class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-44">
  <div data-aos="fade-right" class="order-2 md:order-1 px-5 md:px-0">
    <div class="font-inter text-primary text-sm font-semibold mb-4 tracking-widest">
      CHAT N’ RECHAT
    </div>
    <h1 class="text-2xl md:text-3xl lg:text-[34px] mb-6">
      Sebuah aplikasi chatting yang bisa bikin kamu lupa diri, tapi tidak lupa jasa pahlawan!
    </h1>
    <p class="text-base md:text-lg text-dark/60 mb-6">
      Sebenernya banyak banget aplikasi chatting yang lebih bagus dari ini, maka dari itu lebih baik
      pake yang lain aja deh ya daripada pake aplikasi yang ini.
    </p>
    <div class="flex items-center gap-5 mb-14">
      <a
        href="#register"
        class="flex items-center justify-center gap-3 bg-primary rounded-lg px-8 md:px-[45px] py-3 md:py-[15px] text-base md:text-lg font-semibold text-white shadow-xl shadow-primary/25"
      >
        Register
        <IconArrowRight />
      </a>
      <a
        href="#learn"
        class="flex items-center justify-center gap-3 bg-primary rounded-lg px-8 md:px-[45px] py-3 md:py-[15px] text-base md:text-lg font-semibold text-primary bg-primary/5"
      >
        Learn More
      </a>
    </div>
    <div class="flex items-center gap-5 md:gap-10 divide-x">
      <div class="flex items-start gap-3 md:gap-8">
        <i class="mt-1"><IconDownload /></i>
        <div>
          <small class="text-[10px] md:text-xs text-dark/60">TOTAL DON’TLOUD</small>
          <div class="text-xl md:text-2xl font-semibold">1,501,234</div>
        </div>
      </div>
      <div class="flex items-start gap-3 md:gap-8 pl-5 md:pl-10">
        <i class="mt-1"><IconUser /></i>
        <div>
          <small class="text-[10px] md:text-xs text-dark/60">TOTAL USERS</small>
          <div class="text-xl md:text-2xl font-semibold">1,318,829</div>
        </div>
      </div>
    </div>
  </div>
  <div data-aos="fade-left" class="order-1 md:order-2 px-5 md:px-0">
    <img
      class="w-2/3 md:w-full mx-auto h-full scale-[1.15]"
      src="/images/top-image.svg"
      alt="top"
    />
  </div>
</section>

<section
  data-aos="fade-up"
  class="bg-primary/5 w-full md:rounded-2xl py-14 flex flex-col md:flex-row items-center justify-center gap-14 md:gap-10 mt-20 md:mt-32"
>
  <img src="/images/sponsors/cnn.png" alt="cnn" />
  <img src="/images/sponsors/tirto.png" alt="tirto" />
  <img src="/images/sponsors/forbes.png" alt="forbes" />
  <img src="/images/sponsors/google.png" alt="google" />
  <img src="/images/sponsors/the-new-york-times.png" alt="the new york times" />
</section>
