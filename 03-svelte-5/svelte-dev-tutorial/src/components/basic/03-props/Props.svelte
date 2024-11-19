<script>
    import C01DeclaringProps from "./C01_declaring_props.svelte";
    import C02DefaultValues from "./C02_default_values.svelte";
    import C03SpreadProps from "./C03_spread_props.svelte";

    const pkg = {
        name: "svelte",
        version: 5,
        description: "blazing fast",
        website: "https://svelte.dev",
    };
</script>

<C01DeclaringProps answer={42} />
<C02DefaultValues />
<C03SpreadProps
    version={pkg.version}
    description={pkg.description}
    website={pkg.website}
/>

<C03SpreadProps {...pkg} />
