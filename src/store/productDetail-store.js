import create from 'zustand';
import axios from 'axios';
import { devtools } from 'zustand/middleware'

const useAppState = (set) => ({
  productOptionData: [],
  productSetData: [],
  productDetailImageData: [],
  fetchData: async () => {
    try {
      const optionDataResponse = await axios.get('https://gist.githubusercontent.com/audrhks29/be6ae36bcb49942a0480aecf238cdb73/raw/08ab9148f22be96df2035773339330002fbb59e9/productOptionData.json');
      const setDataResponse = await axios.get('https://gist.githubusercontent.com/audrhks29/c5cc0a999cdc547ff64acb0ae1c9c905/raw/d96a38bf3301c2e441cfdbda690c73425f834183/productSetData.json');
      const detailImageResponse = await axios.get('https://gist.githubusercontent.com/audrhks29/caa13ccf491746f824fe181d779aed55/raw/62994eea062620c4a67dd3230ee90604ba6ab9cb/productDetailImageData.json');
      set({ productOptionData: optionDataResponse.data });
      set({ productSetData: setDataResponse.data });
      set({ productDetailImageData: detailImageResponse.data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
});

const useProductDetailStore = create(devtools(useAppState))
export default useProductDetailStore;

