enum RuleType {
  collection = 'collection',
  category = 'category',
  variant = 'variant',
  combo = 'combo'
}

export interface IRuleItem {
  type: RuleType
  name: string
}

export interface IMenuRule {
  isFractionable: boolean
  minItems: number
  maxItems: number
  priceBy: IRuleItem
  showBy: IRuleItem
  filterBy?: IRuleItem
}

export interface IMenuItem {
  name: string
  items: IMenuItemProps[]
}

export interface IMenuItemProps {
  name: string
  isCombo: boolean
  prop: string
  description: string
}

export interface IMenu {
  name: string
  items: IMenuItem[]
}

export interface IProduct {
  uuid: string
  collection: string
  category: string
  name: string
  ingredients?: string[]
  variant?: string
  price?: number
  prices?: Array<{ variant?: string; price: number }>
}
