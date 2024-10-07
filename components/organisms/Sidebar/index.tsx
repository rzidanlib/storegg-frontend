import Footer from "./Footer";
import MenuItem from "./MenuItem";
import Profile from "./Profile";

interface SidebarProps {
  activeMenu:
    | "overview"
    | "transactions"
    | "messages"
    | "card"
    | "rewards"
    | "settings"
    | "logout";
}

const menuItem = [
  {
    title: "Overview",
    icon: "ic-menu-overview",
    href: "/member",
  },
  {
    title: "Transactions",
    icon: "ic-menu-transactions",
    href: "/member/transactions",
  },
  {
    title: "Messages",
    icon: "ic-menu-messages",
    href: "/member/messages",
  },
  {
    title: "Card",
    icon: "ic-menu-card",
    href: "/member/card",
  },
  {
    title: "Rewards",
    icon: "ic-menu-rewards",
    href: "/member/rewards",
  },
  {
    title: "Settings",
    icon: "ic-menu-settings",
    href: "/member/edit-profile",
  },
  {
    title: "Log Out",
    icon: "ic-menu-logout",
    href: "/sign-in",
  },
];

export default function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          {menuItem.map((item, index) => (
            <MenuItem
              key={index}
              {...item}
              active={activeMenu === item.title.toLowerCase()}
            />
          ))}
        </div>
        <Footer />
      </div>
    </section>
  );
}
