<script lang="ts">
  export let data: {
    feedback: {
      user: string;
      text: string;
    };
  };
</script>

<h1>Feedback from {data.feedback.user}</h1>
<p>{data.feedback.text}</p>

<a href="/">← Back to all</a>
