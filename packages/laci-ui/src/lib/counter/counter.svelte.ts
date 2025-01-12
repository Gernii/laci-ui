import { State } from "$lib/utils/state.svelte";
import type { MaybeGetter } from "$lib/utils/types";

interface CounterProps {
	/**
	 * The value for the Counter.
	 *
	 * When passing a getter, it will be used as source of truth,
	 * meaning that the value only changes when the getter returns a new value.
	 *
	 * Otherwise, if passing a static value, it'll serve as the default value.
	 *
	 *
	 * @default 0
	 */
	value?: MaybeGetter<number>;

	onValueChange?: (value: number) => void;
}

export class Counter {
	#value!: State<number>;
	counter = $derived(this.#value.value);
	constructor(props: CounterProps = {}) {
		this.#value = new State({
			value: props.value,
			onChange: props.onValueChange,
			defaultValue: 0,
		});
	}

	increment() {
		this.#value.value++;
	}

	decrement() {
		this.#value.value--;
	}
}
