const initialValuesListProduct = [
  {
    // NSG
    id: 1,
    nama: "The Girl was mine",
    img: "https://textbookcentre.com/media/products/2010141002133.jpg",
    harga: 50000,
  
    category: "Novels",
  },
  {
    // NSG
    id: 2,
    nama: "Think like a Monk",
    img: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1600432716i/51942513._UY630_SR1200,630_.jpg",
    harga: 95000,
    desc: "Train your mind",
    category: "Novels",
  },
  {
    // NSG
    id: 3,
    nama: "Rich and Poor Dad",
    img: "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//86/MTA-6350242/gramedia_pustaka_utama_rich_dad_poor_dad-edisi_revisi_full02_f09uospd.jpg",
    harga: 80000,
    desc: "Work hard",
    category: "Novels",
  },
 
  
  {
    // OSM
    id: 6,
    nama: "A4 Exercise BOOK",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnAgYxB2WUR2bJWdzYafNxwfH1bNI7VdvmNQ&usqp=CAU",
    harga: 45000,
    desc: "It's cool",
    category: "Stationery",
  },
  {
    // OSM
    id: 7,
    nama: "A4 Book",
    img: "https://www.kmart.com.au/wcsstore/Kmart/images/ncatalog/f/6/42691426-1-f.jpg",
    harga: 7000,
    category: "Stationery",
  },
  {
    // OSM
    id: 8,
    nama: "Pen",
    img: "https://s3-us-west-2.amazonaws.com/melingoimages/Images/70572.jpg",
    harga: 3000,
    desc: "it writes well",
    category: "Stationery",
  },
 
];

export const listProductReducer = (state = initialValuesListProduct) => {
  return state;
};
