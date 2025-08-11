export async function load({ params }) {
  const index = parseInt(params.id);

  const feedbacks = [
    { user: "Alice", text: "Great product!" },
    { user: "Bob", text: "Needs more features." }
  ];

  return {
    feedback: feedbacks[index]
  };
}
