import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import Apples from '../assets/images/Apples.jpg'
import Milk from '../assets/images/Milk.jpg'
import Carrots from '../assets/images/Carrots.jpg'
import Chicken from '../assets/images/Chicken.jpg'
import Coffee from '../assets/images/Coffee.jpg'

const foodCategories = ['All', 'Fruits', 'Vegetables', 'Dairy', 'Meat', 'Beverages'];

const foodItems = [
  { id: 1, name: 'Apple', category: 'Fruits', image: Apples },
  { id: 2, name: 'Carrot', category: 'Vegetables', image: Carrots },
  { id: 3, name: 'Milk', category: 'Dairy', image: Milk },
  { id: 4, name: 'Chicken', category: 'Meat', image: Chicken },
  { id: 5, name: 'Coffee', category: 'Beverages', image: Coffee },
];

const Food = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFood = selectedCategory === 'All' 
    ? foodItems 
    : foodItems.filter(food => food.category === selectedCategory);

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" sx={{ marginBottom: 3 }}>Food Selection</Typography>

      {/* Category Selector */}
      <FormControl sx={{ minWidth: 150, marginBottom: 3 }}>
        <InputLabel>Category</InputLabel>
        <Select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          {foodCategories.map((category) => (
            <MenuItem key={category} value={category}>{category}</MenuItem>
          ))}
        </Select>
      </FormControl>

      {/* Food Items */}
      <Grid container spacing={3}>
        {filteredFood.map((food) => (
          <Grid item xs={12} sm={6} md={4} key={food.id}>
            <Card sx={{ backgroundColor: '#fffde7', boxShadow: 3 }}>
              <CardMedia component="img" height="140" image={food.image} alt={food.name} />
              <CardContent>
                <Typography variant="h6">{food.name}</Typography>
                <Typography variant="body2" color="textSecondary">Category: {food.category}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Food;