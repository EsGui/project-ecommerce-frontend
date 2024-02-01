"use client"

import DetailsProduct from "@/app/components/product_specific_components/DetailsProduct";
import HomeHeader from "../../components/home_components/HomeHeader";
import CommentsProduct from "@/app/components/product_specific_components/CommentsProduct";

export default function ProductEspecific({ params: { slug } }) {
    return (
        <div>
            <HomeHeader />
            <DetailsProduct slug={ slug } />
            <CommentsProduct slug={ slug } />
        </div>
    )
}