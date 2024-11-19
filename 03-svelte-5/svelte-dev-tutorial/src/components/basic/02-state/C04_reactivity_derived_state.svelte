<script>
    let numbers = $state([1, 2, 3, 4]);
    let total = $derived(numbers.reduce((t, n) => t + n, 0));
    function addNumber() {
        numbers.push(numbers.length + 1);
    }
</script>

<div>reactivity - derived state</div>
<p>{numbers.join(" + ")} = {total}</p>
<button onclick={addNumber}>Add a number</button>
