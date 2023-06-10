<script lang="typescript">
export let badge;
export let title;
export let description;
</script>

<div class="text-xs md:text-sm font-semibold mb-4 tracking-widest">{badge}</div>
<h2 class="text-xl md:text-2xl lg:text-[28px] font-medium leading-8 md:leading-[42px] mb-3">{title}</h2>
<p class="text-sm md:text-base text-dark/60 leading-[26px]">
  {description}
</p>