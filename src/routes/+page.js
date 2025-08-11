export async function load() {
  // mock data for now
  const feedbacks = [
    { user: "Alice", text: "Great product!" , timestamp: Date.now() },
    { user: "Bob", text: "Needs more features.", timestamp: Date.now() }
  ];

  return { feedbacks };
}
