import { create } from 'zustand';
import async from '../app/page';
import { getPosts } from '@/sanity/UTILS/Posts';

interface IData {
  slug: string;
  tags: string[] | null;
  comments: any[] | null;
  _id: string;
  title: string;
  author: {
    slug: any;
    image: any;
    name: string;
  };
  image: string;
  categories: any[] | null;
  publishedAt: string | null;
  body: any[][];
  _createdAt: string;

}

interface IStore {
  data: IData[];
  setData: () => Promise<void>;
  deleteData: (id: string) => void;
  addData: (newItem: IData) => void;
  getPost: (id: string) => void;
}

const usePostStore = create<IStore>((set) => ({
  data: [],
  setData: async () => {
    const dataavail = await getPosts();
    if (dataavail){
      set({ data: await dataavail })
    }
    else {
      set({ data: [] })
    }
  },
  deleteData: (id) =>

    set((state) => ({
      data: state.data.filter((item) => item._id !== id),
    })),
  addData: (newItem) =>
    set((state) => ({
      data: [...state.data, newItem],
    })),
  getPost: (id) =>
    set((state) => ({
      data: state.data.filter((item) => item._id !== id),
    })),
}));
usePostStore.getState().setData();
export default usePostStore;
