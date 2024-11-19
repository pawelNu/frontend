<script lang="ts">
    type EmojiName = "apple" | "banana" | "carrot" | "doughnut" | "egg";
    const emojis: Record<EmojiName, string> = {
        apple: "🍎",
        banana: "🍌",
        carrot: "🥕",
        doughnut: "🍩",
        egg: "🥚",
    };

    // `name` is updated whenever the prop value changes...
    let { name }: { name: EmojiName } = $props();

    // ...but `emoji` is fixed upon initialisation
    const emoji = emojis[name];
</script>

<p>{emoji} = {name}</p>
