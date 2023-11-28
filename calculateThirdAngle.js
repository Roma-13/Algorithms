function ThirdAngle(){
    if (alpha <= 0 , beta <= 0, alpha + beta >= 180){
    }
    // სიგმას გამოთვლა
    const sigma = 180 - alpha - beta;
    return sigma;
}
// მაგალითი
const alpha = 45;
const beta = 60;

// პასუხის გამოტანა
const sigma = ThirdAngle();
console.log(`სიგმა არის ${sigma} გრადუსი.`);