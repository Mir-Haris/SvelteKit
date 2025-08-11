<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  let user = '';
  let text = '';

  function submit() {
    if (!user.trim() || !text.trim()) {
      alert("Both fields are required.");
      return;
    }

    dispatch('submit', { user, text }); // Dispatch custom event
    user = '';
    text = '';
  }
</script>

<div style="display: flex; flex-direction: column;">
  <input bind:value={user} placeholder="Your name" />
  <textarea bind:value={text} placeholder="Your feedback"></textarea>
</div>
<button on:click={submit}>Submit</button>
