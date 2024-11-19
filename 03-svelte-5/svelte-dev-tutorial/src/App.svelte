<script lang="ts">
    import Events from "./components/basic/05-events/Events.svelte";
    import Props from "./components/basic/03-props/Props.svelte";
    import Intro from "./components/basic/01-intro/Intro.svelte";
    import State from "./components/basic/02-state/State.svelte";
    import Logic from "./components/basic/04-logic/Logic.svelte";
    import Bindings from "./components/basic/06-bindings/Bindings.svelte";
    import ClassesAndStyles from "./components/basic/07-classes-and-styles/ClassesAndStyles.svelte";
    import Actions from "./components/basic/08-actions/Actions.svelte";
    import Transitions from "./components/basic/09-transitions/Transitions.svelte";
</script>

<ol>
    <!-- <li><Intro /></li> -->
    <!-- <li><State></State></li> -->
    <!-- <li><Props></Props></li> -->
    <!-- <li><Logic></Logic></li> -->
    <!-- <li><Events></Events></li> -->
    <!-- <li><Bindings /></li> -->
    <!-- <li><ClassesAndStyles /></li> -->
    <!-- <li><Actions /></li> -->
    <li><Transitions /></li>
</ol>

<style>
    :global(p) {
        color: goldenrod;
        font-family: "Comic Sans MS", cursive;
        font-size: 150%;
    }
    :global(div) {
        font-size: 120%;
        margin-top: 15px;
        margin-bottom: 15px;
    }
    li {
        margin-bottom: 20px;
        padding: 15px;
        border: 2px solid gray;
    }
</style>
