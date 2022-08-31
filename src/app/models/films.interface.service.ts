export interface ImageInterface{
  title: string;
  src: string;
  alt?: string;
}
export interface TopImageInterface{
  title: string;
  top: string;
  src: string;
  alt?: string;
}


export interface filmsInterface{
  section: string;
  gallery: ImageInterface[];

}
export interface topInterface{
  section: string;
  gallery: TopImageInterface[];

}



