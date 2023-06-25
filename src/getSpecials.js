export default function getSpecials({ special: charSpecials }) {
  const { description = 'Описание недоступно' } = charSpecials;
  for (const item of charSpecials) {
    if (!item.description) {
      item.description = description;
    }
  }
  return charSpecials;
}
