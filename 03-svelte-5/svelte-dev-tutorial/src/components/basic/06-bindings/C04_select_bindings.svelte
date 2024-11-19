<script lang="ts">
    type Question = {
        id: number;
        text: string;
    };
    let questions: Question[] = $state([
        {
            id: 1,
            text: `Where did you go to school?`,
        },
        {
            id: 2,
            text: `What is your mother's name?`,
        },
        {
            id: 3,
            text: `What is another personal fact that an attacker could easily find with Google?`,
        },
    ]);

    // let selected: Question = $state({ id: -1, text: "" });
    let selected: Question | null = $state(null);

    let answer: string = $state("");

    function handleSubmit(e: Event) {
        e.preventDefault();

        if (selected) {
            alert(
                `answered question ${selected.id} (${selected.text}) with "${answer}"`,
            );
        }
    }
</script>

<h2>Insecurity questions</h2>

<form onsubmit={handleSubmit}>
    <select bind:value={selected} onchange={() => (answer = "")}>
        <option value={null}>Select a question...</option>
        {#each questions as question}
            <option value={question}>
                {question.text}
            </option>
        {/each}
    </select>

    <input bind:value={answer} />

    <button disabled={!answer} type="submit">Submit</button>
</form>

<p>
    selected question {selected ? selected.id : "[waiting...]"}
</p>
