import React from 'react'
const Post = (props)=>{
    return(
        <div class ="post-artikel">
        <h2>Daftar Artikel</h2>
        <div class="artikel">
            <div class="gambar-artikel">
                <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Artikel"/>

            </div>
            <div class="konten-artikel">
                <div className="judul-artikel">{props.judul}</div>
                <p class="isi-"Isi-artikel>{props.isi}</p>
            </div>
            </div>
        </div>

        
    )

    }
    export default Post;

