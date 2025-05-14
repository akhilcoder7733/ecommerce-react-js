import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Typography, Card, CardMedia, CardContent, Button } from "@mui/material";


function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product || {};

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = "Product Details - Terminal Wizard";
  }, []);

  return (
    <Box sx={{ p: 4, display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 600, p: 3, borderRadius: 2, boxShadow: 3 }}>
        <CardMedia
          component="img"
          sx={{ width: "100%", height: 300, objectFit: "cover", borderRadius: 2 }}
          image={product.images || "https://via.placeholder.com/150"}
          alt={product.product_name}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {product.product_name}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {product.brand}
          </Typography>
          <Typography variant="h5" color="primary" mt={1}>
            ${product.price.toFixed(2)}
          </Typography>
          <Typography variant="body1" mt={2}>
            {product.product_description}
          </Typography>

          <Box mt={3} display="flex" justifyContent="space-between">
            <Button variant="outlined" color="primary" onClick={() => navigate(-1)}>
              Back
            </Button>
            <Button variant="contained" color="secondary" onClick={() => navigate("/buy", { state: { product } })}>
              Buy Now
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}

export default ProductDetails

