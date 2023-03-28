import { withLayout } from "../layout/P/Layout";
import { Button, Input, Div, P } from "../components";
import { useState } from "react";
import axios from "axios";

function AddPost(): JSX.Element {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [price, setPrice] = useState("");
  const [address, setAddress] = useState("");
  const [beds, setBeds] = useState("");
  const [squareMeters, setSquareMeters] = useState("");
  const [rooms, setRooms] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [garagePlaces, setGaragePlaces] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/blog/add", {
        title,
        description,
        image: imageURL,
        user: localStorage.getItem("userId"),
        price,
        address,
        beds,
        squareMeters,
        rooms,
        bathrooms,
        garagePlaces,
      });
      const data = await res.data;
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Div>
        <Input
          alignment="centered"
          placeholder="Enter Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <Input
          alignment="centered"
          placeholder="Enter Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <Input
          alignment="centered"
          placeholder="Enter Image URL"
          value={imageURL}
          onChange={(event) => setImageURL(event.target.value)}
        />
        <Input
          alignment="centered"
          placeholder="Enter Price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <Input
          alignment="centered"
          placeholder="Enter Address"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
        />
        <Input
          alignment="centered"
          placeholder="Enter Number of Beds"
          value={beds}
          onChange={(event) => setBeds(event.target.value)}
        />
        <Input
          alignment="centered"
          placeholder="Enter Square Meters"
          value={squareMeters}
          onChange={(event) => setSquareMeters(event.target.value)}
        />
        <Input
          alignment="centered"
          placeholder="Enter Number of Rooms"
          // type="number"
          value={rooms}
          onChange={(event) => setRooms(event.target.value)}
        />
        <Input
          alignment="centered"
          placeholder="Enter Number of Bathrooms"
          // type="number"
          value={bathrooms}
          onChange={(event) => setBathrooms(event.target.value)}
        />
        <Input
          alignment="centered"
          placeholder="Enter Number of Garage Places"
          // type="number"
          value={garagePlaces}
          onChange={(event) => setGaragePlaces(event.target.value)}
        />
        <Button alignment="centered" appearance="primary" type="submit">
          Post
        </Button>
      </Div>
    </form>
  );
}

export default withLayout(AddPost);
