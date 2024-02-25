import { Button, Card } from "@mui/material";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
const AddressCard = ({handleSelecteAddress,item,showButton}) => {
    
  return (
    <Card className="flex space-x-5 lg:w-64 m-5 p-5">
      <HomeIcon />
      <div className="space-y-3 text-gray-500">
        <h1 className="fotn-semibold text-lg text-white">Home</h1>
        <p>
          Gargi Hostel, MNIT, Malviya Nagar, 302017, Jaipur, Rajasthan, India
        </p>
        {showButton && (
          <Button
            variant="outlined"
            fullWidth
            onClick={() => handleSelecteAddress(item)}
          >
            select
          </Button>
        )}
      </div>
    </Card>
  );
};
export default AddressCard;
