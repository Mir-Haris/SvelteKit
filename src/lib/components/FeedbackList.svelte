<script lang="ts">
  // Just define type locally (not exported)
  type Feedback = {
    user: string;
    text: string;
    timestamp: number;
  };

  export let feedbacks: Feedback[] = [];
</script>

<h2 class="text-2xl font-bold mb-4 bg-yellow-200">Feedback</h2>

{#if feedbacks.length > 0}
<ul class="bg-blue-100 space-y-4 p-4 max-w-2xl mx-auto">
  {#each feedbacks as fb}
    <li class="bg-white shadow-md rounded-lg p-4 hover:bg-gray-50 transition">
      <strong class="block text-lg">{fb.user}</strong>
      <p class="text-gray-600">{fb.text}</p>
    </li>
  {/each}
</ul>

{:else}
  <p>No feedback yet.</p>
{/if}
