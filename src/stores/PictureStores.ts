import picturesData from '../data/picturesData.json';
import pictureCategoriesData from '../data/pictureCategoriesData.json';

export type Picture = {
  id: string;
  Title: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Plot: string;
  Poster: string;
  imdbRating: string;
  platformLogo: string;
  imdbID: string;
  Type: string;
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
