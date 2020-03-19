export class Photo {
  constructor(
    public albumId: string,
    public id: number,
    public title: string,
    public url: string,
    public thumbnailUrl: string
  ) {}
}
