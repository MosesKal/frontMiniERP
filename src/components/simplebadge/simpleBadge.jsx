import Badge from "@mui/material/Badge";
import { Mail as MailIcon } from "@mui/icons-material";

export default function SimpleBadge() {
  return (
    <Badge badgeContent={49} color="primary">
      <MailIcon color="action" />
    </Badge>
  );
}
