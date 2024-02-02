"use client"

import DetailsProduct from "@/app/components/product_specific_components/DetailsProduct";
import HomeHeader from "../../components/home_components/HomeHeader";
import CommentsProduct from "@/app/components/product_specific_components/CommentsProduct";
import HomeFooter from "@/app/components/home_components/HomeFooter";

export default function ProductEspecific({ params: { slug } }) {
    return (
        <div>
            <HomeHeader />
            <DetailsProduct slug={ slug } />
            <CommentsProduct slug={ slug } />
            <HomeFooter />
        </div>
    )
}