import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button, CardMedia, Grid, Box, Rating } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useLoading } from '../LoadingContext';

const UNSPLASH_ACCESS_KEY = "UgAiWx60EQ_CpuyJxajPxzxvNzyHsKa9nmv4gpV5KMU";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [images, setImages] = useState([]); // State for storing fetched Unsplash images
  const navigate = useNavigate();
  const { setLoading } = useLoading(); // Use loading context

  // Function to fetch Unsplash images based on product name
  const fetchUnsplashImages = async (productName) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/random?query=${productName}&client_id=${UNSPLASH_ACCESS_KEY}&count=1`
      );
      const data = await response.json();
      return data[0]?.urls?.regular; // Return the image URL
    } catch (error) {
      console.error('Error fetching Unsplash images:', error);
      return ''; // Return an empty string if there's an error
    }
  };

  // Fetch products from JSON file and Unsplash images
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading to true when fetching starts
      try {
        const response = await fetch('/products.json'); // assuming products.json is in the public folder
        const data = await response.json();
        setProducts(data); // Store the fetched data in state

        // Fetch Unsplash images for each product
        const imagesPromises = data.map(async (product) => {
          const imageUrl = await fetchUnsplashImages(product.product_name);
          return imageUrl;
        });

        const fetchedImages = await Promise.all(imagesPromises);
        setImages(fetchedImages); // Store the fetched images in state
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false); // Set loading to false once the data is fetched
      }
    };

    fetchData();
  }, [setLoading]); // empty dependency array to run once on mount

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Products - Terminal Wizard";
  }, []);

  return (
    <Box sx={{ padding: 4, minHeight: "90vh" }}>
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
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
                transition:
                  "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                overflow: "hidden",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.25)",
                },
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={images[index] || '/fallback-image.jpg'} // Use the fetched Unsplash image or a fallback image
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

export default ProductsPage;
