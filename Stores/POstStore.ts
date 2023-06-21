import {create} from 'zustand';

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
  setData: (newData: IData[]) => void;
  deleteData: (id: string) => void;
  addData: (newItem: IData) => void;
}

const usePostStore = create<IStore>((set) => ({
  data: [],
  setData: (newData) => set({ data: newData }),
  deleteData: (id) =>
    set((state) => ({
      data: state.data.filter((item) => item._id !== id),
    })),
  addData: (newItem) =>
    set((state) => ({
      data: [...state.data, newItem],
    })),
}));

export default usePostStore;
