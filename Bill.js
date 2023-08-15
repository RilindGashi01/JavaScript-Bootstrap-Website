export function Bill(products){
    return `
    <div class="container mt-4">
        <div class="row">
            <div class="col-md-12 text-center">
                <h1>Invoice</h1>
                <p>Date: August 14, 2023</p>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th class="text-right">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td id="p-title">${products.title}</td>
                            <td id="p-price" class="text-right">${products.price}</td>
                        </tr>
                        <tr>
                            <td colspan="1" class="text-right"><strong>Total:</strong></td>
                            <td class="text-right"><strong>${products.price}</strong></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-md-12 text-center">
                <button id="order" class="btn btn-primary">Place Order</button>
            </div>
        </div>
    </div>
    `
}