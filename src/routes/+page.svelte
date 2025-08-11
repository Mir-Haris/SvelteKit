<script>
  import FeedbackList from '$lib/components/FeedbackList.svelte';

  export let data;
</script>

<h1>Welcome to Feedback Board</h1>

<FeedbackList feedbacks={data.feedbacks} />

<a href="/new">Add New Feedback</a>
