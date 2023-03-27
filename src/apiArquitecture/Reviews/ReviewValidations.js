export default function reviewValidations(reviewData){ 
    if (!reviewData.text) throw new Error("Text missing")
    if (!reviewData.plate) throw new Error("plate missing")
}