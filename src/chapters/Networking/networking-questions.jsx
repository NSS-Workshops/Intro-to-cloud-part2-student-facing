import { QUESTION_TYPES } from '@nss-workshops/nss-core';


export const questions = [
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>What is the primary purpose of networking?</p>,
    answers: [
      "Connecting devices to exchange data.",
      "Storing data in a central location.",
      "Running applications on a single device.",
      "Encrypting data for security."
    ],
    correctAnswer: 0
  },
  {
    type: QUESTION_TYPES.CHECKBOX,
    questionJsx: <p>Which of the following are key benefits of understanding cloud networking? (Select all that apply)</p>,
    answers: [
      "Physical cable management.",
      "Connectivity.",
      "Isolation.",
      "Scalability.",
      "Increased manual configuration."
    ],
    correctAnswers: [1, 2, 3]
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>In AWS, what does a Virtual Private Cloud (VPC) represent?</p>,
    answers: [
      "A global service for content delivery.",
      "Your own isolated, virtual network within the AWS cloud.",
      "A physical data center managed by AWS.",
      "A service for monitoring network traffic."
    ],
    correctAnswer: 1
  },
  {
    type: QUESTION_TYPES.CHECKBOX,
    questionJsx: <p>When customizing a VPC, which of the following can you control? (Select all that apply)</p>,
    answers: [
      "Physical server hardware.",
      "IP Address Ranges.",
      "Subnets.",
      "Route Tables.",
      "AWS Availability Zone locations."
    ],
    correctAnswers: [1, 2, 3]
  },
  {
    type: QUESTION_TYPES.CHECKBOX,
    questionJsx: <p>Which of the following are key characteristics of AWS Security Groups? (Select all that apply)</p>,
    answers: [
      "They operate at the subnet level.",
      "They are stateful.",
      "They support 'allow' rules only.",
      "By default, they deny all outbound traffic.",
      "They are associated with instances."
    ],
    correctAnswers: [1, 2, 4]
  },
  {
    type: QUESTION_TYPES.RADIO,
    questionJsx: <p>What does <code>0.0.0.0/0</code> typically represent in a Security Group rule's source or destination?</p>,
    answers: [
      "A specific private IP address.",
      "All IPv4 addresses (the entire internet).",
      "Traffic within the same security group.",
      "A connection to an on-premises data center."
    ],
    correctAnswer: 1
  }
];