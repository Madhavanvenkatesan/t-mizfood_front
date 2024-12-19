export default interface productProbs {
    id: number;
    category: string;
    brand: string;
    title: string;
    description: string;
    price: number;
}
export default interface productCategoryProbs {
    products: productProbs[];
    total: number;
    skip: number;
    limit: number;
}

export type SideNavItem = {
    title: string;
    path: string;
    submenu?: boolean;
    subMenuItems?: SideNavItem[];
};