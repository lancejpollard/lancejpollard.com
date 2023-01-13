export default function getElementsMatchingText(
  selector: string,
  text: string,
) {
  var elements = document.querySelectorAll(selector)
  return Array.prototype.filter.call(elements, function (element) {
    return RegExp(text, 'i').test(element.textContent)
  })
}
