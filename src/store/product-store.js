import create from 'zustand';
import axios from 'axios';
import { devtools } from 'zustand/middleware'

const useAppState = (set, getState) => ({
    productData: [],
    filteredProductData: [],
    likedItems: [],

    isLoading: true,

    selectedCategory: "전체",

    searchKeywords: "",
    fetchData: async () => {
        try {
            const response = await axios.get('https://gist.githubusercontent.com/audrhks29/64aa8b5dfcbeb875d59fcb45add63ea9/raw/e0b00ba1865c98b8fde594f9c763cc9742db4446/productData.json');
            set({ productData: response.data, isLoading: false });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },

    productCategories: [
        { id: 1, label: '전체', image: "/images/category/allProduct/cate_all.png" },
        { id: 2, label: '퍼퓸', image: "/images/category/allProduct/perfume.png" },
        { id: 3, label: '바디&헤어', image: "/images/category/allProduct/hair.png" },
        { id: 4, label: '핸드&립', image: "/images/category/allProduct/lip.png" },
        { id: 5, label: '라이프스타일', image: "/images/category/allProduct/lifestyle.png" },
        { id: 6, label: '남성케어', image: "/images/category/allProduct/men.png" }
    ],

    fragranceCategories: [
        { id: 1, label: '전체', image: "/images/category/fragrance/frag_all.png" },
        { id: 2, label: '내추럴', image: "/images/category/fragrance/natural.png" },
        { id: 3, label: '허그', image: "/images/category/fragrance/hug.png" },
        { id: 4, label: '키스', image: "/images/category/fragrance/kiss.png" },
        { id: 5, label: '썩세스', image: "/images/category/fragrance/success.png" },
        { id: 6, label: '메모리', image: "/images/category/fragrance/memory.png" },
        { id: 7, label: '브리즈', image: "/images/category/fragrance/breeze.png" },
        { id: 8, label: '디어나잇', image: "/images/category/fragrance/dearnight.png" },
        { id: 9, label: '딜라잇부케', image: "/images/category/fragrance/delightbouquet.png" },
        { id: 10, label: '벨벳허그', image: "/images/category/fragrance/velvethug.png" }
    ],

    setInitialCategory: () => {
        const state = getState();
        const productData = state.productData
        set({ selectedCategory: "전체", filteredProductData: productData })
    },

    settingSelectedCategory: (label) => {
        set({ selectedCategory: label })
    },

    settingSearchKeywords: (e) => {
        const searchKeywords = e.target.value
        set({ searchKeywords: searchKeywords })
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
    },

    handleFiltered: () => {
        const state = getState();
        const productData = state.productData;
        const selectedCategory = state.selectedCategory;
        const searchKeywords = state.searchKeywords;
        let filteredData = productData;
        if (selectedCategory !== "전체") {
            if (searchKeywords) {
                filteredData = productData.filter(item => item.productName.includes(searchKeywords) && (item.category1 === selectedCategory || item.category2 === selectedCategory));
            } else {
                filteredData = productData.filter(item => item.category1 === selectedCategory || item.category2 === selectedCategory);
            }
        } else {
            if (searchKeywords) {
                filteredData = productData.filter(item => item.productName.includes(searchKeywords));
            }
            else if (selectedCategory === "") {
                filteredData = productData.filter(item => item.category1 === selectedCategory || item.category2 === selectedCategory);
            }
            else {
                filteredData = productData
            }
        }
        set({
            filteredProductData: filteredData
        });
        console.log(searchKeywords);
    },
});

const useProductStore = create(devtools(useAppState))
export default useProductStore;

