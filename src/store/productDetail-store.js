import create from 'zustand';
import axios from 'axios';
import { devtools } from 'zustand/middleware'

const useAppState = (set) => ({
  productOptionData: [],
  productSetData: [],
  productDetailImageData: [],
  fetchData: async () => {
    try {
      const [optionDataResponse, setDataResponse, detailImageResponse] = await Promise.all([
        axios.get('https://gist.githubusercontent.com/audrhks29/be6ae36bcb49942a0480aecf238cdb73/raw/919061d2b0accf458c9f62803b8016a30fa8f338/productOptionData.json'),
        axios.get('https://gist.githubusercontent.com/audrhks29/c5cc0a999cdc547ff64acb0ae1c9c905/raw/c99fcd6340d47fca7fd1025a2ebc395a22d6c134/productSetData.json'),
        axios.get('https://gist.githubusercontent.com/audrhks29/caa13ccf491746f824fe181d779aed55/raw/a4daee531abd54b5ae744b5c815bddfa46ef698c/productDetailImageData.json')
      ]);

      set({
        productOptionData: optionDataResponse.data,
        productSetData: setDataResponse.data,
        productDetailImageData: detailImageResponse.data
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
});

const useProductDetailStore = create(devtools(useAppState))
export default useProductDetailStore;

