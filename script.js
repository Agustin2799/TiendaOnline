document.addEventListener("DOMContentLoaded", () => {
    let prodJsonCopia;
    fetch('productos.json')
        .then(response => response.json())
        .then(productos => {
            prodJsonCopia = productos;
            const contenedorProductos = document.getElementById("container");
            productos.forEach(producto => {
                const divProducto = document.createElement('div');

                divProducto.className = 'producto';
                divProducto.setAttribute(`onclick`,`setId("${producto.id}")`)
                divProducto.innerHTML = `
                    <img src="${producto.imagen}" alt="${producto.producto}">
                    <p>${producto.producto}</p>
                    <p>$${producto.precio.toFixed(2)}</p>
                    <buttom
                    <button type="button" class="btn btn-success btnCarrito">Agregar al carrito</button>
                `;
                contenedorProductos.appendChild(divProducto);
            });
        })
        .catch(error => {
            console.error('Error al cargar o parsear el JSON:', error);
        });
    
    const agregarCarrito = document.getElementsByClassName("btnCarrito")
    let arrayCarrito = [];
    agregarCarrito.addEventListener("click", () => {
        arrayCarrito.push(localStorage.getItem('idProducto'));
    })
    console.log(prodJsonCopia);

    const contCarrito = document.getElementById("productosCarrito");
    agregarCarrito.forEach(idProducto => {
        contCarrito.innerHTML += ` `;
    })

});
function setId(id) {
    localStorage.setItem('idProducto', id);
}