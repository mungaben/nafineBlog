import { create } from 'zustand';
import async from '../app/page';
import { getPosts } from '@/sanity/UTILS/Posts';
import { PortableTextBlock } from 'sanity';

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
  body: PortableTextBlock;
  _createdAt: string;

}

interface IStore {
  data: IData[];
  setData: () => Promise<void>;
  deleteData: (id: string) => void;
  addData: (newItem: IData) => void;
  getPost: (id: string) => void;
  loading: boolean;
  hasErrors: boolean;
}

const usePostStore = create<IStore>((set) => ({
  data: [],
  loading: false,
  hasErrors: false,
  setData: async () => {
    const dataavail = await getPosts();
    set(() => ({ loading: true }));
    try {
     
    if (dataavail.length > 0) {
    
      set({ data: await dataavail })
      set(()=>({loading: false}))
    }

    }catch (error) {
        set(() =>({hasErrors: true}))
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


export default usePostStore;
