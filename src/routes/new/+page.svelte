<!-- <script lang="ts">
  import FeedbackForm from '../../lib/components/feedbackForm.svelte';

  function handleSubmit(e: CustomEvent<{ user: string; text: string }>) {
    const { user, text } = e.detail;
    console.log("Submitted:", user, text);

    // Optionally: POST to backend
    alert("Feedback submitted!");
  }
</script>

<h1>Submit New Feedback</h1>

<FeedbackForm on:submit={handleSubmit} />

<a href="/">← Go back</a> -->



<script lang="ts">
  import FeedbackForm from '../../lib/components/feedbackForm.svelte';
  import { feedbacks } from '../../lib/stores/feedbackstores';
  import type { Feedback } from '../../lib/stores/feedbackstores';
  import { goto } from '$app/navigation';


  function handleSubmit(e: CustomEvent<Feedback>) {
    feedbacks.update((fbs) => [...fbs, e.detail]);
    alert('Feedback submitted!');
    goBack();
  }

    function goBack() {
    goto('/');
  }
</script>

<h1>Submit New Feedback</h1>
<FeedbackForm on:submit={handleSubmit} />
<!-- <a href="/">← Go back</a> -->
<button on:click={goBack}>← Go back</button>

