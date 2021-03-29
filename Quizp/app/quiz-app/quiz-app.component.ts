import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Questions } from '../Quiz.model';
import { QuizServiceService } from '../quiz-service.service';
import { literal } from '@angular/compiler/src/output/output_ast';



  

@Component({
  selector: 'app-quiz-app',
  templateUrl: './quiz-app.component.html',
  styleUrls: ['./quiz-app.component.css']
})
export class QuizAppComponent implements OnInit {
  quiz:Questions[] = [];
  totalAnswered: number = 12;
	rightAnswer: number = 0;
  get_radio: any;

  constructor(public quizSer: QuizServiceService) { }
  ngOnInit(): void {
    this.quizSer.loadQuizDetails().subscribe(result=>this.quiz=result, error => {throw error}, ()=>console.log(this.quiz));
    };
  
  print_question(ques:Questions, index:string){
    // get li tag
    let li_tag = document.getElementById("questions");
    
    //design the question
    let question_tag = document.createElement("div");
    question_tag.textContent = ques.question;
    // asign radio buttons
    let radio1 = document.createElement("input")
    radio1.type = "radio";
    radio1.name = "group1" + index;
    radio1.id = "answer1" + index;
    let label1 = document.createElement("label");
    label1.htmlFor = radio1.id;
    label1.textContent = ques.answers[0];

    let radio2 = document.createElement("input")
    radio2.type = "radio";
    radio2.name = "group1" + index;
    radio2.id = "answer2" + index;
    let label2 = document.createElement("label");
    label2.htmlFor = radio2.id;
    label2.textContent = ques.answers[1];

    let radio3 = document.createElement("input")
    radio3.type = "radio";
    radio3.name = "group1" + index;
    radio3.id = "answer3" + index;
    let label3 = document.createElement("label");
    label3.htmlFor = radio3.id;
    label3.textContent = ques.answers[2];

    let radio4 = document.createElement("input")
    radio4.type = "radio";
    radio4.name = "group1" + index;
    radio4.id = "answer4" + index;
    let label4 = document.createElement("label");
    label4.htmlFor = radio4.id;
    label4.textContent = ques.answers[3];
    // asign a space between elements
    let divider = document.createElement('br');
    
    // push questions and answers to html table
    li_tag?.appendChild(question_tag);
    question_tag.style.fontWeight = "bold";
    li_tag?.appendChild(radio1);
    
    li_tag?.appendChild(label1);
    
    li_tag?.appendChild(divider);
    
    li_tag?.appendChild(radio2);
    
    li_tag?.appendChild(label2);
    
    li_tag?.appendChild(divider);
    
    li_tag?.appendChild(radio3);
    
    li_tag?.appendChild(label3);
    
    li_tag?.appendChild(divider);
   
    li_tag?.appendChild(radio4);
    
    li_tag?.appendChild(label4);
    
    li_tag?.appendChild(divider);
  }
  // design a for loop function to retrieve all questions
  load_all_questions(){
    let index = 0;
    this.quiz.forEach(question => {
      this.print_question(question, index.toString());
      index++;
    });
  }
  // checking selected answers 
  check_answer(index:number, groupname:string){
 
    let correct_ans = this.quiz[index].correctIndex;
    let get_radio = document.getElementsByName(groupname);
    let user_ans = -1;
    for(let i = 0; i<get_radio.length; i++){
      let check_ans = get_radio[i] as HTMLInputElement;
      if (check_ans.checked){
        user_ans = i;
      }
    }
    if (user_ans == correct_ans){
      this.rightAnswer++;
    }
    else{
      alert("Question no " + (index+1) +  " is incorrect. The correct answer was button number " + (correct_ans+=1) );
    }
 }

 check_all_answers(){
   for(let i = 0; i<this.quiz.length; i++){
     this.check_answer(i, "group1"+i);
   }
 }

 
 Submit(){
  this.check_all_answers();
  console.log (this.rightAnswer)
  console.log (this.totalAnswered)
  let message = "You scored: " + this.rightAnswer.toString() + "/" + this.totalAnswered.toString();
  alert(message);
 }
 





}