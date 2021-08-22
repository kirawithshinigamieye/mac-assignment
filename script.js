//memory cost
const memoryOne = 0;
const memoryTwo = 180;

document.getElementById('memory-one').addEventListener("click" , function(){
    document.getElementById('memory-cost').innerHTML = memoryOne;
    document.getElementById('total-price').innerHTML = summationPrice();
    document.getElementById('total-price-discount').innerHTML = summationPrice();
})
document.getElementById('memory-two').addEventListener("click" , function(){
    document.getElementById('memory-cost').innerHTML = memoryTwo;
    document.getElementById('total-price').innerHTML = summationPrice();
    document.getElementById('total-price-discount').innerHTML = summationPrice();
})



//storage cost
const storageOne = 0;
const storageTwo = 100;
const storageThree = 180;
document.getElementById('storage-one').addEventListener("click" , function(){
    document.getElementById('storage-cost').innerHTML = storageOne;
    document.getElementById('total-price').innerHTML = summationPrice();
    document.getElementById('total-price-discount').innerHTML = summationPrice();
})
document.getElementById('storage-two').addEventListener("click" , function(){
    document.getElementById('storage-cost').innerHTML = storageTwo;
    document.getElementById('total-price').innerHTML = summationPrice();
    document.getElementById('total-price-discount').innerHTML = summationPrice();
})
document.getElementById('storage-three').addEventListener("click" , function(){
    document.getElementById('storage-cost').innerHTML = storageThree;
    document.getElementById('total-price').innerHTML = summationPrice();
    document.getElementById('total-price-discount').innerHTML = summationPrice();
})


//delivery charge
const freeDelivery = 0;
const delivery = 20;
document.getElementById('free-delivery').addEventListener("click" , function(){
    document.getElementById('delivery-charge').innerHTML = freeDelivery;
    document.getElementById('total-price').innerHTML = summationPrice();
    document.getElementById('total-price-discount').innerHTML = summationPrice();
})
document.getElementById('delivery-cost').addEventListener("click" , function(){
    document.getElementById('delivery-charge').innerHTML = delivery;
    document.getElementById('total-price').innerHTML = summationPrice();
    document.getElementById('total-price-discount').innerHTML = summationPrice();
})




//Total Price
function summationPrice(){
    var memoryCost = parseInt(document.getElementById('memory-cost').innerText);
    var storageCost = parseInt(document.getElementById('storage-cost').innerText);
    var deliveryCharge = parseInt(document.getElementById('delivery-charge').innerText);
    var totalPrice = [1299, memoryCost, storageCost, deliveryCharge];
    var total = 0;
    for (i in totalPrice){
        total += totalPrice[i];
    }
    return total;
}

//Discount



document.getElementById('promo-code-button').addEventListener("click" , function(){
        var priceTotal = parseInt(document.getElementById('total-price').innerText);
        const promoCode = document.getElementById('promo-code').value;
        if (promoCode == 'stevekaku'){
            priceTotal = priceTotal - (priceTotal * .2);
            document.getElementById('total-price-discount').innerHTML = priceTotal;
        }
        document.getElementById('promo-code').value = "";
    })


