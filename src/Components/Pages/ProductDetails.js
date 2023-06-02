import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const dummyData = [
    {
      title: "Formal Shirt",

      price: 500,

      imageUrl:
        "https://i.pinimg.com/236x/40/4d/c6/404dc6afc276e7b9f12f3e036a55b0a2.jpg",
    },

    {
      title: "denim Jacket",

      price: 1500,

      imageUrl:
        "https://i.pinimg.com/236x/2d/f1/ff/2df1ff98686f4e25ebdfd5f19c34bff3.jpg",
    },

    {
      title: "Boxer",

      price: 450,

      imageUrl:
        "https://i.pinimg.com/236x/5c/25/30/5c2530d090009fa698442a46b1dd9095.jpg",
    },

    {
      title: "Joggers",

      price: 950,

      imageUrl:
        "https://i.pinimg.com/236x/ec/4a/00/ec4a00abf8bbc65ad2f4d39b08d17463.jpg",
    },

    {
      title: "T-Shirt(Casual Wear)",

      price: 299,

      imageUrl:
        "https://i.pinimg.com/236x/1f/5d/46/1f5d467fdf9e2b5740b9ad7f42b385b6.jpg",
    },

    {
      title: "Printed Shirt",

      price: 599,

      imageUrl:
        "https://i.pinimg.com/236x/2c/35/42/2c35420974899c618a020b04e2f985e2.jpg",
    },
    {
      title: "Kurta",

      price: 799,

      imageUrl:
        "https://i.pinimg.com/236x/36/2b/28/362b28d874e972744d9167e6748eda83.jpg",
    },

    {
      title: "Saree",

      price: 1500,

      imageUrl:
        "https://i.pinimg.com/236x/39/73/04/3973043d96da35daefce9bb663342389.jpg",
    },

    {
      title: "Trouser",

      price: 699,

      imageUrl:
        "https://i.pinimg.com/236x/63/91/f1/6391f15d7acc444575903a7371aac4fa.jpg",
    },

    {
      title: "T-Shirt(Casual Wear)",

      price: 299,

      imageUrl:
        "https://i.pinimg.com/236x/49/6a/8c/496a8c050d0a86d1cb7173d4123c40c4.jpg",
    },
    {
      title: "Shorts",

      price: 399,

      imageUrl:
        "https://i.pinimg.com/236x/38/bf/2f/38bf2f827cadaa025f198b04b5188d1d.jpg",
    },

    {
      title: "Jeans",

      price: 500,

      imageUrl:
        "https://i.pinimg.com/236x/17/ba/68/17ba68288e303bcc46f5daf3187ddbb3.jpg",
    },

    {
      title: "Lehanga",

      price: 599,

      imageUrl:
        "https://i.pinimg.com/236x/ce/c5/33/cec533d4fba82dcb67e67048683cfb2f.jpg",
    },

    {
      title: "Ethenic wear)",

      price: 699,

      imageUrl:
        "https://i.pinimg.com/236x/22/d4/eb/22d4ebabe6f29c1919adb5091a792369.jpg",
    },
    {
      title: "White Sneakers",

      price: 2799,

      imageUrl:
        "https://i.pinimg.com/236x/d8/df/e3/d8dfe3b151896731653a8df50abf5d46.jpg",
    },

    {
      title: "Sports Shoes",

      price: 1500,

      imageUrl:
        "https://i.pinimg.com/236x/de/2d/02/de2d021e61235ccfcd81fa355f6790fc.jpg",
    },

    {
      title: "Black Formal Shoes",

      price: 699,

      imageUrl:
        "https://i.pinimg.com/236x/c0/7e/37/c07e37a9d154469f2c0d3288b44ea582.jpg",
    },

    {
      title: "Loafer",

      price: 699,

      imageUrl:
        "https://i.pinimg.com/236x/4d/ae/3b/4dae3b114c5333d8fe56c574e9ed3e04.jpg",
    },
  ];
  const params = useParams();

  const product = dummyData.find((data) => data.title === params.name);
  if (!product) {
    return (
        <Container className="text-center m-5">
            <h1>No Product</h1>
        </Container>
    )
  }
  return (
    <Container className="text-center">
      <h2>{product.title}</h2>
      <img src={product.imageUrl} alt={product.title} />
      <h2>Rs.{product.price}</h2>
    </Container>
  );
};

export default ProductDetails;
