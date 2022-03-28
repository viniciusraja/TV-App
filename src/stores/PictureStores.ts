import picturesData from '../data/picturesData.json';
import pictureCategoriesData from '../data/pictureCategoriesData.json';

export type Picture = {
  id: string;
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  Response: string;
  Images: string[];
};

export function createPicturesStore() {
  return {
    pictures: picturesData as Picture[],
    categories: pictureCategoriesData,
    focusedPictureId: '',
    selectedPicture: {} as Picture,

    setFocusedPicture(pictureId: string) {
      this.focusedPictureId = pictureId;
    },

    setSelectedPicture(pictureId: string) {
      const [selectedPicture] =
        picturesData.filter(picture => picture.id === pictureId) || [];
      this.selectedPicture = selectedPicture;
    },
  };
}

export type PictureStoreType = ReturnType<typeof createPicturesStore>;
