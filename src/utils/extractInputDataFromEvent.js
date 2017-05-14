
export default function extractInputDataFromEvent(event) {
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked : target.value;
  const name = target.name;

  return { target, value, name };
}
