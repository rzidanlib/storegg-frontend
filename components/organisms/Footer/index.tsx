import Image from "next/image";
import React from "react";
import FooterSection from "./FooterSection";

export default function Footer() {
  const companyLinks = [
    { text: "About Us", href: "" },
    { text: "Press Release", href: "" },
    { text: "Terms of Use", href: "" },
    { text: "Privacy & Policy", href: "" },
  ];

  const supportLinks = [
    { text: "Refund Policy", href: "" },
    { text: "Unlock Rewards", href: "" },
    { text: "Live Chatting", href: "" },
  ];

  const connectLinks = [
    { text: "hi@store.gg", href: "mailto: hi@store.gg" },
    { text: "team@store.gg", href: "mailto: team@store.gg" },
    {
      text: "Pasific 12, Jakarta Selatan",
      href: "http://maps.google.com/?q=Pasific 12, Jakarta Selatan",
    },
    { text: "021 - 1122 - 9090", href: "tel: 02111229090" },
  ];

  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="" className="mb-30">
                <Image src="/icon/logo.svg" width={60} height={60} alt="logo" />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                StoreGG membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <p className="mt-30 text-lg color-palette-1 mb-30">
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <FooterSection title="Company" items={companyLinks} />
                <FooterSection title="Support" items={supportLinks} />
                <FooterSection title="Connect" items={connectLinks} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
