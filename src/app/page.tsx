"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CompanyCard from "@/components/custom/CompanyCard";
import { CompanyMetaData } from '@/types';
import { useRouter } from "next/navigation";

export default function Home() {
  const [companies, setCompanies] = useState<CompanyMetaData[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCardClick = (id: number) => {
    router.push(`/company/${id}`);
  };
  useEffect(() => {
    const fetchCompanies = async () => {
        setLoading(true)
      // const response = await fetch("/api/companies")
      // .then(async (resp) => {
      //   const data = await resp.json();
      //   setCompanies(data);
      // })
      // .catch((err) => {
      //   console.log('Error occured while fetching companies metadata ::: ', err);
      // })
      // .finally(() => {
      //   setLoading(false);
      // })
      try {
        const response = await fetch("/api/companies");
        const data = await response.json();
        if (Array.isArray(data)) {
          setCompanies(data);
        } else {
          console.error("Fetched data is not an array");
        }
      } catch (err) {
        console.log('Error occurred while fetching companies metadata ::: ', err);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
  }, []);

  if (!Array.isArray(companies) || companies.length === 0) {
    return <div>No companies available</div>;
  }

  return (
      <Card className="px-8 py-4 bg-gray-100 min-h-screen min-w-full">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">
            Company Directory
          </CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4 grid-flow-row sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {!loading && companies.map((company, index) => (
              <div key={index} onClick={() => handleCardClick(company.id)}>
                <CompanyCard company={company} />
                </div>
            ))}
        </CardContent>
      </Card>
  );
}
