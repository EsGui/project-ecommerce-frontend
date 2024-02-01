"use client"

import DetailsProduct from "@/app/components/product_specific_components/DetailsProduct";
import HomeHeader from "../../components/home_components/HomeHeader";

export default function ProductEspecific({ params: { slug } }) {
    return (
        <div>
            <HomeHeader />
            <DetailsProduct slug={ slug } />
        </div>
    )
}