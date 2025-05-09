import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Grid,
  Card,
  CardMedia,
  CardContent,
  MenuItem,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

const BuyPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openDialog, setOpenDialog] = useState(false);
  const product = location.state?.product || {};

  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    paymentMethod: "",
    quantity: 1, // Default quantity is 1
  });

  // Calculate total price based on quantity
  const totalPrice = (formData.quantity * product.price).toFixed(2);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle quantity change
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0) {
      setFormData((prev) => ({ ...prev, quantity: value }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpenDialog(true);
    // alert(`🎉 Purchase successful for ${formData.quantity} x ${product.product_name}!\nTotal: $${totalPrice}`);
    // navigate("/home");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    document.title = `Buy - ${product.product_name || "Store"}`;
  }, [product.product_name]);

  return (
    <Box sx={{ p: 4, display: "flex", justifyContent: "center" }}>
      <Paper sx={{ maxWidth: 600, p: 4, borderRadius: 3, boxShadow: 5 }}>
        <Typography variant="h4" gutterBottom textAlign="center">
          🛒 Confirm Your Purchase
        </Typography>

        {/* Product Details */}
        <Card sx={{ display: "flex", mb: 3, borderRadius: 2, boxShadow: 2 }}>
          <CardMedia
            component="img"
            sx={{ width: 160, objectFit: "cover", borderRadius: "8px 0 0 8px" }}
            image={product.image || "https://via.placeholder.com/150"}
            alt={product.product_name}
          />
          <CardContent>
            <Typography variant="h6">{product.product_name}</Typography>
            <Typography variant="body2" color="text.secondary">
              {product.brand}
            </Typography>
            <Typography variant="h6" color="primary" mt={1}>
              ${product.price.toFixed(2)}
            </Typography>
          </CardContent>
        </Card>

        <Divider sx={{ my: 2 }} />

        {/* Purchase Form */}
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Full Name */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Grid>

            {/* Address */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Shipping Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                multiline
                rows={3}
              />
            </Grid>

            {/* Payment Method */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                label="Payment Method"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                required
              >
                <MenuItem value="Credit Card">💳 Credit Card</MenuItem>
                <MenuItem value="PayPal">💰 PayPal</MenuItem>
                <MenuItem value="Cash on Delivery">🚚 Cash on Delivery</MenuItem>
              </TextField>
            </Grid>

            {/* Quantity Selection */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="number"
                label="Quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleQuantityChange}
                inputProps={{ min: 1 }}
                required
              />
            </Grid>
          </Grid>

          <Typography variant="h6" color="primary" mt={2} textAlign="center">
            🏷️ Total Price: <strong>${totalPrice}</strong>
          </Typography>

          <Divider sx={{ my: 2 }} />

          {/* Buttons */}
          <Box mt={3} display="flex" justifyContent="space-between">
            <Button variant="outlined" color="error" onClick={() => navigate(-1)}>
              ❌ Cancel
            </Button>
            <Button type="submit" variant="contained" color="success">
              ✅ Confirm Purchase
            </Button>
          </Box>
        </form>
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
  <DialogTitle>🎉 Purchase Successful</DialogTitle>
  <DialogContent>
    <Typography>
      Thank you, <strong>{formData.name}</strong>!<br />
      You've successfully ordered <strong>{formData.quantity}</strong> x {product.product_name}.
      <br /><br />
      <strong>Total:</strong> ${totalPrice}
    </Typography>
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setOpenDialog(false)} color="primary">
      Stay
    </Button>
    <Button
      onClick={() => {
        setOpenDialog(false);
        navigate("/home");
      }}
      color="success"
      variant="contained"
    >
      Go to Home
    </Button>
  </DialogActions>
</Dialog>

      </Paper>
    </Box>
  );
};

export default BuyPage;
