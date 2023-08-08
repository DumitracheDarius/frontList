export class DistrictModel{
  id?: number;
  code?: string;
  name?: string;
  active?: boolean;

  constructor(
    id?: number,
    code?: string,
    name?: string,
    active?: boolean
  ) {
    this.id = id;
    this.code = code;
    this.name = name;
    this.active = active;
  }
}
