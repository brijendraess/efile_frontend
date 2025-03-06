import React from "react";
import {
  IconButton,
  Paper,
  Tooltip,
  useMediaQuery,
  Badge,
  IconButtonProps,
  BadgeProps,
  SxProps,
  Theme,
} from "@mui/material";
import { ElementType } from "react";
import { ArrowBackIosOutlinedIcon } from "../Icons/AllIcons";

interface CustomButtonProps {
  onClick: () => void;
  disabled?: boolean;
  background: string;
  Icon: ElementType;
  fontSize?: "small" | "medium" | "large" | number;
  nameOfTheClass?: string;
  title: string;
  badgeContent?: BadgeProps["badgeContent"];
}

const CustomButton: React.FC<CustomButtonProps> = ({
  onClick,
  disabled = false,
  background,
  Icon,
  fontSize = "medium",
  nameOfTheClass,
  title,
  badgeContent,
}) => {
  const isXs = useMediaQuery("(max-width:600px)");
  const isSm = useMediaQuery("(max-width:960px)");
  const [isHovered, setIsHovered] = React.useState(false);

  const buttonSize: IconButtonProps["size"] = isXs ? "small" : isSm ? "medium" : "large";

  const buttonSx: SxProps<Theme> = {
    background: background,
    borderRadius: "50%",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: "all 0.3s ease-in-out",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    position: "relative",
    overflow: "visible",
    "&:hover": {
      background: background,
      transform: "scale(1.1)",
      boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      border: `2px solid ${background}`,
      borderRadius: "50%",
      transform: "scale(1)",
      transition: "transform 0.3s ease-in-out",
      opacity: 0,
    },
    "&:hover::after": {
      transform: "scale(1.2)",
      opacity: 1,
    },
  };

  const arrowSx: SxProps<Theme> = {
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    color: background,
    opacity: 0,
    transition: 'all 0.3s ease-in-out',
    ...(isHovered && {
      opacity: 1,
      left: -30,
    }),
  };

  return (
    <Paper
      elevation={24}
      sx={{
        background: "none",
        borderRadius: "50%",
        position: 'relative',
      }}
    >
      <Tooltip title={title}>
        <IconButton
          onClick={onClick}
          disabled={disabled}
          sx={buttonSx}
          size={buttonSize}
          className={nameOfTheClass}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {badgeContent !== undefined ? (
            <Badge
              badgeContent={badgeContent}
              color="error"
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
            >
              <Icon fontSize={fontSize} sx={{ color: "white" }} />
            </Badge>
          ) : (
            <Icon fontSize={fontSize} sx={{ color: "white" }} />
          )}

          <ArrowBackIosOutlinedIcon sx={arrowSx} fontSize="small" />
        </IconButton>
      </Tooltip>
    </Paper>
  );
};

export default CustomButton;