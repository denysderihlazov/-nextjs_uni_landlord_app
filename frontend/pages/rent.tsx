import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import BlogCard from './blog';
import { withLayout } from "../layout/P/Layout";
import { P, Div, Input, Button } from "../components";

const styles = {
  blogs__wrapper: {
    display: "flex",
    gap: "20px",
    "flexWrap": "wrap",
    padding: "16px",
  },
  filter__wrapper: {
    display: "flex",
    "flexWrap": "wrap",
    flexBasis: "100%",
    gap: "16px",
    marginBottom: "24px",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: "16px 0",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
  },
  blogs__inner__wrapper: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
  },
  blogs__filter__input: {

  }
};


interface BlogType {
  _id: string;
  user: { _id: string; name: string };
  title: string;
  description: string;
  image: string;
  price: string;
  address: string;
  beds: string;
  squareMeters: string;
  rooms: number;
  bathrooms: string;
  garagePlaces: string;
}

const Blogs = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [minRooms, setMinRooms] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState<BlogType[]>([]);

  const sendRequest = async () => {
    try {
      const res: AxiosResponse<{ blogs: BlogType[] }> = await axios.get(
        'http://localhost:5000/api/blog'
      );
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    sendRequest().then((data) => {
      if (data) {
        setBlogs(data.blogs);
        setFilteredBlogs(data.blogs);
      }
    });
  }, []);

  useEffect(() => {
    const filtered = blogs.filter(
      (blog) =>
        (minRooms === '' || blog.rooms >= Number(minRooms)) &&
        (maxPrice === '' || Number(blog.price.replace('$', '')) <= Number(maxPrice))
    );
    setFilteredBlogs(filtered);
  }, [blogs, minRooms, maxPrice]);

  const handleMinRoomsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMinRooms(event.target.value);
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(event.target.value);
  };

  const fetchBlogs = async () => {
    try {
      const params = {};
      if (minRooms) {
        params.minRooms = minRooms;
      }
      if (maxPrice) {
        params.maxPrice = maxPrice;
      }
      const res = await axios.get('http://localhost:5000/api/blog', { params });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = await fetchBlogs();
    if (data) {
      setBlogs(data.blogs);
      setFilteredBlogs(data.blogs);
    }
  };

  const handleReset = () => {
    setMinRooms('1');
    setMaxPrice('');
    setFilteredBlogs(blogs);
  };

  const data = filteredBlogs.length > 0 ? filteredBlogs : blogs;



  useEffect(() => {
    console.log("Data changed:", data);
  }, [data]);

  return (
    
    <div style={styles.blogs__wrapper}>
      <form onSubmit={handleSubmit} style={styles.filter__wrapper}>
        <div style={styles.blogs__inner__wrapper}>
          <Input
            type="number"
            placeholder="Min. Rooms"
            value={minRooms}
            onChange={handleMinRoomsChange}
            style={styles.blogs__filter__input}
          />
          <Input
            type="number"
            placeholder="Max. Price"
            value={maxPrice}
            onChange={handleMaxPriceChange}
            style={styles.blogs__filter__input}
          />
          <Button appearance='primary' type="button" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </form>
      {filteredBlogs.length ? (
        filteredBlogs.map((blog) => (
          <BlogCard
            key={blog._id}
            blog={{
              _id: blog._id,
              title: blog.title,
              description: blog.description,
              image: blog.image,
              price: blog.price,
              address: blog.address,
              beds: blog.beds,
              squareMeters: blog.squareMeters,
              rooms: blog.rooms,
              bathrooms: blog.bathrooms,
              garagePlaces: blog.garagePlaces,
              user: {
                id: blog.user._id,
                name: blog.user.name,
              },
            }}
          />
        ))
      ) : (
        <P>{blogs.length ? "No results found" : "Loading..."}</P>
      )}
    </div>

  );
};

export default withLayout(Blogs);