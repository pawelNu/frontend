<div>
    If both capturing and non-capturing handlers exist for a given event, the
    capturing handlers will run first.
</div>
<div>
    capturing handlers
    <div onkeydowncapture={(e) => alert(`<div> ${e.key}`)} role="presentation">
        <input onkeydowncapture={(e) => alert(`<input> ${e.key}`)} />
    </div>
</div>

<div>
    capturing and non-capturing handlers
    <div onkeydowncapture={(e) => alert(`<div> ${e.key}`)} role="presentation">
        <input onkeydown={(e) => alert(`<input> ${e.key}`)} />
    </div>
</div>

<div>
    non-capturing and capturing handlers
    <div onkeydown={(e) => alert(`<div> ${e.key}`)} role="presentation">
        <input onkeydowncapture={(e) => alert(`<input> ${e.key}`)} />
    </div>
</div>
