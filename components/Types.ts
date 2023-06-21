import { PortableTextBlock } from "sanity";

// import { extract } from "@/sanity/schema";
import post from "@/sanity/schemas/post";


interface Post {
    tags: null;
    _id: string;
    _createdAt: string;
    categories: null;
    image: string;
    comments: null;
    publishedAt: string | null;
    body: any[]; // This array type needs to be specified further based on the actual data structure
    title: string;
    slug: string;
    author: {
      name: string;
      slug: any; // This type needs to be specified further based on the actual data structure
      image: any; // This type needs to be specified further based on the actual data structure
    };
    content: PortableTextBlock[];
  }




  interface Author {
    _type: 'author';
    _id?: string;
    _rev?: string;
    _createdAt?: string;
    _updatedAt?: string;
    name: string;
    slug: {
      _type: 'slug';
      current: string;
    };
    image: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
      alt?: string;
    };
    bio: Array<{
      _type: 'block';
      children: Array<{
        _type: 'span';
        text: string;
        marks: any[];
      }>;
      markDefs: any[];
      style: 'normal';
    }>;
  }
  
  interface SanityDocument<T> {
    _type: T;
    _id: string;
    _rev: string;
    _createdAt: string;
    _updatedAt: string;
  }
  
  interface AuthorDocument extends SanityDocument<'author'> {
    name: string;
    slug: {
      _type: 'slug';
      current: string;
    };
    image: {
      _type: 'image';
      asset: {
        _ref: string;
        _type: 'reference';
      };
      alt?: string;
    };
    bio: Array<{
      _type: 'block';
      children: Array<{
        _type: 'span';
        text: string;
        marks: any[];
      }>;
      markDefs: any[];
      style: 'normal';
    }>;
  }
  export type PostTypes={
    _id: string;
    _createdAt: string;
    _updatedAt: string;
    title: string;
    slug: string;
    author: {
        slug?: string;
        image?: {
          _type?: 'image';
          asset?: {
            _ref?: string;
            _type?: 'reference';
          };
          alt?: string;
        };
        name?: string;
    };

    comments:{
        authorName: string;
        content: string;
        timestamp: string;

    }
    Categories:{
        authorName: string;
        content: string;
        timestamp: string;

    };
    tags: [string];

    
  }
  



  export interface Posttypes extends SanityDocument<'post'> {
    _id: string;
    _createdAt: string;
    title: string;
    slug: string;
    author: {
      name: string;
      slug: string;
      image: string;
    };
    image: string;
    categories: {
      authorName: string;
      content: string;
      timestamp: string;
    };
    tags: string[];
    comments: {
      authorName: string;
      content: string;
      timestamp: string;
    }[];
    publishedAt: string | null;
    body: PortableTextBlock; // This type needs to be specified further based on the actual data structure
  }

//   const postTypes= extract(post);
  
  
  
  
  
  
  