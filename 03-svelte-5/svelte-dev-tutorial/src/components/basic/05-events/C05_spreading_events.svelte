<script lang="ts">
    import BigRedButton from "./BigRedButton.svelte";
    import birds from "./mixkit-little-birds-singing-in-the-trees-17.wav";

    const audio = new Audio();
    audio.src = birds;

    function honk() {
        audio.load();
        audio.play();
    }
</script>

<br />
<br />
<br />
<BigRedButton onclick={honk} />
