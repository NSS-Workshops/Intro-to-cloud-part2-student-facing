
import { Checkpoint } from '@nss-workshops/nss-core';


import {nav} from "./nav.js";

// Module One Imports
import moduleOnePageOne from "./module_1/page_one.md?raw";
import moduleOnePageTwo from "./module_1/page_two.md?raw";
import ExcerciseOne from "./module_1/exercise_1.js?raw";
import SolutionOne from "./module_1/solution_one.js?raw";
import {questions as questions} from "./module_1/questions_1.jsx";
import {tests as t1} from "./module_1/tests_1.js";

// Module Two Imports
import moduleTwoPageOne from "./module_2/page_one.md?raw";
import moduleTwoPageTwo from "./module_2/page_two.md?raw";
import excerciseTwo from "./module_2/excersize_2.js?raw";
import solutionTwo from "./module_2/solution_2.js?raw";
import {tests as t2} from "./module_2/tests_2.js";

// Module Three Imports
import moduleThreePageOne from "./module_3/page_one.md?raw";

// Module Four Imports
import moduleFourPageOne from "./module_4/page_one.md?raw";

// Module Five Imports 
import moduleFivePageOne from "./module_5/page_one.md?raw";

// Module Six Imports
import moduleSixPageOne from "./module_6/page_one.md?raw";


const moduleOneId = nav[0].id;
const moduleTwoId = nav[1].id;
const moduleThreeId = nav[2].id;
const moduleFourId = nav[3].id;
const moduleFiveId = nav[4].id;
const moduleSixId = nav[5].id;


export const chapters = [
  {
    id: moduleOneId + "-page-1",
    title: 'Architecture Recap',
    sectionId: moduleOneId,
    previousChapterId: null,
    content: moduleOnePageOne,
    exercise: {
      starterCode:ExcerciseOne,
      solution:SolutionOne,
      tests: t1
    },
    quiz: {component: () => <>
       <h1>Checkpoint</h1>
       <Checkpoint questions={questions}/>
     </>
    }
  },
  {
    id: moduleOneId + "-page-2",
    title: 'ECS Fundamentals',
    sectionId: moduleOneId,
    previousChapterId:  moduleOneId + "-page-1",
    content: moduleOnePageTwo,
    exercise: null
  },
  {
    id: moduleTwoId + "-page-1",
    title: 'Review and Prep',
    sectionId: moduleTwoId,
    previousChapterId: null,
    content: moduleTwoPageOne,
    exercise: null
  },
  {
    id: moduleTwoId + "-page-2",
    title: 'Terraform Implementation',
    sectionId: moduleTwoId,
    previousChapterId: moduleTwoId + "-page-1",
    content: moduleTwoPageTwo,
    exercise: {
      starterCode: excerciseTwo,
      solution: solutionTwo,
      tests: t2
    },
  },
  {
    id: moduleThreeId + "-page-1",
    title: 'Example page 1',
    sectionId: moduleThreeId,
    previousChapterId: null,
    content: moduleThreePageOne,
    exercise: null,
  },
  {
    id: moduleFourId + "-page-1",
    title: 'Example page 1',
    sectionId: moduleFourId,
    previousChapterId: null,
    content: moduleFourPageOne,
    exercise: null,
  },
  {
    id: moduleFiveId + "-page-1",
    title: 'Example page 1',
    sectionId: moduleFiveId,
    previousChapterId: null,
    content: moduleFivePageOne,
    exercise: null,
  },
  {
    id: moduleSixId + "-page-1",
    title: 'Example page 1',
    sectionId: moduleSixId,
    previousChapterId: null,
    content: moduleSixPageOne,
    exercise: null,
  },
]