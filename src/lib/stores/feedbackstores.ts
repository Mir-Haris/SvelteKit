// src/lib/stores/feedbackStore.ts
import { writable } from 'svelte/store';

export type Feedback = {
  user: string;
  text: string;
};

export const feedbacks = writable<Feedback[]>([]);
