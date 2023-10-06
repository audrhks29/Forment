import create from 'zustand';
import axios from 'axios';
import { devtools } from 'zustand/middleware'

const useAppState = (set) => ({
  productSelectedData: [],
  productOptionData: [],
  fetchData: async () => {
    try {
      const SelectedDataResponse = await axios.get('https://gist.githubusercontent.com/audrhks29/be6ae36bcb49942a0480aecf238cdb73/raw/495208c70de4729cc26b7c88804eb18f13b5f7ba/productSelectedData.json');
      const OptionDataResponse = await axios.get('https://gist.githubusercontent.com/audrhks29/c5cc0a999cdc547ff64acb0ae1c9c905/raw/2c626f79acb601509325c294d628ef1cbba02514/productOption.json');
      set({ productSelectedData: SelectedDataResponse.data });
      set({ productOptionData: OptionDataResponse.data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
});

const useProductDetailStore = create(devtools(useAppState))
export default useProductDetailStore;

