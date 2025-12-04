
import { Checkpoint } from '@nss-workshops/nss-core';


import {nav} from "./nav.js";
// Terraform Chapters
import TerraformPageOne from "./Terraform/terraform-fundamentals.md?raw";
import TerraformPageTwo from "./Terraform/terraform-setup.md?raw";
import {questions as questions} from "./Terraform/questions_1.jsx";

// CloudFront chapters
import exampleModuleTwoPageOne from "./example_module_2/page_one.md?raw";
import exampleModuleTwoPageTwo from "./example_module_2/page_two.md?raw";
import exampleExcerciseTwo from "./example_module_2/excersize_2.js?raw";
import exampleSolutionTwo from "./example_module_2/solution_2.js?raw";
import {tests as t2} from "./example_module_2/tests_2.js";

const moduleOneId = nav[0].id;
const moduleTwoId = nav[1].id;
const moduleThreeId = nav[2].id;
const moduleFourId = nav[3].id;
const moduleFiveId = nav[4].id;
const moduleSixId = nav[5].id;
const moduleSevenId = nav[6].id;


export const chapters = [
  {
    id: moduleOneId + "-page-1",
    title: 'Terraform Fundamentals',
    sectionId: moduleOneId,
    previousChapterId: null,
    content: TerraformPageOne,
    quiz: {component: () => <>
       <h1>Checkpoint</h1>
       <Checkpoint questions={questions}/>
     </>
    }
  },
  {
    id: moduleOneId + "-page-2",
    title: 'My First Terraform Project',
    sectionId: moduleOneId,
    previousChapterId:  moduleOneId + "-page-1",
    content: TerraformPageTwo,
    exercise: null
  },
  {
    id: moduleTwoId + "-page-1",
    title: 'Example page 1',
    sectionId: moduleTwoId,
    previousChapterId: null,
    content: exampleModuleTwoPageOne,
    exercise: null
  },
  {
    id: moduleTwoId + "-page-2",
    title: 'Example page 2',
    sectionId: moduleTwoId,
    previousChapterId: moduleTwoId + "-page-1",
    content: exampleModuleTwoPageTwo,
    exercise: {
      starterCode: exampleExcerciseTwo,
      solution: exampleSolutionTwo,
      tests: t2
    },
  },
]