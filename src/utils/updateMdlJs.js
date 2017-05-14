
export default function updateMdlJs(targetNode) {
  const mdlJsNodes = targetNode.querySelectorAll('[class*="mdl-js-"]:not(.is-upgraded)');
  const requiredFields = targetNode.querySelectorAll('[data-required]:not([required])');

  mdlJsNodes.forEach(node => componentHandler.upgradeElement(node));
  requiredFields.forEach((field) => { field.required = true; });
}
