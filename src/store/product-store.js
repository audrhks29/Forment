import create from 'zustand';
import axios from 'axios';
import { devtools } from 'zustand/middleware'

const useAppState = (set) => ({
    productData: [],
    filteredProductData: [],
    fetchData: async () => {
        try {
            const response = await axios.get('https://gist.githubusercontent.com/audrhks29/64aa8b5dfcbeb875d59fcb45add63ea9/raw/3d18752e67ad20a7282cfed321f6ef1968ca3c2d/productData.json');
            set({ productData: response.data });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },
    productCategories: ['전체', '퍼퓸', '바디&헤어', '핸드&립', '라이프스타일', '남성케어'],
    fragranceCategories: ['전체', '내추럴', '허그', '키스', '썩세스', '메모리', '브리즈', '디어나잇', '딜라잇부케', '벨벳허그'],
    selectedCategory: "전체",
    setInitialCategory: () => set({ selectedCategory: "전체" }),
    setCategoryAndFilteredData: (selectedCategory, productData) => {
        set({ selectedCategory: selectedCategory })
        if (selectedCategory === "전체") {
            set({ filteredProductData: productData })
        }
        else {
            const filteredData = productData.filter((item) => item.category1 === selectedCategory || item.category2 === selectedCategory);
            set({ filteredProductData: filteredData });
        }
    },
});

const useProductStore = create(devtools(useAppState))
export default useProductStore;

