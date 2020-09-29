import {  Component, OnInit } from '@angular/core';
import { LUNGIME , TIMP, VOLUM, MASA} from '../shared/vectors'
import {Vector} from '../shared/vector'



@Component({
  selector: 'app-conv',
  templateUrl: './conv.component.html',
  styleUrls: ['./conv.component.css']
})
export class ConvComponent implements OnInit {

  constructor() {  }
  chose: any ="LUNGIME";
 
  choseUnit : Vector =LUNGIME;
  
  counter = Array;
  





  ngOnInit(): void {
    const retrievedObject = localStorage.getItem(`${this.choseUnit.principal}`);
    if (retrievedObject) {
    console.log('retrievedObject: ', JSON.parse(retrievedObject));
    this.choseUnit = JSON.parse(retrievedObject); 
   

  }
}

helperFunctionForChangeSelect() {
  const retrievedObject = localStorage.getItem(`${this.choseUnit.principal}`);
  if (retrievedObject) {
  console.log('retrievedObject: ', JSON.parse(retrievedObject));
  this.choseUnit = JSON.parse(retrievedObject); }
}

changeSelect() {
 
  switch (this.chose) {
    case 'LUNGIME' :{
      this.choseUnit  =LUNGIME;
      this.helperFunctionForChangeSelect()
      break;
    }
    case 'TIMP' : {
      this.choseUnit = TIMP;
      this.helperFunctionForChangeSelect()
        break;
    }
    case 'VOLUM' : {
      this.choseUnit = VOLUM;
      this.helperFunctionForChangeSelect()
        break;
    }

    case 'MASA' :{
      this.choseUnit  =MASA;
      this.helperFunctionForChangeSelect()
      break;
    }
    default: {
      this.choseUnit = LUNGIME;
      this.helperFunctionForChangeSelect()
    }
      
  }
}

  transform(s) {
   console.log(this.choseUnit)
    for(let i of this.choseUnit.setUnitati) 
          if (i===this.choseUnit.units[s])
          
       
         {
         //TRANSFORMARE IN METRI  
        
          let index = this.choseUnit.setUnitati.indexOf(i);
          let ValueDin = this.choseUnit.setValoriDinUnitate[index]
          this.choseUnit.valoareInPlus = this.choseUnit.numbers[s] * ValueDin
         
        
          
          //TRANSFORMARE DIN METRI
         
          for (let k in this.choseUnit.units) 
            if (s !== k)
               for (let j of this.choseUnit.setUnitati)
                 if(j===this.choseUnit.units[k])
                  {
                  let index1 = this.choseUnit.setUnitati.indexOf(j)
                  let ValueIn = this.choseUnit.setValoriInUnitate[index1]
                  this.choseUnit.numbers[k] = ValueIn * this.choseUnit.valoareInPlus}
                    
                  }
                  console.log(this.choseUnit)
                  console.log(this.choseUnit.units)
                  console.log(this.choseUnit.numbers)
            
             localStorage.setItem(`${this.choseUnit.principal}`, JSON.stringify(this.choseUnit));
             


    
  }

   saadaug(i) {
     

    // this.choseUnit.numbers.push(this.choseUnit.valoareInPlus)
    // this.choseUnit.units.push(this.choseUnit.principal)
    this.choseUnit.numbers.splice(i, 0, this.choseUnit.valoareInPlus)
    this.choseUnit.units.splice(i, 0, this.choseUnit.principal)
   
   this.choseUnit.lungime =  this.choseUnit.numbers.length;
   
   localStorage.setItem(`${this.choseUnit.principal}`, JSON.stringify(this.choseUnit));
 
   

  }


 sasterg(i) {
  // this.choseUnit.numbers.pop()
  //  this.choseUnit.units.pop()
  this.choseUnit.units.splice(i,1)
  this.choseUnit.numbers.splice(i,1)
  console.log(i)
 
  
 
 this.choseUnit.lungime =  this.choseUnit.numbers.length;
 localStorage.setItem(`${this.choseUnit.principal}`, JSON.stringify(this.choseUnit));
 }






}
