import Image from "next/image";
import Link from "next/link";
import { BedIcon, BathroomIcon, SquareIcon, Card } from "../components";
import styles from './styles/blogs.module.css';
import { useRouter } from "next/router";

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

interface BlogCardProps {
  blog: Blog;
  user?: User;
}

const BlogCard = ({ blog, user }: BlogCardProps) => {
  const router = useRouter();

  const handleTitleClick = () => {
    router.push({
      pathname: "/blogdetails",
      query: { id: blog._id },
    });
  };

  const handleImageClick = () => {
    router.push({
      pathname: "/blogdetails",
      query: { id: blog._id },
    });
  };

  if (!blog) return null;
  return (
    <Card className={styles.card__wrapper}>
      <div>
        <div onClick={handleImageClick}>
        <Image
          src={blog.image}
          alt={blog.title}
          width={640}
          height={426}
        />
        </div>
        <div className={styles.card__info__wrapper}>
          <p className={styles.card__price}>${blog.price}<div className={styles.card__monthly}> / a month</div></p>
          <div className={styles.card__title} onClick={handleTitleClick}>
            <h2>{blog.title}</h2>
          </div>
          <p className={styles.card__address}>{blog.address}</p>
        </div>
        <div className={styles.card__horizontal__line}>
          <hr />
        </div>
        <div className={styles.card__footer}>
          <div className={styles.card__rooms}>
            <BedIcon />
            <span>{blog.beds} Beds</span>
          </div>
          <div className={styles.card__rooms}>
            <BathroomIcon />
            <span>{blog.bathrooms} Bathrooms</span>
          </div>
          <div className={styles.card__rooms}>
            <SquareIcon />
            <span>{blog.squareMeters}&nbsp;m<sup>2</sup></span>
          </div>
        </div>
      </div>
    </Card>
  );
};


export default BlogCard;
