import "../styles/Gallery.css"

function Gallery(){
    return (
        <section>
            <h2>Gallery</h2>
            <ul>
                <li><img width={200}  src="../assets/pic.jpg" alt="" /></li>
                <li><img width={200}  src="../assets/pic.jpg" alt="image" /></li>
                <li><img width={200}  src="../assets/pic.jpg" alt="" /></li>
            </ul>
        </section>
    );
}

export default Gallery;