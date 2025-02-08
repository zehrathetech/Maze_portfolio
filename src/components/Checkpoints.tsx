import React from "react";
import { Dialog, DialogContent, IconButton, Typography, Button, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close"; // Import MUI close icon

interface CheckpointProps {
  title: string;
  description: string;
  link?: string;
  color: string;
  isOpen: boolean;
  onClose: () => void;
}

export const CheckpointPopup: React.FC<CheckpointProps> = ({
  isOpen,
  onClose,
  title,
  description,
  link,
  color
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        style: {
          backgroundColor: "#f8f9fa",
          borderRadius: "16px",
          padding: "24px",
          maxWidth: "500px", // Increased popup size
          width: "90%",
          position: "relative"
        }
      }}
    >
      {/* Close Button */}
      <IconButton
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 16,
          top: 16,
          bgcolor: color,
          color: "white",
          width: "36px", // Increased button size
          height: "36px",
          "&:hover": { bgcolor: color, opacity: 0.8 }
        }}
      >
        <CloseIcon sx={{ fontSize: "22px" }} /> {/* Material-UI Close Icon */}
      </IconButton>

      <DialogContent>
        <Box sx={{ textAlign: "center", pt: 2 }}>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            {title}
          </Typography>
          
          <Typography variant="body1" fontSize="18px" mb={3}>
            {description}
          </Typography>

          {link && (
            <Button
              variant="contained"
              href={link}
              target="_blank"
              sx={{
                bgcolor: color,
                fontSize: "16px",
                padding: "10px 20px",
                "&:hover": { bgcolor: color, opacity: 0.8 }
              }}
            >
              Visit {title}
            </Button>
          )}
        </Box>
      </DialogContent>
    </Dialog>
  );
};
