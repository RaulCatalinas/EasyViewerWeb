export function toggleElementsState(
  elements: Array<HTMLInputElement | NodeListOf<HTMLButtonElement>>
) {
  for (const element of elements) {
    if (element instanceof HTMLInputElement) {
      element.disabled = !element.disabled
    } else {
      for (const node of element) {
        node.disabled = !node.disabled
      }
    }
  }
}
