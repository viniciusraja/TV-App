import picturesData from '../data/picturesData.json';
import pictureCategoriesData from '../data/pictureCategoriesData.json';

export function createPicturesStore() {
  return {
    pictures: picturesData,
    categories: pictureCategoriesData,
    focusedPictureId: '',
    setFocusedPicture(pictureId: string) {
      this.focusedPictureId = pictureId;
    },
  };
}

export type PictureStoreType = ReturnType<typeof createPicturesStore>;

// class PictureStore {
//   @observable pictures = picturesData;

//   @observable categories = pictureCategoriesData;

//   @observable focusedPictureId = '';

//   @action
//   setFocusedPicture = (pictureId: string) =>
//     (this.focusedPictureId = pictureId);
// }

// export const PictureStoreContext = createContext(new PictureStore());
