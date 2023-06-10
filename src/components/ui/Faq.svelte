<script>
  import { onMount } from "svelte";
  import IconArrowDown from "../icon/IconArrowDown.svelte";

  export let faq;
  let isOpen = false;
  let answer;

  let anwerHeight;
  onMount(() => {
    anwerHeight = answer.scrollHeight;
    window.addEventListener("resize", () => {
      anwerHeight = answer.scrollHeight;
    });
  });
</script>

<div
  class={`transition-all duration-300 ${
    isOpen ? "bg-primary shadow-xl shadow-primary/20 rounded-xl text-white mb-3" : ""
  }`}
>
  <button
    on:click={() => (isOpen = !isOpen)}
    class={`flex items-center justify-between gap-5 border-b p-5 w-full transition-[border-color] duration-300 ${
      isOpen ? "border-white/20" : ""
    }`}
  >
    <h2 class="text-base md:text-lg text-left font-medium">{faq.question}</h2>
    <div class="transition-transform duration-300 {isOpen ? 'rotate-180' : ''}">
      <IconArrowDown />
    </div>
  </button>
  <div
    style={`max-height: ${isOpen ? anwerHeight + "px" : "0px"}`}
    class="transition-[max-height] duration-300 overflow-hidden"
  >
    <p bind:this={answer} class="p-5">
      {faq.answer}
    </p>
  </div>
</div>
