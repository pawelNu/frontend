<script lang="ts">
    import { roll } from "./utils";

    let promise = $state(roll());
    let promise2 = $state(roll());
</script>

<button onclick={() => (promise = roll())}>roll the dice</button>

{#await promise}
    <p>...rolling</p>
{:then number}
    <p>you rolled a {number}!</p>
{:catch error}
    <p style="color: red">{error.message}</p>
{/await}

<button onclick={() => (promise2 = roll())}>roll the dice2</button>

{#await promise2 then number2}
    <p>you rolled a {number2}!</p>
{/await}
