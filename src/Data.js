const date = new Date();
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const data = [
  {
    question: "hi",
    answer:
      "Hi Divine,so nice for you to be shopping with us my name is dipersa.",
  },
  {
    question: "hello",
    answer: "Hi,so nice for you to be shopping with us my name is dipersa.",
  },
  {
    question: "hey",
    answer: "Hi,so nice for you to be shopping with us my name is dipersa.",
  },
  {
    question: "yes",
    answer: "Your order has been completed",
    // password: true
  },
  {
    question: "done",
    answer: "Password Verified, your order has been completed",
  },
  // {
  //     question : 'sup',
  //     answer:'Hi,so nice for you to be shopping with us my name is Dipersa.'
  // },
  // {
  //     question : 'how are you',
  //     answer:'Hi,so nice for you to be shopping with us my name is Dipersa.'
  // },

  // {
  //     question : 'hello bot',
  //     answer:'Hi, so nice for you to be shopping with us my name is Dipersa.'
  // },

  {
    question: "age",
    answer: "I was developed yesterday",
  },
  {
    question: "what is your name",
    answer: "I am Dipersa",
  },
  {
    question: "time",
    answer: `The time is ${date.getHours()} : ${date.getMinutes()}`,
  },
  {
    question: "date",
    answer: `today is ${date.getDate()}st ${
      month[date.getMonth()]
    } ${date.getFullYear()}`,
  },
  {
    question: "what is your name",
    answer: "I am bot",
  },
  {
    question: "what is the weather",
    answer: "I dont know for now",
  },
  // {
  //     question : 'customize',
  //     answer:'Okay,Please make your custom order so that I can take it to the chefs'
  // },
];
export const validInput =['hi','customize']

export const foodItems = [
  "salad",
  "fish soup",
  "chopped salad",
  "sushi",
  "hamburgers",
  "eguse soup",
  "jollof rice",
  "moi moi",
  "bole",
  "mincedEggs",
  "fruits ans nuts",
  "minced fish and meat",
  "chicago style pizza",
  "apple pie",
  'ogbono soup',
  'eforiro',
  'ongiri',
  'misso soup',
  'baked ziti',
  'chicken parmigiana',
  'basgulla',
  'shahi paneer',
  'beef curry',
  'chicken tisa massala'
];
