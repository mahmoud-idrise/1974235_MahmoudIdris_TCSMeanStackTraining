import { QuizServiceService } from "./quiz-service.service";

export class Questions { // this class is use to map json data. 
    public question:string = "";
    public answers:Array<string> = [];
    public correctIndex:number = 0;
    
    constructor(data:JSON)
    {   
      let q = JSON.stringify(data);
    }
}