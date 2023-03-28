import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Div, P, SquareIcon, RoomIcon, BedIcon, BathroomIcon } from "../components";
import { withLayout } from "../layout/P/Layout";
import styles from "./styles/blogs.module.css";
import axios from 'axios';

interface User {
  name: string;
  id: number;
}

interface Blog {
  _id: string;
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
  user: User;
}

const BlogDetails = () => {
  const [blog, setBlog] = useState<Blog>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const blogId = router.query.id as string; // получите значение параметра запроса id
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/blog/${blogId}`);
        
        setBlog(res.data.blog);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBlog();
  }, [blogId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!blog) {
    return <p>No blog found.</p>;
  }

  return (
    <div className={styles.blog__wrapper}>
      <div className={styles.blog__details__image}>
        <img src={blog.image} alt={blog.title} />
      </div>
      <Div className={styles.blog__details__icon__wrapper}>
        <Div>
          <P className={styles.blog__details__icon__title}>
            Square Meters
          </P>
          <P className={styles.blog__details__squaremetters}>
              <SquareIcon />
              <span>{blog.squareMeters}&nbsp;m<sup>2</sup></span>
          </P>
        </Div>
        <Div>
          <P className={styles.blog__details__icon__title}>
            Rooms
          </P>
          <P className={styles.blog__details__squaremetters}>
              <RoomIcon />
              <span>{blog.bathrooms}&nbsp;</span>
          </P>
        </Div>
        <Div>
          <P className={styles.blog__details__icon__title}>
              Beds
          </P>
          <P className={styles.blog__details__squaremetters}>
              <BedIcon />
              <span>{blog.beds}&nbsp;</span>
          </P>
        </Div>
        <Div>
          <P className={styles.blog__details__icon__title}>
              Bathrooms
          </P>
          <P className={styles.blog__details__squaremetters}>
              <BathroomIcon />
              <span>{blog.beds}&nbsp;</span>
          </P>
        </Div>
      </Div>
      <Div>
        <div className={styles.blog__details__header}>
          <h1>{blog.title}</h1>
        </div>
        <p className={styles.blog__detailed__address}>{blog.address}</p>
        <div className={styles.blog__detailed__content}>
          <p className={styles.blog__detailed__price}>${blog.price}<div className={styles.card__monthly}> / a month</div></p>
          <p className={styles.blog__detailed__description}>{blog.description}</p>
        </div>
      </Div>
    </div>
  );
};

export default withLayout(BlogDetails);
