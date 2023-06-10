<script lang="typescript">
  import SectionTitle from "../ui/SectionTitle.svelte";

  let fitur = [
    {
      image: "/images/fitur1.png",
      title: "Groups to keep in touch",
      description:
        "Keep in touch with the groups of people that matter the most, like your family or coworkers. With group chats, you can share messages, photos, and videos.",
    },
    {
      image: "/images/fitur2.png",
      title: "Simple, Reliable Messaging",
      description:
        "Message your friends and family for free*. WhatsApp uses your phone's Internet connection to send messages so you can avoid SMS fees.",
    },
    {
      image: "/images/fitur3.png",
      title: "Speak Freely",
      description:
        "With voice calls, you can talk to your friends and family for free*, even if they're in another country. And with free* video calls, you can have face-to-face conversations.",
    },
  ];
</script>

<section
  id="fitur"
  data-aos="fade-up"
  class="mt-20 md:mt-32 border-b border-dark/5 pb-20 md:pb-32 mb-20 md:mb-32 px-5 md:px-0"
>
  <div class="text-center w-full md:w-1/2 mx-auto">
    <SectionTitle
      badge="NGGAK HARUS SIH SEBENERNYA"
      title="Kenapa Harus Pakai Chat N’ Rechat?"
      description="Sebenernya yang bagus itu sih WhatsApp loh, mending pake WhatsApp aja deh. Yaudah berikut ini
      adalah fitur-fitur WhatsApp.  "
    />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 md:mt-32">
    {#each fitur as { image, title, description }, i}
      <div class="flex flex-col justify-between items-center gap-3 text-center">
        <img src={image} alt={title} />
        <div>
          <h3 class="text-lg">{title}</h3>
          <p class="text-dark/60">{description}</p>
        </div>
      </div>
    {/each}
  </div>
</section>
