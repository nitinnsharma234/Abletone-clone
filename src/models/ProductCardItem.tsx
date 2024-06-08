class ProductCardItem {
    title: string;
    tag?: string;
    tagColor?: string;
    image: string;

    constructor({ title, image, tag,tagColor }: { title: string, image: string, tag?: string,tagColor?:string}) {
        this.title = title;
        this.tag = tag;
        this.image = image;
        this.tagColor=tagColor;
    }
}

export default ProductCardItem;