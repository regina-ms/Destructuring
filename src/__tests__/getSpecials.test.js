import getSpecials from '../getSpecials';

test('should return array of speciala with description', () => {
  const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
      {
        id: 10,
        name: 'Двойной удар',
        icon: 'http://...',
        description: 'Двойной удар наносит двойной урон',
      },
      {
        id: 11,
        name: 'Тройной выстрел',
        icon: 'http://...',
      },
    ],
  };

  const result = getSpecials(character);
  const expected = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
    {
      id: 10,
      name: 'Двойной удар',
      icon: 'http://...',
      description: 'Двойной удар наносит двойной урон',
    },
    {
      id: 11,
      name: 'Тройной выстрел',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
  ];
  expect(result).toEqual(expected);
});
