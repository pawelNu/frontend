<script>

    let content = $state("Hello!");

    function tooltip(node, fn) {
        $effect(() => {
        });
    }
</script>

<input bind:value={content} />

<button use:tooltip={() => ({ content })}>Hover me</button>
