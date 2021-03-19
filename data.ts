const menu: IMenu[] = [
  {
    name: 'Pizzas',
    items: [
      {
        name: 'Pizzas Pequenas',
        description: 'Serve 1 pessoa - Escolha de 1 sabor',
        isCombo: false,
        rule: {
          isFractionable: true,
          minItems: 1,
          maxItems: 1,
          priceBy: {
            type: RuleType.variant,
            name: 'Pizzas Pequenas'
          },
          showBy: {
            type: RuleType.collection,
            name: 'Pizza'
          },
          filterBy: {
            type: RuleType.variant,
            name: 'Pizzas Pequenas'
          }
        }
      },
      {
        name: 'Pizzas Gigantes',
        description: 'Serve 4 pessoa - Escolha de 3 sabor',
        isCombo: false,
        rule: {
          isFractionable: true,
          minItems: 1,
          maxItems: 3,
          priceBy: {
            type: RuleType.variant,
            name: 'Pizzas Pequenas'
          },
          showBy: {
            type: RuleType.collection,
            name: 'Pizza'
          },
          filterBy: {
            type: RuleType.variant,
            name: 'Pizzas gigantes'
          }
        }
      }
    ]
  },
  {
    name: 'Bebidas',
    items: [
      {
        name: 'Sucos',
        isCombo: false,
        rule: {
          isFractionable: false,
          minItems: 1,
          maxItems: -1,
          priceBy: {
            type: RuleType.category,
            name: 'Sucos'
          },
          showBy: {
            type: RuleType.collection,
            name: 'Bebida'
          }
        }
      }
    ]
  },
  {
    name: 'Extras',
    items: [
      {
        name: 'Combos e Promoções',
        isCombo: true
      }
    ]
  }
]

const combos = [
  {
    uuid: '123-456-789',
    category: 'Combo',
    name: '2 Pizzas Pequenas + 1 Suco DelVale 600mL',
    rule: [
      {
        collection: 'Pizza',
        isFractionable: true,
        items: ['A Moda do Chefe', 'Bacon'],
        filterBy: {
          type: RuleType.variant,
          name: 'Pizzas Pequenas'
        },
        minItems: 1,
        maxItems: 1
      },
      {
        collection: 'Pizza',
        isFractionable: true,
        items: ['A Moda do Chefe', 'Bacon'],
        filterBy: {
          type: RuleType.variant,
          name: 'Pizzas Pequenas'
        },
        minItems: 1,
        maxItems: 1
      },
      {
        collection: 'Bebida',
        isFractionable: false,
        items: ['DelVale Laranja'],
        filterBy: {
          type: RuleType.variant,
          name: '600ml'
        },
        minItems: 1,
        maxItems: 1
      }
    ]
  },
  {
    uuid: '123-456-789',
    category: 'Combo',
    name: '1 Pizza GG Bacon + 1 suco 600mL',
    rule: [
      {
        collection: 'Pizza',
        isFractionable: true,
        items: ['Bacon'],
        filterBy: {
          type: RuleType.variant,
          name: 'Pizzas Gigantes'
        },
        minItems: 1,
        maxItems: 1
      },
      {
        collection: 'Bebida',
        isFractionable: false,
        items: ['DelVale Laranja', 'Natural Morango', 'TesteTeste'],
        filterBy: {
          type: RuleType.variant,
          name: '600ml'
        },
        minItems: 1,
        maxItems: 1
      }
    ]
  }
]

const items = [
  {
    uuid: 'A Moda do Chefe', //UUD = nome, para facilitar edição manual (porem o sistema usa esse campo)
    collection: 'Pizza',
    category: 'Pizza Salgada',
    name: 'A Moda do Chefe',
    ingredients: ['Molho Especial de Tomates', 'Calabresa', 'Frango'],
    prices: [
      {
        variant: 'Pizzas Pequenas',
        price: 20.8,
        discount: 2.3
      },
      {
        variant: 'Pizzas Gigantes',
        price: 62.9
      }
    ]
  },
  {
    uuid: 'Bacon', //UUD = nome, para facilitar edição manual (porem o sistema usa esse campo)
    collection: 'Pizza',
    category: 'Pizza Salgada',
    name: 'Bacon',
    ingredients: ['Molho Especial de Tomates', 'Mussarela', 'Bacon'],
    prices: [
      {
        variant: 'Pizzas Pequenas',
        price: 22.8
      },
      {
        variant: 'Pizzas Gigantes',
        price: 50.9
      }
    ]
  },
  {
    uuid: 'DelVale Laranja', //UUD = nome, para facilitar edição manual (porem o sistema usa esse campo)
    collection: 'Bebida',
    category: 'Sucos',
    name: 'DelVale Laranja',
    prices: [
      {
        variant: 'Lata',
        price: 4.5
      },
      {
        variant: '600ml',
        price: 4.5
      }
    ]
  }
]
