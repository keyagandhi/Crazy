import { Answer } from './answer';
export class FilledSurvey {

  _id: string;
  surveyId: string;
  userName: string;
  answers: Answer[] = new Array();
 // surveyCompletionDate: Date;
}
