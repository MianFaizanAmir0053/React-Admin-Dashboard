import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";

const Widget = [
  {
    title: "User",
    value: "200",
    icon: (
      <PersonOutlineOutlinedIcon className="text-red-600 bg-red-200 rounded-md p-1" />
    ),
    color: "text-red-600",
    link: "/users",
  },
  {
    title: "Order",
    value: "200",
    icon: (
      <ShoppingCartOutlinedIcon className="text-green-600 bg-green-200 rounded-md p-1" />
    ),
    color: "text-green-600",
    link: "/products",
  },
  {
    title: "Sale",
    value: "200",
    icon: (
      <MonetizationOnOutlinedIcon className="text-blue-600 bg-blue-200 rounded-md p-1" />
    ),
    color: "text-blue-600",
    link: "/",
  },
  {
    title: "Revenue",
    value: "200",
    icon: (
      <AccountBalanceWalletOutlinedIcon className="text-yellow-600 bg-yellow-200 rounded-md p-1" />
    ),
    color: "text-yellow-600",
    link: "/",
  },
];

export default Widget;
