// Vue que pondrá los libros y el nombre
new Vue({
    el: '#app',
    data: {
        //Array con imagenes de los libros
        books: [
            {image: 'http://escritoras.com/img/portadas/2141308794.jpg', message:'Todo esto te daré'},
            {image: 'http://escritoras.com/img/portadas/2141307846.jpg', message:'El guardián invisible'},
            {image: 'https://imagessl8.casadellibro.com/a/l/t0/88/9788423348688.jpg', message:'Ofrenda a la tormenta'},
            {image: 'https://i.pinimg.com/originals/bc/86/08/bc860839ba567740dcaf3cbc224913fc.jpg',message:'Memento mori'},
            {image: 'https://imagessl2.casadellibro.com/a/l/t0/12/9788483658512.jpg',message:'Sarna con gusto'},
            {image: 'https://imagessl5.casadellibro.com/a/l/t0/75/9788483655375.jpg', message:'Dies Irae'},
            {image: 'https://imagessl5.casadellibro.com/a/l/t0/55/9788483657355.jpg', message: 'Khimera'},
            {image: 'http://www.perezgellida.es/img/upload/productthumb/957', message:'Mutatis mutandis'},
            {image: 'https://imagessl2.casadellibro.com/a/l/t0/02/9788483656402.jpg', message:'Consummatum est'},
            {image: 'https://imagessl9.casadellibro.com/a/l/t0/09/9788499083209.jpg', message:'Trilogía de la Fundación'},
            {image: 'https://imagessl4.casadellibro.com/a/l/t0/74/9788497931274.jpg', message:'Preludio a la Fundación'},
            {image: 'http://www.asimov.es/wp-content/uploads/2011/05/yo-robot-isaac-asimov.jpg',message:'I,robot'},
            {image: 'https://imagessl4.casadellibro.com/a/l/t0/94/9788478887194.jpg', message:'El principito'},
            {image: 'https://http2.mlstatic.com/asi-hablaba-zaratustra-D_NQ_NP_6925-MLM5137283219_102013-F.jpg', message:'Así hablaba Zatatustra'},
            {image: 'https://imagessl3.casadellibro.com/a/l/t0/13/9788499282213.jpg', message:'EL arte de la guerra'},
            {image: 'https://imagessl8.casadellibro.com/a/l/t0/88/9788416840588.jpg',message:'Watchmen'},
            {image: 'https://imagessl3.casadellibro.com/a/l/t0/63/9788496815063.jpg',message:'Pildoras azules'},
            {image: 'http://astiberri.com/spree/products/367/product/lupus.jpg?1433945538',message:'Lupus'},
            {image: 'https://imagessl2.casadellibro.com/a/l/t0/62/9788467047462.jpg',message:'Terminamos y otros poemas'},
            {image: 'https://static.lafeltrinelli.it/static/frontside/xxl/681/7594681_2268787.jpg', tmessage:'Milk and Honey'},
            {image: 'https://images-na.ssl-images-amazon.com/images/I/51V91P0EuKL._SX322_BO1,204,203,200_.jpg', message:'Miradas perdidas'},
            {image: 'https://images-na.ssl-images-amazon.com/images/I/51plZt32r4L._SX322_BO1,204,203,200_.jpg', message:'Sueños de cristal'},
            {image: 'http://edicionescivicas.org/wp-content/uploads/2017/04/portada-cdd.png', message:'El cuento de Dione'},
            {image: 'https://images-eu.ssl-images-amazon.com/images/I/51wHW%2BOwwqL.jpg', message:'La bruma'},
            {image: 'http://principaldeloslibros.com/index.php?controller=attachment&id_attachment=35', message:'Canción de Bruma'},
            {image: 'http://www.libreriaalberti.com/static/img/portadas/_visd_0000JPG00YCE.jpg', message:'Yo materé monstruos por ti'},
            {image: 'http://estaticos.telva.com/assets/multimedia/imagenes/2017/03/21/14901052412214.jpg', message:'EL libro de GLoria Fuertes'},
            {image: 'https://images-na.ssl-images-amazon.com/images/I/51fMV-qGGPL._SX301_BO1,204,203,200_.jpg', message:'Animal farm'},
            {image: 'https://images-na.ssl-images-amazon.com/images/I/51f5Fu2hzqL._SX305_BO1,204,203,200_.jpg', message:'1984'},
            {image: 'https://imagessl4.casadellibro.com/a/l/t0/44/9788499088044.jpg', message:'La catedral del mar'},
            {image: 'https://imagessl0.casadellibro.com/a/l/t0/10/9788401328510.jpg', message:'Los pilares de la tierra'},
            {image: 'https://imagessl8.casadellibro.com/a/l/t0/78/9788408156178.jpg', message:'EL libro prohibido'},
            {image: 'https://www.planetadelibros.com/usuaris/libros/fotos/12/m_libros/portada_el-juez-de-egipto_christian-jacq_201505260954.jpg', message:'El juez de Egipto'},
            {image: 'http://rachelbels.com/wp-content/uploads/2018/01/PSD-Bella-al-desnudo-400px-alto.jpg', message:'Bella al desnudo'},
            {image: 'http://rachelbels.com/wp-content/uploads/2018/01/PSD-Desnudado-a-la-bestia-400px-alto.jpg', message:'Desnudando a la Bestia'},
            {image: 'http://librosonlineparaleer.com/wp-content/uploads/2017/04/Bella-y-Bestia_-Tiger-Rose-III-Rachel-Bels.jpg', message:'Bella y Bestia'},
            {image: 'http://rachelbels.com/wp-content/uploads/2018/01/Diario-de-una-sirena-400px-alto.jpg', message:'Diario de una sirena'},
            {image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2016/06/600522-muerte-capitan-america-review-comic.jpg', message:'LA muerte del capitan america'},
            {image: 'https://images-na.ssl-images-amazon.com/images/I/81Uhr1VRKiL.jpg',message:'El cuento de la criada'},
            {image: 'https://imagessl6.casadellibro.com/a/l/t0/96/9788490663196.jpg', message:'Patria'},
            {image: 'https://images-na.ssl-images-amazon.com/images/I/61LRryne08L._SX258_BO1,204,203,200_.jpg', message:'Un monstruo viene a verme'},
            {image: 'https://imagessl4.casadellibro.com/a/l/t0/64/9788467048964.jpg', message:'No soy un monstruo'},
            {image: 'https://www.libelista.com/media/products/615658/615658-0-med.jpg', message:"La quimica de l'odi"},
            {image: 'https://static.fnac-static.com/multimedia/ES/images_produits/ES/ZoomPE/4/2/2/9788473291224/tsp20140317154840/Jardi-vora-el-mar.jpg',message:'Jardí vora el mar'},
            {image: 'https://imagessl0.casadellibro.com/a/l/t0/50/9788497943550.jpg', message:'La divina comedia'},
            {image: 'https://imagessl3.casadellibro.com/a/l/t0/03/9788420660103.jpg', message:'Fausto'},
            {image: 'https://http2.mlstatic.com/los-sufrimientos-del-joven-werther-johann-w-goethe-D_NQ_NP_20920-MLA20200610779_112014-F.jpg', message:'Los sufrimientos del joven Werther'},
            {image: 'https://imagessl5.casadellibro.com/a/l/t0/45/9788466236645.jpg', message:'EL ingenioso idalgo Don Quijote de la Mancha'}
        ],
         //Libros en el carrito
         items: 0
    },
    methods:{
        addBook: function(e){
            e.preventDefault();
            //Para aumentar la cantidad del carrito
            this.items++;
            var itemsCart =
            document.getElementById('compra');
            //Ponerlos en el carrito
            itemsCart.innerHTML =this.items;
        },
        
    }
});

