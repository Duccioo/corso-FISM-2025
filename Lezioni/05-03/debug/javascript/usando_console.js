function calcolaMedia(numeri) {
    console.log("Input ricevuto:", numeri);
    
    if (!Array.isArray(numeri)) {
        console.error("Input non valido, deve essere un array");
        return null;
    }
    
    if (numeri.length === 0) {
        console.warn("Array vuoto, impossibile calcolare la media");
        return null;
    }
    
    const somma = numeri.reduce((acc, val) => acc + val, 0);
    console.log("Somma calcolata:", somma);
    
    const media = somma / numeri.length;
    console.log("Media calcolata:", media);
    
    return media;
}

// Test con diversi input
console.log("Risultato:", calcolaMedia([10, 20, 30]));
console.log("Risultato:", calcolaMedia([]));
console.log("Risultato:", calcolaMedia("non un array"));