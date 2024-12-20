import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper,
} from "@mui/material";

const StudentFeesPage = () => {
  // Mock data for fee items
  const feeItems = [
    { id: 2, description: "Library Fee", amount: 300 },
    { id: 3, description: "Sports Fee", amount: 150 },
    { id: 5, description: "Miscellaneous Fee", amount: 100 },
  ];

  // Calculate total balance
  const totalBalance = feeItems.reduce((total, item) => total + item.amount, 0);

  return (
    <div className="w-full pt-2">
      <h1 className="font-bold text-[20px]">Student Fees</h1>
      <div>
        {/* Total Balance Section */}
        <Paper elevation={3} sx={{ padding: 2, marginBottom: 4 }}>
          <h2 className="font-bold text-[20px]">
            Total Balance: ${totalBalance.toFixed(2)}
          </h2>
        </Paper>

        {/* Fee Items List */}
        <Paper elevation={1} sx={{ padding: 2 }}>
          <h3 className="font-medium text-[18px]">Fee Details</h3>
          <List>
            {feeItems.map((item) => (
              <React.Fragment key={item.id}>
                <ListItem>
                  <ListItemText
                    primary={item.description}
                    secondary={`Amount: $${item.amount.toFixed(2)}`}
                  />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Paper>
      </div>
    </div>
  );
};

export default StudentFeesPage;
