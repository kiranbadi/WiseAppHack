import { Component, OnInit } from '@angular/core';
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { registerElement } from "nativescript-angular/element-registry";
import { CardView } from "nativescript-cardview";
import { alert } from "tns-core-modules/ui/dialogs";
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";
import {Router, NavigationExtras} from "@angular/router";


registerElement("CardView", () => CardView);

@Component({
  selector: 'ns-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css'],
  moduleId: module.id,
})
export class MycoursesComponent implements OnInit {

  heading = '';

  data = [];
  constructor(private router: Router) {   
  }

  
  ngOnInit(): void {
    this.data.push({ heading: "Financial Planning", content: "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger." });
    this.data.push({ heading: "Personal Finance", content: "To support its weight, Ivysaur’s legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it’s a sign that the bud will bloom into a large flower soon." });
    this.data.push({ heading: "Marketing", content: "There is a large flower on Venusaur’s back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower’s aroma soothes the emotions of people." });
    this.data.push({ heading: "Economics", content: "The flame that burns at the tip of its tail is an indication of its emotions. The flame wavers when Charmander is enjoying itself. If the Pokémon becomes enraged, the flame burns fiercely." });
    this.data.push({ heading: "Money Saving", content: "Charmeleon mercilessly destroys its foes using its sharp claws. If it encounters a strong foe, it turns aggressive. In this excited state, the flame at the tip of its tail flares with a bluish white color." });
    this.data.push({ heading: "Cost Forecasting", content: "Charizard flies around the sky in search of powerful opponents. It breathes fire of such great heat that it melts anything. However, it never turns its fiery breath on any opponent weaker than itself." });
    this.data.push({ heading: "College Education", content: "Squirtle’s shell is not merely used for protection. The shell’s rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds." });
    this.data.push({ heading: "Educational Loans", content: "Its tail is large and covered with a rich, thick fur. The tail becomes increasingly deeper in color as Wartortle ages. The scratches on its shell are evidence of this Pokémon’s toughness as a battler." });
    this.data.push({ heading: "Saving", content: "Blastoise has water spouts that protrude from its shell. The water spouts are very accurate. They can shoot bullets of water with enough accuracy to strike empty cans from a distance of over 160 feet." });

  }
  
  public onTap() {
    console.info("Email id is " , this.heading);
    let navigationExtras: NavigationExtras = {
        queryParams: {
            "heading": this.heading
        
        }
    };
    this.router.navigate(["ns-coursedetail"], navigationExtras);
}

  ActiveAssignments() {
    console.info("ActiveAssignments clicked");
  }


  InactiveAssignments() {
    console.info("InactiveAssignments clicked");
  }

  PracticeAssignments() {
    console.info("PracticeAssignments clicked");
  }

  
}
