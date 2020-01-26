export interface Item {
  action: string;
  done: boolean;
}

export class PseudoFabricItem implements Item {
  constructor(
    public action: string,
    public done: boolean
  ) {
  }
}
