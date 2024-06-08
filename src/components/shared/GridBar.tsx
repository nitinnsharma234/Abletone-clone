import React from 'react'
import ProductCardItem from '../../models/ProductCardItem';

const GridBar = ({ heading }) => {
  return (
    <div className='mx-[7rem] pb-[100px]'>
      <h3 className='text-4xl font-bold mb-9'>The latest from Ableton</h3>


      <ProductCard list={list1} />
      <h1 className='text-4xl font-bold mt-20 mb-9'>Learn more about Live 12</h1>
      <ProductCard list={list2} />
      
       <h1 className='text-4xl font-bold mt-20 mb-9'>Expand Live 12 with Packs</h1>
      <ProductCard list={list3} />
      <h1 className='text-4xl font-bold mt-20 mb-9'>Develop your music-making</h1>
      <ProductCard list={list4}/>


    </div>

  )
}

export const ProductCard = ({ list , marginBtm=''}: { list: ProductCardItem[], marginBtm?:string }) => {
  return (
    <div className={`flex justify-between w-full xs:flex-wrap lg:flex-nowrap `} >
      {
        list.map((item, index) => {
          const cssClass = `py-[1.96px] px-[12px] text-sm font-semibold my-4  inline-block`;
          console.log(cssClass);

          return <div key={index} className='max-w-[400px]'>
            <img src={item.image} alt="image1" className='object-cover  aspect-video  ' />
            {item.tag && <span className={cssClass} style={{ backgroundColor: item.tagColor }}>{item.tag} </span>}
            <h2 className={` font-medium ${item.tag ?"text-xl": "text-lg mt-5"}`}>{item.title}</h2>
          </div>
        })
      }
    </div>
  )
}



export default GridBar;

const list1 = [
  new ProductCardItem({ title: "Against the Grain: Creative Applications of Granulator III", image: "https://cdn-resources.ableton.com/resources/uploads/zinnia/thumb_granulator-III_DSC1948-Verbessert-NR_800x400px.jpg.600x340_q85_crop_upscale.jpg", tag: "Tutorials", tagColor: '#00d2be' }),
  new ProductCardItem({ title: "Heavee: Note To Self", image: "https://cdn-resources.ableton.com/resources/uploads/zinnia/thumb_457_Haevee.jpg.600x340_q85_crop_upscale.jpg", tag: "Artists", tagColor: '#FED134' }),
  new ProductCardItem({ title: "Astrid Sonne: A Newfound Voice", image: "https://cdn-resources.ableton.com/resources/uploads/zinnia/thumb_88080001_1600x800_px.jpg.600x340_q85_crop_upscale.jpg", tag: "Artists", tagColor: '#FED134' }),
];
const list2 = [
  new ProductCardItem({ title: "Get Tips and Tricks from Our Favorite Creators ›", image: "https://ableton-production.imgix.net/uploads/content-clusters/Blog-Live12-2-2.jpg?auto=format&fit=crop&fm=jpg&h=225&ixjsv=1.1.3&w=400" }),
  new ProductCardItem({ title: "Discover Meld: Live 12’s New Bi-Timbral Synth ›", image: "https://ableton-production.imgix.net/uploads/content-clusters/meld-1_DSC1794_CROP_800x400px.jpg?auto=format&fit=crop&fm=jpg&h=225&ixjsv=1.1.3&w=400" }),
  new ProductCardItem({ title: "Watch the Learn Live 12 Videos ›", image: "https://ableton-production.imgix.net/uploads/content-clusters/3_Suite_LL12-Midi_Tools_540x250.jpg?auto=format&fit=crop&fm=jpg&h=225&ixjsv=1.1.3&w=400" }),
];
const list3 = [
  new ProductCardItem({ title: "Granulator III ›", image: "https://ableton-production.imgix.net/uploads/content-clusters/1000_x_1000_px.png?auto=format&fit=crop&fm=jpg&h=225&ixjsv=1.1.3&w=400" }),
  new ProductCardItem({ title: "Trap Drums by Sound Oracle ›", image: "https://ableton-production.imgix.net/uploads/content-clusters/NL_Trap_drums_Packs.jpg?auto=format&fit=crop&fm=jpg&h=225&ixjsv=1.1.3&w=400" }),
  new ProductCardItem({ title: "Lost & Found ›", image: "https://ableton-production.imgix.net/uploads/content-clusters/Pack_Lostandfound_Newsletter_540px_x_250px.png?auto=format&fit=crop&fm=jpg&h=225&ixjsv=1.1.3&w=400" }),
];
const list4 = [
  new ProductCardItem({ title: "Learn the foundations of music  ›", image: "https://ableton-production.imgix.net/uploads/content-clusters/Screenshot_2023-04-11_at_12.20.55.png?auto=format&fit=crop&fm=jpg&h=225&ixjsv=1.1.3&w=400" }),
  new ProductCardItem({ title: "Get started with Live ›", image: "https://ableton-production.imgix.net/uploads/content-clusters/2_Standard_Get_started_540x250.jpg?auto=format&fit=crop&fm=jpg&h=225&ixjsv=1.1.3&w=400" }),
  new ProductCardItem({ title: "Experiment with tuning ›", image: "https://ableton-production.imgix.net/uploads/content-clusters/Thumbnail_final.jpg?auto=format&fit=crop&fm=jpg&h=225&ixjsv=1.1.3&w=400" }),
];