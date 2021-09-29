export interface Employee {
  id: number;
  name: string;
  emp_level: string;
  mob: number;
  date_Of_Joining: Date;
}


export const information: Employee[] = [
      {
          id: 1,
          name:"SD",
          emp_level:"Intern",
          mob:897665,
          date_Of_Joining:new Date("2019-01-16")
      }
  ];
  
//   class Child extends Parent {
  
    // setName(name: string): any {
  
    //   this.name = name;
  
//     }
  
//     getName(): string {
  
//       return this.name;
  
//     }
  
//   }
  
//   let a1 = new Child();
  
//   a1.setName("sumit");
  
//   console.log(a1.getName());