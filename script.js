const shopName = "Keziah's Cosmetics";
const currentYear = 2026;

const shopTitleElement = document.getElementById("shop-title");
if (shopTitleElement) {
    shopTitleElement.textContent = shopName;
}

const copyrightElement = document.getElementById("copyright-text");
if (copyrightElement) {
    copyrightElement.textContent = `© ${currentYear} ${shopName}. All rights reserved.`;
}

const isStoreOpen = true;
const shopStatusMessage = isStoreOpen ? "Open today" : "Closed today";

const shopStatusElement = document.getElementById("shop-status");
if (shopStatusElement) {
    shopStatusElement.textContent = `Store Status: ${shopStatusMessage}`;
}

console.log("Shop Name:", shopName);
console.log("Current Year:", currentYear);
console.log("Store Open Status:", shopStatusMessage);

const productStockElement = document.getElementById("product-stock-count");
const productPriceElement = document.getElementById("product-price");

if (productStockElement && productPriceElement) {
    const stockCount = Number(productStockElement.dataset.stock || 15);
    const itemPrice = Number(productPriceElement.dataset.price || 300);

    let stockStatusMessage = "";
    if (stockCount > 10) {
        stockStatusMessage = `In stock (${stockCount} available)`;
    } else if (stockCount >= 1) {
        stockStatusMessage = `Only a few left (${stockCount} remaining!)`;
    } else {
        stockStatusMessage = "Sold out";
    }

    const stockStatusElement = document.getElementById("stock-status");
    if (stockStatusElement) {
        stockStatusElement.textContent = `Availability: ${stockStatusMessage}`;
    }

    const vatRate = 0.12;
    const totalPriceWithVat = itemPrice + (itemPrice * vatRate);

    const orderSummaryElement = document.getElementById("order-summary");
    if (orderSummaryElement) {
        orderSummaryElement.textContent = `Subtotal: ₱${itemPrice} | Total (incl. 12% VAT): ₱${totalPriceWithVat.toFixed(2)}`;
    }

    const isClubMember = true;
    const qualifiesForFreeDelivery = (totalPriceWithVat >= 300) && (isClubMember === true);
    const deliveryFee = qualifiesForFreeDelivery ? 0 : 150;
    const finalBill = totalPriceWithVat + deliveryFee;

    const deliveryCheckElement = document.getElementById("delivery-check");
    if (deliveryCheckElement) {
        deliveryCheckElement.textContent = `Delivery Fee: ₱${deliveryFee} | Final Amount: ₱${finalBill.toFixed(2)}`;
    }

    console.log("Stock Count:", stockCount);
    console.log("Final Amount:", finalBill);
}