<script>
  import "../app.css";
  import "@fontsource/lato";
  import "@fontsource/material-icons-outlined";
  import { page } from "$app/stores";
</script>

{#key $page.url.pathname}
  <!-- svelte-ignore component-name-lowercase -->
  <page class="min-h-screen w-full bg-green-400 flex flex-col">
    <slot />
  </page>
{/key}
