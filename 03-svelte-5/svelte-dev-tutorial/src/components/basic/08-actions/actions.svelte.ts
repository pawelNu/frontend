export function trapFocus(node: HTMLElement): () => void {
  const previous: HTMLElement | null = document.activeElement as HTMLElement;

  function focusable(): HTMLElement[] {
    return Array.from(
      node.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      ),
    );
  }

  function handleKeydown(event: KeyboardEvent): void {
    if (event.key !== "Tab") return;

    const current = document.activeElement as HTMLElement;

    const elements = focusable();
    const first = elements.at(0);
    const last = elements.at(-1);

    if (event.shiftKey && current === first) {
      last?.focus();
      event.preventDefault();
    }

    if (!event.shiftKey && current === last) {
      first?.focus();
      event.preventDefault();
    }
  }

  $effect(() => {
    focusable()[0]?.focus();
    node.addEventListener("keydown", handleKeydown);
  });

  return () => {
    node.removeEventListener("keydown", handleKeydown);
    previous?.focus();
  };
}
