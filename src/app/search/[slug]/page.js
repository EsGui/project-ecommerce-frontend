import HomeHeader from "@/app/components/home_components/HomeHeader";
import ListSearchProduct from "../../components/search_components/ListSearchProduct";

export default function search({ params: { slug } }) {
    return (
        <div>
            <HomeHeader />
            <ListSearchProduct slug={slug} />
        </div>
    )
}