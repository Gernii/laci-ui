import { isFunction } from "./typeof";
import type { MaybeGetter } from "./types";

export interface ExtractedGetterProps<
	Value,
	DefaultValue extends Value = Value,
> {
	value: MaybeGetter<Value>;
	defaultValue?: DefaultValue;
}

export const extractGetter = <Value>(
	props: ExtractedGetterProps<Value>,
): Exclude<Value, undefined> => {
	if (isFunction(props.value)) {
		const value = props.value();

		return (value ?? props.defaultValue ?? value) as Exclude<Value, undefined>;
	}

	return (props.value ?? props.defaultValue ?? props.value) as Exclude<
		Value,
		undefined
	>;
};
