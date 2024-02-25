import {
  Card,
  Divider,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MenuItemCard from "./MenuItemCard";

const categories = [
  "Thali",
  "Starters",
  "Indian Main Course",
  "Rice and Biryani",
  "Breads",
  "Chinese",
  "Dessert",
];
const foodType = ["vegetarian Only", "Non-Vegetarian Only", "Both"];
const menu=[1,1,1,1,1,1]
const Restaurant = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedFoodType,setSelectedFoodType]= useState();

  const handleFoodTypeChange=()=>{
    console.log("selected Food Type-", selectedFoodType)
  }
  const handleCategoryChange = () => {
    HTMLFormControlsCollection.log("selected category-", selectedCategory);
  };
  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-grey-500 py-2 mt-10">
          {"Home/india//2/Orderr Online"}
        </h3>
        <div>
          <img
            className="w-full h-[40vh] object-cover"
            src="https://b.zmtcdn.com/data/pictures/8/20721868/931f83ec7836faa8d25adf1f0db624d7.jpg?output-format=webp&fit=around|300:273&crop=300:273;*,*"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-4xl py-1 font-semibold">{"Burdera"}</h1>
          <p className="text-grey-500">Durgapura, Jaipur</p>
          <p className="text-grey-500">
            North Indian, Japanese, Fast Food, Momos, Sushi, Biryani, Beverages
          </p>
          <p className="py-3 text-orange-300">open now till 12 am</p>
        </div>
      </section>
      <Divider />
      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%]">
          <Card className=" p-5 space-y-5 lg:sticky top-28">
            <div>
              <Typography sx={{ padding: "1rem" }} variant="h5">
                Category
              </Typography>
              <FormControl component={"fieldset"}>
                <RadioGroup
                  name="category"
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  {categories.map((item, index) => (
                    <FormControlLabel
                      key={index}
                      value={item}
                      control={<Radio />}
                      label={item}
                      sx={{ color: "gray" }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
            <Divider />
            <div>
              <Typography sx={{ padding: "1rem" }} variant="h5">
                Food Type
              </Typography>
              <FormControl component={"fieldset"}>
                <RadioGroup
                  name="foodType"
                  value={selectedFoodType}
                  onChange={handleFoodTypeChange}
                >
                  {foodType.map((item, index) => (
                    <FormControlLabel
                      key={index}
                      value={item}
                      control={<Radio />}
                      label={item}
                      sx={{ color: "gray" }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </Card>
        </div>
        <div className="lg:w-[80%] space-y-5 lg:pl-10" >
          {menu.map((item)=><MenuItemCard item={item}/>)}
        </div>
      </section>
    </div>
  );
};

export default Restaurant;
