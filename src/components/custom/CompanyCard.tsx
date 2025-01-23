"use-client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";
import { CompanyMetaData } from "@/types";

interface CompanyCardProps {
  company: CompanyMetaData;
}

const CompanyCard = ({ company }: CompanyCardProps) => {
  const { id, name, description, logo_url } = company;

  return (
    <Card
      className="flex flex-col w-full rounded-lg cursor-pointer shadow-md"
    >
      <CardHeader>
        <CardTitle className="text-black font-semibold">{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-start justify-start">
        <Image
          src={logo_url}
          className="object-cover w-full"
          width={100}
          height={100}
          alt="Company Image"
        />
        <p className="text-xl text-gray-800 tracking-wide">{description}</p>
      </CardContent>
    </Card>
  );
};

export default CompanyCard;
