
import React, {Component} from "react";
import './BlogPost.css';
import Post from './Post';
class BlogPost extends Component{
    // render (){
    //     return(
    //         <div class ="post-artikel">
    //             <h2>Daftar Artikel</h2>
    //             <div class="artikel">
    //                 <div class="gambar-artikel">
    //                     <img scr="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Artikel"/>

    //                 </div>
    //                 <div class="konten-artikel">
    //                     <div class="judul-artikel">judul Artikel</div>
    //                     <p class="isi-"Isi-artikel>isi Artikel</p>
    //                 </div>
    //                 </div>
    //             </div>
    state={
        listArtikel:[]
    }
    componentDidMount(){
        fetch( 'https://jsonplaceholder.typicode.com/posts')
        .then(response=>response.json())
        .then(jsonHasilDariAPI=>{
            this.setState( {
                listArtikel:jsonHasilDariAPI
            })
        })



    }
    render(){
        return(
            <div class="post-artikel">
                <h2>List of Articles</h2>
                {
                    this.state.listArtikel.map(artikel=>{
                        return <Post judul={artikel.judul} judul={artikel.title} isi={artikel.body}></Post>  
                })
            }
            </div>
        )
    }
    

}
export default BlogPost;