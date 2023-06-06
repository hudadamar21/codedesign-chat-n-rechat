<script>
  import SectionTitle from "../ui/SectionTitle.svelte";
  let teknologi = [
    {
      image: "/images/teknologi1.png",
      title: "Kamu Adalah Beban Kami",
      description:
        "Semakin banyak kamu yang mendaftar di aplikasi ini, artinya semakin banyak data yang perlu disimpan, nah kan jadi perlu server gede tuh. Makanya kamu beban!",
    },
    {
      image: "/images/teknologi2.png",
      title: "Males Buat Ngembangin",
      description:
        "Lo bakal nemu bug, entah pesan yang mau dikirim gak bisa dikirim padahal lo belom pencet tombol enter atau masalah lainnya. Nah soal itu kita males buat benerin.",
    },
    {
      image: "/images/teknologi3.png",
      title: "Pokoknya Males Aja Lah",
      description:
        "Nggak tau lagi harus ngomong apa, pokoknya males aja sih kita bikin aplikasi chat kek gini. Makannya mending lo pake WhatsApp aja udah.",
    },
  ];
</script>

<section id="teknologi" class="grid grid-cols-2 gap-10">
  <img class="h-full w-full scale-[1.2] mt-5" src="/images/teknologi.png" alt="teknologi" />
  <div class="">
    <SectionTitle
      badge="TEKNOLOGI YANG DIGUNAKAN"
      title="Teknologi Yang Kami Gunakan Di Dalam Aplikasi Ini Akan Membuat DHH Dan Jason Fried Pensiun! 😱"
      description="Lo bisa bayangin DHH sama Jason Fried aja jadi pensiun gegara aplikasi ini, apalagi lo yang cuma user dan beban kami, gegara lo pake dan daftar di aplikasi ini jadi kita harus bayar server DO tiap bulan, mana pas bayar harus tunjuk-tunjukan. Inilah alasan kenapa gak usah daftar:"
    />
    <div class="space-y-6 mt-8">
      {#each teknologi as {title, image, description}, i}
      <div class="flex items-start gap-5">
        <div class="bg-dark/10 h-[60px] aspect-square rounded-lg flex items-center justify-center mt-1.5">
          <img src={image} alt={title} />
        </div>
        <div>
          <h3 class="text-lg font-medium mb-2 ">{title}</h3>
          <p class="text-dark/60 leading-[26px]">{description}</p>
        </div>
      </div>
      {/each}
    </div>
  </div>
</section>
