import create from 'zustand';
import axios from 'axios';
import { devtools } from 'zustand/middleware'

const useAppState = (set) => ({
    campaignData: [],
    fetchData: async () => {
        try {
            const response = await axios.get('https://gist.githubusercontent.com/audrhks29/be58bc1e4bf7c162ac113de06391d4be/raw/3135ea4ee356a939ed1143c80d8e4d349fd50b68/campaginData.json');
            set({ campaignData: response.data });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },
});

const useCampaignStore = create(devtools(useAppState))
export default useCampaignStore;

