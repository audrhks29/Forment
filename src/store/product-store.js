import create from 'zustand';
import axios from 'axios';
import { devtools } from 'zustand/middleware'

const useAppState = (set, getState) => ({
    productData: [],
    filteredProductData: [],
    likedItems: [],
    fetchData: async () => {
        try {
            const response = await axios.get('https://gist.githubusercontent.com/audrhks29/64aa8b5dfcbeb875d59fcb45add63ea9/raw/0a70cf973e3380194fe6dfd264533ab7999adf1a/productData.json');
            set({ productData: response.data });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },
    productCategories: [
        { id: 1, label: '전체', image: "../public/images/category/allProduct/cate_all.png" },
        { id: 2, label: '퍼퓸', image: "../public/images/category/allProduct/perfume.png" },
        { id: 3, label: '바디&헤어', image: "../public/images/category/allProduct/hair.png" },
        { id: 4, label: '핸드&립', image: "../public/images/category/allProduct/lip.png" },
        { id: 5, label: '라이프스타일', image: "../public/images/category/allProduct/lifestyle.png" },
        { id: 6, label: '남성케어', image: "../public/images/category/allProduct/men.png" }
    ],
    fragranceCategories: [
        { id: 1, label: '전체', image: "../public/images/category/fragrance/frag_all.png" },
        { id: 2, label: '내추럴', image: "../public/images/category/fragrance/natural.png" },
        { id: 3, label: '허그', image: "../public/images/category/fragrance/hug.png" },
        { id: 4, label: '키스', image: "../public/images/category/fragrance/kiss.png" },
        { id: 5, label: '썩세스', image: "../public/images/category/fragrance/success.png" },
        { id: 6, label: '메모리', image: "../public/images/category/fragrance/memory.png" },
        { id: 7, label: '브리즈', image: "../public/images/category/fragrance/breeze.png" },
        { id: 8, label: '디어나잇', image: "../public/images/category/fragrance/dearnight.png" },
        { id: 9, label: '딜라잇부케', image: "../public/images/category/fragrance/delightbouquet.png" },
        { id: 10, label: '벨벳허그', image: "../public/images/category/fragrance/velvethug.png" }
    ],
    selectedCategory: "전체",
    setInitialCategory: () => set({ selectedCategory: "전체" }),
    setCategoryAndFilteredData: (label, productData) => {
        set({ selectedCategory: label })
        if (label === "전체") {
            set({ filteredProductData: productData })
        }
        else {
            const filteredData = productData.filter((item) => item.category1 === label || item.category2 === label);
            set({ filteredProductData: filteredData });
        }
    },
    handleLikeClick: (productId) => {
        const state = getState();
        const likedItems = state.likedItems;
        if (!likedItems.includes(productId)) {
            set({ likedItems: [...likedItems, productId] });
        }
        else {
            set({ likedItems: likedItems.filter(id => id !== productId) });
        }
    }
});

const useProductStore = create(devtools(useAppState))
export default useProductStore;

