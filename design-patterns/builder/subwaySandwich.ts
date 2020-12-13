export type Bread = 'WHITE' | 'ITALIAN' | 'MULTIGRAIN';

export type Meat = 'BEEF' | 'CHICKEN' | 'FISH';

export type Cheese = 'MOZZARELLA' | 'CHEDDAR' | 'PARMESAN';

export type Salad = 'LETTUCE' | 'TOMATO' | 'ONION' | 'OLIVE';

export class SubwaySandwich {
    bread?: Bread;
    meat?: Meat;
    cheese?: Cheese;
    salad?: Salad[];
}