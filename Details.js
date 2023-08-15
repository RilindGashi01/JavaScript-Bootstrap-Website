export function returnId(product){
    return `
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="row no-gutters">
                            <div class="col-md-1"></div>
                            <div class="col-md-4">
                                <img src="${product.image}" class="card-img" alt="${product.title}">
                            </div>
                            <div class="col-md-1"></div>
                            <div class="col-md-6">
                                <div class="card-body">
                                    <h5 class="card-title">${product.title}</h5>
                                    <p class="card-text">${product.description}</p>
                                    <p class="card-text"><i class="bi bi-currency-dollar"></i> Price: $${product.price}</p>
                                    <span><i class="bi bi-star-fill"></i> ${product.rating.rate} / 10</span>
                                    </br><br/>
                                    <div>
                                    <a href="home.html" class="btn btn-primary"><i class="bi bi-arrow-left"></i> Return</a>
                                    <button id="add-card" class="btn btn-primary">Add to Cart<span class="d-none">${product.id}</span><i class="bi bi-arrow-right"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}