import { bootstrap } from "angular2/platform/browser";
import { EventEmitter, Output, Component } from "angular2/core";
@Component({
  selector: 'my-google-comp',
  template: `
  
  <div>
       <google-map latitude={{lat}} longitude={{long}} disableDefaultUI>
          <google-map-marker latitude={{lat}} longitude={{long}} title={{title}} click-events="true" (google-map-marker-click)="clickedMarker()">
          </google-map-marker>
    </google-map>
   <paper-button toggles class="fancy" (click)="switch()" >Switch places</paper-button>
  </div>
  `,
  directives: [] 
})
class GoogleMaps {
 lat:string;
 long:string;
 title:string;/*
 https://elements.polymer-project.org/elements/google-map*/
 constructor(){
  
     this.lat="52.0355031"
     this.long="5.0978835"
     this.title="Vinod";
 }
 
 clickedMarker(){
     this.switch();
 }
 
 switch(){ 
     if(this.title=="Vinod"){   
        this.lat="37.779"
        this.long="-122.3892"
        this.title="San Fransisco!";}
     else{       
        this.lat="52.0355031"
        this.long="5.0978835"
        this.title="Vinod";
     }
 }
}


bootstrap(GoogleMaps);
