export type TypeData = {
  readonly username: string;
  readonly postData: {
    readonly title: string;
    readonly text: string;
    readonly images: string[];
  };
};