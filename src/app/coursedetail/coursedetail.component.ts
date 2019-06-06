import { Component, OnInit } from '@angular/core';
import { alert } from "tns-core-modules/ui/dialogs";
import { SelectedIndexChangedEventData } from "tns-core-modules/ui/tab-view";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'ns-coursedetail',
  templateUrl: './coursedetail.component.html',
  styleUrls: ['./coursedetail.component.css'],
  moduleId: module.id,
})
export class CoursedetailComponent implements OnInit {

  public heading: string;

  public tabSelectedIndex: number;
  public tabSelectedIndexResult: string;

  active: { name: string, desc: string, price: string, imageSrc: string }[] = [
    { name: "Personal Finance", desc: "Everybody* loves gluten.", price: "$5", imageSrc: "https://placem.at/things?w=500&txt=0&random=9" },
    { name: "Credit Cards", desc: "Probably something in here. But probably not.", price: "$1", imageSrc: "https://placem.at/things?w=500&txt=0&random=6" },
    { name: "Mortage", desc: "It'll be worth the argument with your spouse.", price: "$8899", imageSrc: "https://placem.at/things?w=500&txt=0&random=1" },
    { name: "Personal Loans", desc: "It looked cool in the store.", price: "$9", imageSrc: "https://placem.at/things?w=500&txt=0&random=2" },
    { name: "Trading", desc: "You'll need them once in the next ten years.", price: "$59", imageSrc: "https://placem.at/things?w=500&txt=0&random=4" },
    { name: "College", desc: "Too bad you are too old to use it.", price: "$129", imageSrc: "https://placem.at/things?w=500&txt=0&random=7" },
    { name: "Insurance", desc: "Desperate times we live in.", price: "$2", imageSrc: "https://placem.at/things?w=500&txt=0&random=8" },
    { name: "Small Loans", desc: "Mmmmm drinky.", price: "$7", imageSrc: "https://placem.at/things?w=500&txt=0&random=10" },
    { name: "Business Loans", desc: "Also good.", price: "$15", imageSrc: "https://placem.at/things?w=500&txt=0&random=11" }
  ];

  inactive: { name: string, desc: string, price: string, imageSrc: string }[] = [
    { name: "Fixed Income Loans", desc: "Everybody* loves gluten.", price: "$5", imageSrc: "https://placem.at/things?w=500&txt=0&random=9" },
    { name: "Loans on Insurance", desc: "Probably something in here. But probably not.", price: "$1", imageSrc: "https://placem.at/things?w=500&txt=0&random=6" },
    { name: "Home Loans", desc: "It'll be worth the argument with your spouse.", price: "$8899", imageSrc: "https://placem.at/things?w=500&txt=0&random=1" },
    { name: "Car Loans", desc: "It looked cool in the store.", price: "$9", imageSrc: "https://placem.at/things?w=500&txt=0&random=2" },
    { name: "Parental Loans", desc: "You'll need them once in the next ten years.", price: "$59", imageSrc: "https://placem.at/things?w=500&txt=0&random=4" },
    { name: "Credit Union", desc: "Too bad you are too old to use it.", price: "$129", imageSrc: "https://placem.at/things?w=500&txt=0&random=7" },
    { name: "Class Loan", desc: "Desperate times we live in.", price: "$2", imageSrc: "https://placem.at/things?w=500&txt=0&random=8" },
    { name: "Retirements", desc: "Mmmmm drinky.", price: "$7", imageSrc: "https://placem.at/things?w=500&txt=0&random=10" },
    { name: "Personal Fee", desc: "Also good.", price: "$15", imageSrc: "https://placem.at/things?w=500&txt=0&random=11" }
  ];

  anytime: { name: string, desc: string, price: string, imageSrc: string }[] = [
    { name: "Personal Loans!", desc: "Everybody* loves gluten.", price: "$5", imageSrc: "https://placem.at/things?w=500&txt=0&random=9" },
    { name: "College Loans", desc: "Probably something in here. But probably not.", price: "$1", imageSrc: "https://placem.at/things?w=500&txt=0&random=6" },
    { name: "Savings ", desc: "It'll be worth the argument with your spouse.", price: "$8899", imageSrc: "https://placem.at/things?w=500&txt=0&random=1" },
    { name: "Business Loans", desc: "It looked cool in the store.", price: "$9", imageSrc: "https://placem.at/things?w=500&txt=0&random=2" },
    { name: "Industrial Loan", desc: "You'll need them once in the next ten years.", price: "$59", imageSrc: "https://placem.at/things?w=500&txt=0&random=4" },
    { name: "Retirements", desc: "Too bad you are too old to use it.", price: "$129", imageSrc: "https://placem.at/things?w=500&txt=0&random=7" },
    { name: "Insurance", desc: "Desperate times we live in.", price: "$2", imageSrc: "https://placem.at/things?w=500&txt=0&random=8" },
    { name: "Health Insurance", desc: "Mmmmm drinky.", price: "$7", imageSrc: "https://placem.at/things?w=500&txt=0&random=10" },
    { name: "Taxes", desc: "Also good.", price: "$15", imageSrc: "https://placem.at/things?w=500&txt=0&random=11" }
];

  constructor(private route: ActivatedRoute) {
    this.tabSelectedIndex = 0;
    this.tabSelectedIndexResult = "Profile Tab (tabSelectedIndex = 0 )";
    this.route.queryParams.subscribe(params => {
    this.heading = params["heading"];
      console.info("heading received is ", this.heading);

    });
  }

  ngOnInit() {
  }


  changeTab() {
    if (this.tabSelectedIndex === 0) {
      this.tabSelectedIndex = 1;
    } else if (this.tabSelectedIndex === 1) {
      this.tabSelectedIndex = 2;
    } else if (this.tabSelectedIndex === 2) {
      this.tabSelectedIndex = 0;
    }
  }

  // displaying the old and new TabView selectedIndex
  onSelectedIndexChanged(args: SelectedIndexChangedEventData) {
    if (args.oldIndex !== -1) {
      const newIndex = args.newIndex;
      if (newIndex === 0) {
        this.tabSelectedIndexResult = "Profile Tab (tabSelectedIndex = 0 )";
      } else if (newIndex === 1) {
        this.tabSelectedIndexResult = "Stats Tab (tabSelectedIndex = 1 )";
      } else if (newIndex === 2) {
        this.tabSelectedIndexResult = "Settings Tab (tabSelectedIndex = 2 )";
      }
      // alert(`Selected index has changed ( Old index: ${args.oldIndex} New index: ${args.newIndex} )`)
      //   .then(() => {
      //     console.log("Dialog closed!");
      //   });
    }
  }

}
