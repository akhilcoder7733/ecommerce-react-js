import React, { useState, useEffect } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Rating,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useLoading } from "../LoadingContext"; // Import loading context

const UNSPLASH_ACCESS_KEY = "J-qbT0O35p148H0U0JfYwWucORglKw1aU3cknsbFqag";

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const { setLoading } = useLoading(); // Use loading context

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Start loading

      try {
        // Fetch products data from local JSON
        const productResponse = await fetch("../ddddddd.json");
        const productData = await productResponse.json();

        // Fetch exactly 20 random images from Unsplash
        const unsplashResponse = await fetch(
          `https://api.unsplash.com/photos/random?query=electronics&count=20&client_id=${UNSPLASH_ACCESS_KEY}`
        );
        const unsplashImages = await unsplashResponse.json();

        // Map products with images
        const updatedProducts = productData
          .slice(0, 20)
          .map((product, index) => ({
            ...product,
            image:
              unsplashImages[index]?.urls?.regular ||
              "https://via.placeholder.com/300",
          }));

        setProducts(updatedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchProducts();
  }, [setLoading]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Products - Terminal Wizard";
  }, []);

  return (
    <Box sx={{ padding: 4, minHeight:"90vh" }}>
      <Typography variant="h4" gutterBottom textAlign="center">
        Accessories Store
      </Typography>

      <Grid container spacing={3}>
        {products.map((product, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                borderRadius: 3,
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)", // Improved boxShadow
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out", // Smoother transition
                overflow: "hidden",
                "&:hover": {
                  transform: "translateY(-5px)", // Move card up on hover
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.25)", // Enhanced boxShadow on hover
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.product_name}
                sx={{ objectFit: "cover" }}
              />

              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{product.product_name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.brand}
                </Typography>
                <Typography variant="h6" color="primary" mt={1}>
                  ${product.price.toFixed(2)}
                </Typography>
                <Box display="flex" alignItems="center" mt={1}>
                  <Rating
                    value={product.customer_rating}
                    precision={0.1}
                    readOnly
                  />
                  <Typography variant="body2" ml={1}>
                    ({product.customer_reviews} reviews)
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  mt={1}
                  sx={{ minHeight: 60, overflow: "hidden" }}
                >
                  {product.product_description
                    .split(" ")
                    .slice(0, 15)
                    .join(" ")}
                  ...
                </Typography>
                <Box mt={2} display="flex" justifyContent="space-between">
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{
                      transition: "all 0.3s",
                      "&:hover": {
                        backgroundColor: "primary.main",
                        color: "#fff",
                      },
                    }}
                    onClick={() =>
                      navigate(`/products/${index}`, { state: { product } })
                    }
                  >
                    Details
                  </Button>

                  <Button
                    variant="contained"
                    color="secondary"
                    sx={{
                      transition: "all 0.3s",
                      "&:hover": { backgroundColor: "secondary.dark" },
                    }}
                    onClick={() => navigate("/buy", { state: { product } })}
                  >
                    Buy Now
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Products;
