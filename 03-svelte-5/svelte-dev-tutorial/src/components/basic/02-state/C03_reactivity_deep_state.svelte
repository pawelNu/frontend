<script>
    let numbers = $state([1, 2, 3, 4]);
    function addNumber() {
        numbers[numbers.length] = numbers.length + 1;
        // or
        // numbers.push(numbers.length + 1);
    }
</script>

<div>reactivity - deep state</div>
<p>{numbers.join(" + ")} = ...</p>
<button onclick={addNumber}>Add a number</button>
