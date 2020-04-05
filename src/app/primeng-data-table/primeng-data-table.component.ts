import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { LazyLoadEvent } from 'primeng/primeng';
import { PhotoService } from '../photo.service';
import { PhotoDetail } from '../photo-detail';


@Component({
  selector: 'app-primeng-data-table',
  templateUrl: './primeng-data-table.component.html',
  styleUrls: ['./primeng-data-table.component.css']
})
export class PrimengDataTableComponent implements OnInit {

  private results: Array<any> = []; // have 15+ objects in this array
  private resultsArr: Array<any> = [];
  public selectedCars: Array<any> = [];
  public loading: boolean = false;
  public currentTableFirstValue: number = 0;

  private carsLarge: Array<any> = [];
  //private datasource: Array<any> = [];
  photoDetails: PhotoDetail[];
  selectedPhotos: PhotoDetail[];

  dataSource : PhotoDetail[];
  private totalRecords: number;
  carsCounter: number;
  cols: any[];
  rows: number;
  sales: any[];
  showSMPDetails: boolean = false;
  constructor(private changeDetectorRef: ChangeDetectorRef,private photoService: PhotoService) {
    this.results = [
      {
        name: "david1",
        age: 26,
        company: "XYz Company"
      },
      {
        name: "david2",
        age: 26,
        company: "XYz Company"
      },
      {
        name: "david3",
        age: 26,
        company: "XYz Company"
      },
      {
        name: "david4",
        age: 26,
        company: "XYz Company"
      },
      {
        name: "david5",
        age: 26,
        company: "XYz Company"
      },
      {
        name: "david6",
        age: 26,
        company: "XYz Company"
      },
      {
        name: "david1",
        age: 26,
        company: "XYz Company"
      },
      {
        name: "david2",
        age: 26,
        company: "XYz Company"
      },
      {
        name: "david3",
        age: 26,
        company: "XYz Company"
      },
      {
        name: "david4",
        age: 26,
        company: "XYz Company"
      },
      {
        name: "david5",
        age: 26,
        company: "XYz Company"
      },
      {
        name: "david6",
        age: 26,
        company: "XYz Company"
      },
      {
        name: "david1",
        age: 26,
        company: "XYz Company"
      },
      {
        name: "david2",
        age: 26,
        company: "XYz Company"
      },
      {
        name: "david3",
        age: 26,
        company: "XYz Company"
      },
      {
        name: "david4",
        age: 26,
        company: "XYz Company"
      },
      {
        name: "david5",
        age: 26,
        company: "XYz Company"
      },
      {
        name: "david6",
        age: 26,
        company: "XYz Company"
      },
      {
        name: "david4",
        age: 26,
        company: "XYz Company"
      },
      {
        name: "david5",
        age: 26,
        company: "XYz Company"
      },
      {
        name: "david6",
        age: 26,
        company: "XYz Company"
      }
    ]
    this.carsLarge = [
      {"brand": "VW", "year": 2012, "color": "Orange"},
      {"brand": "Audi", "year": 2011, "color": "Black"},
      {"brand": "Renault", "year": 2005, "color": "Gray"},
      {"brand": "BMW", "year": 2003, "color": "Blue"},
      {"brand": "Mercedes", "year": 1995, "color": "Orange"},
      {"brand": "Volvo", "year": 2005, "color": "Black"},
      {"brand": "Honda", "year": 2012, "color": "Yellow"},
      {"brand": "Jaguar", "year": 2013, "color": "Orange"},
      {"brand": "Ford", "year": 2000, "color": "Black"},
      {"brand": "Fiat", "year": 2013, "color": "Red"},
      {"brand": "VW", "year": 2012, "color": "Orange"},
      {"brand": "Audi", "year": 2011, "color": "Black"},
      {"brand": "Renault", "year": 2005, "color": "Gray"},
      {"brand": "BMW", "year": 2003, "color": "Blue"},
      {"brand": "Mercedes", "year": 1995, "color": "Orange"},
      {"brand": "Volvo", "year": 2005, "color": "Black"},
      {"brand": "Honda", "year": 2012, "color": "Yellow"},
      {"brand": "Jaguar", "year": 2013, "color": "Orange"},
      {"brand": "Ford", "year": 2000, "color": "Black"},
      {"brand": "Fiat", "year": 2013, "color": "Red"},
      {"brand": "VW", "year": 2012, "color": "Orange"},
      {"brand": "Audi", "year": 2011, "color": "Black"},
      {"brand": "Renault", "year": 2005, "color": "Gray"},
      {"brand": "BMW", "year": 2003, "color": "Blue"},
      {"brand": "Mercedes", "year": 1995, "color": "Orange"},
      {"brand": "Volvo", "year": 2005, "color": "Black"},
      {"brand": "Honda", "year": 2012, "color": "Yellow"},
      {"brand": "Jaguar", "year": 2013, "color": "Orange"},
      {"brand": "Ford", "year": 2000, "color": "Black"},
      {"brand": "Fiat", "year": 2013, "color": "Red"},
      {"brand": "VW", "year": 2012, "color": "Orange"},
      {"brand": "Audi", "year": 2011, "color": "Black"},
      {"brand": "Renault", "year": 2005, "color": "Gray"},
      {"brand": "BMW", "year": 2003, "color": "Blue"},
      {"brand": "Mercedes", "year": 1995, "color": "Orange"},
      {"brand": "Volvo", "year": 2005, "color": "Black"},
      {"brand": "Honda", "year": 2012, "color": "Yellow"},
      {"brand": "Jaguar", "year": 2013, "color": "Orange"},
      {"brand": "Ford", "year": 2000, "color": "Black"},
      {"brand": "Fiat", "year": 2013, "color": "Red"}
    ];   
    // this.datasource = [{
		// 	"brand": "VW",
		// 	"year": 1993,
		// 	"color": "Orange",
		// 	"vin": "dsad231ff"
		// },
		// {
		// 	"brand": "Audi",
		// 	"year": 2017,
		// 	"color": "Black",
		// 	"vin": "gwregre345"
		// },
		// {
		// 	"brand": "Renault",
		// 	"year": 2017,
		// 	"color": "Gray",
		// 	"vin": "h354htr"
		// },
		// {
		// 	"brand": "BMW",
		// 	"year": 2017,
		// 	"color": "Blue",
		// 	"vin": "j6w54qgh"
		// },
		// {
		// 	"brand": "Mercedes",
		// 	"year": 2017,
		// 	"color": "Orange",
		// 	"vin": "hrtwy34"
		// },
		// {
		// 	"brand": "Volvo",
		// 	"year": 2017,
		// 	"color": "Black",
		// 	"vin": "jejtyj"
		// },
		// {
		// 	"brand": "Honda",
		// 	"year": 2017,
		// 	"color": "Yellow",
		// 	"vin": "g43gr"
		// },
		// {
		// 	"brand": "Jaguar",
		// 	"year": 2017,
		// 	"color": "Orange",
		// 	"vin": "greg34"
		// },
		// {
		// 	"brand": "Ford",
		// 	"year": 2017,
		// 	"color": "Black",
		// 	"vin": "h54hw5"
		// },
		// {
		// 	"brand": "Fiat",
		// 	"year": 2017,
		// 	"color": "Red",
		// 	"vin": "245t2s"
		// },
		// {
		// 	"brand": "VW",
		// 	"year": 2017,
		// 	"color": "Orange",
		// 	"vin": "dsad231ff"
		// },
		// {
		// 	"brand": "Audi",
		// 	"year": 2017,
		// 	"color": "Black",
		// 	"vin": "gwregre345"
		// },
		// {
		// 	"brand": "Renault",
		// 	"year": 2017,
		// 	"color": "Gray",
		// 	"vin": "h354htr"
		// },
		// {
		// 	"brand": "BMW",
		// 	"year": 2017,
		// 	"color": "Blue",
		// 	"vin": "j6w54qgh"
		// },
		// {
		// 	"brand": "Mercedes",
		// 	"year": 2017,
		// 	"color": "Orange",
		// 	"vin": "hrtwy34"
		// },
		// {
		// 	"brand": "Volvo",
		// 	"year": 2017,
		// 	"color": "Black",
		// 	"vin": "jejtyj"
		// },
		// {
		// 	"brand": "Honda",
		// 	"year": 2017,
		// 	"color": "Yellow",
		// 	"vin": "g43gr"
		// },
		// {
		// 	"brand": "Jaguar",
		// 	"year": 2017,
		// 	"color": "Orange",
		// 	"vin": "greg34"
		// },
		// {
		// 	"brand": "Ford",
		// 	"year": 2017,
		// 	"color": "Black",
		// 	"vin": "h54hw5"
		// },
		// {
		// 	"brand": "Fiat",
		// 	"year": 2017,
		// 	"color": "Red",
		// 	"vin": "245t2s"
		// },
		// {
		// 	"brand": "VW",
		// 	"year": 2017,
		// 	"color": "Orange",
		// 	"vin": "dsad231ff"
		// },
		// {
		// 	"brand": "Audi",
		// 	"year": 2017,
		// 	"color": "Black",
		// 	"vin": "gwregre345"
		// },
		// {
		// 	"brand": "Renault",
		// 	"year": 2017,
		// 	"color": "Gray",
		// 	"vin": "h354htr"
		// },
		// {
		// 	"brand": "BMW",
		// 	"year": 2017,
		// 	"color": "Blue",
		// 	"vin": "j6w54qgh"
		// },
		// {
		// 	"brand": "Mercedes",
		// 	"year": 2017,
		// 	"color": "Orange",
		// 	"vin": "hrtwy34"
		// },
		// {
		// 	"brand": "Volvo",
		// 	"year": 2017,
		// 	"color": "Black",
		// 	"vin": "jejtyj"
		// },
		// {
		// 	"brand": "Honda",
		// 	"year": 2017,
		// 	"color": "Yellow",
		// 	"vin": "g43gr"
		// },
		// {
		// 	"brand": "Jaguar",
		// 	"year": 2017,
		// 	"color": "Orange",
		// 	"vin": "greg34"
		// },
		// {
		// 	"brand": "Ford",
		// 	"year": 2017,
		// 	"color": "Black",
		// 	"vin": "h54hw5"
		// },
		// {
		// 	"brand": "Fiat",
		// 	"year": 2017,
		// 	"color": "Red",
		// 	"vin": "245t2s"
		// },
		// {
		// 	"brand": "VW",
		// 	"year": 2017,
		// 	"color": "Orange",
		// 	"vin": "dsad231ff"
		// },
		// {
		// 	"brand": "Audi",
		// 	"year": 2017,
		// 	"color": "Black",
		// 	"vin": "gwregre345"
		// },
		// {
		// 	"brand": "Renault",
		// 	"year": 2017,
		// 	"color": "Gray",
		// 	"vin": "h354htr"
		// },
		// {
		// 	"brand": "BMW",
		// 	"year": 2017,
		// 	"color": "Blue",
		// 	"vin": "j6w54qgh"
		// },
		// {
		// 	"brand": "Mercedes",
		// 	"year": 2017,
		// 	"color": "Orange",
		// 	"vin": "hrtwy34"
		// },
		// {
		// 	"brand": "Volvo",
		// 	"year": 2017,
		// 	"color": "Black",
		// 	"vin": "jejtyj"
		// },
		// {
		// 	"brand": "Honda",
		// 	"year": 2017,
		// 	"color": "Yellow",
		// 	"vin": "g43gr"
		// },
		// {
		// 	"brand": "Jaguar",
		// 	"year": 2017,
		// 	"color": "Orange",
		// 	"vin": "greg34"
		// },
		// {
		// 	"brand": "Ford",
		// 	"year": 2017,
		// 	"color": "Black",
		// 	"vin": "h54hw5"
		// },
		// {
		// 	"brand": "Fiat",
		// 	"year": 2017,
		// 	"color": "Red",
		// 	"vin": "245t2s"
		// }];
		// this.totalRecords = this.datasource.length;
  }

  ngOnInit() {
    // this.totalRecords = 83;
    // this.carsCounter = 8;
    // this.carsLarge = [];
    this.rows = 10;

    this.cols = [
      {field: 'albumId',  header: 'Album Id'},
      {field: 'id',  header: 'ID'},
      {field: 'title',  header: 'Title'},
      {field: 'url',  header: 'URL'}
    ];
    this.photoDetails = [];

    this.photoService.getPhotoDetails().then(details => {
      console.log("Service log");

      this.dataSource = details;
      this.totalRecords = this.dataSource.length;
      console.log(`Length ${this.totalRecords}`);

      this.photoDetails = this.dataSource.slice(0, this.rows);
      this.changeDetectorRef.detectChanges();
    });
    this.sales = [
      {
        brand: 'Apple', 
        lastYearSale: '51%', 
        thisYearSale: '40%', 
        lastYearProfit: '$54,406.00', 
        thisYearProfit: '$43,342',
        smpName:'SMP 1',
        smpId:12345
      },
      {brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122'},
      {brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500'},
      {brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,'},
      {brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332'},
      {brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005'},
      {brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214'},
      {brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322'},
      {brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232'},
      {brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533'}
    ];

  }

  lazyLoad(event: any) {
    console.log('what is event',event);
    setTimeout(() => {
      if (this.results) {
        this.resultsArr = this.results.slice(event.first, (event.first + event.rows));
      }
    }, 250);
  }

  loadCarsLazy(event: LazyLoadEvent) {
    this.loading = true;
    console.log('what is event',event);
    //for demo purposes keep loading the same dataset 
    //in a real production application, this data should come from server by building the query with LazyLoadEvent options 
    this.currentTableFirstValue = event.first;
    console.log('currentTableFirstValue',this.currentTableFirstValue);
    setTimeout(() => {
        this.loading = false;
        this.carsLarge = [
            {"brand": "VW", "year": 2012, "color": "Orange", "vin": event.first},
            {"brand": "Audi", "year": 2011, "color": "Black", "vin": event.first + 1},
            {"brand": "Renault", "year": 2005, "color": "Gray", "vin": event.first + 2},
            {"brand": "BMW", "year": 2003, "color": "Blue", "vin": event.first + 3},
            {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": event.first + 4},
            {"brand": "Volvo", "year": 2005, "color": "Black", "vin": event.first + 5},
            {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": event.first + 6},
            {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": event.first + 7},
            {"brand": "Ford", "year": 2000, "color": "Black", "vin": event.first + 8},
            {"brand": "Fiat", "year": 2013, "color": "Red", "vin": event.first + 9},
            {"brand": "VW", "year": 2012, "color": "Orange", "vin": event.first + 10},
            {"brand": "Audi", "year": 2011, "color": "Black", "vin": event.first + 11},
            {"brand": "Renault", "year": 2005, "color": "Gray", "vin": event.first + 12},
            {"brand": "BMW", "year": 2003, "color": "Blue", "vin": event.first + 13},
            {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": event.first + 14},
            {"brand": "Volvo", "year": 2005, "color": "Black", "vin": event.first + 15},
            {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": event.first + 16},
            {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": event.first + 17},
            {"brand": "Ford", "year": 2000, "color": "Black", "vin": event.first + 18},
            {"brand": "Fiat", "year": 2013, "color": "Red", "vin": event.first + 19},
            {"brand": "VW", "year": 2012, "color": "Orange", "vin": event.first + 20},
            {"brand": "Audi", "year": 2011, "color": "Black", "vin": event.first + 21},
            {"brand": "Renault", "year": 2005, "color": "Gray", "vin": event.first + 22},
            {"brand": "BMW", "year": 2003, "color": "Blue", "vin": event.first + 23},
            {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": event.first + 24},
            {"brand": "Volvo", "year": 2005, "color": "Black", "vin": event.first + 25},
            {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": event.first + 26},
            {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": event.first + 27},
            {"brand": "Ford", "year": 2000, "color": "Black", "vin": event.first + 28},
            {"brand": "Fiat", "year": 2013, "color": "Red", "vin": event.first + 29},
            {"brand": "VW", "year": 2012, "color": "Orange", "vin": event.first + 30},
            {"brand": "Audi", "year": 2011, "color": "Black", "vin": event.first + 31},
            {"brand": "Renault", "year": 2005, "color": "Gray", "vin": event.first + 32},
            {"brand": "BMW", "year": 2003, "color": "Blue", "vin": event.first + 33},
            {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": event.first + 34},
            {"brand": "Volvo", "year": 2005, "color": "Black", "vin": event.first + 35},
            {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": event.first + 36},
            {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": event.first + 37},
            {"brand": "Ford", "year": 2000, "color": "Black", "vin": event.first + 38},
            {"brand": "Fiat", "year": 2013, "color": "Red", "vin": event.first + 39}
        ];

        if(event.first < 10) {
          this.carsLarge.push(this.carsLarge);
        }
          
    }, 2000);    
  }

  // loadCarsLazy(event: any) {
	// 	setTimeout(() => {
	// 		if (this.datasource) {
	// 			this.carsLarge = this.datasource.slice(event.first, (event.first + event.rows));
	// 		}
	// 	}, 250);
  // }
  // loadCarsLazy(event: LazyLoadEvent) {
  //   setTimeout(() => {
  //       console.log("lazy")
  //       console.log(event);
  //       let tempCars = []
  //       for (let i = event.first; i < event.first+8; i++) {
  //         tempCars.push({"brand": "a", "year": i, "color": "Orange", "vin": "dsad231ff"})
  //         this.carsCounter += 1;
  //       }
  //       this.carsLarge = tempCars;
  //       this.changeDetectorRef.detectChanges();
  //   }, 25);
  // }
  lazyLoadDetails(event: LazyLoadEvent) {
    //in a real production application, this data should come from server by building the query with LazyLoadEvent options

   setTimeout(() => {
     console.log("lazy");
     console.log(event);

     this.photoDetails = [];
     this.photoDetails = this.dataSource? this.dataSource.slice(event.first, (event.first + event.rows)) : [];
     this.changeDetectorRef.detectChanges();

   }, 500);
 }

  showSMPDetailsColumn() {
   this.showSMPDetails = !this.showSMPDetails;
  }

}
