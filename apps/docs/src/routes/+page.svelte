<script lang="ts">
	import { Counter } from 'laci-ui';
	import LucidePlus from '~icons/lucide/plus';
	import LucideMinus from '~icons/lucide/minus';

	let count = $state(0);

	const counter = new Counter({ value: () => count, onValueChange: (value) => (count = value) });
</script>

<div class="space-y-4">
	<p>$state: {count}</p>
	<p>Counter: {counter.counter}</p>
	<div>
		<button class="btn btn-primary btn-sm" onclick={() => counter.increment()}>
			<LucidePlus /> up
		</button>
		<button class="btn btn-primary btn-sm" onclick={() => counter.decrement()}>
			<LucideMinus /> down
		</button>
	</div>
</div>
