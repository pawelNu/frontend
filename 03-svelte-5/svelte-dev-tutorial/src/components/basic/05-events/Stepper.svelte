<script lang="ts">
    type Props = {
        increment: () => void;
        decrement: () => void;
    };
    let { increment, decrement }: Props = $props();
</script>

<button onclick={decrement}>-1</button>
<button onclick={increment}>+1</button>
