export interface Item {
  action: string;
  done: boolean;
}

export class FabricItem implements Item {
  constructor(
    public action: string,
    public done: boolean
  ) {
  }
}
