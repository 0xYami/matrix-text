<script lang="ts">
  import AnimatedSentence from "./lib/animated-sentence.svelte";
  import { plugins } from "./plugins";
</script>

<main>
  <div class="head">
    <div class="title">Plugins</div>
    <div class="minor">1/2</div>
  </div>
  {#each plugins as plugin}
    <div class="container">
      <div class="plugin">
        <AnimatedSentence sentence={plugin.repository} --color="#89B4FA" />
        -
        <AnimatedSentence
          sentence={plugin.description}
          --color="rgb(156 163 175)"
        />
      </div>
      <div class="line" />
    </div>
  {/each}
</main>

<style>
  main {
    width: 1000px;
    height: 590px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    font-size: 20px;
    padding: 2em;
    margin-top: 5em;
    border: 1px solid #89b4fa;
    border-radius: 10px;
    color: #89b4fa;
    background-color: #1e1e2e;
  }

  .head {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 15px;
  }

  .title {
    font-size: 2em;
  }

  .minor {
    font-size: 1.8em;
  }

  .container {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .plugin {
    display: flex;
    align-items: flex-end;
    gap: 5px;
  }

  .line {
    margin-left: 10px;
    height: 0.1px;
    flex-grow: 1;
    background-color: #8c8c8c;
  }
</style>
