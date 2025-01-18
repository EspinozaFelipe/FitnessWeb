import Link from "next/link";
import React from "react";
import { PiBowlFood, PiRuler } from "react-icons/pi";
import { CiDumbbell } from "react-icons/ci";
import { GrYoga } from "react-icons/gr";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const iconComponents = {
  foodbowlicon: PiBowlFood,
  dumbbellicon: CiDumbbell,
  rulericon: PiRuler,
  yogaicon: GrYoga,
};

interface Service {
  name: string;
  icon: keyof typeof iconComponents;
  href: string;
}

const services: Service[] = [
  {
    name: "Strength Training",
    icon: "dumbbellicon",
    href: "/strength-training",
  },
  { name: "Diet", icon: "foodbowlicon", href: "/diet-coaches" },
  { name: "Weight Loss", icon: "rulericon", href: "/weight-loss" },
  { name: "Yoga", icon: "yogaicon", href: "/yoga" },
];

function SelectService() {
  return (
    <ul className="flex space-x-4 p-4">
      {services.map((service) => {
        const IconComponent = iconComponents[service.icon];
        return (
          <li key={service.name}>
            <Link href={service.href}>
              <Card variant="outlined" className="rounded-xl">
                <CardContent className="flex items-center space-x-2 hover:bg-slate-700 hover:text-white transition duration-7">
                  <IconComponent size={24} />
                  <div>{service.name}</div>
                </CardContent>
              </Card>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default SelectService;
