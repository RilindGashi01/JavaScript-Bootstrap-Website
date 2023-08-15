export function Products(products){
    let allproducts = `<div class="row">`

    products.forEach(product => {
        allproducts += `
        <div class="col-md-3 col-sm-12 mb-3">
            <div class="card" style="height:450px">
                <img style="height:270px" src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <div class="card-text d-flex align-items-center justify-content-between">
                        <div>
                            <span><i class="bi bi-currency-dollar"></i> ${product.price}$</span>
                            <br />
                            <span><i class="bi bi-star-fill"></i> ${product.rating.rate} / 10</span>
                        </div>
                        <a href="" class=" btn btn-sm btn-outline-primary" id="more">More <span class="d-none">${product.id}</span><i class="bi bi-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
        `
    })

    allproducts += `</div>`

    return allproducts
}