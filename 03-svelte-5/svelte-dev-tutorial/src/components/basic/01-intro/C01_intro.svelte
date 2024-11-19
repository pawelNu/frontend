<script lang="ts">
    let name = "Svelte";
    let src = "https://media1.tenor.com/m/fQqnqv9QV7gAAAAd/vrbie-vrbs.gif";
    let string = `this string contains some <strong>HTML!!!</strong>`;
</script>

<div>h1 element</div>
<h1>Hello {name.toUpperCase()}!</h1>

<div>image</div>
<img {src} alt="{name} dances." />

<div>styles</div>
<p>styling</p>

<div>HTML string</div>
<p>{@html string}</p>
