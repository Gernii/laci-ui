import { extractGetter } from "./extract-getter";
import { isFunction } from "./typeof";
import type { MaybeGetter } from "./types";

type StateProps<T> =
	| {
			value: MaybeGetter<T>;
			onChange?: (value: T) => void;
	  }
	| {
			value: MaybeGetter<T | undefined>;
			onChange?: (value: T) => void;
			defaultValue: T;
	  };

export class State<T> {
	#defaultState = $state<T>() as T;
	#state!: StateProps<T>["value"];
	#onChange!: StateProps<T>["onChange"];
	#defaultValue!: T;

	constructor(props: StateProps<T>) {
		this.#state = props.value;
		this.#onChange = props.onChange;

		if ("defaultValue" in props) {
			this.#defaultValue = props.defaultValue;
		}

		this.#defaultState = extractGetter({
			value: this.#state,
			defaultValue: this.#defaultValue,
		});
	}

	get value() {
		if (!isFunction(this.#state)) {
			return this.#defaultState;
		}

		const value = this.#state();

		if (value === undefined) {
			return this.#defaultState;
		}

		return value ?? this.#defaultState;
	}

	set value(newValue: T) {
		this.#onChange?.(newValue);

		if (isFunction(this.#state)) {
			return;
		}

		this.#defaultState = newValue;
	}
}
