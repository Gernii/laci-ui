/** This type to relicate svelte $state */
export type Getter<T> = () => T;

/**
 * This type to relicate svelte $state and handle if its not $state
 */
export type MaybeGetter<T> = T | Getter<T>;
