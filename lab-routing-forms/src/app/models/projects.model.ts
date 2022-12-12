export class Projects {
  constructor(
    private _uuid: number,
    private _name: string,
    private _description: string,
    private _content: string,
    private _image: URL,
    private _complete: string
  ) {}

  public get uuid(): number {
    return this._uuid;
  }
  public set uuid(value: number) {
    this._uuid = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }
  public get content(): string {
    return this._content;
  }
  public set content(value: string) {
    this._content = value;
  }
  public get image(): URL {
    return this._image;
  }
  public set image(value: URL) {
    this._image = value;
  }
  public get complete(): string {
    return this._complete;
  }
  public set complete(value: string) {
    this._complete = value;
  }
}
