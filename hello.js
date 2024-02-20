



document.getElementById("Submit").addEventListener("click", function marriageCalculator() {



const getValueNAme   = document.getElementById("Name").value;
const getValueYear   = document.getElementById("Birthyear").value;
const getValueYearNumber = parseFloat(getValueYear);
const getGender    = document.getElementById("Gender").value;
var year = 2024;
var finalYear = year - getValueYearNumber;
 
if(finalYear >= 18 && getGender == 2){
    document.getElementById("secenddiv").style.height= ("600px");
    document.getElementById("Result").innerText= ( getValueNAme + " আপনার বয়স এখন: "+ finalYear + ".  আপনি যেহুতু একজন সুন্দরী নারী, তাই আপনার এখনি বিয়ে করা ফেলা উচিত৷ অবশ্যই বিয়ের সময় আমাকে দাওয়াত দিবেন। আশায় রইলাম। ধন্যবাদ  আমাকে ব্যবহার করার জন্য।");}

if(finalYear >= 21 && getGender == 1){
    document.getElementById("secenddiv").style.height= ("600px");
    document.getElementById("Result").innerText= ( getValueNAme + " আপনার বয়স এখন: "+ finalYear + ". আপনি যেহুতু পুরুষ, তাই আপনাকে শুধু বিয়ে করলেই হবেনা, টাকা পয়সাও ইনকাম করতে হবে৷ যদি আপনি ভালোমানের টাকা ইনকাম করে থাকেন, তাহলে এখনি বিয়ে করে ফেলুন। অবশ্যই আমাকে দাওয়াত দিবেন। আমাকে ব্যবহার করার জন্য ধন্যবাদ।");}

if(finalYear < 21 && getGender == 1){
    document.getElementById("secenddiv").style.height= ("600px");
    document.getElementById("Result").innerText= ( getValueNAme + " আপনার বয়স এখন: "+ finalYear + ".  আপনার বিয়ের বয়স হয়নি৷ অনুগ্রহ করে আপনি ২১ বছর হওয়া পর্যন্ত অপেক্ষা করুন। আমি আপনার জন্য সুন্দরী নারী দেখে রাখব, আপনার বয়স হলেই আপনাকে জানিয়ে দিব। আমাকে ব্যবহার করার জন্য ধন্যবাদ।");}

if(finalYear < 18 && getGender == 2){
    document.getElementById("secenddiv").style.height= ("600px");
    document.getElementById("Result").innerText= ( getValueNAme + " আপনার বয়স এখন: "+ finalYear + ".  আপনার বিয়ের বয়স হয়নি৷ অনুগ্রহ করে আপনি ১৮ বছর হওয়া পর্যন্ত অপেক্ষা করুন। আমি আপনার জন্য সুন্দর পুরুষ দেখে রাখব, আপনার বয়স হলেই আপনাকে জানিয়ে দিব। আমাকে ব্যবহার করার জন্য ধন্যবাদ।");}

if(finalYear < 12 ){
    document.getElementById("secenddiv").style.height= ("600px");
    document.getElementById("Result").innerText= ( getValueNAme + " আপনার বয়স এখন: "+ finalYear + ".  তুমি এখনো শিশু৷ দুধ খাও আরএইসব চিন্তা মাথা থেকে বের করে ফেলো।");}
                
if(finalYear > 30 ){
    document.getElementById("secenddiv").style.height= ("600px");
    document.getElementById("Result").innerText= ( getValueNAme + " আপনার বয়স এখন: "+ finalYear + ". আপনার বিয়ের বয়স শেষ, এখন কেউ আপনাকে বিয়ে করবে কিনা জানিনা৷ তবুও চেষ্টা করে যেতে পারেন৷ ভাগ্য ভালো থাকলে হয়ে যাবে৷ আমাকে ব্যবহার করার জন্য ধন্যবাদ ।");}
if(finalYear > 100 ){
    document.getElementById("secenddiv").style.height= ("600px");
    document.getElementById("Result").innerText= ( getValueNAme + " আপনার বয়স এখন: "+ finalYear + ". আপনি এখনো বেচে আছেন কিভাবে? যাই হোক রবের পথে আসুন, বিয়ের চিন্তা বাদ দিয়ে৷ আমাকে ব্যবহার করার জন্য ধন্যবাদ।");}


    


})
    



