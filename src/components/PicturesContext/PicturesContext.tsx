import {toJS} from 'mobx';
import {useLocalObservable} from 'mobx-react-lite';
import React, {createContext, useContext, FC} from 'react';
import {createPicturesStore, PictureStoreType} from 'src/stores/PictureStores';

const PicturesContext = createContext<PictureStoreType | null>(null);

const PicturesProvider: FC = ({children}) => {
  const picturesStore = useLocalObservable(createPicturesStore);

  return (
    <PicturesContext.Provider value={picturesStore}>
      {children}
    </PicturesContext.Provider>
  );
};

export const usePicturesStore = () => toJS(useContext(PicturesContext));

export default PicturesProvider;
