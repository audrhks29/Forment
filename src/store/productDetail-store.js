import create from 'zustand';
import axios from 'axios';
import { devtools } from 'zustand/middleware'

const useAppState = (set, getState) => ({
  paramsData: [],
  paramsOptionData: [],
  paramsSetData: [],
  paramsDetailImageData: [],

  productOptionData: [],
  productSetData: [],
  productDetailImageData: [],

  selectedItems: [], // 선택된 아이템
  selectedOption: "*", // 선택된 옵션
  setBoxForSelectedOptions: [], // 선택된 옵션에 대한 세트박스

  fetchDetailData: async () => {
    try {
      const [optionDataResponse, setDataResponse, detailImageResponse] = await Promise.all([
        axios.get('https://gist.githubusercontent.com/audrhks29/be6ae36bcb49942a0480aecf238cdb73/raw/919061d2b0accf458c9f62803b8016a30fa8f338/productOptionData.json'),
        axios.get('https://gist.githubusercontent.com/audrhks29/c5cc0a999cdc547ff64acb0ae1c9c905/raw/c99fcd6340d47fca7fd1025a2ebc395a22d6c134/productSetData.json'),
        axios.get('https://gist.githubusercontent.com/audrhks29/caa13ccf491746f824fe181d779aed55/raw/b98fe8341e2793656bb27734a27631092a06823d/productDetailImageData.json')
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

  settingParamsData: (productData, parseId) => {
    set({ paramsData: productData[parseId - 1] })
  },

  settingParamsOptionData: (parseId) => {
    set({ paramsOptionData: getState().productOptionData[parseId - 1] })
  },

  settingParamsSetData: () => {
    const state = getState();
    const filtered = state.productSetData.filter(item => item.productCode == state.paramsOptionData.productCode);
    set({ paramsSetData: filtered })
  },

  settingParamsDetailImageData: (parseId) => {
    set({ paramsDetailImageData: getState().productDetailImageData[parseId - 1] })
  },

  settingSelectedOption: (e) => {
    const option = e.target.value;
    set({ selectedOption: option })
  },

  settingSetBoxForSelectedOptions: () => {
    const state = getState();
    const filtered = state.paramsSetData.filter(item => item.productSelect == state.selectedOption)
    set({ setBoxForSelectedOptions: filtered })
  },

  //selectedItems 추가
  handleAddSelectItem: (e) => {
    const state = getState()
    const selectedId = Number(e.target.value)
    const filteredSelectedItem = state.setBoxForSelectedOptions.find(item => item.id === Number(selectedId))
    const isDuplicate = state.selectedItems.some(item => item.id === filteredSelectedItem.id); // 중복 확인
    if (filteredSelectedItem && !isDuplicate) {
      const { salePrice, desc, fragranceInfo, ...restData } = state.paramsData; // salePrice, desc, fragranceInfo를 제외한 나머지 데이터 추출
      const itemWithAmount = {
        ...filteredSelectedItem,
        ...restData,
        amount: 1,
        id: selectedId,
        price: filteredSelectedItem.price,
        checked: false
      };
      set({ selectedItems: [...state.selectedItems, itemWithAmount] })
    } else {
      alert("이미 추가된 항목입니다");
    }
  },

  // selectedItems 삭제
  handleDeleteSelectItem: (index) => {
    const state = getState()
    const filtered = state.selectedItems.filter(item => item.id === index)
    set({ selectedItems: filtered })
  },

  //selectedItems 수량 증가
  handleIncreaseAmount: (index) => {
    const state = getState()
    const updatedItems = [...state.selectedItems];
    const updatedAmount = updatedItems[index].amount + 1;
    updatedItems[index].amount = updatedAmount;
    set({ selectedItems: updatedItems });
  },

  //selectedItems 수량 감소
  handleDecreaseAmount: (index) => {
    const state = getState()
    const updatedItems = [...state.selectedItems];
    const currentAmount = updatedItems[index].amount;
    if (currentAmount > 1) {
      const updatedAmount = currentAmount - 1;
      updatedItems[index].amount = updatedAmount;
      set({ selectedItems: updatedItems })
    }
  },

  // selectedItems 초기화
  initialSelectedItems: () => {
    set({ selectedItems: [] });
  }
});

const useProductDetailStore = create(devtools(useAppState))
export default useProductDetailStore;

