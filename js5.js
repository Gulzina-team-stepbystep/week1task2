//№5
let card = (prompt('введите номер карты: '));
let part = card.slice(0, card.length - 4);
document.write(card.replace(`${part}`, "************"))