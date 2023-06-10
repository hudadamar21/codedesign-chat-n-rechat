<script>
  import Faq from "../ui/Faq.svelte";
  import SectionTitle from "../ui/SectionTitle.svelte";

  const faqs = [
    {
      question: "Apakah aplikasi ini sudah dapat izin dari MUI?",
      answer:
        "Ya, aplikasi ini telah mendapatkan izin dari MUI. Izin dari MUI menunjukkan bahwa aplikasi ini telah melalui proses penilaian dan evaluasi oleh Majelis Ulama Indonesia dan memenuhi persyaratan yang ditetapkan. Oleh karena itu, pengguna dapat merasa lebih percaya dan yakin dalam menggunakan aplikasi ini dengan mempertimbangkan aspek keagamaan.",
    },
    {
      question: "Apakah aplikasi ini gratis?",
      answer:
        "Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo nanya yang bener dong. Bayangin aja kalo aplikasi ini berbayar, masa pas chat lo harus bayar setiap karakter. Kalo lo mau bayar mending pake MMS aja dah.",
    },
    {
      question: "Apakah data saya akan dijual ke agen khusus US?",
      answer:
        "Maaf, aplikasi ini tidak diperbolehkan untuk dijual ke luar negeri. Ada pembatasan atau ketentuan khusus yang melarang penjualan aplikasi ini di luar wilayah negara. Penting untuk mematuhi peraturan dan perundangan yang berlaku terkait penjualan aplikasi agar tidak melanggar hukum dan memastikan kepatuhan yang tepat.",
    },
    {
      question: "Kenapa bumi muter? Apa karena di depan ada yang nikah?",
      answer:
        "Oh, tentu saja! Bumi muter karena alam semesta juga ingin merayakan pernikahan yang sedang berlangsung di depannya. Setiap kali ada pernikahan di dunia ini, Bumi merasa begitu bersemangat sehingga dia memutarnya dengan lebih cepat. Jadi, jika kamu mendengar lonceng pernikahan berdentang, berarti Bumi sedang berpesta di depan sana!",
    },
    {
      question: "Gimana caranya supaya si Rizal mau bikin konten buat Array ID?",
      answer: `,elaskan potensi positif dalam berbagi pengetahuan dan minat, Ceritakan tentang kesuksesan pembuat konten lain, Temukan topik yang menarik minatnya, Diskusikan keuntungan jangka panjang dari konsistensi dalam membuat konten, dan Tawarkan bantuan dan dukungan dalam proses pembuatan konten.`,
    },
    {
      question: "Pertanyaan di atas gabakal ada yang bisa jawab sih",
      answer: "Sayangnya sudah terjawab oeh chatgpt :(",
    },
    {
      question: "Kenapa game epep burik, bang?",
      answer:
        'Mungkin game epep burik karena mereka menyimpan semua grafis yang bagus untuk kehidupan nyata. Jadi, ketika kamu bermain game, kamu masih dapat menikmati keindahan dunia nyata di sekitarmu. Mereka hanya ingin memastikan bahwa kamu tidak melewatkan momen-momen menakjubkan dalam kehidupan nyata saat terlalu asyik bermain game. Jadi, jangan lupa untuk menikmati pemandangan di sekitarmu ketika kamu bermain epep yang "burik" ini!',
    },
  ];
</script>

<section data-aos="fade-up" class="max-w-screen-md mx-auto">
  <div id="faq" class="text-center w-full md:w-[60%] mx-auto px-5 md:px-0">
    <SectionTitle
      badge="BANYAK YANG NANYA"
      title="Pertanyaan Yang Sering Ditanyain"
      description="Sebenernya pertanyaan-pertanyaan ini kagak ada yang nanya sih, tapi ya ditaruh sini aja siapa tau lo mau baca ‘kan."
    />
  </div>
  <div class="mt-10 px-5 md:px-0">
    {#each faqs as faq}
      <Faq {faq} />
    {/each}
  </div>
</section>
