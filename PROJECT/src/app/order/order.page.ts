import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Order } from 'src/model/order.mode';
@Component({
 selector: 'app-order',
 templateUrl: './order.page.html',
 styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
 order = {} as Order;
 constructor(
 private toastCtrl: ToastController,
 private loadingCtrl: LoadingController,
 private navCtrl: NavController,
 private firestore: AngularFirestore

 ) {}
 ngOnInit() {}
 async createPost(order: Order){
 if(this.formValidation()) {
 //show loader
 let loader = this.loadingCtrl.create({
 message: "Please wait..."
 });
 (await loader).present();
 try{

    await this.firestore.collection("order").add(order);
} catch(e){
this.showToast(e);
}
//dismiss loader
(await loader).dismiss();
//redirect to home page
this.navCtrl.navigateRoot("thank");
}
}

formValidation(){
if(!this.order.Company_Name){
this.showToast("Enter company name");
return false;
}
if(!this.order.Represented_Name){
this.showToast("Enter represented name");
return false;
}
if(!this.order.Email){
this.showToast("Enter email");
return false;
}
if(!this.order.Contact_No){
  this.showToast("Enter contact number");
  return false;
}
if(!this.order.Street_Address){
    this.showToast("Enter street address");
    return false;
}

if(!this.order.City){
  this.showToast("Enter city");
  return false;
}
if(!this.order.Postal_ZipCode){
  this.showToast("Enter postal / zip code");
  return false;
}
if(!this.order.State){
  this.showToast("Enter state / province");
  return false;
}
if(!this.order.Country){
  this.showToast("Select country");
  return false;
}
if(!this.order.Commodity_Product_Oil){
  this.showToast("Select commodity product oil");
  return false;
}
if(!this.order.Quantity){
  this.showToast("Enter quanity order ");
  return false;
}
if(!this.order.MT_Barrel_Gallon){
  this.showToast("Enter MT or Barrel or Gallon");
  return false;
}
if(!this.order.Term_Delivery){
  this.showToast("Select term delivery");
  return false;
}
return true;
}
showToast (message:string){
this.toastCtrl.create({
message: message,
duration: 3000
})
.then(toastData => toastData.present());
}}