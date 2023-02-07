fetch("https://kea-alt-del.dk/t7/api/products")
    .then(res=>res.json())
    .then(data=>showProducts(data))



    function showProducts(products){
//looper og kalder 
products.forEach(showProduct)
    
    }

    function showProduct (product){
//fange template 
const template = document.querySelector("#smallProducttemplate").content;
//lav kopi 
const copy =template.cloneNode(true);
//ændre indhold
copy.querySelector("h3").textContent = product.productdisplayname;

copy.querySelector("img").src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp` ; 

//brand 
//price 
//discount 


//copy.querySelector("").textContent = product.brandname;


if(product.soldout){
    //produkt udsolgt
    copy.querySelector("article").classList.add("soldOut")
}

if(product.onSale){
    //produkt på sale (dur ikke helt )
    copy.querySelector("article").classList.add("onSale")
}
//appende
document.querySelector ("main").appendChild(copy);

    }
